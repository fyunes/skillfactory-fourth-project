import { useParams } from "react-router-dom";
import ItemListContainer from "../../components/ItemListContainer";

const Products = () => {
  const { category } = useParams();
  return <ItemListContainer category={category}/>;
};

export default Products;
