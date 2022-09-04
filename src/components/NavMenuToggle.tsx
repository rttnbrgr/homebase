import React from "react";
import { IconButton, IconButtonProps } from "@chakra-ui/react";

type NavMenuToggleProps = Omit<IconButtonProps, "aria-label" | "variant">;

const NavMenuToggle = ({ ...props }: NavMenuToggleProps) => {
  return (
    <IconButton
      {...props}
      variant="base"
      aria-label="Toggle menu"
      display={{ base: "inline-flex", sm: "none" }}
    />
  );
};

export { NavMenuToggle };
