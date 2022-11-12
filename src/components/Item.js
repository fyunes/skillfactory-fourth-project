import { Box, Text, Image, Divider, Tag } from "@chakra-ui/react";

const Item = ({ product }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      bg="linear-gradient(to top, #f7faff, #f7faff, #f6faff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)"
      pb={2}
      h={{base:'200px', md:"370px"}}
      w={{base: '120px', md:"220px"}}
      gap={2}
      borderRadius={10}
      shadow="md"
      color="gray.600"
      transition=".3s"
      cursor="pointer"
      _hover={{ transform: "scale(1.05)", transition: ".3s", shadow: "xl" }}
    >
      <Box h={{base:'40%', md:"60%"}}>
        <Image
          objectFit="cover"
          boxSize="100%"
          borderRadius={10}
          src={product.image}
        />
      </Box>
      <Divider />
      <Box
        display="flex"
        gap={2}
        flexDirection="column"
        px={{base: 1.5, md: 4}}
        justifyContent="space-between"
      >
        <Text fontWeight="500" fontSize={{base:'.8rem', md:"md"}}>{product.title}</Text>
        <Text fontSize={{base:'.7rem', md:"sm"}}>
          {product.color[0].toUpperCase().concat(product.color.substring(1))}
        </Text>
        <Text fontSize={{base: 'sm', md:"lg"}} fontWeight="600">
          $ {product.price}
        </Text>
        <Tag
          alignSelf="start"
          bg={
            product.category.toLowerCase() === "kids"
              ? "yellow.100"
              : product.category.toLowerCase() === "men"
              ? "blue.100"
              : "purple.100"
          }
          fontSize={{base: '.7rem', md:"sm"}}
          color="black.900"
        >
          {product.category[0]
            .toUpperCase()
            .concat(product.category.substring(1))}
        </Tag>
      </Box>
    </Box>
  );
};

export default Item;
