"use client";

import { Box, Flex, Text, Heading, Button, VStack } from "@chakra-ui/react";
import Image from "next/image";
import FadeBox from "../utils/FadeBox";

const cards = [
  {
    title: "Failed Transactions",
    value: "$489k",
    change: "-7.69%",
    color: "red.400",
    name: "/image/Chart-1.png",
    description: "10–30% of transactions fail across most systems",
  },
  {
    title: "Transaction Recovery",
    value: "$325k",
    change: "+18.34%",
    color: "green.400",
    name: "/image/Chart-2.png",
    description: "Failed transactions are rarely retried or recovered",
  },
  {
    title: "Yearly Income",
    value: "$54,000",
    change: "",
    color: "orange.400",
    name: "/image/Chart-3.png",
    description: "Settlement mismatches go undetected",
  },
  {
    title: "Transferred Fund",
    value: "34%",
    change: "",
    color: "orange.400",
    name: "/image/Chart-4.png",
    description: "Routing decisions are often inefficient",
  },
];

export default function PaymentProblemSection() {
  return (
    <Box bg="#0f172a" py={20} px={6} color="white">
      <FadeBox>
        <VStack
          spacing={6}
          textAlign="center"
          mx={{ base: "auto", md: "180px" }}
        >
          <Box
            bgGradient="linear(to-r, orange.400, orange.600)"
            px={4}
            py={1}
            borderRadius="full"
            fontSize="sm"
          >
            The Problem
          </Box>

          <Heading
            fontSize={{ base: "18px", md: "32px", lg: "32px" }}
            fontWeight="medium"
            color="white"
            lineHeight="shorter"
            mb={4}
            letterSpacing={-0.5}
          >
            The Silent Revenue Leak
          </Heading>

          <Text color="gray.400" fontSize={{ base: "12px", md: "14px" }}>
            Most payment environments lose 10 to 30 percent of transactions to
            routing inefficiencies, poor failure handling, and limited
            visibility into real performance drivers. These losses rarely
            announce themselves. They hide inside transaction logs, surface as
            intermittent downtime, and quietly drain revenue month after month.
          </Text>
        </VStack>

        {/* CTA */}
        <Flex justify="center" mt={12}>
          <Button
            bg="white"
            color="primaryColor.700"
            px={8}
            borderRadius="full"
            as="a"
            href="https://www.calendly.com/switchguard/discovery-call"
          >
            Book a Call
          </Button>
        </Flex>

        <Flex>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Flex>
      </FadeBox>
    </Box>
  );
}
