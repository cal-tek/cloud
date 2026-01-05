import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Breadcumb2 from "@/components/shop/Breadcumb2";
import ShopDetails1 from "@/components/shop/ShopDetails1";
import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Shop Details 1 || Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function ShopDetailsPage1() {
  let params = useParams();
  const id = params.id;
  const product = products.filter((elm) => elm.id == id)[0] || products[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <div
        style={{ overflowX: "clip" }}
        className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready"
      >
        <Header2 />
        <div id="wrapper" className="wrap">
          <Breadcumb2 product={product} />
          <ShopDetails1 product={product} />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
