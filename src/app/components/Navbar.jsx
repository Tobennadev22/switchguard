"use client";

import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Image,
  Spacer,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/servicepage" },
  { name: "Products", href: "/products" },
  { name: "Meet The Founder", href: "/founder" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <Box position="sticky" top="0" zIndex="1000" bg="white" boxShadow="sm">
      <Box
        px={{ base: 4, md: 10 }}
        py={4}
        borderRadius="md"
        // mx={{ base: 2, md: 4 }}
        // mt={4}
      >
        <Flex align="center">
          {/* Logo */}
          <HStack spacing={2}>
            <Image
              src="/image/switchguardlogo.png"
              alt="SwitchGuard Logo"
              width="180px"
            />
          </HStack>

          <Spacer />

          {/* Desktop Nav */}
          <HStack
            spacing={8}
            display={{ base: "none", md: "flex" }}
            fontSize="sm"
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <Text
                  cursor="pointer"
                  fontWeight={isActive(link.href) ? "bold" : "medium"}
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
                </Text>
              </Link>
            ))}
          </HStack>

          <Spacer display={{ base: "none", md: "block" }} />

          {/* CTA */}
          <Button
            display={{ base: "none", md: "inline-flex" }}
            bg="primaryColor.700"
            as="a"
            href="/contact"
            color="white"
            borderRadius="full"
            px={6}
            _hover={{ bg: "primaryColor.500" }}
          >
            Book a Call
          </Button>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="ghost"
            aria-label="Open Menu"
          />
        </Flex>
      </Box>

      {/* Mobile Drawer */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody mt={10}>
            <VStack spacing={6} align="start">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={onClose}>
                  <Text
                    fontSize="lg"
                    fontWeight={isActive(link.href) ? "bold" : "medium"}
                    color={
                      isActive(link.href) ? "primaryColor.700" : "gray.700"
                    }
                  >
                    {link.name}
                  </Text>
                </Link>
              ))}

              <Button
                mt={4}
                as="a"
                href="/contact"
                bg="primaryColor.700"
                color="white"
                fontSize={{ base: "12px", md: "14px" }}
                borderRadius="full"
                w="full"
                _hover={{ bg: "primaryColor.500" }}
              >
                Book a Call
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
