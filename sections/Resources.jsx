"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Divider,
  Icon,
  Button,
  Flex,
} from "@chakra-ui/react";
import { BarChart3, Database, BookOpen } from "lucide-react";
import FadeBox from "../src/app/utils/FadeBox";

const resources = [
  {
    id: "01",
    status: "AVAILABLE NOW",
    type: "PDF Checklist",
    title: "20-Point Infrastructure Checklist",
    desc: "A practical checklist for auditing infrastructure health, latency bottlenecks, and redundant failover paths.",
    link: "https://payhip.com/b/JngK0",
  },
  {
    id: "02",
    status: "AVAILABLE NOW",
    type: "Digital PDF",
    title: "Querying Revenue: The SQL Library",
    desc: "Production-ready SQL queries for failure analysis, multi-currency reconciliation, and automated regulatory reporting.",
    link: "https://payhip.com/b/XTh8G",
  },
  {
    id: "03",
    status: "AVAILABLE NOW",
    type: "E-Book / Course",
    title: "Payment Resilience Playbook",
    desc: "The definitive guide for fintech leaders on building high-performance systems capable of 99.999% uptime in volatile markets.",
    link: "https://payhip.com/b/B34C9",
  },
  {
    id: "04",
    status: "AVAILABLE NOW",
    type: "E-Book / Course",
    title: "The Complete Resilience Bundle",
    desc: "The definitive guide for fintech leaders on building high-performance systems capable of 99.999% uptime in volatile markets.",
    link: "https://payhip.com/b/dWIyz",
  },
];

export default function PaymentToolsPage() {
  return (
    <Box bg="#f9f9f9" minH="100vh" py={{ base: 10, md: 14 }}>
      <Container maxW="7xl">
        {/* HERO */}
        <FadeBox>
          <Grid
            templateColumns={{ base: "1fr", lg: "1.4fr 0.8fr" }}
            gap={{ base: 10, lg: 20 }}
            alignItems="start"
          >
            <GridItem>
              <Box
                display="inline-block"
                bgGradient="linear(to-r, orange.400, orange.600)"
                color="white"
                px={4}
                py={1}
                borderRadius="full"
                fontSize="sm"
                mb={6}
                mx={{ base: 9, md: "0" }}
              >
                Forensic Payment Intelligence
              </Box>

              <Heading
                fontSize={{ base: "3xl", md: "48px" }}
                fontWeight="Regular"
                lineHeight="1.2"
                color="gray.600"
                mb={6}
                letterSpacing={-1.4}
                textAlign={{ base: "center", md: "left" }}
              >
                Practical Tools for Payment Teams
              </Heading>

              <Text
                mt={6}
                maxW="620px"
                fontSize={{ base: "1px", md: "16px" }}
                color="gray.600"
                lineHeight="1.6"
              >
                Playbooks, query libraries, and diagnostic tools built from 15
                years inside African and European payment infrastructure.
              </Text>
            </GridItem>

            <GridItem>
              <Box
                bg="primaryColor.100"
                borderRadius="xl"
                p={6}
                mt={{ base: 0, lg: 16 }}
                maxW="360px"
                ml={{ base: 0, lg: "auto" }}
              >
                <Icon as={BarChart3} boxSize={6} color="gray.800" mb={5} />
                <Text
                  fontWeight="700"
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight="1.5"
                  color="gray.700"
                >
                  98.4% Precision rate in production-ready framework deployment.
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </FadeBox>

        {/* SECTION HEADER */}
        <Flex
          mt={{ base: 16, md: 24 }}
          mb={{ base: 10, md: 14 }}
          align="center"
          gap={6}
          direction={{ base: "column", md: "row" }}
        >
          <Heading
            fontSize={{ base: "18px", md: "28px" }}
            fontWeight="700"
            color="gray.700"
            whiteSpace="nowrap"
          >
            The Forensic Collection
          </Heading>

          <Divider borderColor="#ddd8cf" flex="1" />

          <Text
            fontSize="xs"
            letterSpacing="0.25em"
            textTransform="uppercase"
            color="#6b7280"
            whiteSpace="nowrap"
          >
            Selected Resources
          </Text>
        </Flex>

        {/* RESOURCE LIST */}
        <VStack spacing={{ base: 12, md: 16 }} align="stretch">
          {resources.map((item, index) => (
            <Box key={index}>
              <Grid
                templateColumns={{ base: "1fr", md: "70px 1fr 220px" }}
                gap={{ base: 6, md: 10 }}
                alignItems="center"
              >
                {/* Number */}
                <Text
                  fontSize={{ base: "24px", md: "38px" }}
                  color="#b4b4b0"
                  fontWeight="300"
                >
                  {item.id}
                </Text>

                {/* Text */}
                <Box>
                  <FadeBox>
                    <HStack spacing={3} mb={4} flexWrap="wrap">
                      <Badge
                        bg={
                          item.status === "AVAILABLE NOW"
                            ? "#b9e25b"
                            : "#ff678d"
                        }
                        color="#111827"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="10px"
                        fontWeight="700"
                        letterSpacing="0.08em"
                      >
                        {item.status}
                      </Badge>

                      <Text fontSize="sm" color="#6b7280">
                        {item.type}
                      </Text>
                    </HStack>

                    <Heading
                      fontSize={{ base: "18px", md: "32px" }}
                      lineHeight="1.15"
                      fontWeight="semibold"
                      color="gray.700"
                      mb={4}
                    >
                      {item.title}
                    </Heading>

                    <Text
                      fontSize={{ base: "14px", md: "16px" }}
                      color="gray.600"
                      lineHeight="1.7"
                      maxW="680px"
                    >
                      {item.desc}
                    </Text>
                  </FadeBox>
                </Box>

                {/* Visual */}
                <Flex justify={{ base: "flex-start", md: "center" }}>
                  {item.status === "AVAILABLE NOW" ? (
                    <Button
                      as="a"
                      href={item.link}
                      bg="primaryColor.500"
                      color="white"
                      _hover={{ bg: "primaryColor.600" }}
                    >
                      Download PDF
                    </Button>
                  ) : (
                    <Flex justify={{ base: "flex-start", md: "center" }}>
                      <Button color="gray.400">Coming Soon</Button>
                    </Flex>
                  )}
                </Flex>
              </Grid>

              {index !== resources.length - 1 && (
                <Divider mt={{ base: 10, md: 14 }} borderColor="#e2ddd5" />
              )}
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}
