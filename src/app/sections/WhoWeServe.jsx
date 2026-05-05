"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  Icon,
} from "@chakra-ui/react";
import {
  CreditCard,
  Landmark,
  Smartphone,
  FileText,
  Wallet,
} from "lucide-react";

const Tag = ({ children }) => (
  <Badge
    px={3}
    py={1}
    borderRadius="full"
    bg="gray.100"
    color="gray.600"
    fontSize="xs"
    fontWeight="medium"
  >
    {children}
  </Badge>
);

const Card = ({ icon, title, description, tags, color }) => (
  <Box
    p={6}
    bg="white"
    borderRadius="2xl"
    border="1px solid"
    borderColor="gray.100"
    // _hover={{ shadow: "md", transform: "translateY(-4px)" }}
    // transition="all 0.3s"
  >
    <VStack align="start" spacing={4}>
      <Box
        // borderRadius="100px"
        // bg={color}
        // width={12}
        // height={12}
        color="primaryColor.500"
      >
        <Icon
          as={icon}
          boxSize={6}
          display="flex"
          gap="0.25em"
          justifyContent="center"
          alignItems="center"
        />
      </Box>

      <Heading fontSize="lg">{title}</Heading>

      <Text color="gray.600" fontSize="14px">
        {description}
      </Text>

      <HStack spacing={2} flexWrap="wrap">
        {tags.map((tag) => (
          <Tag bg="primaryColor.300" key={tag}>
            {tag}
          </Tag>
        ))}
      </HStack>
    </VStack>
  </Box>
);

export default function PaymentRailsSection() {
  return (
    <Box bg="#f7f9fb" py={{ base: 12, md: 20 }}>
      <Container maxW="7xl">
        {/* HEADER */}
        <VStack align="start" spacing={2} mb={12}>
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
            Who We Serve
          </Box>
          <Heading
            fontSize={{ base: "18px", md: "32px", lg: "32px" }}
            fontWeight="medium"
            color="gray.600"
            lineHeight="shorter"
            mb={6}
          >
            Built for Fintechs That Are Scaling
          </Heading>
          <Text
            color="gray.600"
            fontSize={{ base: "14px", md: "16px" }}
            maxW="2xl"
          >
            We work with mid-size and scaling fintechs operating across African
            and European payment corridors for teams handling increasing
            transaction volumes who can no longer afford the hidden cost of
            unexplained failures.
          </Text>
        </VStack>

        {/* GRID */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {/* Cards */}
          <Card
            icon={CreditCard}
            title="Cards"
            description="Domestic & cross-border processing with optimized interchange routing."
            tags={["VISA", "MASTERCARD"]}
            color="primaryColor.50"
          />

          <Card
            icon={Landmark}
            title="Bank Transfers"
            description="Real-time settlement across SEPA, SWIFT, and local African clearing houses."
            tags={["DIRECT DEBIT", "INSTANT PAY"]}
            color="primaryColor.50"
          />

          <Card
            icon={Smartphone}
            title="USSD"
            description="Reach underbanked regions via high-availability telco gateway integrations."
            tags={["OFFLINE ACCESS"]}
            color="primaryColor.50"
          />

          <Card
            icon={FileText}
            title="Purchase Orders (POs)"
            description="B2B invoice automation and PO financing synchronization for scaling startups."
            tags={["B2B WORKFLOW"]}
            color="primaryColor.50"
          />

          {/* FEATURED CARD */}
          <Box
            gridColumn={{ base: "span 1", lg: "span 2" }}
            p={8}
            bg="white"
            borderRadius="2xl"
            border="1px solid"
            borderColor="gray.100"
            // _hover={{ shadow: "md" }}
          >
            <HStack align="start" spacing={6}>
              <Box
                p={4}
                bg="lime.400"
                borderRadius="xl"
                color="primaryColor.500"
              >
                <Wallet size={28} />
              </Box>

              <VStack align="start" spacing={3}>
                <HStack>
                  <Heading fontSize={{ base: "14px", md: "20px" }}>
                    Alternative Payment Rails
                  </Heading>
                  <Badge bg="gray.100" color="gray.600" fontSize="xs">
                    GROWTH SECTOR
                  </Badge>
                </HStack>

                <Text color="gray.600" fontSize={{ base: "12px", md: "14px" }}>
                  Deep support for Mobile Money, Digital Wallets, and dynamic QR
                  systems. We bridge the gap between traditional banking and the
                  next billion users.
                </Text>

                <HStack spacing={2} flexWrap="wrap">
                  <Tag>QR DYNAMIC</Tag>
                  <Tag>MOBILE WALLETS</Tag>
                  <Tag>CRYPTO-FIAT</Tag>
                </HStack>
              </VStack>
            </HStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
