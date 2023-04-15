import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountRes from '../../Components/Uitily/SearchCountRes'
import {Container,Row,Col} from 'react-bootstrap'
import SideFilter from '../../Components/Uitily/SideFilter'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Uitily/Pagination'
 const ShopProductPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
    <CategoryHeader />
    <Container>
    <SearchCountRes title="400 نتيجة بحث" />

    <Row className="d-flex flex-row">
    <Col sm="2" xs="2" md="1" className="">
       <SideFilter />
    </Col>
    <Col sm="10" xs="10" md="11" >
         <CardProductsContainer title="" btntitle="" />
    </Col>
    </Row>
    <Pagination />
    </Container>
    </div>
  )
}
export default ShopProductPage