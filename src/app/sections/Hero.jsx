"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  HStack,
} from "@chakra-ui/react";
// import Image from "next/image";

export default function Hero() {
  return (
    <Box px={{ base: 4, md: 12 }} py={{ base: 10, md: 20 }}>
      <Box
        maxW={{ base: "100%", md: "1300px" }}
        mx={{ base: "8px", md: "auto" }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={{ base: 10, md: 20 }}
        >
          {/* LEFT CONTENT */}
          <Box flex="1">
            {/* Tag */}
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
              Building a Payment Resilience Hub
            </Box>

            {/* Heading */}
            <Heading
              fontSize={{ base: "3xl", md: "48px" }}
              fontWeight="Regular"
              lineHeight="1.2"
              color="gray.600"
              mb={6}
              letterSpacing={-1.4}
              textAlign={{ base: "center", md: "left" }}
            >
              Your Payment Infrastructure Is Losing Revenue. We Fix That.
            </Heading>

            {/* Description */}
            <Text
              fontSize={{ base: "12px", md: "14px" }}
              textAlign={{ base: "center", md: "left" }}
              color="gray.600"
              maxW="500px"
              mb={8}
            >
              SwitchGuard helps fintechs identify, recover, and optimize failed
              transactions across cards, bank transfers, USSd, POS and other
              payment channels turning payment inefficiencies into measurable
              revenue gains
            </Text>

            {/* Buttons */}
            <HStack spacing={4} flexWrap="wrap">
              <Button
                bg="primaryColor.700"
                as="a"
                href="/contact"
                color="white"
                px={6}
                py={6}
                borderRadius="full"
                _hover={{ bg: "primaryColor.800" }}
                fontSize={{ base: "12px", md: "14px" }}
                w={{ base: "100%", md: "auto" }}
              >
                Book a Discovery Call
              </Button>

              <Button
                variant="outline"
                as="a"
                href="https://tally.so/r/BzZKvR"
                borderColor="primaryColor.500"
                color="primaryColor.600"
                w={{ base: "100%", md: "auto" }}
                px={6}
                py={6}
                borderRadius="full"
                _hover={{ bg: "green.50" }}
                fontSize={{ base: "12px", md: "14px" }}
              >
                Run a Payment Performance Diagnostic
              </Button>
            </HStack>
          </Box>

          {/* RIGHT IMAGE */}
          <Box flex="1">
            <Image
              src="/image/switchguardwoman.png" // replace with your actual image
              alt="Hero Image"
              borderRadius="2xl"
              objectFit="cover"
              w="100%"
              h={{ base: "300px", md: "500px" }}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
