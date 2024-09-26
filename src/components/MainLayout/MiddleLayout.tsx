import { ReactNode } from "react";

const MiddleLayout = ({ children }: { children: ReactNode }) => {
  return <div className="col-span-10 mt-5 ">{children}</div>;
};

export default MiddleLayout;
