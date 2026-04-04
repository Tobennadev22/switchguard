"use client";

import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  SimpleGrid,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const values = [
  {
    title: "Forensic Precision",
    desc: "Every recommendation we make is grounded in data. We dig into transaction logs, identify the real causes of failure, and quantify the impact before we ever suggest a fix.",
    icon: StarIcon,
  },
  {
    title: "Radical Transparency",
    desc: "We tell clients exactly what we find clearly and honestly. No vague reports, no softened findings. Just the full picture, presented in a way that makes action easy.",
    icon: StarIcon,
  },
  {
    title: "Outcome Over Activity",
    desc: "Our work is measured by results—improved success rates, recovered revenue, and infrastructure that holds under pressure. Not by hours logged or documents delivered.",
    icon: StarIcon,
  },
  {
    title: "Deep Expertise, Zero Disruption",
    desc: "We work within your existing infrastructure. No unnecessary rebuilds, no operational risk. Just targeted improvements that make a measurable difference.",
    icon: StarIcon,
  },
  {
    title: "Built for Complexity",
    desc: "Payment infrastructure across African and European corridors is rarely straightforward. We operate comfortably in that complexity across fragmented rails and high-stakes environments.",
    icon: StarIcon,
  },
];

export default function CoreValues() {
  return (
    <Box bg="#f1f4f8" py={{ base: 12, md: 20 }} px={{ base: 4, md: 10 }}>
      {/* Header */}
      <Box width={{ base: "100%", md: "1140px" }} mx="auto">
        <VStack spacing={4} textAlign="center" mb={12}>
          <Box
            bgGradient="linear(to-r, orange.400, orange.600)"
            color="white"
            px={5}
            py={1}
            borderRadius="full"
            fontSize="sm"
          >
            Why We Stand Out
          </Box>

          <Heading
            fontWeight="medium"
            fontSize={{ base: "24px", md: "32px" }}
            color="gray.700"
          >
            Core Values
          </Heading>

          {/* <Text maxW="600px" color="gray.600">
          Lorem ipsum dolor sit amet consectetur. amet consectetur. sit amet
          consectetur. amet consectetur.Lorem ipsum doloamet consectetur.
        </Text> */}

          <Button
            mt={2}
            bg="primaryColor.700"
            color="white"
            borderRadius="full"
            px={6}
            _hover={{ bg: "primaryColor.500" }}
          >
            Book a Call
          </Button>
        </VStack>

        {/* Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={16}>
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <Box
                key={index}
                bg="white"
                p={6}
                borderRadius="xl"
                boxShadow="sm"
              >
                <Icon size={24} color="#6B8E23" />

                <Heading
                  fontSize={{ base: "14px", md: "18px" }}
                  fontWeight="semibold"
                  mt={4}
                  mb={2}
                  color="gray.800"
                >
                  {item.title}
                </Heading>

                <Text fontSize={{ base: "12px", md: "14px" }} color="gray.600">
                  {item.desc}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>

        {/* Vision & Mission */}
        <Box bg="white" borderRadius="2xl" p={{ base: 6, md: 12 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={10}
          >
            {/* Vision */}
            <Box flex="1">
              <Heading
                fontWeight="medium"
                fontSize={{ base: "18px", md: "32px" }}
                mb={4}
              >
                Our Vision
              </Heading>
              <Text fontSize={{ base: "12px", md: "14px" }} color="gray.600">
                To become the leading payment performance infrastructure layer
                across Africa and Europe.
              </Text>
            </Box>

            {/* Divider */}
            <Divider
              orientation={{ base: "horizontal", md: "vertical" }}
              height={{ md: "100px" }}
              borderColor="orange.900"
            />

            {/* Mission */}
            <Box flex="1">
              <Heading
                fontWeight="medium"
                fontSize={{ base: "18px", md: "32px" }}
                mb={4}
              >
                Our Mission
              </Heading>
              <Text fontSize={{ base: "12px", md: "14px" }} color="gray.600">
                To increase transaction success rates and recover lost revenue
                by optimising payment performance across infrastructure layers.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
