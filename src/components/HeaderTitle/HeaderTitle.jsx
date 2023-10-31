import { Flex, Image, Heading } from "@chakra-ui/react";

export default function HeaderTitle() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      gap={"30px"}
      marginBottom={"30px"}
    >
      <Image
        borderRadius={"full"}
        boxSize={"70px"}
        src="./public/logo.jpg"
        alt="logo"
      />
      <Heading color={"#fff"}>AI Healthcare</Heading>
    </Flex>
  );
}
