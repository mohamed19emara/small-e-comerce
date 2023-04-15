import React from 'react'


import Slider       from  './../../Components/Home/Slider'
import HomeCategory from  './../../Components/Home/HomeCategory'
import CardProductsContainer from  './../../Components/Products/CardProductsContainer'
import DiscountSection from  './../../Components/Home/DiscountSection'
import BrandFeatures from  './../../Components/Brand/BrandFeatures'

const HomePages = () => {
  return (
    <div className="font" style={{minheight:'670px'}}>
    <Slider />
    <HomeCategory />
    <CardProductsContainer title="الاكثر مبيعا" btntitle="المزيد" PathText="/Products" />
    <DiscountSection />
    <CardProductsContainer title="الاكثر انتشارا" btntitle="المزيد" PathText="/Products" />
    <BrandFeatures />
    </div>
  );
}
export default  HomePages ;