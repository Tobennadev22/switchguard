"use client";

import { Box, Container, Flex, Text, Image, VStack } from "@chakra-ui/react";
import PortfolioSection from "./PortfolioSection";

export default function Founder() {
  return (
    <Box bg="#0b1623" py={{ base: 12, md: 20 }}>
      <Container maxW="7xl">
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          gap={{ base: 10, lg: 16 }}
        >
          {/* IMAGE CARD */}
          <Box
            flex="1"
            borderRadius="2xl"
            p="6px"
            bg="linear-gradient(135deg, #1f3b1f, #0b1623)"
          >
            <Box bg="#f2f2f2" borderRadius="xl" overflow="hidden">
              <Image
                src="/image/founder.png" // replace with your image
                alt="Founder"
                w="100%"
                h={{ base: "300px", md: "100%" }}
                objectFit="cover"
              />
            </Box>
          </Box>

          {/* TEXT CONTENT */}
          <VStack flex="1" align="start" spacing={6}>
            {/* TAG */}
            <Box
              px={4}
              py={1}
              bg="orange.400"
              color="white"
              borderRadius="full"
              fontSize="sm"
            >
              Meet The Founder
            </Box>

            {/* NAME */}
            <Text
              fontSize={{ base: "18px", md: "32px" }}
              fontWeight="medium"
              color="white"
              lineHeight="1.1"
            >
              Temitayo Jeane Aromolaran
            </Text>

            {/* ROLE */}
            <Text color="green.400" fontWeight="semibold" letterSpacing="wide">
              FOUNDER & CHIEF ARCHITECT
            </Text>

            {/* DESCRIPTION */}
            <Text
              color="gray.300"
              fontSize={{ base: "14px", md: "16px" }}
              lineHeight="1.8"
            >
              With over 15 years of forensic experience inside the architectural
              heart of giants like{" "}
              <Text as="span" fontWeight="semibold" color="white">
                GTBank, Access Bank, Kuda, and Intouch
              </Text>
              , Temitayo has seen payment failures from every conceivable angle.
            </Text>

            <Text color="gray.300" lineHeight="1.8">
              Her "Forensic Precision" approach was born from lived
              experience—managing systems that process billions while fighting
              the invisible frictions that drain revenue. At SwitchGuard, she
              brings this insider expertise to scaling fintechs, providing the
              deep technical clarity that generic consultants lack.
            </Text>

            {/* DIVIDER */}
            <Box w="100%" h="1px" bg="gray.700" mt={4} />
          </VStack>
        </Flex>
      </Container>
      <PortfolioSection />
    </Box>
  );
}
