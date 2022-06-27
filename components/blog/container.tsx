import { ReactNode, FunctionComponent } from "react";

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-5">
      POST CONTAINER POST CONATINER
      {children}
      POST CONTAINER POST CONATINER
    </div>
  );
};

export default Container;
