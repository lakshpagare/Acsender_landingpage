"use client"

import { ExclamationCircleIcon, EyeIcon } from "@heroicons/react/20/solid";
import React from "react";
import classNames from "../functions";

const Input = ({
  isDark,
  label,
  name,
  value,
  error,
  errorMessage,
  passIcon,
  changeEvent,
  blurEvent,
  disabled
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="min-w-64 max-w-full">
      <label
        className={classNames(
          isDark ? "text-white" : "text-gray-900",
          "block text-sm font-medium leading-6 "
        )}
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          name={name}
          type={!passIcon ? "text" : showPassword ? "text" : "password"}
          value={value}
          aria-invalid={error}
          onChange={changeEvent}
          disabled={disabled}
          onBlur={blurEvent}
          aria-describedby="error-ex"
          className={classNames(
            isDark ? "bg-white/5 text-white" : "text-gray-900 ",
            error ? " ring-red-600 ring-2" : " ring-white/10 ring-gray-400 ",
            "block w-full rounded-md border-0 py-1.5 pr-10 shadow-sm ring-1 ring-inset disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          )}
        />

        {passIcon && (
          <div
            onClick={togglePasswordVisibility}
            className=" absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer z-10"
          >
            <EyeIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400 cursor-pointer"
            />
          </div>
        )}
      </div>
      {error && (
        <p id="error-ex" className="mt-1.5 text-xs text-red-600">
          {errorMessage || "Not a valid input."}
        </p>
      )}
    </div>
  );
};

export default Input;
