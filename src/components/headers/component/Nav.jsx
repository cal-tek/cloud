import { Link, useLocation } from "react-router-dom";

import { pagesData } from "@/data/menu";

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <>
      <li>
        <Link to={`/page-features`}>AWS. Python. Here at cloudseedz we get straight to the point. One hour or less. Specific topics. Your time is precious.</Link>
      </li>

      <li className="has-dd-menu">

        {/* uc-navbar-dropdown uc-drop uc-open */}

        <div className={`uc-navbar-dropdown uc-drop w-100`}>
          <div
            className="uc-drop-grid row child-cols g-4 uc-grid uc-grid-stack"
            data-uc-grid=""
          >
            <div>
              <div className="uc-drop-grid row child-cols g-4 uc-grid uc-grid-stack">
                {pagesData.map((section, index) => (
                  <div key={index}>
                    <ul className="uc-nav uc-navbar-dropdown-nav">
                      <li className="uc-nav-header">{section.header}</li>
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          {item.href.startsWith("/") ? (
                            <Link
                              to={item.href}
                              className={
                                pathname.split("/")[1] ==
                                item.href.split("/")[1]
                                  ? "menuActive"
                                  : "inActiveMenu"
                              }
                            >
                              {item.label}
                              {item.badge && (
                                <span
                                  className={`fw-bold fs-8 ms-1 px-1 border rounded-pill ${item.badge.className}`}
                                >
                                  {item.badge.text}
                                </span>
                              )}
                            </Link>
                          ) : (
                            <a href={item.href}>
                              {item.label}
                              {item.badge && (
                                <span
                                  className={`fw-bold fs-8 ms-1 px-1 border rounded-pill ${item.badge.className}`}
                                >
                                  {item.badge.text}
                                </span>
                              )}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-3">
              <div className="panel w-100 overflow-hidden">
                <div className="ratio ratio-3x4 overflow-hidden rounded">
                  <img
                    alt="Let's build anything with Lexend!"
                    src="/assets/images/template/menu-banner.jpg"
                    width="544"
                    height="660"
                  />
                  <a
                    className="position-cover"
                    href="https://themeforest.net/user/ib-themes/portfolio"
                    target="_blank"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
