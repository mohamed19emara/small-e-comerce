import React from 'react'
import ProductCards from './ProductCards'
import {Container,Row} from 'react-bootstrap'
import SubTitle from './../Uitily/SubTitle'

 const CardProductsContainer = ({title,btntitle,PathText}) => {
  return (
    <Container className="py-5">
    <SubTitle  title={title}  btntitle={btntitle} PathText={PathText}/>
    <Row className="d-flex justify-content-between my-2">
    <ProductCards />
    <ProductCards />
    <ProductCards />
    <ProductCards />
    </Row>
    </Container>
  )
}
export default CardProductsContainer