import { LayoutChakra } from "../components/layouts";
import { Stack, Text } from "@chakra-ui/react";
import MetaPage from "../components/MetaPage";

type Props = {};

type typeStylesArray = Array<string>;
type typeSystemObject = { [key: string]: typeStylesArray };

const typeSystem: typeSystemObject = {
  heading: ["jumbo", "h1", "h2", "h3", "h4", "h5", "h6"],
  paragraph: ["p1", "p2", "p3", "p4"],
  label: ["l1", "l2"],
  button: ["b1", "b2"]
};

const ThemeExplorer = ({}: Props) => {
  return (
    <>
      <LayoutChakra>
        <MetaPage title="T H E M E | 🤢🍔" titleSuffix={false} />

        <div>
          <Stack spacing={3}>
            {Object.keys(typeSystem).map((typeGroup, i) => {
              const typeGroupX = typeSystem[typeGroup];
              return (
                <div key={i}>
                  <Text
                    textStyle="h3"
                    bg="black"
                    color="white"
                    display="inline-block"
                    px="1"
                    mb="4"
                  >
                    {typeGroup}
                  </Text>
                  <Stack spacing="4">
                    {typeGroupX.map((style, j) => (
                      <Text textStyle={style}>
                        This is a {style.toLowerCase()}{" "}
                        {(typeGroup === "heading" ||
                          typeGroup === "paragraph") && <br />}{" "}
                        piece of text
                      </Text>
                    ))}
                  </Stack>

                  {console.log(typeSystem[typeGroup])}
                  {console.log(typeGroupX)}
                </div>
              );
            })}
          </Stack>
        </div>
      </LayoutChakra>
    </>
  );
};

export default ThemeExplorer;

export const getStaticProps = async () => {
  return {
    props: {}
  };
};
