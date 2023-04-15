import React from 'react'
import {Col ,Card} from 'react-bootstrap'

 const BrandCard = ({img}) => {
  return (
    <Col sm="2" className="">
    <Card className="">
    <Card.Img style={{ width: "100%", height: "151px" }} src={img} />

    </Card>
    
    </Col>
  )
}
export default BrandCard