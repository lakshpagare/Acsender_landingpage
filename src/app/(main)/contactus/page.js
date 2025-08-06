import React from "react";

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const Contactus = () => {
  return (
    <>
      <div className="relative isolate bg-white">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[3rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-16"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="py-16 sm:py-20 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SocialGrid />

            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <div className="relative isolate bg-white rounded-xl lg:rounded-2xl">
                  <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
                      <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                          <svg
                            aria-hidden="true"
                            className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                          >
                            <defs>
                              <pattern
                                x="100%"
                                y={-1}
                                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                              >
                                <path d="M130 200V.5M.5 .5H200" fill="none" />
                              </pattern>
                            </defs>
                            <rect
                              fill="white"
                              width="100%"
                              height="100%"
                              strokeWidth={0}
                            />
                            <svg
                              x="100%"
                              y={-1}
                              className="overflow-visible fill-gray-50"
                            >
                              <path
                                d="M-470.5 0h201v201h-201Z"
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
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                          Get in touch
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                          Proin volutpat consequat porttitor cras nullam gravida
                          at. Orci molestie a eu arcu. Sed ut tincidunt integer
                          elementum id sem. Arcu sed malesuada et magna.
                        </p>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                          <div className="flex gap-x-4">
                            <dt className="flex-none">
                              <span className="sr-only">Address</span>
                              <BuildingOffice2Icon
                                aria-hidden="true"
                                className="h-7 w-6 text-gray-400"
                              />
                            </dt>
                            <dd>
                              545 Mavis
                              <br />
                              Chicago, IL 99191
                            </dd>
                          </div>
                          <div className="flex gap-x-4">
                            <dt className="flex-none">
                              <span className="sr-only">Telephone</span>
                              <PhoneIcon
                                aria-hidden="true"
                                className="h-7 w-6 text-gray-400"
                              />
                            </dt>
                            <dd>
                              <a
                                href="tel:+1 (555) 234-5678"
                                className="hover:text-gray-900"
                              >
                                +1 (555) 234-5678
                              </a>
                            </dd>
                          </div>
                          <div className="flex gap-x-4">
                            <dt className="flex-none">
                              <span className="sr-only">Email</span>
                              <EnvelopeIcon
                                aria-hidden="true"
                                className="h-7 w-6 text-gray-400"
                              />
                            </dt>
                            <dd>
                              <a
                                href="mailto:hello@example.com"
                                className="hover:text-gray-900"
                              >
                                hello@example.com
                              </a>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                    <form
                      action="#"
                      method="POST"
                      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32"
                    >
                      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                              First name
                            </label>
                            <div className="mt-2.5">
                              <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                              Last name
                            </label>
                            <div className="mt-2.5">
                              <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="email"
                              className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                              Email
                            </label>
                            <div className="mt-2.5">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="phone-number"
                              className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                              Phone number
                            </label>
                            <div className="mt-2.5">
                              <input
                                id="phone-number"
                                name="phone-number"
                                type="tel"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="message"
                              className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                              Message
                            </label>
                            <div className="mt-2.5">
                              <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                          <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Send message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </>
  );
};

const SocialGrid = () => {
  return (
    <div className="bg-transparent ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Get in touch
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac
                pellentesque.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Collaborate
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:collaborate@example.com"
                        className="font-semibold text-indigo-600"
                      >
                        collaborate@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-2345</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Press
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:press@example.com"
                        className="font-semibold text-indigo-600"
                      >
                        press@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-3456</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Join our team
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:careers@example.com"
                        className="font-semibold text-indigo-600"
                      >
                        careers@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-4567</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Say hello
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:hello@example.com"
                        className="font-semibold text-indigo-600"
                      >
                        hello@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-5678</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
