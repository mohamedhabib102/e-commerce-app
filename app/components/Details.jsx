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
    <div className="flex gap-7 lg:flex-row flex-col">

     <div className="lg:w-1/2 md:w-full">
        <Image
        src={imgeSrc === null ? imagesOfProduct[0].img : imgeSrc}
        width={500}
        height={400}
        alt="prudct details"
        loading="lazy"
        className="max-w-full w-full"
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


    <div className="lg:w-1/2 md:w-full">
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
        <button className="text-[#0B0806] font-semibold flex items-center gap-4 cursor-pointer my-[17px]">
            Product Details 
            <Image
            src={"/arrow-down.svg"}
            width={20}
            height={20}
            alt="arrow"
            />
        </button>

        {/* Show at click button and hid */}
        <div>
        <div>
        <span className="text-[#393939] block mb-2.5 font-semibold">Choose Color</span>
        <div className={`flex items-center gap-3`}>
            {colorsData.map((ele, index) => (
            <span key={index} className={`w-[18px] h-[18px] rounded-full cursor-pointer hover:scale-110 transition`} style={{backgroundColor: ele}}></span>
        ))}</div>
        </div>

        <div className="w-full border-b border-[#9A3E6352] flex items-center justify-between text-[18px] text-[#868686] mt-4  py-2.5 relative">
          {/* Select input */}
          <select
            name="size"
            id="size"
            defaultValue="0"
            className="appearance-none bg-transparent w-full focus:outline-none pr-10"
          >
            <option value="0">5 ML</option>
            <option value="1">4 ML</option>
            <option value="2">3 ML</option>
          </select>
        
          {/* Price (on the right) */}
          <span className="absolute right-6 pointer-events-none">420.00 EGP</span>
        
          {/* Arrow icon */}
          <div className="pointer-events-none absolute right-0 flex items-center pr-1">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
          >
            <path
              d="M0 0.5L5 5.5L10 0.5H0Z"
              fill="#868686"
            />
          </svg>
          </div>

        </div>

           
        </div>




    </div>
    
    </div>
    )
}
export default Details;