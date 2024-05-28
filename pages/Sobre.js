import '../src/css/Base.css';
import styles from '../src/css/Sobre.module.css';

const Sobre = () => {
  return (
    <section className={styles.section}>
      <div className={styles.medicao}>
        <div className={styles.medicaoItem}>
          <span className={styles.contador1}></span>
          <h3>Projetos concluídos</h3>
          <p>Nós ajudamos a construir mais de 400 projetos incríveis.</p>
        </div>
        <div className={styles.medicaoItem}>
          <span className={styles.contador2}></span>
          <h3>Colaboradores</h3>
          <p>
            Temos mais de 100 colaboradores no nosso time que se preocupam com
            nossos clientes.
          </p>
        </div>
        <div className={styles.medicaoItem}>
          <span className={styles.contador3}></span>
          <h3>Downloads</h3>
          <p>
            Nossos projetos que estão disponíveis em lojas já foram baixados
            mais de 20.000 vezes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
