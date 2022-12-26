import React, { useContext } from 'react';
import Head from 'next/head';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';
import AppContext from '@context/AppContext';
const Checkout = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  // Calculate the number of items in the cart
  const count = state.cart.length;

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>Checkout</h1>
          <div className={styles['Checkout-content']}>
            {state.cart.map((product) => (
              <OrderItem product={product} key={`orderItem-${product.id}`} />
            ))}
            <div className={styles.order}>
              <p>
                <span>Total</span>
                <span>{count} articles </span>
              </p>
              <p>${sumTotal()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
