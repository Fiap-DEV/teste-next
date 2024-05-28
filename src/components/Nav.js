import '../css/Base.css';

import styles from '../css/Nav.module.css';

import Link from 'next/link';
const Nav = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/Home" className={styles.logo}>
          EsportCity
        </Link>
        <ul>
          <li>
            <Link href="/Home" className={styles.link}>Home</Link>
          </li>
          <li>
            <Link href="/Sobre" className={styles.link}>Sobre</Link>
          </li>
          <li>
            <Link href="/Produtos" className={styles.link}>Produtos</Link>
          </li>
          <li>
            <Link href="/Contato" className={styles.link}>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
