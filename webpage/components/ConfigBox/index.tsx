import styled from 'styled-components'
import { useConfig } from '../../contexts/ConfigContext';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { themes } from '../CodeBox/styles'
const Wrap = styled.div`
  
`

const LayoutComponent = ({}) => {
  const [city, setCity] = useState<string>(null);
  const {theme, setTheme} = useConfig();

  return (
    <Wrap>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Tema predefinido</Form.Label>
          <Form.Control as="select" custom value={theme} onChange={ e => setTheme(e.target.value)}>
            {
              themes && Object.keys(themes).map( s => <option key={s}>{s}</option> )
            }
          </Form.Control>
        </Form.Group>
      </Form>
    </Wrap>
  )

}

export default LayoutComponent