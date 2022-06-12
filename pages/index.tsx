import Link from "next/link";
import MetaPage from "../components/MetaPage";
import { LayoutChakra } from "../components/layouts";
import {
  Box,
  VStack,
  Text,
  Link as ChakraLink,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";

const rootStyles = {
  // Text styles
  textStyle: "homeRoot",
  // Layout Styles
  padding: "1.5em",
  display: "flex",
  alignItems: "center",
  maxWidth: "30em"
};

type Props = {};

const Index = ({}: Props) => {
  return (
    <LayoutChakra>
      <MetaPage title="R T T N B R G R | 🤢🍔" titleSuffix={false} />
      <Box {...rootStyles} className="rootBox">
        <VStack spacing="2em" align="start">
          <Text as="h1" textStyle="homeHeader">
            @rttnbrgr
          </Text>

          <VStack spacing="1em" align="start">
            <Text>👋 Hi.</Text>
            <Text>My name is Nathan Mateo Rothenberger.</Text>
            <Text>
              I’m a designer & developer who likes making stuff for the web.
              Currently, I’m helping build the Camp design system at Active
              Campaign.
            </Text>
            <Text>
              I’m also working on a few things that aren’t ready to share just
              yet. You can check out the other stuff I’ve made below or say
              whatsup on any of the socials.
            </Text>
            <Text>Take care ✌️</Text>
          </VStack>

          <UnorderedList layerStyle="resetList">
            <Text as="h2" textStyle="homeHeader">
              Links
            </Text>
            <ListItem>
              <ChakraLink
                layerStyle="resetLink"
                href="https://www.rottenburger.com/"
              >
                Portfolio
              </ChakraLink>
            </ListItem>
            <ListItem>
              <Link href="/blog">
                <ChakraLink layerStyle="resetLink">Blog</ChakraLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/reviews">
                <ChakraLink layerStyle="resetLink">Reviews</ChakraLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/fullstack-design">
                <ChakraLink layerStyle="resetLink">Fullstack</ChakraLink>
              </Link>
            </ListItem>
            <ListItem>
              <ChakraLink
                layerStyle="resetLink"
                href="https://github.com/rttnbrgr"
              >
                Github
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                layerStyle="resetLink"
                href="https://www.linkedin.com/in/nathan-rothenberger-11765b16/"
              >
                LinkedIn
              </ChakraLink>
            </ListItem>
          </UnorderedList>
        </VStack>
      </Box>
    </LayoutChakra>
  );
};

export default Index;

export const getStaticProps = async () => {
  return {
    props: {}
  };
};
