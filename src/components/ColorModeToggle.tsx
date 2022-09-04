import React, { useMemo } from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

type ColorModetoggleProps = {};

const ColorModetoggle = ({}: ColorModetoggleProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = useMemo(() => colorMode === "light", [colorMode]);
  const icon = isLightMode ? <SunIcon /> : <MoonIcon />;

  return (
    <IconButton
      variant="base"
      aria-label="Toggle color mode"
      icon={icon}
      onClick={toggleColorMode}
    />
  );
};

export { ColorModetoggle };
