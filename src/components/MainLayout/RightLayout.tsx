import { ReactNode } from "react";

const RightLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="z-0 col-span-6 xl:col-span-5 sticky top-[70px] h-[calc(100vh-70px)] overflow-y-auto scrollbar-hidden text-justify pr-4">
      {children}
    </div>
  );
};

export default RightLayout;
