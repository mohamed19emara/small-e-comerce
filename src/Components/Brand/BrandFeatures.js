import React from 'react'
import SubTitle from '../Uitily/SubTitle'
import {Container,Row} from 'react-bootstrap'
import  CategoryCard from './../Category/CategoryCard'
import cate2 from '../../images/cat2.png'
import clothe from '../../images/clothe.png'
import labtop from '../../images/labtop.png'
import sale from '../../images/sale.png'
import pic from '../../images/pic.png'
import laptops from '../../images/laptops.png'
import BrandCard from './BrandCard'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'

export const BrandFeatures = () => {
  return (
    <Container>
    <SubTitle  title="اشهر الماركات"  btntitle="المزيد" PathText="/AllBrand"/>
    <Row className="d-flex justify-content-between my-1">
    <BrandCard img={brand1} />
    <BrandCard img={brand3} />
    <BrandCard img={brand1} />
    <BrandCard img={brand2} />
    <BrandCard img={brand3} />
    </Row>
    </Container>
    
  )
}
export default BrandFeatures