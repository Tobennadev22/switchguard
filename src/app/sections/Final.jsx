"use client";

import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Button,
  VStack,
  Flex,
} from "@chakra-ui/react";

export default function CTASection() {
  return (
    <Box bg="#f5f5f3" py={16}>
      <Container maxW="7xl">
        <Box
          bg="#2f4a13"
          borderRadius="2xl"
          px={{ base: 6, md: 12 }}
          py={{ base: 10, md: 16 }}
          color="white"
        >
          <Grid
            templateColumns={{ base: "1fr", md: "1.2fr 1fr" }}
            alignItems="center"
            gap={10}
          >
            {/* LEFT CONTENT */}
            <VStack align="start" spacing={6} maxW="520px">
              <Heading fontSize={{ base: "18px", md: "32px" }} lineHeight="1.2">
                Every Failed Transaction Is Lost Revenue
              </Heading>

              <Text
                color="whiteAlpha.800"
                fontSize={{ base: "12px", md: "16px" }}
              >
                If your system processes thousands of transactions daily, even
                small inefficiencies compound quickly.
              </Text>

              <Text
                color="whiteAlpha.800"
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight="medium"
              >
                Let’s quantify — and recover — what you’re losing.
              </Text>

              <Button
                bg="#e7eadf"
                color="#5a7d1a"
                px={8}
                py={6}
                borderRadius="full"
                fontWeight="medium"
                _hover={{ bg: "#dfe5d3" }}
              >
                Book a Diagnostic Call
              </Button>
            </VStack>

            {/* RIGHT ILLUSTRATION */}
            <Flex
              justify={{ base: "center", md: "flex-end" }}
              align="center"
              position="relative"
              h="200px"
            >
              {/* Green Gear */}
              <Box
                position="absolute"
                right="120px"
                top="10px"
                w="120px"
                h="120px"
                bg="#e7eadf"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="50px"
                color="#5a7d1a"
              >
                $
              </Box>

              {/* Red Gear */}
              <Box
                position="absolute"
                right="0"
                bottom="0"
                w="110px"
                h="110px"
                bg="#f1dada"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="40px"
                color="#e05353"
              >
                ✕
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
