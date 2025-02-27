import { Container, Links, Content } from "./style.js"

import { Button } from "../../components/Button/"
import { Header } from "../../components/Header/"
import { Section } from "../../components/Section/index.jsx"
import { Tag } from "../../components/Tag/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://github.com/luismelle</a></li>
              <li><a href="#">https://www.linkedin.com/in/luis-melle/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />

      </Content>
      </main>

    </Container> 
  )
}