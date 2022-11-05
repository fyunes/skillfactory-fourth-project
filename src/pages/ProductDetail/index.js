import ItemDetailContainer from "../../components/ItemDetailContainer";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <>
      <ItemDetailContainer id={id} />
    </>
  );
};

export default ProductDetail;
