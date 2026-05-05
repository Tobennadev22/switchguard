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
              FOUNDER, SWITCHGUARD ADVISORY
            </Text>

            {/* DESCRIPTION */}
            {/* <Text
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
            </Text> */}

            <Text
              color="gray.300"
              lineHeight="1.8"
              fontSize={{ base: "12px", md: "14px" }}
            >
              Temitayo Jeane Aromolaran is a payment infrastructure specialist
              with over 15 years of hands-on experience building, fixing, and
              optimising payment systems across African and European corridors.
              She has operated at the intersection of engineering and commercial
              outcomes at institutions including GTBank, Access Bank, Kuda,
              Intouch, BudPay, Fast Credit, and Simplify Synergy across cards,
              bank transfers, USSD, mobile money, and POS. Her work has spanned
              Nigeria, Ghana, Kenya, and European markets. SwitchGuard Advisory
              exists because most payment failures are preventable and most
              teams do not have the time, tools, or institutional knowledge to
              prevent them. Temitayo built SwitchGuard to change that: to give
              scaling fintechs access to forensic payment expertise that finds
              the revenue they are losing silently, and builds the
              infrastructure that keeps them from losing it again. She is based
              in the UK and works with clients across Africa and Europe.
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
