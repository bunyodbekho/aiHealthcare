import { Flex, Heading, Text } from "@chakra-ui/react";

export default function JoinUs() {
  return (
    <Flex flexDirection={"column"} padding={"70px 150px"} gap={"40px"}>
      <Flex flexDirection={"column"} gap={"20px"}>
        <Heading>{`Join Us in Shaping the Future`}</Heading>
        <Text>
          Your voice and expertise can play a pivotal role in shaping the future
          of environmental health and healthcare innovation. Join EcoMedAI
          Insights and become a part of our mission to inform, inspire, and
          foster change.
        </Text>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSciN-BWG0axYEgmaDy8f9m0_w2nCDSYtcIAcaAMlxPn1YMyqQ/viewform?embedded=true"
          width="100%"
          height="1000"
        >
          Loading…
        </iframe>
        <Text>
          Thank you for considering becoming a contributor to our program.
          Together, we can build a community committed to a sustainable, healthy
          future for all.
        </Text>
      </Flex>
    </Flex>
  );
}
