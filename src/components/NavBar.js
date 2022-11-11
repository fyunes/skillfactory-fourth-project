import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { Link as RouterLink } from "react-router-dom";
import { Flex, useDisclosure, Link, Text, Icon } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BiHomeCircle, BiMap, BiChevronDown } from "react-icons/bi";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      className="NavBar"
      color="gray.600"
      w="100%"
      h="100%"
      px={5}
      direction={"column"}
      alignItems="center"
      boxShadow="base"
    >
      {/* *********************** */}
      <Flex className="row1" flexDirection="row" w="100%" maxW="1200px" h="70%">
        <Flex
          className="logo-container"
          w={{ base: "30%", md: "25%" }}
          justifyContent="left"
          alignItems="center"
        >
          <Logo />
        </Flex>

        <Flex
          className="search-container"
          w="55%"
          justify="center"
          alignItems="center"
        >
          <SearchBar />
        </Flex>

        <CartWidget />
      </Flex>
      {/* ********************** */}
      <Flex
        className="row2"
        w="100%"
        maxW="1200px"
        h="30%"
        position="relative"
        dir="row"
      >
        <Flex
          className="location-burger"
          w={{ base: "100%", md: "30%", lg: "25%" }}
          h="100%"
          position="relative"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Flex w={{ base: "70%", md: "100%" }}>
            <Icon as={BiMap} w="18px" h="18px" color="gray.500" />
            <Text fontSize={{ base: ".8em", lg: "1em" }} color="gray.500">
              Capital Federal
            </Text>
            <Icon
              as={BiChevronDown}
              w="20px"
              h="20px"
              marginLeft={{ base: "5px", md: "15px" }}
              color="gray.500"
            />
          </Flex>
          <Flex w={{ base: "30%" }} justifyContent="flex-end">
            {isOpen ? (
              <CloseIcon
                onClick={isOpen ? onClose : onOpen}
                display={{ base: "inline", md: "none" }}
              />
            ) : (
              <HamburgerIcon
                w="20px"
                h="20px"
                onClick={isOpen ? onClose : onOpen}
                display={{ base: "inline", md: "none" }}
              />
            )}
          </Flex>
        </Flex>

        <Flex
          className="home-menu-login"
          w={{ base: "100%", md: "70%", lg: "75%" }}
          h={{ base: "auto", md: "100%" }}
          py={{ base: "3", md: "0" }}
          color={{ base: "white", md: "gray.600" }}
          bg={{ base: "gray.600", md: "white" }}
          borderRadius={5}
          top={{ base: "8", md: "0" }}
          zIndex="10"
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          position={{ base: "absolute", md: "relative" }}
          flexDir={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-start" }}
          right={{ base: "0" }}
        >
          <Flex
            className="home-menu"
            w={{ base: "100%", md: "60%", lg: "70%" }}
            flexDir={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Link
              className="home"
              w={{ base: "100%", md: "30%" }}
              py={{ base: "1", md: "0" }}
              display="flex"
              flexDir="row"
              alignItems="center"
              justifyContent={{ base: "center", md: "flex-start" }}
              style={{ textDecoration: "none" }}
              as={RouterLink}
              to="/"
              _hover={{
                color: { base: "teal.200", md: "blue.shop" },
                bg: { base: "whiteAlpha.200", md: "white" },
              }}
              _active={{
                color: { base: "teal.500", md: "blue.shop" },
                bg: { base: "gray.700", md: "white" },
              }}
            >
              <Icon
                as={BiHomeCircle}
                w="18px"
                h="18px"
                marginRight="5px"
                display={{ base: "none", md: "inline" }}
              />
              <Text>Home</Text>
            </Link>
            <Flex
              className="menu"
              w={{ base: "100%", md: "70%" }}
              h={{ base: "60%", md: "100%" }}
              gap={{ base: "0", md: "4" }}
              flexDir={{ base: "column", md: "row" }}
              ml={{ md: "5rem" }}
              alignItems="center"
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <Link
                className="women"
                w={{ base: "100%", md: "auto" }}
                py={{ base: "1", md: "0" }}
                style={{ textDecoration: "none" }}
                as={RouterLink}
                to="/category/women"
                _hover={{
                  color: { base: "teal.200", md: "blue.shop" },
                  bg: { base: "whiteAlpha.200", md: "white" },
                }}
                _active={{
                  color: { base: "teal.500", md: "blue.shop" },
                  bg: { base: "gray.700", md: "white" },
                }}
              >
                <Text textAlign="center">Women</Text>
              </Link>
              <Link
                className="men"
                w={{ base: "100%", md: "auto" }}
                py={{ base: "1", md: "0" }}
                style={{ textDecoration: "none" }}
                as={RouterLink}
                to="/category/men"
                _hover={{
                  color: { base: "teal.200", md: "blue.shop" },
                  bg: { base: "whiteAlpha.200", md: "white" },
                }}
                _active={{
                  color: { base: "teal.500", md: "blue.shop" },
                  bg: { base: "gray.700", md: "white" },
                }}
              >
                <Text textAlign="center">Men</Text>
              </Link>
              <Link
                className="kids"
                w={{ base: "100%", md: "auto" }}
                py={{ base: "1", md: "0" }}
                alignItems="center"
                style={{ textDecoration: "none" }}
                as={RouterLink}
                to="/category/kids"
                _hover={{
                  color: { base: "teal.200", md: "blue.shop" },
                  bg: { base: "whiteAlpha.200", md: "white" },
                }}
                _active={{
                  color: { base: "teal.500", md: "blue.shop" },
                  bg: { base: "gray.700", md: "white" },
                }}
              >
                <Text textAlign="center">Kids</Text>
              </Link>
            </Flex>
          </Flex>
          <Flex
            className="login"
            w={{ base: "100%", md: "40%", lg: "30%" }}
            h={{ base: "40%", md: "100%" }}
            gap={{ base: "0", md: "4" }}
            flexDir={{ base: "column", md: "row" }}
            justifyContent={{ base: "center", md: "flex-end" }}
            alignItems="center"
          >
            <Link
              className="login"
              w={{ base: "100%", md: "auto" }}
              py={{ base: "1", md: "0" }}
              alignItems="center"
              style={{ textDecoration: "none" }}
              as={RouterLink}
              to="/"
              _hover={{
                color: { base: "teal.200", md: "blue.shop" },
                bg: { base: "whiteAlpha.200", md: "white" },
              }}
              _active={{
                color: { base: "teal.500", md: "blue.shop" },
                bg: { base: "gray.700", md: "white" },
              }}
            >
              <Text textAlign="center">Login</Text>
            </Link>
            <Link
              className="sign-up"
              w={{ base: "100%", md: "auto" }}
              py={{ base: "1", md: "0" }}
              alignItems="center"
              style={{ textDecoration: "none" }}
              as={RouterLink}
              to="/"
              _hover={{
                color: { base: "teal.200", md: "blue.shop" },
                bg: { base: "whiteAlpha.200", md: "white" },
              }}
              _active={{
                color: { base: "teal.500", md: "blue.shop" },
                bg: { base: "gray.700", md: "white" },
              }}
            >
              <Text textAlign="center">Sign Up</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
