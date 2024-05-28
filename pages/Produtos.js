import Image from 'next/image';
import imagem2 from '../src/assets/img2.png';
import '../src/css/Base.css';
import styles from '../src/css/Produtos.module.css';

const Produtos = () => {
  return (
    <section className={styles.produtos}>
      <li className={styles.grid}>
        <div className={styles.prodlista}>
          <Image src={imagem2} alt="teste" className={styles.img} />
        </div>
        <h3 className={styles.h3}>Passeio</h3>
        <p className={styles.texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis voluptas accusamus esse commodi.</p>
        <button className={styles.btn}>Compra</button>
      </li>

      <li className={styles.grid}>
        <div className={styles.prodlista}>
          <Image src={imagem2} alt="teste" className={styles.img} />
        </div>
        <h3 className={styles.h3}>Passeio</h3>
        <p className={styles.texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis voluptas accusamus esse commodi.</p>
        <button className={styles.btn}>Compra</button>
      </li>

      <li className={styles.grid}>
        <div className={styles.prodlista}>
          <Image src={imagem2} alt="teste" className={styles.img} />
        </div>
        <h3 className={styles.h3}>Passeio</h3>
        <p className={styles.texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis voluptas accusamus esse commodi.</p>
        <button className={styles.btn}>Compra</button>
      </li>
      <li className={styles.grid}>
        <div className={styles.prodlista}>
          <Image src={imagem2} alt="teste" className={styles.img} />
        </div>
        <h3 className={styles.h3}>Passeio</h3>
        <p className={styles.texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis voluptas accusamus esse commodi.</p>
        <button className={styles.btn}>Compra</button>
      </li>
    
    
    
    
    </section>
  );
};

export default Produtos;
