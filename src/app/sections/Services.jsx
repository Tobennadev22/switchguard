"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  SimpleGrid,
  Badge,
  HStack,
  Fade,
} from "@chakra-ui/react";

import { BrainCircuit, DraftingCompass, Scale } from "lucide-react";
import FadeBox from "../utils/FadeBox";

export default function Services() {
  return (
    <Box bg="#f6f6f4">
      <FadeBox>
        {/* ================= HERO ================= */}
        <Container maxW="7xl" py={{ base: 12, md: 20 }}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            gap={12}
          >
            {/* LEFT */}
            <Box flex="1">
              <Box
                display="inline-block"
                bgGradient="linear(to-r, orange.400, orange.600)"
                color="white"
                px={4}
                py={1}
                borderRadius="full"
                fontSize="sm"
                mb={6}
                mx={{ base: 9, md: "0" }}
              >
                Infrastructure Performance
              </Box>

              <Heading
                fontSize={{ base: "3xl", md: "48px" }}
                fontWeight="Regular"
                lineHeight="1.2"
                color="gray.600"
                mb={6}
                letterSpacing={-1.4}
                textAlign={{ base: "center", md: "left" }}
              >
                From Diagnosis to Protection. Everything Your Payment
                Infrastructure Needs to Perform.
              </Heading>

              <Text
                color="gray.600"
                mb={6}
                maxW="520px"
                fontSize={{ base: "12px", md: "16px" }}
                textAlign={{ base: "center", md: "left" }}
              >
                Every product we offer is designed to deliver measurable
                outcomes not activity. Choose where you are in your journey.
              </Text>

              <Button
                bg="primaryColor.700"
                color="white"
                size="lg"
                borderRadius="full"
              >
                View All Services
              </Button>
            </Box>

            {/* RIGHT IMAGE */}
            <Box flex="1" w="100%">
              <Image
                src="/image/shield.png"
                borderRadius="2xl"
                w="100%"
                h={{ base: "300px", md: "400px", lg: "600px" }}
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Container>
      </FadeBox>

      {/* ================= TIMELINE ================= */}
      <Box bg="#ffffff" py={{ base: 12, md: 16 }}>
        <FadeBox>
          <Container maxW="6xl">
            <Heading
              textAlign="center"
              fontSize={{ base: "18px", md: "32px", lg: "32px" }}
              fontWeight="medium"
              color="gray.600"
              lineHeight="shorter"
              mb={2}
            >
              The Evolution of Resilience
            </Heading>
            <Text textAlign="center" color="gray.600" mb={4}>
              A connected journey from identification to continuous strategic
              oversight.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {[
                {
                  icon: <BrainCircuit />,
                  title: "Diagnostic",
                  desc: "Uncover the hidden leakages and technical debt stalling growth.",
                  price: "£10,000",
                },
                {
                  icon: <DraftingCompass />,
                  title: "Architecture",
                  desc: "Build the robust engineering foundation discovered in Phase 1.",
                  price: "£30,000",
                },
                {
                  icon: <Scale />,
                  title: "Advisory",
                  desc: "Prevent regression with continuous oversight and elite strategy.",
                  price: "£4,000/mo",
                },
              ].map((item, i) => (
                <Box key={i} textAlign="center">
                  <Box
                    bg="white"
                    w="60px"
                    h="60px"
                    mx="auto"
                    borderRadius="lg"
                    mb={4}
                  />
                  {/* <icon
                  as={item.icon}
                  boxSize={6}
                  color="primaryColor.700"
                  mx="auto"
                  mt={3}
                /> */}
                  <Box
                    display="flex"
                    justifyContent="center"
                    mt={3}
                    bg="primaryColor.100"
                    color="primaryColor.700"
                    borderRadius="full"
                    w="60px"
                    h="60px"
                    alignItems="center"
                    margin="auto"
                    mb={3}
                  >
                    {item.icon}
                  </Box>

                  <Text fontSize="xs" color="gray.500" mb={1}>
                    PHASE {`0${i + 1}`}
                  </Text>

                  <Heading fontSize="lg" mb={2}>
                    {item.title}
                  </Heading>

                  <Text color="gray.600" fontSize="sm" mb={3}>
                    {item.desc}
                  </Text>

                  <Text fontWeight="bold">{item.price}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </FadeBox>
      </Box>

      {/* ================= PRODUCTS ================= */}
      <Container maxW="7xl" py={{ base: 12, md: 16 }}>
        <FadeBox>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {products.map((p, i) => (
              <Box
                key={i}
                bg="#f9f9f9"
                p={6}
                borderRadius="xl"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box>
                  <Badge
                    bg="primaryColor.100"
                    px={2}
                    color="primaryColor.700"
                    mb={4}
                    borderRadius="full"
                  >
                    {p.tag}
                  </Badge>

                  <Heading fontSize="lg" mb={2}>
                    {p.title}
                  </Heading>

                  <Text color="gray.600" fontSize="sm" mb={4}>
                    {p.desc}
                  </Text>

                  {/* <HStack spacing={2} wrap="wrap">
                  {p.duration.map((f, idx) => (
                    <Badge key={idx} bg="gray.100">
                      {f}
                    </Badge>
                  ))}
                  <Text> {p.duration}</Text>
                </HStack> */}
                </Box>

                <Flex mt={6} justify="space-between" align="center">
                  <Text fontWeight="semibold">{p.price}</Text>
                  <Button
                    size="sm"
                    bg="orange.500"
                    color="white"
                    borderRadius="full"
                    _hover={{ bg: "orange.600" }}
                  >
                    {p.cta}
                  </Button>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </FadeBox>
      </Container>

      {/* ================= CTA ================= */}
      <Container maxW="7xl" pb={{ base: 12, md: 20 }}>
        <FadeBox>
          <Box
            bg="radial-gradient( circle farthest-corner at 96.1% 7.2%,  rgba(9,178,62,1) 0%, rgba(19,19,19,1) 100.2% )"
            color="white"
            p={{ base: 6, md: 12 }}
            borderRadius="2xl"
          >
            <Stack spacing={6} maxW="600px">
              <Heading fontSize={{ base: "24px", md: "32px" }}>
                Need a forensic assessment of your current stack?
              </Heading>

              <Text color="gray.300">
                Connect with our Lead Architect to discuss your specific
                infrastructure challenges and map out a path to 99.99%
                reliability.
              </Text>

              <HStack spacing={4} flexWrap="wrap">
                <Button
                  bg="primaryColor.500"
                  color="white"
                  _hover={{ bg: "primaryColor.600" }}
                  borderRadius="full"
                  as="a"
                  href="https://www.calendly.com/switchguard/discovery-call"
                >
                  Schedule a Strategic Review
                </Button>
              </HStack>
            </Stack>
          </Box>
        </FadeBox>
      </Container>
    </Box>
  );
}

/* ================= DATA ================= */

const products = [
  {
    tag: "3 WEEK AUDIT",
    title: "The Payment Resilience Diagnostic",
    desc: "A forensic audit of your payment infrastructure. We identify where transactions are failing, quantify the revenue impact, and deliver a prioritised fix list — the Silent Leak Audit, the Logic Gap Analysis, and the Resilience Scorecard.",
    // features: ["Silent Leak Audit", "Logic Gap Analysis", "Scorecard"],
    // duration: "3weeks",
    price: "£10,000 (Fixed Fee)",
    cta: "Book the Diagnostic",
  },
  {
    tag: "3–4 MONTHS BUILD",
    title: "Revenue Protection Architecture",
    desc: "We build the infrastructure that prevents failures from recurring. Custom monitoring engine, resilience SOP library, and smart-routing logic — all designed around your specific payment stack and corridors.",
    // features: ["Monitoring Engine", "Routing", "SOP Library"],
    price: "£30,000 (Project)",
    cta: "Start Project",
  },
  {
    tag: "6 MONTHS",
    title: "Infrastructure Intelligence Advisory",
    desc: "Ongoing payment performance intelligence. Monthly reviews, a live Power BI dashboard, priority support with an 8-hour SLA, and a named expert who knows your infrastructure as well as your own team.",
    // features: ["Performance Reviews", "Dashboard", "Support"],
    price: "£4,000 / Month",
    cta: "Enquire",
  },
  {
    tag: "ANNUALLY",
    title: "Annual Benchmark Report",
    desc: "SwitchGuard's annual analysis of payment infrastructure performance across African and European corridors. Success rates, settlement benchmarks, provider rankings, and strategic commentary — published every Q1.",
    // features: ["Anonymised Data", "Trends", "Investor Ready"],
    price: "£1,500 / Report",
    cta: "Download",
  },
];
