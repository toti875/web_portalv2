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
  width: 18.5rem;
`

const CompanyDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ul> Principais Dúvidas
          <HeadingLink>
            <a href="/">
              <Icon />
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon />Central de Suporte
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon />Taxas
            </a>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            <a href="/">
              <Icon />Status dos serviços
            </a>
          </HeadingLink>
        </ul>
      </DropdownSection>
      <DropdownSection>
        <div>
          <Heading>
            <Icon />Blog
          </Heading>
          <LinkList marginLeft="25px">
            <li>
              <a href="/">Tokenização &rsaquo;</a>
            </li>
            <li>
              <a href="/">Cripto &rsaquo;</a>
            </li>
            
          </LinkList>
        </div>
      </DropdownSection>
    </CompanyDropdownEl>
  )
}

export default CompanyDropdown
