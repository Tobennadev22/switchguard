"use client";

import { Box, Flex, Text, Heading, Button, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionFlex = motion.create(Flex);

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
      <VStack spacing={6} textAlign="center">
        <Box
          bgGradient="linear(to-r, orange.400, orange.600)"
          px={4}
          py={1}
          borderRadius="full"
          fontSize="sm"
        >
          The Problem
        </Box>

        <Heading fontSize="32px" maxW="800px" fontWeight="medium">
          Your Payment System Is Losing Revenue
        </Heading>

        <Text color="gray.400">
          These are not technical issues. They are revenue problems.
        </Text>
      </VStack>

      {/* Slider */}
      <Box mt={12} overflow="hidden">
        <MotionFlex
          drag="x"
          dragConstraints={{ left: -800, right: 0 }}
          gap={6}
          cursor="grab"
        >
          {cards.map((card, i) => (
            <Box
              key={i}
              minW="300px"
              bg="white"
              color="gray.800"
              p={2}
              borderRadius="xl"
              boxShadow="lg"
            >
              <Image
                src={card.name}
                alt={card.title}
                width={450}
                height={150}
              />

              {/* {card.change && (
                <Text color={card.color} fontSize="sm">
                  {card.change}
                </Text>
              )} */}

              <Box
                // mt={4}
                h="20px"
                // bg={card.color}
                borderRadius="md"
                opacity={0.2}
              />

              <Text fontSize="sm" color="gray.600">
                {card.description}
              </Text>
            </Box>
          ))}
        </MotionFlex>
      </Box>

      {/* CTA */}
      <Flex justify="center" mt={12}>
        <Button bg="white" color="primaryColor.700" px={8} borderRadius="full">
          Book a Call
        </Button>
      </Flex>
    </Box>
  );
}
