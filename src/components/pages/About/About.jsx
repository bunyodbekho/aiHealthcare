import { Flex, Text, Heading, Box, Button } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { ListItem, OrderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Flex flexDirection={"column"} padding={"70px 150px"} gap={"40px"}>
      <Accordion defaultIndex={[0]}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading color={"#15334b"} fontSize={"3xl"}>
                  {`Who we are?`}
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize={"xl"}>
              {`We are dedicated to exploring the intersection of two critical
          frontiers: the environment and artificial intelligence in healthcare.
          Our mission is to provide a platform that scrutinizes, educates, and
          advocates for a sustainable environment while harnessing the
          transformative power of AI in healthcare for the betterment of
          society.`}
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading color={"#15334b"} fontSize={"3xl"}>
                  {`Our Vision.`}
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize={"xl"}>
              {`We envision a world where environmental consciousness and
          technological advancements in healthcare converge harmoniously to
          create a sustainable, healthier future for all. Our commitment is to
          foster a community that understands, appreciates, and advocates for
          the delicate balance between environmental preservation and the
          advancement of healthcare through cutting-edge technology.`}
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading color={"#15334b"} fontSize={"3xl"}>
                  {`The Intersection of Environment and AI in Healthcare`}
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize={"xl"}>
              {`We recognize that the health of our planet is intricately linked to
          human health. The impact of environmental factors on our well-being is
          profound, from air and water quality to the implications of climate
          change on disease prevalence. Simultaneously, the integration of
          artificial intelligence in healthcare has revolutionized medical
          diagnostics, treatment, and patient care, offering unparalleled
          potential for improving health outcomes and accessibility.`}
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading color={"#15334b"} fontSize={"3xl"}>
                  {`Our Content`}
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize={"xl"}>
              {`At the core of our endeavors lies a commitment to knowledge
              dissemination. We publish a wide array of articles, reports, and
              insights that illuminate the dynamic relationship between the
              environment and healthcare AI. Our articles cover various aspects,
              including:`}
            </Text>
            <OrderedList fontSize={"xl"}>
              <ListItem>
                <Text as={"b"}>Environmental Health: </Text>
                <Text>
                  {`Exploring the effects of environmental changes on human
                  health, wildlife, and ecosystems, highlighting the urgency of
                  sustainable practices for a healthier planet.`}
                </Text>
              </ListItem>
              <ListItem>
                <Text as={"b"}>AI in Healthcare: </Text>
                <Text>
                  {`Delving into the breakthroughs and ethical considerations in
                  AI applications within healthcare, from predictive analytics
                  and precision medicine to robotic surgery and virtual health
                  assistants.`}
                </Text>
              </ListItem>
              <ListItem>
                <Text as={"b"}>Intersectional Analyses: </Text>
                <Text>
                  {`Investigating the crossroads where environmental
                  sustainability and healthcare AI converge, showcasing how
                  advancements in AI can be harnessed to address environmental
                  health issues.`}
                </Text>
              </ListItem>
              <ListItem>
                <Text as={"b"}>Expert Opinions and Interviews: </Text>
                <Text>
                  {`Engaging with leading voices in environmental science,
                  healthcare technology, policy, and advocacy to provide diverse
                  perspectives on pressing global challenges.`}
                </Text>
              </ListItem>
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Heading color={"#15334b"} fontSize={"3xl"}>
                  {`Join Our Community`}
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize={"xl"}>
              {`Whether you are an environmental enthusiast, a healthcare
              professional, a tech enthusiast, or an advocate for a better
              world, we invite you to join our community. Through our articles,
              discussions, and shared insights, we aim to bridge the gap between
              environmental stewardship and the potential of AI in healthcare.
              Thank you for visiting us. We hope our content
              inspires you, broadens your perspective, and fuels your commitment
              to a sustainable, healthy future for all.`}
              <Link to="/join-us">
                <Button ml={"5px"} colorScheme="blue">
                  Join Us
                </Button>
              </Link>
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}
