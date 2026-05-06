"use client";

import {
  Box,
  Container,
  Text,
  Image,
  HStack,
  VStack,
  Badge,
} from "@chakra-ui/react";
// import FadeBox from "../utils/FadeBox";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

const logos = [
  "/image/Visa.png",
  "/image/Amex.png",
  "/image/Mastercard.png",
  "/image/Unionpay.png",
  "/image/Swappr.png",
  "/image/Budpay.png",
];

export default function SwitchguardPartners() {
  return (
    <Box py={20}>
      {/* <FadeBox> */}
      <Container maxW="6xl" textAlign="center">
        {/* Top Badge */}
        <Badge
          px={6}
          py={2}
          borderRadius="full"
          bgGradient="linear(to-r, orange.400, orange.600)"
          color="white"
          fontSize="14px"
          fontWeight="regular"
          mb={6}
          textTransform={"none"}
        >
          Payment Ecosystems We Operate In
        </Badge>

        {/* Heading */}
        <Text
          fontSize={{ base: "18px", md: "32px", lg: "32px" }}
          fontWeight="medium"
          color="gray.600"
          lineHeight="shorter"
          letterSpacing={-0.5}
          mb={12}
        >
          Trusted expertise across global <br />
          payment ecosystems
        </Text>

        {/* Logos Row */}
        <Box overflow="hidden" w="full" py={6}>
          <MotionBox
            display="flex"
            w="max-content"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((src, index) => (
              <HStack key={index} spacing={{ base: 6, md: 10 }} px={4}>
                <Image
                  src={src}
                  alt="logo"
                  h={{ base: "20px", md: "40px" }}
                  objectFit="contain"
                />
              </HStack>
            ))}
          </MotionBox>
        </Box>
        {/* LOGO SLIDER ENDS */}

        {/* Bottom Text */}
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          color="primaryColor.700"
          fontStyle="italic"
          fontWeight="semibold"
        >
          15+ years of hands-on experience across these schemes, rails, and
          corridors.
        </Text>
      </Container>
      {/* </FadeBox> */}
    </Box>
  );
}
