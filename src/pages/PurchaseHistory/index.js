import { Box, Image, Heading, Divider, Text } from "@chakra-ui/react";
import { useEffect, useCallback, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const PurchaseHistory = () => {
  const [purchases, setPurchases] = useState([]);
  const purchasesCollection = collection(db, "purchases");

  const getPurchases = useCallback(async () => {
    const data = await getDocs(purchasesCollection);
    return data.docs;
  }, [purchasesCollection]);

  useEffect(() => {
    getPurchases()
      .then((data) =>
        data.map((purchase) => ({
          ...purchase.data(),
          purchaseID: purchase.id,
        }))
      )
      .then((history) => setPurchases(history));
  }, [getPurchases]);

  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center">
      <Box
        w={{base: '90%', lg:"25%"}}
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
        <Divider />
        {purchases.map((purchase) => {
          return (
            <Link to={`/products/${purchase.id}`} key={purchase.purchaseID}>
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
                  <Box display="flex" gap={7}>
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
        })}
      </Box>
    </Box>
  );
};

export default PurchaseHistory;
