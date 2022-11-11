import { useParams } from "react-router-dom";
import ItemListContainer from "../../components/ItemListContainer";

const Products = () => {
  const { category } = useParams();
  console.log("category?", category);
  console.log('useparams', useParams())
  return <ItemListContainer category={category}/>;
};

export default Products;
