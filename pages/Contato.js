import styles from '../src/css/contato.module.css';

const Contato = () => {
  function handleClick() {
    alert('teste');
  }

  return (
    <>
      <section className={styles.section}>
        <form className={styles.form} name="form">
          <h1 className={styles.h1}>Contato</h1>

          <p className={styles.nome}>
            <label htmlFor="nome">NOME</label>
            <input
              type="text"
              id={styles.nome}
              placeholder="digite seu nome"
              name="nome"
            />
          </p>
          <p className={styles.telefone}>
            <label htmlFor="telefone">TELEFONE</label>
            <input
              className={styles.input}
              type="text"
              id={styles.telefone}
              placeholder="digite seu telefone"
              name="telefone"
            />
          </p>
          <p className={styles.email}>
            <label htmlFor="email">EMAIL</label>
            <input
              className={styles.input}
              type="text"
              id={styles.email}
              placeholder="digite seu email"
              name="email"
            />
          </p>
          <p>
            <textarea
              className={styles.textarea}
              placeholder="Deixe sua mensagem"
            ></textarea>
          </p>
          <button className={styles.btn}>Enviar</button>
        </form>
        <input type="submit" onClick={handleClick} />
      </section>
    </>
  );
};

export default Contato;
