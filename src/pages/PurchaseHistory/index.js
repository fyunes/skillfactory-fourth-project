import { Box, Button, Image, Heading, Divider, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const PurchaseHistory = () => {
  const cartContext = useContext(CartContext);
  const { clearHistory, purchases } = cartContext;
  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center">
      <Box
        w={{ base: "90%", lg: "25%" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        shadow="lg"
        p={5}
        gap={5}
      >
        <Heading size="lg" as="h1" alignSelf="center">
          Purchase History
        </Heading>
        {purchases.length ? (
          <Button
            onClick={() => {
              clearHistory();
            }}
          >
            Clear History
          </Button>
        ) : null}
        <Divider />
        {purchases !== []
          ? purchases.map((purchase, index) => {
              return (
                <Link to={`/products/${purchase.id}`} key={purchase.id + index}>
                  <Box display="flex" flexDirection="column">
                    {" "}
                    <Box display="flex" alignItems="center" gap={5}>
                      <Box width="70px">
                        <Image
                          objectFit="cover"
                          boxSize="100%"
                          borderRadius={10}
                          src={purchase.image}
                        />
                      </Box>
                      <Box
                        display="flex"
                        gap={7}
                        justifyContent="space-between"
                      >
                        <Text fontWeight="bold">{purchase.title}</Text>
                        <Text fontSize="sm">x {purchase.count}</Text>
                        <Text fontWeight="bold">
                          $ {(purchase.count * purchase.price).toFixed(2)}
                        </Text>
                      </Box>
                    </Box>
                    <Divider />
                  </Box>
                </Link>
              );
            })
          : null}
      </Box>
    </Box>
  );
};

export default PurchaseHistory;
