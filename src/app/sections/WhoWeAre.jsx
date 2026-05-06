"use client";

import {
  Box,
  Container,
  Flex,
  Text,
  Grid,
  Image,
  VStack,
} from "@chakra-ui/react";
import FadeBox from "../utils/FadeBox";

export default function WhoWeAre() {
  return (
    <Box bg="#f7f7f5" py={{ base: 12, md: 20 }}>
      <FadeBox>
        <Container maxW="7xl">
          {/* TOP SECTION */}
          {/* <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          gap={{ base: 10, md: 16 }}
          mb={{ base: 12, md: 16 }}
        > */}
          {/* LEFT */}
          <Box>
            {/* TAG */}
            <Box
              display="inline-block"
              px={4}
              py={1}
              bgGradient="linear(to-r, orange.400, orange.600)"
              color="white"
              borderRadius="full"
              fontSize="sm"
              mb={4}
            >
              Who We Are
            </Box>

            {/* TITLE */}
            <Text
              fontSize={{ base: "18px", md: "32px", lg: "32px" }}
              fontWeight="medium"
              color="gray.600"
              lineHeight="shorter"
              letterSpacing={-0.5}
              mb={12}
            >
              Four Things We Do Exceptionally Well
            </Text>
          </Box>

          {/*         
        </Flex> */}

          {/* CARDS */}
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={8}
            pb
          >
            {/* CARD 1 */}

            <Box
              bg="#0f172a"
              color="white"
              borderRadius="lg"
              p={8}
              display="flex"
              alignItems="center"
            >
              <VStack align="start" spacing={4}>
                {/* ICON */}
                <Box color="green.400" fontSize="24px">
                  ⬢
                </Box>

                <Text fontSize="lg" fontWeight="semibold">
                  Increase transaction success rates
                </Text>
              </VStack>
            </Box>

            {/* CARD 3 */}
            <Box
              bg="primaryColor.50"
              color="white"
              borderRadius="lg"
              p={8}
              display="flex"
              alignItems="center"
            >
              <VStack align="start" spacing={4}>
                {/* ICON */}
                <Box color="green.400" fontSize="24px">
                  ⬢
                </Box>

                <Text fontSize="lg" color="gray.700" fontWeight="semibold">
                  Recover failed transactions
                </Text>
              </VStack>
            </Box>

            {/* CARD 3 */}
            <Box
              bg="primaryColor.50"
              color="gray.700"
              borderRadius="lg"
              p={8}
              display="flex"
              alignItems="center"
            >
              <VStack align="start" spacing={4}>
                {/* ICON */}
                <Box color="green.400" fontSize="24px">
                  ⬢
                </Box>

                <Text fontSize="lg" fontWeight="semibold" color="gray.700">
                  Improve routing and provider performance
                </Text>
                {/* 
              <Text fontSize="sm" color="gray.300">
                Navigating the gap between localized payment rails and global
                standards with architectural rigor.
              </Text> */}
              </VStack>
            </Box>

            {/* CARD 4 */}
            <Box
              bg="primaryColor.50"
              color="gray.700"
              borderRadius="lg"
              p={8}
              display="flex"
              alignItems="center"
            >
              <VStack align="start" spacing={4}>
                {/* ICON */}
                <Box color="green.400" fontSize="24px">
                  ⬢
                </Box>

                <Text fontSize="lg" fontWeight="semibold">
                  Deliver continuous performance optimisation
                </Text>

                {/* <Text fontSize="sm" color="gray.300">
                Navigating the gap between localized payment rails and global
                standards with architectural rigor.
              </Text> */}
              </VStack>
            </Box>
          </Grid>
        </Container>
      </FadeBox>
    </Box>
  );
}
