//importando os componentes
import Footer from './Footer';
import Nav from './Nav';


//Passando como propriedade o children(componentes filhos)
export default function Container({ children }) {
  return (
    <>
    {/*Componente Nav */}
      <Nav />
      {/*Chamando o componente filho que for chamadoo*/}
      <div>{children}</div>
         {/*Componente Footer */}
      <Footer />
    </>
  );
}