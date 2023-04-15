import React from 'react'
import {Container,Row} from 'react-bootstrap'
import cate2 from '../../images/cat2.png'
import clothe from '../../images/clothe.png'
import labtop from '../../images/labtop.png'
import sale from '../../images/sale.png'
import pic from '../../images/pic.png'
import laptops from '../../images/laptops.png'
import CategoryCard from './CategoryCard'

 const CategoryContainer = () => {
  return (
    <Container>
    <div className="pt-5">كل التصنيفات</div>
    <Row className="d-flex justify-content-between my-2">
    <CategoryCard img={cate2} title="اجهزه منزليه" background="#0034ff" />
    <CategoryCard img={clothe} title=" ملابس" background="red" />
    <CategoryCard img={labtop} title="اجهزه منزليه" background="red" />
    <CategoryCard img={sale} title="اجهزه منزليه" background="red" />
    <CategoryCard img={pic} title="اجهزه منزليه" background="red" />
    <CategoryCard img={laptops} title="اجهزه منزليه" background="red" />
    <CategoryCard img={cate2} title="اجهزه منزليه" background="#0034ff" />
    <CategoryCard img={clothe} title=" ملابس" background="red" />
    <CategoryCard img={labtop} title="اجهزه منزليه" background="red" />
    <CategoryCard img={sale} title="اجهزه منزليه" background="red" />
    <CategoryCard img={pic} title="اجهزه منزليه" background="red" />
    <CategoryCard img={laptops} title="اجهزه منزليه" background="red" />
    <CategoryCard img={cate2} title="اجهزه منزليه" background="#0034ff" />
    <CategoryCard img={clothe} title=" ملابس" background="red" />
    <CategoryCard img={labtop} title="اجهزه منزليه" background="red" />
    <CategoryCard img={sale} title="اجهزه منزليه" background="red" />
    <CategoryCard img={pic} title="اجهزه منزليه" background="red" />
    <CategoryCard img={laptops} title="اجهزه منزليه" background="red" />
    </Row>
    </Container>
  )
}
export default CategoryContainer