import styled from 'styled-components'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useConfig } from '../../contexts/ConfigContext';
import {themes } from './styles';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

const Wrap = styled.div`

`
const CodeBox = styled.div`
  padding: 1rem;
  background-color: lightcyan;
  border-radius: 5px;
`

const Code = styled(SyntaxHighlighter)`
  background-color: black;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0px 2px 9px 0px #00000073;

`

const LayoutComponent = ({}) => {
  const [code, setCode] = useState<string>("");
  const {theme} = useConfig();

  return (
    <Wrap>
      <CodeBox>
        <Code language="javascript" style={themes[theme]}>
          {code}
        </Code>
      </CodeBox>
      <br/>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Código</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3} 
          value={code} 
          onChange={ e => setCode(e.target.value)}
        />
      </Form.Group>
    </Wrap>
  )

}

export default LayoutComponent