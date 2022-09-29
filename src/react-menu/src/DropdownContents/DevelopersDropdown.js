import React from "react"
import styled from "styled-components"
import {
  Icon,
  DropdownSection,
  Heading,
  HeadingLink,
  LinkList
} from "./Components"

const DevelopersDropdownEl = styled.div`
  width: 400px;
`

const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
`

const DevelopersDropdown = () => {
  return (
    <DevelopersDropdownEl>

      <DropdownSection>
      <li>
            {/*<div>
              <Logo style={{marginTop: '30px'}} color="blue" />
            </div>*/}
            <div>
              <Heading style={{marginLeft: '15px', color: '#46473E', fontSize: '17px', fontWeight: 'bold'}} >Tokenização</Heading>
              <p style={{paddingLeft: '15px', borderLeft: '2px solid black', color: '#46473E', fontSize: '16px', marginTop: '-30px'}}>Antecipe seus recebíveis ou obtenha crédito rápido e simplficado, com as melhores taxas, tokenizando seus serviços</p>
              <a href="" style={{marginTop: '-10px', fontSize: '16px',}}>
                  <Icon />Conheça nossa plataforma de tokenização
              </a>
            </div>
          </li>
          <li>
            {/*<div>
              <Logo style={{marginTop: '30px'}} color="blue" />
            </div>*/}
            <div>
              <Heading style={{marginLeft: '15px', color: '#46473E', fontSize: '17px', fontWeight: 'bold'}} >Meios de pagamento</Heading>
              <p style={{paddingLeft: '15px', borderLeft: '2px solid black', color: '#46473E', fontSize: '16px', marginTop: '-30px'}}>Aceite pagamentos com cripto e tokens com conversão para Reais e iquidação instantânea</p>
              <a href="" style={{marginTop: '-10px', fontSize: '16px',}}>
                  <Icon />Conheça nossas soluções
              </a>
            </div>
          </li>

      </DropdownSection>
    </DevelopersDropdownEl>
  )
}

export default DevelopersDropdown
