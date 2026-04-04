import {
  Box,
  Container,
  Text,
  Image,
  HStack,
  VStack,
  Badge,
} from "@chakra-ui/react";

export default function SwitchguardPartners() {
  return (
    <Box py={20}>
      <Container maxW="6xl" textAlign="center">
        {/* Top Badge */}
        <Badge
          px={6}
          py={2}
          borderRadius="full"
          bgGradient="linear(to-r, orange.400, orange.600)"
          color="white"
          fontSize="12px"
          fontWeight="regular"
          mb={6}
        >
          Companies We've Worked With
        </Badge>

        {/* Heading */}
        <Text
          fontSize={{ base: "2xl", md: "4xl", lg: "32px" }}
          fontWeight="medium"
          color="gray.600"
          lineHeight="shorter"
          mb={12}
        >
          Trusted expertise across global <br />
          payment ecosystems
        </Text>

        {/* Logos Row */}
        <HStack
          spacing={{ base: 6, md: 10 }}
          justify="center"
          flexWrap="wrap"
          mb={6}
        >
          <Image
            src="/image/visa.png"
            alt="Visa"
            h="40px"
            objectFit="contain"
          />
          <Image
            src="/image/Amex.png"
            alt="American Express"
            w="180px"
            objectFit="contain"
          />
          <Image
            src="/image/mastercard.png"
            alt="Mastercard"
            w="180px"
            objectFit="contain"
          />
          <Image
            src="/image/unionpay.png"
            alt="UnionPay"
            w="180px"
            objectFit="contain"
          />
        </HStack>

        {/* Bottom Text */}
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          color="primaryColor.700"
          fontStyle="italic"
          fontWeight="semibold"
        >
          15+ years across Africa–Europe payment corridors
        </Text>
      </Container>
    </Box>
  );
}
