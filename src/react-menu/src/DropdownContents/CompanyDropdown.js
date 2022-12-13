import React from "react"
import styled from "styled-components"
import {
  Heading,
  HeadingLink,
  LinkList,
  DropdownSection,
  Icon
} from "./Components"

const CompanyDropdownEl = styled.div`
width: 480px;
`
const Logo = styled.div`
  width: 38px;
  height: 38px;
  margin-right: 16px;
  border-radius: 100%;
  opacity: 0.6;
  background-color: ${({ color }) => `var(--${color})`};
`

const CompanySection = styled.ul`
  li {
    display: flex;
  }
`

const CompanyDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
      <CompanySection>
          <li>
         {/*   <div>
              <Logo color="green" />
          </div> */}
            <div>
              <Heading style={{marginBottom: '20px', marginLeft: '15px', color: '#46473E', fontSize: '17px', fontWeight: 'bold'}} >Novidades</Heading>
              
              <p style={{marginTop: '20px', paddingLeft: '15px', borderLeft: '2px solid black', color: '#46473E', fontSize: '16px'}}>Conheça nossos últimos lançamentos e atualizações</p>
              <a href="/tokens" style={{marginTop: '-10px', fontSize: '16px',}}>
                  <Icon />Produtos
              </a><br />
              <a href="/tokens" style={{marginTop: '-10px', fontSize: '16px',}}>
                  <Icon />Serviços
              </a>
            </div>
          </li>
          <li>
         {/*   <div>
              <Logo color="green" />
          </div> */}
            <div>
              {/*<Heading color="green">Cripto</Heading>*/}
              <Heading style={{marginTop: '20px', marginLeft: '15px', color: '#46473E', fontSize: '17px', fontWeight: 'bold'}} >Central de Suporte</Heading>

              <p style={{paddingLeft: '15px', borderLeft: '2px solid black', color: '#46473E', fontSize: '16px' }}>Esclareça suas dúvidas, conheça mais nossos processos, produtos e serviços ou entre em contato conosco para um atendimento rápido e personalizado</p>
              <a href="https://ajuda.fortem.website/" style={{fontSize: '16px'}} target="_blank" rel="noopener noreferrer">                  <Icon />Principais dúvidas
              </a><br/>
              <a href="https://status.fortem.website/" style={{fontSize: '16px'}} target="_blank" rel="noopener noreferrer">
                  <Icon />Status da plataforma
              </a><br/>
              <a href="/api" style={{fontSize: '16px'}}>
                  <Icon />Documentação das APIs
              </a><br/>
              <a href="/fee" style={{fontSize: '16px'}}>
                  <Icon />Taxas
              </a><br/>
              <a href="/contato" style={{fontSize: '16px'}}>
                  <Icon />Entre em contato
              </a><br/>
            </div>
          </li>
          <li>
            {/*   <div>
              <Logo color="green" />
          </div> */}
            <div>
            <Heading style={{marginTop: '20px', marginLeft: '15px', color: '#46473E', fontSize: '17px', fontWeight: 'bold'}} >Arena do conhecimento</Heading>
              <p style={{ paddingLeft: '15px', borderLeft: '2px solid black', color: '#46473E', fontSize: '16px', marginTop: '20px',}}>
                Informações, notícias e conteúdos para apoiar seu desenvolvimento sobre ativos digitais
              </p>
              <a href="/lab" style={{marginTop: '-10px', fontSize: '16px',}}>
                  <Icon />Fortem Lab - Pesquisas e Análises
              </a><br/>
              <a href="/academy" style={{marginTop: '-10px', fontSize: '16px',}}>
                  <Icon />Academy - Artigos, vídeos, cursos
              </a><br/>
            </div>
          </li>
        </CompanySection>
      </DropdownSection>
    </CompanyDropdownEl>
  )
}

export default CompanyDropdown
