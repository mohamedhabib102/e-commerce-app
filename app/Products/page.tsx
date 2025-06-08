import Image from "next/image";
import Link from "next/link";
import Categories from "../components/Categories";


 export default function ProductsPage() {
  return (
    <div className="custom__container">
      <div className='flex items-center gap-2 mb-8 text-[#393939] text-lg mr-auto max-[575px]:pl-9'>
        <Link  href={"/"} className='text-[#868686]'>Home</Link>
        <Image
        src={"/arrow-right.svg"}
        alt="Arrow Right"
        width={24}
        height={24}
        />
      <div className='font-semibold'>Categories</div>
      </div>
      <Categories />
    </div>
);
}