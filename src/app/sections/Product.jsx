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
    <Box bg="#ffffff" py={24} id="products">
      <Container
        maxW={{ base: "100%", md: "1280px" }}
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
            From Diagnosis to Protection
            <br />
            <Box as="span" color="primaryColor.700">
              Everything Your Payment Infrastructure Needs to Perform.
            </Box>
          </Heading>

          {/* Subtext */}
          <Text color="gray.600" fontSize={{ base: "12px", md: "14px" }}>
            Every product we offer is designed to deliver measurable outcomes
            not activity. Choose where you are in your journey.
          </Text>
        </VStack>

        {/* CARDS */}
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr 1fr 1fr" }}
          gap={10}
          mt={16}
          w="100%"
        >
          {/* CARD 1 */}
          <Box bg="#e9e7e4" borderRadius="xl" overflow="hidden">
            {/* Image */}
            <Box position="relative">
              <Image
                src="/image/completepaymentbundle.avif"
                alt="Card Failure"
                w="100%"
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
                The Complete Resilience Bundle
              </Heading>

              <Text color="gray.600" fontSize="sm">
                Audit • Query • Protect • 3 Products, One Price •
              </Text>

              {/* <Text fontSize={{ base: "18px", md: "24px" }}>
                £297 (Save £127)
              </Text> */}

              <Box w="100%" h="1px" bg="gray.200" />

              <Button
                as="a"
                href="https://payhip.com/b/dWIyz"
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
                src="/image/resilientplaybook.avif"
                alt="Optimisation"
                w="100%"
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
                Payment Resilience Playbook
              </Heading>

              <Text color="gray.600" fontSize="sm">
                The Complete Guide to Payment Infrastructure That Performs
              </Text>
              {/* 
              <Text fontSize={{ base: "18px", md: "24px" }}>£247</Text> */}

              <Box w="100%" h="1px" bg="gray.200" />

              <Button
                as="a"
                href="https://payhip.com/b/B34C9"
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

          {/* CARD 3 */}
          <Box bg="#e9e7e4" borderRadius="xl" overflow="hidden">
            {/* Image */}
            <Box position="relative">
              <Image
                src="/image/20pointinfrustrature.avif"
                alt="Optimisation"
                w="100%"
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
                20-Point Infrastructure Audit
              </Heading>

              <Text color="gray.600" fontSize="sm">
                Payment Resilience Playbook SQL Implementation Vault
              </Text>

              {/* <Text fontSize={{ base: "18px", md: "24px" }}>£50</Text>
              <Box w="100%" h="1px" bg="gray.200" /> */}

              <Button
                as="a"
                href="https://payhip.com/b/JngK0"
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

          {/* CARD 4 */}
          <Box bg="#e9e7e4" borderRadius="xl" overflow="hidden">
            {/* Image */}
            <Box position="relative">
              <Image
                src="/image/queryrevenue.avif"
                alt="Optimisation"
                w="100%"
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
                Querying Revenue
              </Heading>

              <Text color="gray.600" fontSize="sm">
                The Complete SQL Query Library for Fintech Engineers
              </Text>

              {/* <Text fontSize={{ base: "18px", md: "24px" }}>£127</Text> */}
              <Box w="100%" h="1px" bg="gray.200" />

              <Button
                as="a"
                href="https://payhip.com/b/XTh8G"
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
