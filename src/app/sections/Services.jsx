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
} from "@chakra-ui/react";

import { BrainCircuit, DraftingCompass, Scale } from "lucide-react";

export default function Services() {
  return (
    <Box bg="#f6f6f4">
      {/* ================= HERO ================= */}
      <Container maxW="7xl" py={{ base: 12, md: 20 }}>
        <Flex direction={{ base: "column", lg: "row" }} align="center" gap={12}>
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
              Every product we offer is designed to deliver measurable outcomes
              not activity. Choose where you are in your journey.
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

      {/* ================= TIMELINE ================= */}
      <Box bg="#ffffff" py={{ base: 12, md: 16 }}>
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
      </Box>

      {/* ================= PRODUCTS ================= */}
      <Container maxW="7xl" py={{ base: 12, md: 16 }}>
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

                <HStack spacing={2} wrap="wrap">
                  {p.features.map((f, idx) => (
                    <Badge key={idx} bg="gray.100">
                      {f}
                    </Badge>
                  ))}
                </HStack>
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
      </Container>

      {/* ================= CTA ================= */}
      <Container maxW="7xl" pb={{ base: 12, md: 20 }}>
        <Box
          bg="primaryColor.800"
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
              <Button bg="#4b6f00" color="white">
                Schedule a Strategic Review
              </Button>
              <Button variant="outline" color="white">
                Download Methodology
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

/* ================= DATA ================= */

const products = [
  {
    tag: "3 WEEK AUDIT",
    title: "Payment Resilience Diagnostic",
    desc: "Forensic discovery of revenue leakage and technical debt.",
    features: ["Silent Leak Audit", "Logic Gap Analysis", "Scorecard"],
    price: "£10,000 (Fixed Fee)",
    cta: "Book the Diagnostic",
  },
  {
    tag: "3–6 MONTHS BUILD",
    title: "Revenue Protection Architecture",
    desc: "Implementation of high-fidelity infrastructure.",
    features: ["Monitoring Engine", "Routing", "SOP Library"],
    price: "£30,000 (Project)",
    cta: "Start Project",
  },
  {
    tag: "CONTINUOUS RETAINER",
    title: "Infrastructure Intelligence Advisory",
    desc: "External technical direction for scaling fintechs.",
    features: ["Performance Reviews", "Dashboard", "Support"],
    price: "£4,000 / Month",
    cta: "Enquire",
  },
  {
    tag: "MARKET INTELLIGENCE",
    title: "Annual Benchmark Report",
    desc: "Market data on latency and success rates.",
    features: ["Anonymised Data", "Trends", "Investor Ready"],
    price: "£1,500 / Report",
    cta: "Download",
  },
];
