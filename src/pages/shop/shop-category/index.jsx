import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";

import ShopCategory from "@/components/shop/ShopCategory";
import Breadcumb3 from "@/components/shop/Breadcumb3";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Shop Category || Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function ShopCategoryPage() {
  let params = useParams();
  const category = params.category.split("%20").join(" ");
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Breadcumb3 category={category} />
          <ShopCategory category={category} />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
