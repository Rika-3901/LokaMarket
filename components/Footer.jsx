import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
            Lokamarket didirikan pada awal tahun 2025 dengan semangat untuk menghadirkan produk-produk lokal terbaik dari seluruh penjuru Indonesia. 
            Kami percaya bahwa kualitas dan kepercayaan adalah kunci utama dalam membangun pengalaman belanja yang memuaskan.
            Melalui Lokamarket, kami ingin memberdayakan UMKM lokal, memperkenalkan karya anak bangsa, 
            dan mendekatkan masyarakat dengan produk yang tidak hanya unggul secara kualitas, 
            tetapi juga memiliki cerita dan nilai budaya di dalamnya.
            Bersama Lokamarket, mari dukung pertumbuhan ekonomi lokal dan bangga menggunakan produk dalam negeri.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+62-814-1114-1883</p>
              <p>Rikadoubleyou@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        © LokaMarket
      </p>
    </footer>
  );
};

export default Footer;