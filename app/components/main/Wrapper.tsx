import type { ReactNode } from "react";
import { BALL_3D, BG_SHAPE, SPRING_3D } from "~/lib/vars/contants";
import Toy from "./Toy";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full h-lvh overflow-hidden z-0">
      <img
        className="rounded-full w-full aspect-square absolute -left-1/4 -top-1/4 -z-10 animate-spin animation-duration-[60s]"
        alt="bg shape"
        src={BG_SHAPE}
      />
      <img
        className="rounded-full w-full aspect-square absolute -right-1/4 -bottom-1/4 -z-10 animate-spin animation-duration-[60s]"
        alt="bg shape"
        src={BG_SHAPE}
      />
      <Toy
        src={BALL_3D}
        alt="3d ball"
        className="top-0 left-0 aspect-square"
        classNameImg="w-16 h-16 aspect-square"
      />
      <div className="max-w-11/12 mx-auto py-6 flex flex-col justify-center items-center gap-6">
        {children}
      </div>
      ;
      <Toy
        src={SPRING_3D}
        alt="3d spring"
        className="bottom-0 right-0"
        classNameImg="w-28 h-auto aspect-square rotate-[20deg]"
      />
    </div>
  );
};

export default Wrapper;
