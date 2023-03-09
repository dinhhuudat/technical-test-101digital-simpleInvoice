import Button from "antd/es/button";
import React from "react";

type TFirstComponentProps = {};

export const FirstComponent: React.FC<TFirstComponentProps> = () => {
  return (
    <>
      <Button>This is button</Button>
    </>
  );
};
