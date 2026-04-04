"use client";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
// import { FiBarChart2, FiActivity, FiTrendingUp, FiClock } from "react-icons/fi";

export default function Services() {
  return (
    <Box bg="white" py={20} px={{ base: 6, md: 16 }}>
      <Box width={{ base: "100%", md: "1140px" }} mx="auto">
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1.5fr" }}
          gap={12}
          alignItems="start"
        >
          {/* LEFT SIDE */}
          <VStack align="start" spacing={6}>
            <Box
              bgGradient="linear(to-r, orange.400, orange.600)"
              color="white"
              px={4}
              py={1}
              borderRadius="full"
              fontSize="sm"
            >
              Our Offers
            </Box>

            <Heading
              fontSize={{ base: "24px", md: "32px" }}
              fontWeight="medium"
              lineHeight="1.12"
              color="gray.800"
            >
              Let’s Fix it
            </Heading>

            <Text color="gray.500" fontSize={{ base: "12px", md: "14px" }}>
              This is where the big shift happens.
            </Text>

            <Button
              bg="primaryColor.700"
              color="white"
              px={8}
              py={6}
              borderRadius="full"
              _hover={{ bg: "primaryColor.500" }}
            >
              Book a Call
            </Button>
          </VStack>

          {/* RIGHT SIDE GRID */}
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
            {/* MAIN CARD */}
            <GridItem colSpan={{ base: 1, md: 1 }}>
              <Box
                bg="primaryColor.900"
                color="white"
                p={8}
                borderRadius="2xl"
                h="100%"
              >
                <VStack align="start" spacing={4}>
                  {/* <Icon as={FiClock} boxSize={6} color="green.300" /> */}

                  <Heading fontSize={{ base: "14px", md: "16px" }}>
                    Payment Performance Audit
                  </Heading>

                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Identify where your system is losing transactions and
                    revenue.
                  </Text>

                  <Text color="orange.300" fontWeight="medium" mt={8}>
                    Entry Point
                  </Text>
                </VStack>
              </Box>
            </GridItem>

            {/* CARD 2 */}
            <Box bg="#f9f9f9" p={8} borderRadius="2xl">
              <VStack align="start" spacing={4}>
                {/* <Icon as={FiBarChart2} boxSize={6} color="gray.500" /> */}

                <Heading
                  fontSize={{ base: "14px", md: "16px" }}
                  color="gray.700"
                >
                  Success Rate Optimisation
                </Heading>

                <Text color="gray.500" fontSize={{ base: "12px", md: "14px" }}>
                  We actively improve your transaction success rate by:
                </Text>

                <Box pl={4} fontSize={{ base: "12px", md: "14px" }}>
                  <Text color="gray.500">• Optimising routing strategies</Text>
                  <Text color="gray.500">
                    • Reducing provider dependency risks
                  </Text>
                  <Text color="gray.500">• Improving channel performance</Text>
                </Box>

                <Text
                  color="green.600"
                  fontWeight="medium"
                  fontSize={{ base: "12px", md: "14px" }}
                >
                  Target: +10–25% uplift
                </Text>
              </VStack>
            </Box>

            {/* CARD 3 */}
            <Box bg="#f9f9f9" p={8} borderRadius="2xl">
              <VStack align="start" spacing={4}>
                {/* <Icon as={FiActivity} boxSize={6} color="gray.500" /> */}

                <Heading
                  fontSize={{ base: "14px", md: "16px" }}
                  color="gray.700"
                >
                  Transaction Recovery Framework
                </Heading>

                <Text color="gray.500" fontSize={{ base: "12px", md: "14px" }}>
                  Recover failed transactions using structured retry and
                  fallback strategies.
                </Text>

                <Box pl={4} fontSize={{ base: "12px", md: "14px" }}>
                  <Text color="gray.500">• Retry logic design</Text>
                  <Text color="gray.500">• Failure-type recovery mapping</Text>
                  <Text color="gray.500">• Timeout and requery strategies</Text>
                </Box>

                <Text
                  color="green.600"
                  fontWeight="medium"
                  fontSize={{ base: "12px", md: "14px" }}
                >
                  Target: 3–10% recovery of failed transactions
                </Text>
              </VStack>
            </Box>

            {/* CARD 4 */}
            <Box bg="#f9f9f9" p={8} borderRadius="2xl">
              <VStack align="start" spacing={4}>
                {/* <Icon as={FiTrendingUp} boxSize={6} color="gray.500" /> */}

                <Heading
                  fontSize={{ base: "14px", md: "16px" }}
                  color="gray.700"
                >
                  Payment Operations Intelligence
                </Heading>

                <Text color="gray.500" fontSize={{ base: "12px", md: "14px" }}>
                  Ongoing performance monitoring and optimisation:
                </Text>

                <Box pl={4} fontSize={{ base: "12px", md: "14px" }}>
                  <Text color="gray.500">• Weekly performance reviews</Text>
                  <Text color="gray.500">• Failure trend analysis</Text>
                  <Text color="gray.500">• SLA monitoring</Text>
                </Box>
              </VStack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
