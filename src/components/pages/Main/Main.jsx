import {
  Flex,
  Heading,
  Text,
  Image,
  Container,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Main() {
  const [isS1Open, setIsS1Open] = useState(false);
  const [isS2Open, setIsS2Open] = useState(false);

  const handleS1 = () => {
    setIsS1Open((pre) => !pre);
  };
  const handleS2 = () => {
    setIsS2Open((pre) => !pre);
  };

  return (
    <Flex flexDirection={"column"} padding={"70px 150px"} gap={"40px"}>
      {/* Section 1: Join Us */}
      <Flex
        bgImage={"/main-join-us.webp"}
        bgColor={"#96b6c5"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        bgSize={"cover"}
        h={"600px"}
        color={"#fff"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Text fontSize={"30px"} as={"i"}>
          Discover ways to
        </Text>
        <Link to={"/join-us"}>
          <Heading size={"4xl"} as={"u"}>
            Join Us
          </Heading>
        </Link>
      </Flex>

      {/* Section 2: */}
      <Flex
        bg={"#96B6C5"}
        flexDirection={"column"}
        gap={"20px"}
        padding={"80px"}
      >
        <Heading color={"#15334b"} fontSize={"5xl"}>
          {`The Aral Sea Crisis and its Impacts`}
        </Heading>
        <Container>
          <Image
            src="/aral-years.png"
            alt="aral-crisis"
            sizes="100px"
          />
        </Container>
        <Text fontSize={"xl"}>
          {`The Aral Sea, once one of the world's largest inland bodies of water,
          has undergone a profound transformation over the past few decades,
          shrinking to a fraction of its original size. This environmental
          disaster, largely attributed to extensive irrigation projects
          diverting the rivers that fed the sea, has had devastating
          consequences for the surrounding region. As the sea receded, vast
          expanses of its former bed were exposed, unleashing toxic salts and
          pesticides into the atmosphere. These airborne toxins have directly
          contributed to a surge in respiratory ailments, cancers, and other
          health issues among the local population. Furthermore, the decline of
          the Aral Sea disrupted local ecosystems, leading to a loss of
          fisheries and a rise in unemployment, further exacerbating the
          region's challenges.`}
        </Text>

        {isS1Open && (
          <>
            <Text fontSize={"xl"}>
              {`The Aral Sea, once the fourth largest lake in the world, has been
            reduced to a fraction of its original size since 1960. The
            ecological and human dimensions of the Aral Sea crisis are well
            documented. The excessive diversion of water from the Amu Darya
            and Syr Darya rivers for cotton and other agricultural uses has
            resulted in desertification and collapse of biodiversity. The
            absence of the sea’s moderating influence has resulted in drier,
            hotter summers and more frigid winters. The human tragedy in the
            Aral Sea basin is no less grim than the ecological ones. Millions
            have been immiserated, fisheries have collapsed, food and water
            security are almost non-existent, and exposure to harmful chemicals
            has resulted in a horrifying public health crisis.`}
            </Text>
            <Container>
              <Image
                src="./src/assets/images/article-1/aral-crisis-1.jpg"
                alt="aral-crisis"
              />
            </Container>
            <Text fontSize={"xl"}>
              {`The Aral Sea crisis is a classic example of how human activities
              can precipitate an ecological disaster. The story of the Aral Sea
              can only be properly apprehended through the prism of
              nature-society linkages: if human activities have precipitated the
              ecological crisis in the Aral Sea basin, then the natural
              environment itself is acting back upon humans. Elevated rates of
              tuberculosis, infant mortality, and cancer in the region have all
              been linked to exposure to heavy metals, dioxins like DDT, and
              other pollutants that accumulated through intensive agricultural
              application. Exposure to these pollutants has been exacerbated by
              increasingly prevalent toxic dust storms and contamination of food
              and water supplies, which have accompanied desertification,
              salinization, and generalized environmental collapse.`}
            </Text>
            <Text fontSize={"xl"}>
              {`The Aral Sea crisis is a classic example of how human activities
              can precipitate an ecological disaster. The story of the Aral Sea
              can only be properly apprehended through the prism of
              nature-society linkages: if human activities have precipitated the
              ecological crisis in the Aral Sea basin, then the natural
              environment itself is acting back upon humans. Elevated rates of
              tuberculosis, infant mortality, and cancer in the region have all
              been linked to exposure to heavy metals, dioxins like DDT, and
              other pollutants that accumulated through intensive agricultural
              application. Exposure to these pollutants has been exacerbated by
              increasingly prevalent toxic dust storms and contamination of food
              and water supplies, which have accompanied desertification,
              salinization, and generalized environmental collapse.`}
            </Text>
            <Text fontSize={"xl"}>
              {`The Aral Sea crisis has had far-reaching impacts on the region’s
              economy, environment, and society. Key challenges linked to the
              Aral Sea crisis are water shortage due to water salinization and
              water pollution; food insecurity due to smaller crop yield from
              degraded soils; health problems due to polluted water and
              environment; and economic dwindle3. The loss of a fishing
              industry, salt-laden dust affecting crops and human health, and an
              altered climate are some of the consequences of this disaster2.`}
            </Text>
            <Text fontSize={"xl"}>
              {`In conclusion, the Aral Sea crisis is a cautionary tale about how
              human activities can lead to an ecological disaster with
              far-reaching consequences. It is imperative that we learn from
              this disaster and take steps to prevent similar catastrophes from
              happening in the future.`}
            </Text>
          </>
        )}
        <Button onClick={handleS1} variant={"link"}>
          {!isS1Open ? "Show more..." : "Show less..."}
        </Button>
      </Flex>

      {/* Section 3: */}
      <Flex bg={"#96B6C5"} flexDirection={"column"} gap={"3"} padding={"80px"}>
        <Heading
          color={"#15334b"}
          fontSize={"5xl"}
        >{`AI's Potential in Addressing Healthcare Concerns:`}</Heading>
        <Text fontSize={"xl"}>
          {`In the face of these mounting health challenges, Artificial
          Intelligence (AI) emerges as a promising ally. AI-driven algorithms
          possess the capability to sift through extensive patient data to
          anticipate and monitor potential disease outbreaks specific to the
          region's unique environmental conditions. Such proactive measures
          enable early interventions, considerably reducing the burden on local
          healthcare infrastructures. Additionally, given the vast and sometimes
          isolated nature of the Aral Sea region, many residents grapple with
          accessing medical facilities. AI-powered telemedicine platforms come
          to the rescue by providing remote consultations, ensuring that even
          the most distant communities receive essential medical care. By
          integrating AI into healthcare strategies, there's an opportunity to
          not only alleviate the immediate health repercussions of the Aral Sea
          crisis but also to forge a path towards a healthier future for the
          region's inhabitants.`}
        </Text>

        {isS2Open && (
          <>
            <Text fontSize={"xl"}>
              {`Artificial Intelligence (AI) has the potential to revolutionize
              the healthcare industry by improving diagnosis and treatment,
              predictive analytics, drug discovery and development, virtual
              assistants and chatbots, and streamlining administrative tasks.
              AI can also help address mental health concerns by providing
              additional support to mental health professionals. However, the
              deployment of AI in healthcare has been rapidly gaining ground,
              yet the lack of clear regulatory guidelines is raising concerns
              about patient safety and data privacy.`}
            </Text>
            <Text fontSize={"xl"}>
              {`AI can be used to create personalized treatment plans and even
              predict patient survival rates. Machine learning (ML) algorithms
              can be trained using data sets such as health records to create
              models capable of performing tasks such as categorizing
              information or predicting outcomes. Deep learning, a subset of
              machine learning that involves greater volumes of data, training
              times, and layers of ML algorithms to produce neural networks
              capable of more complex tasks, can also be used in healthcare4.
              Neural language processing (NLP) is another application of ML that
              is used to interpret documentation, notes, reports, and published
              research. Robotic process automation (RPA) is the use of AI in
              computer programs to automate administrative and clinical
              workflows.`}
            </Text>
            <Text fontSize={"xl"}>
              {`The UK government has announced a £100 million investment in AI
              for life sciences and healthcare. The initiative aims to pioneer
              precise treatments for dementia and cancer solutions among other
              healthcare challenges. Properly designed AI has the potential to
              make our healthcare system more efficient and less expensive, ease
              the paperwork burden that has more and more doctors considering
              new careers, fill the gaping holes in access to quality care in
              the world’s poorest places, and serve as an unblinking watchdog on
              the lookout for medical errors that kill an estimated 200,000
              people and cost $1.9 billion annually.`}
            </Text>
            <Text fontSize={"xl"}>
              {`In conclusion, AI has enormous potential in addressing healthcare
              concerns. However, it is important to ensure that AI is deployed
              safely with clear regulatory guidelines in place to protect
              patient safety and data privacy.`}
            </Text>
          </>
        )}
        <Button onClick={handleS2} variant={"link"}>
          {!isS2Open ? "Show more..." : "Show less..."}
        </Button>
      </Flex>
    </Flex>
  );
}
