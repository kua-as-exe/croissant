import styled from 'styled-components';

const Footer = styled.footer`
  position: absolute;
  display: flex;
  justify-content: center;

  bottom: 0;
  width: 100%;
  height: 30px;
  padding: 0.25rem;
  
`

const FooterComponent = () => {

  return (
    <Footer>
      <span>
        Created with 🥐 by: <a href="https://github.com/JorgeArreolaS">Jorge Arreola</a>
      </span>
    </Footer>
  )
}

export default FooterComponent