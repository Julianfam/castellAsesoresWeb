import React ,  { useState , useContext }  from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import iconFlechita from '@icons/flechita.svg';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
	const { state } = useContext(AppContext);
	const [toggle,setToggle] = useState(true);
	const handleToggle  = () => {
		setToggle(!toggle);
	};
	const sumTotal = ( ) => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

  	return (
   		 <aside className={styles.MyOrder}>
			<div className={styles['title-container']}>
				<Image src= {iconFlechita} alt="arrow" onClick={handleToggle}/>
				<p className="title">My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{state.cart.map(product  => (
					<OrderItem product={product} key={`orderItem-${product.id}`} /> 
				))}			
				
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<Link className={styles['primary-button']} href="/checkout" >Checkout</Link>
			</div>
		</aside>
  );
};

export default MyOrder;