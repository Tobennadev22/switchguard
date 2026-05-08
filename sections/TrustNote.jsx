import { Box, Text } from "@chakra-ui/react";

function TrustNote() {
  return (
    <Box
      py={{ base: "12px", md: "32px" }}
      px={{ base: 4, md: 0 }}
      mx="auto"
      textAlign="center"
      bg="linear-gradient( 184.1deg,  rgba(249,255,182,1) 44.7%, rgba(226,255,172,1) 67.2% )"
      fontSize={{ base: "12px", md: "16px" }}
      fontWeight="semibold"
      color="primaryColor.800"
      maxW="7xl"
    >
      <Text>
        Founded by a payments professional with 15+ years across GTBank, Access
        Bank, Kuda, Intouch, BudPay, Fast Credit, and Simplify Synergy.
      </Text>
    </Box>
  );
}

export default TrustNote;
