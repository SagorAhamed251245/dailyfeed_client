import LeftLayout from "@/components/MainLayout/LeftLayout";
import MiddleLayout from "@/components/MainLayout/MiddleLayout";
import RightLayout from "@/components/MainLayout/RightLayout";
import RightSiteContents from "@/components/RightSiteContent/RightSiteContents";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const leftSiteContent = (): JSX.Element => {
    return <RightSiteContents />;
  };

  return (
    <div className="relative grid h-screen grid-cols-[repeat(24,_1fr)] overflow-auto w-screen">
      <Navbar />
      <LeftLayout>{"f"}</LeftLayout>
      <div className="col-span-1 xl:col-span-2"></div>
      <MiddleLayout>{children}</MiddleLayout>
      <div className="col-span-1 xl:col-span-2"></div>
      <RightLayout>{leftSiteContent()}</RightLayout>
    </div>
  );
};

export default Layout;
