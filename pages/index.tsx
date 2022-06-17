import MetaPage from "../components/MetaPage";
import { LayoutChakra } from "../components/layouts";
import { Box, VStack, Text } from "@chakra-ui/react";
import { MonoLinkList } from "../components/MonoLinkList";
import { linkLists } from "../lib/homepageLinks";
import { MonoLink } from "../components/MonoLink";

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

          <MonoLinkList title="Links">
            {links.map(({ linkText, ...link }, i) => {
              return (
          <VStack spacing="1em" align="start">
            {linkLists.map(({ title, list }, i) => {
              return (
                <MonoLinkList title={title}>
                  {list.map(({ linkText, ...props }, i) => {
                    return (
                      <MonoLink key={i} {...props}>
                        {linkText}
                      </MonoLink>
                    );
                  })}
                </MonoLinkList>
              );
            })}
          </VStack>
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
