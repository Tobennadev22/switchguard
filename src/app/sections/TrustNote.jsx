import { Box, Text } from "@chakra-ui/react";

function TrustNote() {
  return (
    <Box
      py={{ base: "12px", md: "32px" }}
      mx="auto"
      textAlign="center"
      bg="primaryColor.50"
      fontSize={{ base: "12px", md: "16px" }}
      fontWeight="semibold"
      color="primaryColor.800"
    >
      <Text>
        Founded by a payments professional with 15+ years across GTBank, Access
        Bank, Kuda, Intouch, BudPay, Fast Credit, and Simplify Synergy.
      </Text>
    </Box>
  );
}

export default TrustNote;
