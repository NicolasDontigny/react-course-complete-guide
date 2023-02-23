import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('products');
  };

  return (
    <>
      <div>
        <h1>My Home Page</h1>
      </div>
      <p>
        <button onClick={navigateHandler}>Navigate to Products</button>
      </p>
    </>
  );
};

export default HomePage;
