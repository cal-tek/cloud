import Nav from "./component/Nav";
import { Link } from "react-router-dom";

import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import { openContactModal } from "@/utlis/toggleContactModal";
import LanguageSelect2 from "../common/LanguageSelect2";

export default function Header1() {
  return (
    <header
      style={{ "--uc-nav-height": "80px" }}
      className="uc-header header-default uc-navbar-sticky-wrap z-999 uc-dark uc-sticky"
      data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
    >
      <nav
        className="uc-navbar-container uc-navbar-float ft-tertiary z-1 uc-navbar-transparent"
        data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
        style={{ transform: "translateY(0px)", opacity: 1 }}
      >
        <div className="container max-w-xl">
          <div
            className="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white"
            data-uc-navbar="mode: click; animation: uc-animation-slide-top-small; duration: 150;"
          >
            <div className="uc-navbar-left">
              <div className="uc-logo text-dark dark:text-white">
                <Link
                  className="panel text-none"
                  to={`/`}
                  style={{ width: 140 }}
                >
                  <img
                    className="dark:d-none"
                    alt="cloudseedz"
                    src="/assets/images/common/logo-light.svg"
                    width="60"
                    height="60"
                  />
                  <img
                    className="d-none dark:d-block"
                    alt="cloudseedz"
                    src="/assets/images/common/logo-dark.svg"
                    width="60"
                    height="60"
                  />
                </Link>
              </div>
              <ul className="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ms-2">
                <Nav />
              </ul>
            </div>
            <div className="uc-navbar-right">

              <div className="d-none lg:d-block">
                <Link className="text-none fw-medium" to={`/sign-in`}>
                  <span>Log in</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
