import React from 'react';
import styles from '@styles/Menu.module.scss';
import Link from 'next/link';

const Menu = () => {
	return (
		<div className={styles.Menu}>
			<ul>
				<li>
					<Link className="title" href="./">Menu</Link>
				</li>
				<li>
					<Link href="/SobreNosotros">Sobre Nosotros</Link>
				</li>
				<li>
					<Link href="/Contactanos">Contactanos</Link>
				</li>
				
			</ul>
		</div>
	);
};

export default Menu;
