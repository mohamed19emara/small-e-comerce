import React from 'react'
import {Card, Col,} from 'react-bootstrap'
import cate2 from '../../images/cat2.png'
import fav1 from '../../images/fav1.png'
import rate from '../../images/rate.png'


 const ProductCards = () => {
  return (

    <Col sm="6" md="4" lg="3">
    <Card className="d-flex my-2" style={{
         width: '100%',
        height: '345px',
        borderRadius:'8px',
        border:'none',
        backgroundColor:'#ffffff',
        boxShadow:'0 2px 2px 0 rgba(151 ,151 ,151,0.5)'
        
        }}>
      <Card.Img variant="top" src={cate2} />
      <Card.Body>
        <Card.Text>
         <div className="">
         <img src={ fav1} className="fs-3" />
         <p className="text-center">اللي مايشتري يتفرج يابيه</p>
         <div className="d-flex justify-content-between">
         <p>100جنيه</p>
         <img src={rate} className="" />
         </div>
         </div>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  )
}
export default ProductCards