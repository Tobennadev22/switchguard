"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Badge,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

export default function HeroWhoWeAre() {
  return (
    <Box bg="#f7f7f5" py={{ base: 12, md: 20 }}>
      <Container maxW="7xl">
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 10, lg: 16 }}
          align="center"
        >
          {/* LEFT CONTENT */}
          <Box flex="1">
            {/* Tag */}
            <Box
              bgGradient="linear(to-r, orange.400, orange.600)"
              color="white"
              px={4}
              py={1}
              borderRadius="full"
              fontSize="sm"
              letterSpacing="wide"
              mb={4}
              width="fit-content"
            >
              Institutional Integrity
            </Box>

            {/* Heading */}
            <Heading
              fontSize={{ base: "3xl", md: "48px" }}
              fontWeight="Regular"
              lineHeight="1.2"
              color="gray.600"
              mb={6}
            >
              Who We Are
            </Heading>

            {/* Description */}
            <Text color="gray.600" fontSize="md" mb={8} maxW="600px">
              SwitchGuard Advisory is a payment performance infrastructure
              company. We help fintechs identify where transactions fail,
              quantify the revenue impact, and implement targeted fixes that
              deliver measurable results.
            </Text>

            {/* Cards */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {/* Card 1 */}
              <Box bg="#eae7e2" p={6} borderRadius="xl" position="relative">
                <Text fontWeight="semibold" fontSize="lg" mb={2}>
                  Forensic Precision
                </Text>
                <Text color="gray.600" fontSize="sm">
                  Deep-layer auditing that uncovers hidden transaction failures
                  and routing inefficiencies.
                </Text>
              </Box>

              {/* Card 2 */}
              <Box
                bg="#4b6f00"
                color="white"
                p={6}
                borderRadius="xl"
                position="relative"
              >
                <Text fontWeight="semibold" fontSize="lg" mb={2}>
                  Non-Disruptive
                </Text>
                <Text fontSize="sm" opacity={0.9}>
                  No rebuilds, no disruption — just better outcomes through
                  existing infrastructure optimization.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          {/* RIGHT IMAGE */}
          <Box flex="1" position="relative" w="100%">
            <Image
              src="/image/TemitayoJeaneAromolaran.jpeg"
              alt="Founder"
              borderRadius="xl"
              objectFit="cover"
              w="100%"
              h={{ base: "400px", md: "500px", lg: "600px" }}
            />

            {/* Overlay Card */}
            <Box
              position="absolute"
              bottom={{ base: 4, md: 6 }}
              left={{ base: 4, md: 6 }}
              bg="#111827"
              color="white"
              p={4}
              borderRadius="lg"
              w={{ base: "70%", md: "50%" }}
            >
              <Text fontSize="xs" opacity={0.7} mb={1}>
                REAL-TIME YIELD
              </Text>
              <Heading fontSize="2xl">14.2%</Heading>
              <Text fontSize="xs" opacity={0.7}>
                Avg revenue recovery post-optimization
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
