import { Link } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";
import HomeCarousel from "../../components/HomeCarousel";
import Slidedata from "../../components/Slidedata";

const Home = () => {
  return (
    <div>
      <Box mb={5} px={100}>
        <HomeCarousel slides={Slidedata} />
      </Box>
      <h1>Home</h1>
      <Link to="/products">
        <Button>Products</Button>
      </Link>
    </div>
  );
};

export default Home;
  