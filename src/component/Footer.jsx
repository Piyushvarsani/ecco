import { useEffect, useState } from "react";

function Footer() {
  return (
    <footer className="px-[20%] py-5 bg-slate-200">
      <div className="border-2 flex justify-between">
        <div>
          <h3 className="mb-2 text-sm font-medium text-gray-900 uppercase">
            catagory
          </h3>
          <div className="flex flex-col text-gray-700 text-sm">
            <a href=""> electronic</a>
            <a href=""> beauty</a>
            <a href=""> groceries</a>
            <a href=""> man</a>
            <a href=""> children</a>
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium text-gray-900 uppercase">
            customer policies
          </h3>
          <div className="flex flex-col text-gray-700 text-sm">
            <a href=""> Contact Us</a>
            <a href=""> FAQ</a>
            <a href=""> T&C</a>
            <a href=""> Term Of Use</a>
            <a href=""> Track Order</a>
            <a href=""> Returns</a>
            <a href=""> Privacy policy</a>
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium text-gray-900 uppercase">
            USEFUL LINKS
          </h3>
          <div className="flex flex-col text-gray-700 text-sm">
            <a href=""> Blog</a>
            <a href=""> Careers</a>
            <a href=""> Site Map</a>
            <a href=""> Corporate Information</a>
            <a href=""> Whitehat</a>
            <a href=""> Cleartrip</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
