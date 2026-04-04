import { Box, Button, Text, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold">
        About Page
      </Text>
      <Link colorScheme="teal" href="/" size="lg">
        Hello, World!
      </Link>
    </Box>
  );
}
