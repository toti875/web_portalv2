import React from "react"
import styled from "styled-components"
import { Icon, DropdownSection, Heading } from "./Components"

const ProductsDropdownEl = styled.div`
  width: 440px;
  height: 600px;
`

const Logo = styled.div`
  width: 38px;
  height: 38px;
  margin-right: 16px;
  border-radius: 100%;
  opacity: 0.6;
  background-color: ${({ color }) => `var(--${color})`};
`

const SubProductsList = styled.ul`
  li {
    display: flex;
    margin-bottom: 1rem;
  }
  h3 {
    margin-right: 1rem;
    width: 3.2rem;
    display: block;
  }
  a {
    color: var(--dark-grey);
  }
`

const ProductsSection = styled.ul`
  li {
    display: flex;
  }
`

const WorksWithStripe = styled.div`
 border-top: 2px solid #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--spacer);
  padding-top: var(--spacer);
}
h3 {
  margin-bottom: 0;
}
`

const ProductsDropdown = () => {
  return (
    <ProductsDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            {/*<div>
              <Logo style={{marginTop: '30px'}} color="blue" />
            </div>*/}
            <div>
              <Heading style={{marginLeft: '15px', color: '#46473E', fontSize: '17px', fontWeight: 'bold'}} >Tokens</Heading>
              <p style={{paddingLeft: '15px', borderLeft: '2px solid black', color: '#46473E', fontSize: '16px', marginTop: '-30px'}}>Invista nos tokens com os melhores rendimentos e com a segurança da blockchain</p>
              <a href="/tokens" style={{marginTop: '-10px', fontSize: '16px',}}>
                  <Icon />Conheça nosso marketplace de tokens
              </a>
            </div>
          </li>
          <li>
            {/*<div>
              <Logo color="green" />
          </div>*/}
            <div>
              {/*<Heading color="green">Cripto</Heading>*/}
              <Heading style={{marginLeft: '15px', color: '#46473E', fontSize: '17px', fontWeight: 'bold'}} >Cripto</Heading>

              <p style={{paddingLeft: '15px', borderLeft: '2px solid black', color: '#46473E', fontSize: '16px', marginTop: '-30px'}}>Os criptoativos mais negociados no mundo agora à sua disposição em Reais</p>
              <a href="/quick-exchange" style={{fontSize: '16px',}}>
                  <Icon />Negociação instantânea
              </a><br/>
              {/* <a href="/market/btcusd" style={{fontSize: '16px'}} target="_blank" rel="noopener noreferrer"> */}
              <a href="/market/btcusd" style={{fontSize: '16px'}} >
                  <Icon />Negociação avançada (Exchange Pro)
              </a>
            </div>
          </li>
          <li>
            {/*<div>
              <Logo color="teal" />
            </div>*/}
            <div>
            <Heading style={{marginLeft: '15px', color: '#46473E', fontSize: '17px', fontWeight: 'bold'}} >NFT</Heading>
              <p style={{ paddingLeft: '15px', borderLeft: '2px solid black', color: '#46473E', fontSize: '16px', marginTop: '-30px'}}>
                Marketplace para negociação de tokens exclusivos 
              </p>
              <a href="/nft" style={{marginTop: '-10px', fontSize: '16px',}}>
                  <Icon />Conheça nosso marketplace de NFTs
              </a>
            </div>
          </li>
        </ProductsSection>
      </DropdownSection>

    </ProductsDropdownEl>
  )
}

export default ProductsDropdown
