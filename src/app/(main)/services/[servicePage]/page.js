"use client";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { servicesPages, WebDevelopment } from "@/data/data";
import CtaSection from "@/components/CtaSection";
import { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import ContactModel from "@/components/ContactModel";
// import React from 'react'
// import { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const ServicePage = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [services, setServices] = useState();

  const params = useParams();

  useEffect(() => {
    setServices(servicesPages[params?.servicePage]?.servicesArr);
  }, [params]);

  console.log();
  return (
    <>
      <div className="relative isolate bg-white ">
        <div className=" ">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div className="mx-auto max-w-7xl px-6 py-14 sm:py-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <div className="flex">
                <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="font-semibold text-indigo-600">
                    {servicesPages[params?.servicePage]?.heading}
                  </span>
                  {/* <span
                    aria-hidden="true"
                    className="h-4 w-px bg-gray-900/10"
                  />
                  <a href="#" className="flex items-center gap-x-1">
                    <span aria-hidden="true" className="absolute inset-0" />
                    See open positions
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="-mr-2 h-5 w-5 text-gray-400"
                    />
                  </a> */}
                </div>
              </div>
              <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {servicesPages[params?.servicePage]?.subHeading}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {servicesPages[params?.servicePage]?.desc}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <ContactModel />
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <svg
                role="img"
                viewBox="0 0 366 729"
                className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
              >
                <title>App screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect rx={36} width={316} height={684} />
                  </clipPath>
                </defs>
                <path
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                  fill="#4B5563"
                />
                <path
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                  fill="#343E4E"
                />
                <foreignObject
                  width={316}
                  height={684}
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                  transform="translate(24 24)"
                >
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/component-images/mobile-app-screenshot.png"
                  />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>

        <div className=" py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6  lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black  sm:text-4xl">
                {servicesPages[params?.servicePage]?.serviceArrayHeading}
              </h2>
              {/* <p className="mt-4 text-lg leading-8 text-gray-600"></p> */}
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
            >
              {servicesPages[params?.servicePage]?.servicesArr?.map((card) => (
                <li
                  key={card.id}
                  className="rounded-2xl bg-gray-50 px-8 py-10 shadow-md"
                >
                  <card.icon className="h-12 w-12" />
                  <h3 className="mt-6 mb-4 text-2xl font-semibold leading-7 tracking-tight text-black">
                    {card.name}
                  </h3>
                  <p className="text-lg leading-6 text-gray-600">
                    {card.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
          <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
            <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />
            <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
              <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                <svg
                  fill="none"
                  viewBox="0 0 162 128"
                  aria-hidden="true"
                  className="absolute -top-12 left-0 -z-10 h-32 stroke-gray-900/10"
                >
                  <path
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                  />
                  <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
                </svg>
                <blockquote className="">
                  <h5 className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 mb-2.5">
                    {servicesPages[params?.servicePage]?.lastImageHeading}
                  </h5>
                  <p className="text-lg font-medium text-gray-800 sm:text-xl ">
                    {servicesPages[params?.servicePage]?.lastImageDesc}
                  </p>
                </blockquote>
              </div>
              <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80"
                  className="rounded-xl bg-indigo-50 lg:rounded-3xl"
                />
              </div>
              <figcaption className="text-base lg:col-start-1 lg:row-start-3">
                {/* <div className="font-semibold text-gray-900">Judith Black</div>
                <div className="mt-1 text-gray-500">CEO of Workcation</div> */}
              </figcaption>
            </figure>
          </div>
        </section>

        <CtaSection isImage={true} />
      </div>
      {/* MOBILE APP DEVELOPMENT PAGE */}
      <div className=""></div>
    </>
    // <div>ServicePage : {params.servicePage}</div>
  );
};

export default ServicePage;
