import { Flex, Heading } from "@chakra-ui/react";
import { componentColor } from "../../utils/constants/colors";

export default function Footer() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      gap={"30px"}
      bg={componentColor}
      padding={"30px"}
    >
      <Heading color={"#fff"}>AI Healthcare</Heading>
    </Flex>
  );
}
