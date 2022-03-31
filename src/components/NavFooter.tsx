import styled from "styled-components"

const Footer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: black;
  border-top: 1px solid ${props=>props.theme.textColor};
`

function NavFooter() {
  return (
    <Footer>NavFooter</Footer>
  )
}

export default NavFooter