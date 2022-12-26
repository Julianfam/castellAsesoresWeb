import React , {useContext} from 'react';
import Appcontext from '../context/AppContext';
import iconClose from '@icons/001-x-button.png';
import Image from 'next/image';

import styles from '@styles/OrderItem.module.scss';


const OrderItem = ({ product }) => {
	const {removeFromCart } = useContext(Appcontext);
	const handleRemove = product => {
		removeFromCart(product);
	};
		return (
		<div className={styles.OrderItem}>
			<figure>
				<Image src={product?.images[0] }width={240} height={240} alt={product?.title} />
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image src={iconClose} alt="close" height={20} width={20} onClick= {()=> handleRemove(product)}/>
		</div>
	);
};

export default OrderItem;
