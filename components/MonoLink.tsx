import NextLink, { LinkProps as NextLinkProps } from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  ListItem
} from "@chakra-ui/react";

type MonoLinkProps = {
  href: any;
  // href: ChakraLinkProps["href"] | NextLinkProps["href"];
  isLocal?: boolean;
  children: string;
};

// type MonoLinkInternalProps = MonoLinkProps & {
//   isLocal: true;
//   href: NextLinkProps["href"];
// };

// type MonoLinkExternalProps = MonoLinkProps & {
//   isLocal: false;
//   href: ChakraLinkProps["href"];
// };

const MonoLink = ({
  href,
  isLocal = false,
  children = "default child"
}: MonoLinkProps) => {
  if (!isLocal) {
    return (
      <ListItem>
        <NextLink href={href} passHref>
          <ChakraLink layerStyle="resetLink">{children}</ChakraLink>
        </NextLink>
      </ListItem>
    );
  } else {
    return (
      <ListItem>
        <ChakraLink layerStyle="resetLink" href={href}>
          {children}
        </ChakraLink>
      </ListItem>
    );
  }
};

export { MonoLink };
