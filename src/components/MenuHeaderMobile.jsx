import React from 'react';
import styles from '@styles/MenuHeaderMobile.module.scss';
import Link from 'next/link';

const MenuHeaderMobile = () => {
  return (
    <div className={styles.Menu}>
			<ul>
				<li>
					<Link className="title" value="Menu" href="./">Menu</Link>
				</li>
				<li>
					<Link  href="./">Todas</Link>
				</li>
				<li>
					<Link   href="./">Paginas Web</Link>
				</li>
                <li>
					<Link   href="./">Contacto</Link>
				</li>
			</ul>
		</div>
  );
};

export default MenuHeaderMobile;