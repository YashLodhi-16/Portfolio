import type { ReactNode } from "react";
import { BG_SHAPE } from "~/lib/vars/contants";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-theme-background dark:bg-dark-theme-black relative w-full h-lvh overflow-hidden py-6">
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

      {children}
    </div>
  );
};

export default Wrapper;
