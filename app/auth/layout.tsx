"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="w-3/5 space-y-8 max-[767px]:w-full">
        {/* Navigation buttons */}
        <div className="flex justify-between">
          <Link href="/auth/login">
            <button
              className={`px-6 py-2 rounded-[10px] w-52 max-[767px]:w-[140px] cursor-pointer ${
                pathName === "/auth/login"
                  ? "bg-[#FE93B9] text-[#393939] shadow-md"
                  : "border border-pink-400 text-pink-400 bg-[#F8F8F8]"
              }`}
            >
              Login
            </button>
          </Link>

          <Link href="/auth/signup">
            <button
              className={`px-6 py-2 rounded-[10px] w-52 max-[767px]:w-[140px]  cursor-pointer ${
                pathName === "/auth/signup"
                  ? "bg-[#FE93B9] text-[#393939] shadow-md"
                  : "border border-pink-400 text-pink-400 bg-[#F8F8F8]"
              }`}
            >
              Sign Up
            </button>
          </Link>
        </div>

        {/* Page Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
