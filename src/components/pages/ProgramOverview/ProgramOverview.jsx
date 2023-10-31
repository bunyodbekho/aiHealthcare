import { Flex, Text, Heading } from "@chakra-ui/react";
import { ListItem, OrderedList } from "@chakra-ui/react";

export default function ProgramOverview() {
  return (
    <Flex flexDirection={"column"} padding={"70px 150px"} gap={"40px"}>
      <Flex flexDirection={"column"} gap={"20px"}>
        <Heading
          color={"#15334b"}
        >{`The Intersection of Environment and AI in Healthcare`}</Heading>
        <Text>
          {`At out program, we recognize the profound interdependence
          between environmental wellness and human health. The state of our
          planet significantly impacts our well-being, from air and water
          quality to the broader implications of climate change on disease
          prevalence. Simultaneously, AI's integration in healthcare has
          transformed diagnostics, treatments, and patient care, offering
          unparalleled potential to enhance health outcomes and accessibility.`}
        </Text>
      </Flex>

      <Flex flexDirection={"column"} gap={"20px"}>
        <Heading color={"#15334b"}>{`Our Program's Focus`}</Heading>
        <Text>
          {`Our program's primary focus is to provide a comprehensive
          understanding of the intertwining realms of environment and healthcare
          AI. Our articles, analyses, and insights span various critical areas:`}
        </Text>
        <OrderedList>
          <ListItem>
            {`Environmental Health & Impact: Delving into the profound impacts of
            environmental changes on human health, wildlife, ecosystems, and
            global health issues, underscoring the urgency for sustainable
            practices.`}
          </ListItem>
          <ListItem>
            {`AI Innovations in Healthcare: Exploring the revolutionary
            advancements in AI technologies transforming healthcare, from
            predictive analytics and personalized medicine to robotic surgery
            and telemedicine.`}
          </ListItem>
          <ListItem>
            {`Convergence & Solutions: Investigating the intersection where
            environmental sustainability meets healthcare innovation, showcasing
            how AI can be harnessed to address environmental health challenges.`}
          </ListItem>
          <ListItem>
            {`Expert Perspectives & Interviews: Engaging with leading voices in
            environmental sciences, healthcare technology, policy, and advocacy,
            providing diverse insights on pressing global challenges.`}
          </ListItem>
        </OrderedList>
      </Flex>

      <Flex flexDirection={"column"} gap={"20px"}>
        <Heading color={"#15334b"}>{`Our Commitment to Community`}</Heading>
        <Text>
          {`Our Program is committed to nurturing an engaged and informed
          community. We believe that knowledge, awareness, and understanding are
          key drivers for transformative change. Therefore, our content is
          designed to inspire, educate, and provoke discussions that lead to
          positive actions and innovations.`}
        </Text>
      </Flex>
    </Flex>
  );
}
