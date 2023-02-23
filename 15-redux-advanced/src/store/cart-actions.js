import { cartActions } from './cart';
import { uiActions } from './ui';

export const fetchCartData = () => async (dispatch) => {
  const fetchData = async () => {
    const response = await fetch(
      `https://react-course-http-62c89-default-rtdb.europe-west1.firebasedatabase.app/cart.json`
    );

    if (!response.ok) {
      throw new Error('Could not fetch data!');
    }

    const data = await response.json();
    return data;
  };

  try {
    const data = await fetchData();
    dispatch(
      cartActions.setCart({
        items: data.items || [],
      })
    );
  } catch (error) {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed!',
      })
    );
  }
};

// Custom action creator
export const sendCartData = (cart) => async (dispatch) => {
  dispatch(
    uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    })
  );

  const sendRequest = async () => {
    const response = await fetch(
      `https://react-course-http-62c89-default-rtdb.europe-west1.firebasedatabase.app/cart.json`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.items,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Sending cart data failed.');
    }

    const responseData = await response.json();
    return responseData;
  };

  try {
    await sendRequest();

    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sending cart data loaded successfully!',
      })
    );
  } catch (error) {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      })
    );
  }
};
