import React from "react";

const CtaSection = ({ isImage }) => {
  return (
    <>
      {!isImage ? (
        <div className="bg-white  ">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8 ">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center ">
              The Perfect Website Development Partner for Your Business
              <br />
              Premier Website Design & Development Solutions.
            </h3>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <a
                href="tel:+919511868630"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Call For Enquiry
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative bg-gray-800 px-6 py-60 sm:px-12 sm:py-40 lg:px-16">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-900 bg-opacity-50"
          />
          <div className="mx-auto z-50 absolute left-2/4 w-full -translate-x-1/2 top-0 max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8 gap-x-6 ">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-3xl">
              The Perfect Website Development Partner for Your Business Premier
              Website Design & Development Solutions.
            </h2>

            <a
              href="tel:+919511868630"
              className="mt-8 md:mt-0 block w-80 text-center rounded-md border border-transparent bg-white px-3.5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 "
            >
              Get Call For Enquiry
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default CtaSection;
