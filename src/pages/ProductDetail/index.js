import ItemDetailContainer from "../../components/ItemDetailContainer";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <>
      <h1>{id}</h1>
      <ItemDetailContainer />
    </>
  );
};

export default ProductDetail;
