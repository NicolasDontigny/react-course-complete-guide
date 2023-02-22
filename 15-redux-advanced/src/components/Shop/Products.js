import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS = [
  {
    id: '1',
    title: 'Survivor',
    price: 6,
    description: 'Best TV reality show ever!',
  },
  {
    id: '2',
    title: 'Lost',
    price: 7,
    description: "I'll see you in another life, brother!",
  },
];

const productItems = PRODUCTS.map((product) => (
  <ProductItem
    key={product.id}
    id={product.id}
    title={product.title}
    price={product.price}
    description={product.description}
  />
));

const Products = (_props) => (
  <section className={classes.products}>
    <h2>Buy your favorite products</h2>
    <ul>{productItems}</ul>
  </section>
);

export default Products;
