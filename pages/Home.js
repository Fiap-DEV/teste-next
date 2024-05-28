import Image from 'next/image';
import '../src/css/Base.css';
import styles from '../src/css/Home.module.css';
import imagem1 from '../src/assets/logo.png';

const Home = () => {
  return (
    <>
      <section className={styles.main}>
        <section className={styles.home}>
          <div className={styles.left}>
            <p>Marvel Dev</p>
            <h4>
              Um dev guerreiro <br /> de qualidade.
            </h4>
            <button className={styles.btn}>Comprar</button>
          </div>
          <div className={styles.right}>
            <Image src={imagem1} className={styles.img} alt="teste" />
            <div className={styles.shadow}></div>
          </div>
        </section>  
      </section>
    </>
  );
};

export default Home;
