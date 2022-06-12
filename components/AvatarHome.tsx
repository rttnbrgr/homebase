import { Image } from "@chakra-ui/react";

const profileStyles = {
  boxSize: "124px",
  borderRadius: "50%",
};

type AvatarHomeProps = {};

const AvatarHome = ({}: AvatarHomeProps) => {
  return (
    <Image
      {...profileStyles}
      src="assets/homepage/avi-1024.jpg"
      alt="Nathan Rothenberger headshot"
    />
  );
};

export { AvatarHome };
