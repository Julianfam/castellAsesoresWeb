import React , { useState , useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingcart from '@icons/icon_shopping_cart.svg';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import AppContext from '@context/AppContext';
import MenuHeaderMobile from '@components/MenuHeaderMobile';

import styles from '@styles/Header.module.scss';


const Header = () => {
	const [toggle,setToggle] = useState(false);
	const [toggle2,setToggle2] = useState(false);
	const [toggle3,setToggle3] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle  = () => {
		setToggle(!toggle);
	};
	const handleToggle3  = () => {
		setToggle3(!toggle3);
	};
	
	return (
	
		<nav className={styles.Nav}>
			<Image src={menu} alt="menu" className={styles.menu} onClick={handleToggle3}></Image>
			<div className={styles['navbar-left']}>
				<Link href="./"> 
				<Image src={logo} alt="logo" className={styles['nav-logo']} href="./"/>
				</Link>
				<ul>
					<li>
						<Link href="./">Toda</Link>
					</li>
					<li>
						<Link href="./">Plantillas</Link>
					</li>
					
					<li>
						<Link href="./">Contacto</Link>
					</li>
				</ul>
			</div>
			<div className={styles['navbar-right']}>
				<ul>
					<button className={styles['navbar-email']} onClick={handleToggle}>
						JulianAndrade@example.com
					</button>
					<button className={styles['navbar-shopping-cart']} onClick={() => setToggle2(!toggle2)}>
						<Image src={shoppingcart} alt="shopping cart"  />
						{state.cart.length > 0 ? <div>{state.cart.length} </div> : null }
					</button>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggle2 && <MyOrder />}
			{toggle3 && <MenuHeaderMobile />}
		</nav>

		
	);
};

export default Header;
