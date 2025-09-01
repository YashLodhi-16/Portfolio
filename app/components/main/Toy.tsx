// import React, { useEffect, useRef, useState, type MouseEvent } from "react";

// const Toy = (
//   props: React.ComponentProps<"div"> & {
//     src: string;
//     alt: string;
//     classNameImg?: string;
//   }
// ) => {
//   const { src, alt, classNameImg } = props;
//   const imageRef = useRef<HTMLImageElement>(null);
//   const divRef = useRef<HTMLDivElement>(null);

//   const imgTranslate = (x: number, y: number) => {
//     const image = imageRef.current;
//     if (!image) return;
//     image.style.translate = `${x.toString()}px ${y.toString()}px`;
//   };

//   const [originalPosition, setOriginalPosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     const image = imageRef.current;
//     if (image) {
//       const imageData = image.getBoundingClientRect();

//       const height = imageData.height / 2 + imageData.y;
//       const width = imageData.width / 2 + imageData.x;
//       setOriginalPosition({
//         x: width,
//         y: height,
//       });
//     }
//   }, []);

//   const handleMouseMove = (ev: MouseEvent<HTMLImageElement>) => {
//     const image = imageRef.current;
//     const div = divRef.current;
//     if (!image || !div) return;

//     const moveDistance = 3;

//     if (ev.clientY < originalPosition.y && ev.clientX < originalPosition.x) {
//       imgTranslate(moveDistance, moveDistance);
//     } else if (
//       ev.clientY < originalPosition.y &&
//       ev.clientX > originalPosition.x
//     ) {
//       imgTranslate(-moveDistance, moveDistance);
//     } else if (
//       ev.clientY > originalPosition.y &&
//       ev.clientX < originalPosition.x
//     ) {
//       imgTranslate(moveDistance, -moveDistance);
//     } else if (
//       ev.clientY > originalPosition.y &&
//       ev.clientX > originalPosition.x
//     ) {
//       imgTranslate(-moveDistance, -moveDistance);
//     }
//   };

//   const handleMouseLeave = () => {
//     const image = imageRef.current;
//     if (image) {
//       image.style.translate = "0px";
//     }
//   };
//   return (
//     <div
//       {...props}
//       className={`${props.className ?? ""} flex justify-center items-center`}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       ref={divRef}
//     >
//       <img
//         src={src}
//         alt={alt}
//         className={`${
//           classNameImg ?? ""
//         } transition-all duration-300 ease-in-out`}
//         ref={imageRef}
//       />
//     </div>
//   );
// };

// export default Toy;

import React, { useRef, type MouseEvent } from "react";

/**
 * A component that creates an inverse hover effect on an image.
 * The image moves in the opposite direction of the mouse cursor.
 * @param {object} props - The component props.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alt text for the image.
 * @param {string} [props.className] - Additional classes for the container div.
 * @param {string} [props.classNameImg] - Additional classes for the img element.
 * @param {number} [props.moveFactor=0.1] - Controls the intensity of the movement. Higher is more sensitive.
 */
const Toy = (
  props: React.ComponentProps<"div"> & {
    src: string;
    alt: string;
    classNameImg?: string;
    moveFactor?: number;
  }
) => {
  // Destructure props and provide a default value for moveFactor
  const { src, alt, classNameImg, moveFactor = 0.1, ...rest } = props;
  const imageRef = useRef<HTMLImageElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  /**
   * Handles the mouse move event on the container div.
   * Calculates the cursor's position relative to the center and moves the image
   * in the opposite direction.
   * @param {MouseEvent<HTMLDivElement>} ev - The mouse event.
   */
  const handleMouseMove = (ev: MouseEvent<HTMLDivElement>) => {
    const div = divRef.current;
    const image = imageRef.current;
    if (!div || !image) return;

    // Get the bounding rectangle of the container div
    const rect = div.getBoundingClientRect();

    // Calculate the center of the container
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Get the cursor's absolute position
    const mouseX = ev.clientX;
    const mouseY = ev.clientY;

    // Calculate the distance (offset) of the cursor from the center
    const offsetX = mouseX - centerX;
    const offsetY = mouseY - centerY;

    // Calculate the translation amount. We multiply by -1 to move in the opposite direction,
    // and by the moveFactor to control the effect's intensity.
    const translateX = offsetX * moveFactor;
    const translateY = offsetY * moveFactor;

    // Apply the translation to the image using the transform property for better performance
    image.style.transform = `translate(${translateX.toString()}px, ${translateY.toString()}px)`;
  };

  /**
   * Resets the image's position when the mouse leaves the container.
   */
  const handleMouseLeave = () => {
    const image = imageRef.current;
    if (image) {
      // Smoothly transition the image back to its original position
      image.style.transform = "translate(0px, 0px)";
    }
  };

  return (
    <div
      {...rest}
      className={`${
        props.className ?? ""
      } flex justify-center items-center w-64 h-64 absolute rounded-full`}
      onMouseMove={handleMouseMove} // Use onMouseMove for continuous tracking
      onMouseLeave={handleMouseLeave}
      ref={divRef}
    >
      <img
        src={src}
        alt={alt}
        // Use a specific transition for the transform property for a smooth effect
        className={`${
          classNameImg ?? ""
        } transition-transform duration-200 ease-out`}
        ref={imageRef}
      />
    </div>
  );
};

export default Toy;
