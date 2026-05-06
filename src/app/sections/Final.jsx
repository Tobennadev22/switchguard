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

import Image from "next/image";

export default function CTASection() {
  return (
    <Box bg="#f1f4f8" py={16}>
      <Container maxW="7xl">
        <Box
          bg="radial-gradient( circle farthest-corner at 96.1% 7.2%,  rgba(9,178,62,1) 0%, rgba(19,19,19,1) 100.2% )"
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
              <Heading
                fontSize={{ base: "18px", md: "32px" }}
                lineHeight="1.2"
                fontWeight={"medium"}
                letterSpacing={-0.5}
              >
                Ready to Stop Losing Revenue?
              </Heading>

              <Text
                color="whiteAlpha.800"
                fontSize={{ base: "12px", md: "16px" }}
                letterSpacing={-0.5}
              >
                Book a free 30-minute discovery call. We will tell you exactly
                where to start.
              </Text>

              <Button
                bg="#e7eadf"
                color="#5a7d1a"
                as="a"
                href="https://www.calendly.com/switchguard/discovery-call"
                px={8}
                py={6}
                borderRadius="full"
                fontWeight="medium"
                _hover={{ bg: "#dfe5d3" }}
              >
                Book Your Free Call
              </Button>
            </VStack>

            {/* RIGHT ILLUSTRATION */}
            <Flex
              justify={{ base: "center", md: "flex-end" }}
              align="center"
              position="relative"
              h="200px"
              display={{ base: "none", md: "block" }}
            >
              <Image
                src="/image/moneygear.png"
                alt="switchguard-money-gear"
                width={400}
                height={200}
              />
            </Flex>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
