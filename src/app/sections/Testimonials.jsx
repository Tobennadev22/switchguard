"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
  SimpleGrid,
} from "@chakra-ui/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Impressed by the professionalism and attention to detail.",
    name: "Guy Hawkins",
    handle: "@guyhawkins",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "A seamless experience from start to finish. Highly recommend!",
    name: "Karla Lynn",
    handle: "@karlalynn98",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Reliable and trustworthy. Made my life so much easier!",
    name: "Jane Cooper",
    handle: "@janecooper",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  return (
    <Box bg="#f9f9f9" py={{ base: 12, md: 20 }}>
      <Container maxW="6xl">
        <VStack spacing={12}>
          {/* Header */}
          <VStack spacing={3} textAlign="center">
            <Text fontSize="sm" color="gray.500">
              Testimonial
            </Text>
            <Heading
              fontSize={{ base: "18px", md: "32px", lg: "32px" }}
              fontWeight="medium"
              color="gray.600"
              lineHeight="shorter"
              mb={6}
            >
              What our clients say
            </Heading>
          </VStack>

          {/* Cards */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {testimonials.map((item, index) => (
              <Box
                key={index}
                bg="white"
                p={6}
                borderRadius="2xl"
                position="relative"
                minH="200px"
              >
                {/* Quote Icon */}
                <Quote
                  size={28}
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    opacity: 0.2,
                  }}
                />

                {/* Text */}
                <Text mt={10} fontSize="md" color="gray.700" lineHeight="1.6">
                  {item.text}
                </Text>

                {/* User */}
                <HStack mt={8} spacing={3}>
                  <Avatar size="sm" src={item.avatar} />
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm">
                      {item.name}
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      {item.handle}
                    </Text>
                  </Box>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* Dots Indicator */}
          <HStack spacing={2}>
            <Box w="20px" h="2px" bg="black" borderRadius="full" />
            <Box w="6px" h="2px" bg="gray.300" borderRadius="full" />
            <Box w="6px" h="2px" bg="gray.300" borderRadius="full" />
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
