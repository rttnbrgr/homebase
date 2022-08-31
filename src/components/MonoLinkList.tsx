import { Text, UnorderedList } from "@chakra-ui/react";
import { BoxText } from "./BoxText";

type Props = {
  title: string;
  children: any;
};

const MonoLinkList = ({ title, children }: Props) => {
  return (
    <UnorderedList layerStyle="resetList">
      <BoxText as="h2">{title}</BoxText>
      {children}
    </UnorderedList>
  );
};

export { MonoLinkList };
