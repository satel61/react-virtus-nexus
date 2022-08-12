import styles from './Header.module.css';

import Logo from '../assets/nexus-logo.png';


export function Header() {
  return (
    <header className={styles.header}>
        <img src={Logo} alt="Logo Nexus" />
        <nav className={styles.nav}>
            <a href="#">Inicio</a>
            <a href="#">Meus Trabalhos</a>
            <a href="#">Nossos Parceiros</a>
            <a href="#">Contato</a>
        </nav>
     
    </header>
  );
}