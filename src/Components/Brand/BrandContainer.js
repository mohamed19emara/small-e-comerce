import React from 'react'
import {Row,Container} from 'react-bootstrap'
import BrandCard from './BrandCard'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'

 const BrandContainer = () => {
  return (
    <Container>
    <div className="mt-5">كل الماركات </div>
    <Row className="d-flex mb-3 justify-content-between my-3">
    <BrandCard img={brand1} />
    <BrandCard img={brand3} />
    <BrandCard img={brand1} />

    <BrandCard img={brand2} />
    <BrandCard img={brand3} />
    <BrandCard img={brand1} />

    <BrandCard img={brand3} />
    <BrandCard img={brand1} />
    <BrandCard img={brand2} />

    <BrandCard img={brand3} /> 
    <BrandCard img={brand3} />
    <BrandCard img={brand1} />

    <BrandCard img={brand2} />
    <BrandCard img={brand3} />
    <BrandCard img={brand1} />

    
    <BrandCard img={brand2} />
    <BrandCard img={brand3} />
    <BrandCard img={brand1} />
    </Row> 
    
    </Container>
    )
}
export default BrandContainer