"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  VStack,
  Button,
  Image,
  HStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Product() {
  return (
    <Box bg="#ffffff" py={24}>
      <Container
        maxW={{ base: "100%", md: "1140px" }}
        mx={{ base: "8px", md: "auto" }}
      >
        {/* HEADER */}
        <VStack align="start" spacing={6} maxW="700px">
          {/* Badge */}
          <Box
            bg="linear-gradient(to right, #f97316, #b45309)"
            color="white"
            px={5}
            py={1}
            borderRadius="full"
            fontSize="sm"
          >
            Products
          </Box>

          {/* Heading */}
          <Heading
            fontSize={{ base: "24px", md: "32px" }}
            lineHeight="1.12"
            color="gray.800"
            fontWeight="medium"
          >
            Operational Playbooks
            <br />
            for{" "}
            <Box as="span" color="green.700">
              High-Stakes
            </Box>{" "}
            Fintech.
          </Heading>

          {/* Subtext */}
          <Text color="gray.600" fontSize={{ base: "12px", md: "14px" }}>
            Our forensic approach to system architecture distilled into
            actionable, technical guides. Designed for resilience, engineered
            for precision.
          </Text>
        </VStack>

        {/* CARDS */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10} mt={16}>
          {/* CARD 1 */}
          <Box bg="#e9e7e4" borderRadius="xl" overflow="hidden">
            {/* Image */}
            <Box position="relative">
              <Image
                src="/image/switchguardproduct-1.png"
                alt="Card Failure"
                w="100%"
                h="260px"
                objectFit="cover"
              />
            </Box>

            {/* Content */}
            <VStack align="start" spacing={4} p={6}>
              <Heading
                fontSize={{ base: "18px", md: "24px" }}
                fontWeight="medium"
                color="gray.800"
              >
                Card Failure Recovery Guide
              </Heading>

              <Text color="gray.600" fontSize="sm">
                A deep-dive technical manual for managing cascading switch
                failures and network latency spikes. Includes emergency
                rerouting protocols and automated reconciliation scripts for
                lost transaction states.
              </Text>

              <Box w="100%" h="1px" bg="gray.200" />

              <Button
                mt={2}
                bg="primaryColor.700"
                color="white"
                rightIcon={<ArrowForwardIcon />}
                borderRadius="md"
                px={6}
                _hover={{ bg: "primaryColor.500" }}
              >
                Purchase
              </Button>
            </VStack>
          </Box>

          {/* CARD 2 */}
          <Box bg="#e9e7e4" borderRadius="xl" overflow="hidden">
            {/* Image */}
            <Box position="relative">
              <Image
                src="/image/switchguardproduct-2.png"
                alt="Optimisation"
                w="100%"
                h="260px"
                objectFit="cover"
              />
            </Box>

            {/* Content */}
            <VStack align="start" spacing={4} p={6}>
              <Heading
                fontSize={{ base: "18px", md: "24px" }}
                fontWeight="medium"
                color="gray.800"
              >
                Payment Optimisation Playbook
              </Heading>

              <Text color="gray.600" fontSize="sm">
                A strategic guide to maximizing transaction success through
                smart routing and issuer-specific logic. Discover how to reduce
                decline rates by 14% using forensic BIN-level data analysis and
                retry strategies.
              </Text>

              <Box w="100%" h="1px" bg="gray.200" />

              <Button
                mt={2}
                bg="primaryColor.700"
                color="white"
                rightIcon={<ArrowForwardIcon />}
                borderRadius="md"
                px={6}
                _hover={{ bg: "primaryColor.500" }}
              >
                Purchase
              </Button>
            </VStack>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
