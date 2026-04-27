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
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Resources", href: "/resources" },
    { name: "Meet The Founder", href: "/founder" },
    { name: "Contact", href: "/contact" },
  ];

  const year = new Date().getFullYear();
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <Box bg="#ffffff" pt={{ base: 10, md: 12 }} pb={6}>
      <Container maxW="7xl">
        {/* TOP SECTION */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align={"center"}
          justify="space-between"
          gap={{ base: 8, md: 4 }}
          mb={{ base: 8, md: 10 }}
        >
          {/* LOGO */}
          <Image src="/image/switchguardlogo.png" alt="Switchguard" h="40px" />

          {/* NAV */}
          <HStack
            spacing={{ base: 5, md: 8 }}
            flexWrap="wrap"
            justify="center"
            color="gray.600"
            fontSize="16px"
            align={{ base: "left", md: "center" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                as={NextLink}
                href={link.href}
                position="relative"
                fontWeight={isActive(link.href) ? "semibold" : "medium"}
                color={isActive(link.href) ? "primaryColor.700" : "gray.700"}
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
          <HStack spacing={4} justify="center">
            {/* Instagram */}
            <Icon viewBox="0 0 24 24" boxSize={6} color="#6b8e23">
              <FaInstagram />
            </Icon>

            {/* Facebook */}
            <Icon viewBox="0 0 24 24" boxSize={6} color="#6b8e23">
              <FaFacebook />
            </Icon>

            {/* X */}
            <Icon viewBox="0 0 24 24" boxSize={6} color="#6b8e23">
              <FaTwitter />
            </Icon>
          </HStack>
        </Flex>

        {/* DIVIDER */}
        <Box borderTop="1px solid" borderColor="#e2e8f0" mb={6} />

        {/* COPYRIGHT */}
        <Text textAlign="center" color="gray.500" fontSize="sm">
          © {year} Switchguard. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
