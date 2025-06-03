"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const pathName = usePathname();
  const [toggle, setToggle] = useState(false);

  const links = {
    generalText: {
      title: "General",
      icons: ["h", "h", "h"],
      text: ["Home", "Products", "Contact Us"],
      path: ["/", "/Products", "/Contact"]
    },
    mySpace: {
      title: "MySpace",
      icons: ["s", "s"],
      text: ["Activity", "Privacy"],
      path: ["/Activity", "/Privacy"]
    },
    support: {
      title: "Support",
      icons: ["h"],
      text: ["Help!"],
      path: ["/Help"]
    },
    account: {
      text: ["Account"],
      icons: ["A"],
      path: ["/auth/login", "/auth/signup"]
    }
  };

  const toggleMenu = () => setToggle(!toggle);

// links of toggle 
const renderLinks = (section) => (
  <div className="px-9">
    {section.title && (
      <h4 className="text-[14px] text-[#9A3E63] mb-2">{section.title}</h4>
    )}
    <ul>
      {section.text.map((ele, index) => {
        const linkPath = section.path[index];
        const isAccountSection = section.text.includes("Account");
        const isActive = isAccountSection
          ? ["/auth/login", "/auth/signup"].includes(pathName)
          : pathName === linkPath;

        return (
          <li key={index} className="mb-1">
            <Link
              href={linkPath}
              className={`${isActive ? "text-white font-bold underline" : "text-black"}`}
            >
              {section.icons[index]} {ele}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);





  return (
    <>
      <header>
        <p className="flex justify-center items-center gap-2.5 p-2.5 bg-[#FE93B9] text-[#393939] text-[15px] max-[767px]:text-[13px]">
          <span>
            <Image
              src="/icon-header.svg"
              width={20}
              height={20}
              loading="lazy"
              alt="icon-header"
            />
          </span>
          Only this month 20% discount on all services
          <span>
            <Image
              src="/icon-header.svg"
              width={20}
              height={20}
              loading="lazy"
              alt="icon-header"
            />
          </span>
        </p>

        <nav className="relative">
          <div className="bg-[#f5f5f5]">
            <div className="custom__container">
              <ul className="flex justify-between items-center">
                {/* toggle */}
                <li className="relative">
                  {toggle && (
                    <div className="absolute -bottom-[45px] left-1/2 -translate-x-1/2 w-0 h-0 border-[20px] border-l-transparent border-r-transparent border-b-transparent border-t-[#FE93B9]"></div>
                  )}

                  <Image
                    className="cursor-pointer"
                    src="/toggle.svg"
                    width={30}
                    height={30}
                    loading="lazy"
                    alt="toggle menu"
                    onClick={toggleMenu}
                  />

                  {toggle && (
                    <div className="absolute py-4 bg-[#c08e9f] top-[60px] -left-6 rounded-r-[8px] rounded-b-[8px] z-50">
                      <div className="px-9">
                        <Image
                          src="/logo.svg"
                          width={75}
                          height={75}
                          loading="lazy"
                          alt="logo"
                          className="mb-3"
                        />
                        <div className="relative mb-4 px-7">
                          <Image
                            src="/search-icon.svg"
                            width={24}
                            height={24}
                            loading="lazy"
                            alt="search icon"
                            className="absolute top-1/2 left-0 -translate-y-1/2"
                          />
                          <input
                            placeholder="Search"
                            type="text"
                            name="search"
                            className="px-10 py-1.5 pl-8 text-[13px] bg-[#F3F3F3] placeholder:text-[#000c] outline-none rounded-[6px]"
                          />
                        </div>
                      </div>

                      {/* روابط القوائم */}
                      <div className="pt-4 pb-4 px-7 mb-4 border-b border-[#9A3E631A]">
                        {renderLinks(links.generalText)}
                        {renderLinks(links.mySpace)}
                      {renderLinks(links.support)}
                      {renderLinks(links.account)}
                      </div>
                    </div>
                  )}
                </li>

                {/* logo */}
                <li>
                  <Link href="/">
                    <Image
                      src="/logo.svg"
                      width={90}
                      height={90}
                      loading="lazy"
                      alt="logo"
                    />
                  </Link>
                </li>

                {/* header icons */}
                <li className="flex items-center gap-2">
                  <Link href="/">
                    <Image
                      src="/icon-header.svg"
                      width={20}
                      height={20}
                      loading="lazy"
                      alt="icon-header"
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/icon-header.svg"
                      width={20}
                      height={20}
                      loading="lazy"
                      alt="icon-header"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
