import React from 'react';
import Head from 'next/head';
import ProductItem from '@components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';

const API = ' https://api.escuelajs.co/api/v1/products?offset=0&limit=21';

const ProductList = () => {
	const products = useGetProducts(API);

	return (
		<>
		<Head>
			<title>
				Listado de Productos
			</title>
		</Head>
		<section className={styles['main-container']}>
			<div className={styles.ProductList}>
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
		</>
	);
};

export default ProductList;