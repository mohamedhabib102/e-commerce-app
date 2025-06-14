import Image from "next/image"
import Link from "next/link"
import  Details from "../../components/Details"

type Props = {
    params: {
        productDetails: string
    }
}
export  default function productDetails({params}: Props){
    console.log(params)

    return (
    <section>
        <div className="custom__container">
        <div className='flex items-center gap-2 mb-8 text-[#393939] text-lg mr-auto max-[575px]:pl-9'>
        <Link  href={"/"} className='text-[#868686]'>Home</Link>
        <Image
        src={"/arrow-right.svg"}
        alt="Arrow Right"
        width={24}
        height={24}
        />
        <Link  href={"/Products"} className='text-[#868686]'>Categories</Link>
        <Image
        src={"/arrow-right.svg"}
        alt="Arrow Right"
        width={24}
        height={24}
        />
      <div className='font-semibold'>Product Details</div>
      </div>
      
        <h2 className="text-[#393939] text-3xl mb-6 pb-5 font-semibold">Prdouct Details {params.productDetails}</h2>
        
        <div>
            {/* Details */}
            <Details />
        </div>
        </div>
    </section>
    )
}