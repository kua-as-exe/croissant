// import Image from 'next/image'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Layout from '../components/layout'
import CodeBox from '../components/CodeBox'
import ConfigBox from '../components/ConfigBox'

export default function Home() {
  return (
    <Layout>
      <div className="p-5">
        <Row>

          <Col sm={12} md={8}>
              
            <CodeBox/>

          </Col>
          <Col >
            <ConfigBox/>
          </Col>
          
        </Row>
      </div>
    </Layout>
  )
}
