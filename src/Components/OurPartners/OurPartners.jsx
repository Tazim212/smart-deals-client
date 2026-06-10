import React from 'react'
import amazon from "../../assets/amazon.jpg"
import alibaba from "../../assets/alibaba.png"
import ebay from "../../assets/ebay.png"
import daraz from "../../assets/daraz.jpg"
import pathao from "../../assets/pathao.png"
import shopify from "../../assets/shopify.png"



const OurPartners =() => {
     const images = [
    amazon,
    alibaba,
    ebay,
    daraz,
    pathao,
    shopify
  ];

  const allImages = [...images, ...images];

  return (
    <div className='mb-3'>
        <h1 className='font-bold text-3xl text-center pb-4'>Our <span className='text-purple-500'>Partners</span></h1>
         <div className="marquee-wrapper">
      <div className="marquee-track">
        {allImages.map((img, i) => (
          <img key={i} src={img} className="marquee-img" />
        ))}
      </div>
    </div>
    </div>
  )
}
export default OurPartners;