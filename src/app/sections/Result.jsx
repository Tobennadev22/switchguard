"use client";

import {
  Box,
  Grid,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function Result() {
  const items = [
    "+10–25% increase in success rates",
    "Recovery of failed transactions (3–10%)",
    "Reduced latency across key corridors",
    "Improved provider performance visibility",
    "Measurable revenue recovery",
  ];

  return (
    <Box bg="#f1f4f8" py={20} px={{ base: 6, md: 16 }}>
      <Box width={{ base: "100%", md: "1140px" }} mx="auto">
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={12}
          alignItems="center"
        >
          {/* LEFT CONTENT */}
          <VStack align="start" spacing={6}>
            {/* Badge */}
            <Box
              bgGradient="linear(to-r, orange.400, orange.600)"
              color="white"
              px={5}
              py={1}
              borderRadius="full"
              fontSize="sm"
            >
              Result
            </Box>

            {/* Heading */}
            <Heading
              fontFamily={{ base: "24px", md: "32px" }}
              color="gray.800"
              lineHeight="1.12"
              fontWeight="medium"
            >
              What This Means for Your Business
            </Heading>

            {/* Subtext */}
            <Text color="gray.500" fontSize={{ base: "12px", md: "14px" }}>
              Clients typically achieve:
            </Text>

            {/* List */}
            <VStack align="start" spacing={4}>
              {items.map((item, index) => (
                <HStack key={index} spacing={3} align="start">
                  <Box
                    bg="primaryColor.700"
                    color="white"
                    borderRadius="full"
                    boxSize="20px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mt="3px"
                    fontSize={{ base: "12px", md: "16px" }}
                  >
                    <Icon as={CheckIcon} boxSize={3} />
                  </Box>

                  <Text color="gray.700">{item}</Text>
                </HStack>
              ))}
            </VStack>

            {/* CTA */}
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

          {/* RIGHT IMAGE */}
          <Box>
            <Image
              src="/image/switchguardman.png" // replace with your actual image path
              alt="Business person"
              borderRadius="2xl"
              objectFit="cover"
              w="100%"
              h={{ base: "300px", md: "500px" }}
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
