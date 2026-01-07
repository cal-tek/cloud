import Brands from "@/components/common/Brands";
import { Link } from "react-router-dom";

import ModalVideo from "react-modal-video";
import { useState } from "react";

export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        id="hero_header"
        className="hero-header section panel overflow-hidden"
      >
        <div className="position-absolute top-0 start-0 end-0 h-400px xl:h-screen bg-gray-900" />
        <div
          className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block uc-dark"
          data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 250; delay: anime.stagger(5, {start: 500});"
        >


        </div>
        <div className="section-outer panel pb-6 sm:pb-9 pt-9 sm:pt-10">
          <div className="container max-w-xl">
            <div className="section-inner panel">
              <div className="vstack gap-6 sm:gap-8 xl:gap-9">
                <div className="panel text-center max-w-850px mx-auto uc-dark">
                  <div
                    className="vstack items-center gap-2 text-white"
                    data-anime="targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                  >
                    <h2>
                      On cloudseedz you get AWS training on specific topics. One-hour walk throughs. $10 fixed price per course. 
                    </h2>
                  </div>
                </div>
                <div
                  className="panel"
                  data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
                  data-uc-lightbox="video-autoplay: true;"
                >
                  <figure className="featured-image m-0 rounded ratio ratio-16x9 lg:rounded-2 overflow-hidden">
                    <img
                      className="media-cover image"
                      alt="cloudseedz"
                      src="/assets/images/template/home-01-hero-cover.png"
                      width="512"
                      height="288"
                    />
                  </figure>
                  <a
                    className="cstack text-none position-absolute top-50 start-50 translate-middle bg-white text-primary w-64px h-64px sm:w-80px sm:h-80px rounded-circle shadow-md"
                    onClick={() => setOpen(true)}
                    data-caption="cloudseedz aws code vids"
                    data-attrs="width: 512; height: 288;"
                  >
                    <i className="icon icon-2 sm:icon-3 unicon-play-filled-alt" />
                  </a>
                </div>
              </div>
              <div className="brands panel overflow-hidden mt-4 sm:mt-6 xl:mt-8 opacity-50">
                <div
                  className="block-panel panel"
                  data-anime="onview: -100; opacity: [0, 1]; duration: 450; delay: 200;"
                >
                  <div className="element-brands text-gray-900 dark:text-white">
                    <Brands />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="custom"
        isOpen={isOpen}
        url="/assets/images/media/lexend_vid.mp4"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
