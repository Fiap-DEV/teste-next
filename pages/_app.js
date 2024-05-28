import Container from "@/components/Container";

function App({Component, pagesProps}){
  return(

    /*Chamando o componente container passando  tudo que estiver sido renderizado*/
    <Container>
      <Component {...pagesProps}/>
    </Container>
  )
}
export default App;