import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams();

  console.log('params: ', params);

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <Link
        to='..'
        // Relative to the current path, instead of the Routes hierarchy
        // Relative to route by default
        relative='path'
      >
        Back
      </Link>
    </>
  );
};

export default ProductDetails;
