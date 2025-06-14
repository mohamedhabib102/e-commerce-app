"use client"
import Image from "next/image"
import { useState } from "react"

function Details() {
    const [isActive, setIsActive] =  useState(1);
    const [imgeSrc, setImgSrc] =  useState(null);
    const [rate, setRate] =  useState(4)


    const colorsData = [
        "#9A3E63",
        "#9B5D5E",
        "#A30000",
        "#FFC3E1"
    ]
    const imagesOfProduct = [
        {
            id: 1,
            img: "/images/product_1.png",
        },
        {
            id: 2,
            img: "/images/items2.png"
        }
    ]

    const handleActiveEvent = (id) => {
        setIsActive(id)
    }

    const returnImageSrc = (src) => {
        setImgSrc(src)
    }

    return (
    <div className="flex  gap-5">

     <div>
        <Image
        src={imgeSrc === null ? imagesOfProduct[0].img : imgeSrc}
        width={500}
        height={400}
        alt="prudct details"
        loading="lazy"
        />

        {/* Images of product */}
        <div className="my-5 flex items-start gap-3.5">

        {imagesOfProduct.map((ele) => (
          <Image
          key={ele.id}
          src={ele.img}
          width={100}
          height={100}
          alt="images of product"
          loading="lazy"
          className={`h-24 cursor-pointer hover:scale-90 transition ${isActive === ele.id ? "border-[3px] border-[#FE93B9]" : "inactive"}`}
          onClick={() => {
            handleActiveEvent(ele.id)
            returnImageSrc(ele.img)
          }}
          />
        ))}
        </div>
    </div>


    <div>
        <h3 className="text-3xl text-[#9A3E63] font-semibold mb-2.5">Rouge Artist For Ever Matte</h3>
        <p className="text-[#393939] font-semibold mb-1">24HR Longwear Liquid Lipstick</p>
        <p className="text-[15px] text-[#868686]"><span>Ultra matte finish</span> <span className="mx-2 px-2 border-[1px] border-transparent border-l-[#868686] border-r-[#868686]">Intense, long-lasting color</span>  <span>Transfer-proof</span></p>
         {/* Rati of product */}
        <div className="flex items-center mt-1.5">
        {Array.from({length: rate}).map((_, i) => (
        <Image
        key={i}
        src={ "/rating.svg"}
        width={40}
        height={40}
        alt="rati"
        className="w-[16px]"
        />))} 

    {Array.from({length: 5 - rate}).map((_, i) => (
        <Image
        key={i}
        src={ "/rating_empty.svg"}
        width={40}
        height={40}
        alt="rati"
        className="w-[16px]"
        />))}  
        <span className="ml-3 text-[#393939] font-semibold">4.0</span>
        </div>
        <p className="text-[#393939] font-semibold text-[20px] mt-1.5">420.00 EGP</p>
        <button className="text-[#0B0806] font-semibold flex items-center gap-4 cursor-pointer">
            Product Details 
            <Image
            src={"/arrow-down.svg"}
            width={20}
            height={20}
            alt="arrow"
            />
        </button>
        <div className={`flex items-center gap-3 mt-2`}>{colorsData.map((ele, index) => (
            <span key={index} className={`w-4 h-4 rounded-full cursor-pointer hover:scale-110 transition`} style={{backgroundColor: ele}}></span>
        ))}</div>
    </div>
    
    </div>
    )
}
export default Details;