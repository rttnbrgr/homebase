import { Text, UnorderedList } from "@chakra-ui/react";

type Props = {
  title: string;
  children: any;
};

const MonoLinkList = ({ title, children }: Props) => {
  return (
    <UnorderedList layerStyle="resetList">
      <Text as="h2" textStyle="homeHeader">
        {title}
      </Text>
      {children}
    </UnorderedList>
  );
};

export { MonoLinkList };
