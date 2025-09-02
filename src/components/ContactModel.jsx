import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Switch,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function ContactModel() {
  const [open, setOpen] = useState(false);

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });
  const handleContactValue = (e) => {
    const { name, value } = e.target;
    setContactData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const contactDataSubmit = (e) => {
    e.preventDefault();
    console.log("popUp contact data", contactData);
    setContactData({
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      message: "",
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Contact Us
      </button>

      {/* Model */}
      <Dialog open={open} onClose={closeDialog} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className=" py-4  text-left">
                    <div className="flex justify-between items-center">
                      <DialogTitle
                        as="h3"
                        className="text-2xl font-semibold pb-2 leading-6 text-gray-900"
                      >
                        Contact Us
                      </DialogTitle>

                      <button onClick={closeDialog} className="h-6 w-6">
                        <XMarkIcon />
                      </button>
                    </div>
                    <div className="mt-2">
                      <form action="#" method="POST">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                              First name
                            </label>
                            <div className="mt-1.5">
                              <input
                                id="first-name"
                                name="firstName"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={contactData.firstName}
                                onChange={handleContactValue}
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
                            <div className="mt-1.5">
                              <input
                                id="last-name"
                                name="lastName"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={contactData.lastName}
                                onChange={handleContactValue}
                              />
                            </div>
                          </div>
                          {/* <div className="sm:col-span-2">
                            <label
                              htmlFor="company"
                              className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                              Company
                            </label>
                            <div className="mt-1.5">
                              <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div> */}
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="email"
                              className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                              Email
                            </label>
                            <div className="mt-1.5">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={contactData.email}
                                onChange={handleContactValue}
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="mobile"
                              className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                              Mobile Number
                            </label>
                            <div className="mt-1.5">
                              <input
                                id="mobile"
                                name="mobileNumber"
                                type="text"
                                autoComplete="mobile"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={contactData.mobileNumber}
                                onChange={handleContactValue}
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
                            <div className="mt-1.5">
                              <textarea
                                id="message"
                                name="message"
                                rows={2}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={""}
                                value={contactData.message}
                                onChange={handleContactValue}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-10">
                          <button
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={contactDataSubmit}
                          >
                            Let's talk
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default ContactModel;
