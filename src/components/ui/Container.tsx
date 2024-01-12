import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

const Container = ({ children }: TProps) => {
  return <div className="h-screen w-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
