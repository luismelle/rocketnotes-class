import { Container } from "./style.js"

import { Button } from "../../components/Button/index.jsx"

export function Details() {

  return (
    <Container>
      <h1>Hello world!</h1>
      <span>TESTEEEEEEEEE</span>

      <Button title="Login" loading/>
      <Button title="Cadastrar" />
      <Button title="Sair" />
    </Container>
    
  )
}