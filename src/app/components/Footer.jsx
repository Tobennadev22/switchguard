"use client";

import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  Link,
  Image,
  Icon,
} from "@chakra-ui/react";

import NextLink from "next/link";

import { usePathname } from "next/navigation";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  const year = new Date().getFullYear();

  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <Box bg="#ffffff" pt={12} pb={6}>
      {/* <Box
        maxW={{ base: "100%", md: "1140px" }}
        mx={{ base: "8px", md: "auto" }}
      > */}
      <Container maxW="7xl">
        {/* TOP ROW */}
        <Flex align="center" justify="space-between" mb={10}>
          {/* LOGO */}
          <HStack spacing={3}>
            <Image
              src="/image/switchguardlogo.png" // replace with your actual logo
              alt="Switchguard"
              h="40px"
            />
          </HStack>

          {/* NAV */}
          <HStack spacing={8} color="gray.600" fontSize="16px">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                as={NextLink}
                href={link.href}
                cursor="pointer"
                fontWeight={isActive(link.href) ? "semibold" : "medium"}
                color={isActive(link.href) ? "primaryColor.700" : "gray.700"}
                position="relative"
                _hover={{ color: "primaryColor.500" }}
                _after={
                  isActive(link.href)
                    ? {
                        content: '""',
                        position: "absolute",
                        width: "100%",
                        height: "2px",
                        bg: "primaryColor.600",
                        bottom: "-4px",
                        left: 0,
                      }
                    : {}
                }
              >
                {link.name}
              </Link>
            ))}
          </HStack>

          {/* SOCIAL ICONS */}
          <HStack spacing={6}>
            {/* Instagram */}
            <Icon
              viewBox="0 0 24 24"
              boxSize={6}
              color="#6b8e23"
              cursor="pointer"
            >
              <path
                fill="currentColor"
                d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 
                0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 
                2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 
                3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 
                1.3-3 3-3h10zm-5 3a5 5 0 100 
                10 5 5 0 000-10zm0 2a3 3 0 110 
                6 3 3 0 010-6zm4.8-2.3a1.2 1.2 
                0 100 2.4 1.2 1.2 0 000-2.4z"
              />
            </Icon>

            {/* Facebook */}
            <Icon
              viewBox="0 0 24 24"
              boxSize={6}
              color="#6b8e23"
              cursor="pointer"
            >
              <path
                fill="currentColor"
                d="M22 12a10 10 0 10-11.6 9.9v-7H7.9v-2.9h2.5V9.4c0-2.5 
                1.5-3.9 3.8-3.9 1.1 0 2.2.2 
                2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 
                1.5v1.8h2.8l-.4 2.9h-2.4v7A10 
                10 0 0022 12z"
              />
            </Icon>

            {/* X */}
            <Icon
              viewBox="0 0 24 24"
              boxSize={6}
              color="#6b8e23"
              cursor="pointer"
            >
              <path
                fill="currentColor"
                d="M18.9 2H21l-6.5 7.4L22 22h-6.9l-5.4-7.1L3.5 
                22H1.4l7-8-7-12h7l5 6.6L18.9 2zm-2.4 
                18h1.9L7.6 4H5.6l10.9 16z"
              />
            </Icon>
          </HStack>
        </Flex>

        {/* DIVIDER */}
        <Box borderTop="1px solid" borderColor="#ccc" mb={8} />

        {/* COPYRIGHT */}
        <Text textAlign="center" color="gray.500" fontSize="sm">
          © {year} Switchguard. All rights reserved.
        </Text>
      </Container>
      {/* </Box> */}
    </Box>
  );
}
