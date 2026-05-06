import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Tag,
  VStack,
  Stack,
  Divider,
} from "@chakra-ui/react";
import FadeBox from "../utils/FadeBox";

const PortfolioSection = () => {
  const expertise = [
    {
      label: "15+ years in digital and traditional banking",
      bg: "#D4E99B",
      color: "black",
      icon: true,
    },
    { label: "Issuing & Acquiring", bg: "#EAE7E1" },
    { label: "Product Management", bg: "#C1F060" },
    { label: "Payment Operations", bg: "#EAE7E1" },
    {
      label: "African & European payment corridors",
      bg: "#1A202C",
      color: "white",
    },
    { label: "Forensic Auditing", bg: "#EAE7E1" },
    { label: "Strategic Intelligence", bg: "#EAE7E1" },
  ];

  const institutions = [
    {
      id: "01",
      type: "TIER 1 BANKING",
      name: "GUARANTY TRUST BANK",
      desc: "West African institutional digital transformation and large-scale infrastructure.",
    },
    {
      id: "02",
      type: "TIER 1 BANKING",
      name: "ACCESS BANK",
      desc: "Pan-African payment rails and cross-border settlement system oversight.",
    },
    {
      id: "03",
      type: "NEOBANK",
      name: "KUDA",
      desc: 'Architecting the "Bank of the Free" — scaling mobile-first digital infrastructure.',
    },
    {
      id: "04",
      type: "AGGREGATOR",
      name: "INTOUCH",
      desc: "Optimizing pan-African payment aggregation and merchant processing.",
    },
    {
      id: "05",
      type: "FINTECH",
      name: "BUDPAY",
      desc: "Advisory on payment gateway security protocols and forensic audit trails.",
    },
    {
      id: "06",
      type: "LENDING",
      name: "FAST CREDIT",
      desc: "Automated credit decisioning frameworks and risk management layers.",
    },
  ];

  return (
    <Box
      bg="#ffebafeb"
      maxW="7xl"
      py={20}
      minH="100vh"
      px={4}
      mx="auto"
      my={6}
      borderRadius="xl"
      blur={8}
    >
      <Container maxW="container.lg">
        {/* --- Expertise Section --- */}
        <FadeBox>
          <VStack align="start" spacing={6} mb={20}>
            <Heading size="lg" fontWeight="600">
              Expertise & Skills
            </Heading>
            <Text color="gray.600" maxW="2xl">
              A specialized toolkit developed at the intersection of legacy
              banking infrastructure and modern fintech agility.
            </Text>
            <Flex wrap="wrap" gap={3}>
              {expertise.map((item, index) => (
                <Tag
                  key={index}
                  px={4}
                  py={3}
                  borderRadius="md"
                  bg={item.bg}
                  color={item.color || "black"}
                  fontSize="xs"
                  fontWeight="bold"
                  textTransform="none"
                >
                  {item.label}
                </Tag>
              ))}
            </Flex>
          </VStack>
        </FadeBox>
        {/* --- Notable Institutions Section --- */}
        <VStack align="start" spacing={6} mb={10}>
          <FadeBox>
            <Heading size="lg" fontWeight="600">
              Notable Institutions
            </Heading>
            <Text color="gray.600">
              A track record of engagement with industry-leading financial
              organizations across the digital spectrum.
            </Text>
          </FadeBox>
        </VStack>

        {/* Grid Container */}
        <Box
          border="1px solid"
          borderColor="gray.200"
          borderRadius="xl"
          overflow="hidden"
          bg="white"
        >
          <FadeBox>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              divider={<Divider borderColor="gray.100" />}
            >
              {institutions.map((inst, id) => (
                <Box
                  key={id}
                  p={8}
                  borderBottom="1px solid"
                  // borderRight={{ md: "1px solid" }}
                  borderColor="gray.100"
                  transition="all 0.3s"
                  _hover={{ bg: "#f1f1f1" }}
                >
                  <Flex justify="space-between" mb={10}>
                    <Text
                      fontSize="2xs"
                      fontWeight="800"
                      color="#7BA428"
                      letterSpacing="widest"
                    >
                      {inst.type}
                    </Text>
                    <Text fontSize="2xs" color="gray.300">
                      {inst.id}
                    </Text>
                  </Flex>
                  <Heading
                    size="32px"
                    mb={4}
                    fontWeight="bold"
                    letterSpacing="tight"
                  >
                    {inst.name}
                  </Heading>
                  <Text fontSize="sm" color="gray.500" lineHeight="tall">
                    {inst.desc}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>

            {/* Footer Row */}
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              bg="#E7E5DF"
              p={10}
              alignItems="center"
            >
              <VStack align="start" spacing={1}>
                <Text
                  fontSize="2xs"
                  fontWeight="800"
                  color="#7BA428"
                  letterSpacing="widest"
                >
                  STRATEGIC PARTNERSHIP
                </Text>
                <Heading size="48px" fontWeight="bold" letterSpacing="tight">
                  SIMPLIFY SYNERGY
                </Heading>
              </VStack>
              <Box mt={{ base: 6, md: 0 }}>
                <Text fontStyle="italic" color="gray.600" fontSize="md">
                  "Consulting on operational synergy and lean management in
                  complex fintech ecosystems."
                </Text>
              </Box>
            </SimpleGrid>
          </FadeBox>
        </Box>
      </Container>
    </Box>
  );
};

export default PortfolioSection;
