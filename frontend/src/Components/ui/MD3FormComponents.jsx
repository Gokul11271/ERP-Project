import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

/**
 * Material Design 3 Form Components
 * Reusable form elements with Google Store aesthetic
 */

// MD3 Input Field
export const MD3Input = ({
  label,
  required = false,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  className = "",
}) => (
  <div className={className}>
    <label
      className="block text-sm font-medium mb-2"
      style={{ color: required ? "#d93025" : "#202124" }}
    >
      {label}
      {required && "*"}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 text-sm transition-all duration-200 focus:outline-none"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #dadce0",
        borderRadius: "8px",
        color: "#202124",
      }}
    />
  </div>
);

// MD3 Select Field
export const MD3Select = ({
  label,
  required = false,
  name,
  value,
  onChange,
  children,
  hint,
  className = "",
}) => (
  <div className={className}>
    <label
      className="block text-sm font-medium mb-2"
      style={{ color: required ? "#d93025" : "#202124" }}
    >
      {label}
      {required && "*"}
    </label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 text-sm transition-all duration-200 cursor-pointer appearance-none focus:outline-none"
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #dadce0",
          borderRadius: "8px",
          color: "#202124",
        }}
      >
        {children}
      </select>
      <ChevronDownIcon
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
        style={{ color: "#5f6368" }}
      />
    </div>
    {hint && (
      <p className="text-xs mt-1.5" style={{ color: "#5f6368" }}>
        {hint}
      </p>
    )}
  </div>
);

// MD3 Textarea
export const MD3Textarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 3,
  className = "",
}) => (
  <div className={className}>
    <label
      className="block text-sm font-medium mb-2"
      style={{ color: "#202124" }}
    >
      {label}
    </label>
    <textarea
      name={name}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 text-sm transition-all duration-200 resize-none focus:outline-none"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #dadce0",
        borderRadius: "8px",
        color: "#202124",
      }}
    />
  </div>
);

// MD3 Primary Button
export const MD3Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
  className = "",
}) => {
  const styles = {
    primary: {
      backgroundColor: "#1a73e8",
      color: "#ffffff",
      border: "none",
    },
    secondary: {
      backgroundColor: "#ffffff",
      color: "#5f6368",
      border: "1px solid #dadce0",
    },
    tonal: {
      backgroundColor: "#e8f0fe",
      color: "#1a73e8",
      border: "none",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#1a73e8",
      border: "none",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`py-3 px-6 text-sm font-medium transition-all duration-200 disabled:opacity-50 ${className}`}
      style={{
        ...styles[variant],
        borderRadius: "9999px",
      }}
    >
      {children}
    </button>
  );
};

// MD3 Card Container
export const MD3Card = ({
  children,
  className = "",
  padding = "p-6 sm:p-8",
}) => (
  <div
    className={`${padding} ${className}`}
    style={{
      backgroundColor: "#ffffff",
      borderRadius: "24px",
      boxShadow:
        "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)",
    }}
  >
    {children}
  </div>
);

// MD3 Table Input (for inline table editing)
export const MD3TableInput = ({
  type = "text",
  value,
  onChange,
  placeholder,
  textAlign = "left",
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full px-3 py-2 text-sm focus:outline-none text-${textAlign}`}
    style={{
      backgroundColor: "#f8f9fa",
      border: "none",
      borderRadius: "6px",
      color: "#202124",
    }}
  />
);

// MD3 Divider
export const MD3Divider = ({ className = "my-6" }) => (
  <div
    className={className}
    style={{ height: "1px", backgroundColor: "#e8eaed" }}
  />
);

// MD3 Page Header
export const MD3PageHeader = ({
  title,
  icon: Icon,
  backLink,
  closeLink,
  className = "",
}) => (
  <div className={`flex justify-between items-center mb-8 ${className}`}>
    <div className="flex items-center gap-4">
      {backLink && (
        <a
          href={backLink}
          className="p-2 rounded-full transition-all duration-200 hover:bg-gray-100"
          style={{ color: "#5f6368" }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </a>
      )}
      <div className="flex items-center gap-3">
        {Icon && (
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#e8f0fe" }}
          >
            <Icon className="w-5 h-5" style={{ color: "#1a73e8" }} />
          </div>
        )}
        <h1 className="text-2xl font-normal" style={{ color: "#202124" }}>
          {title}
        </h1>
      </div>
    </div>
    {closeLink && (
      <a
        href={closeLink}
        className="p-2 rounded-full transition-all duration-200 hover:bg-gray-100"
        style={{ color: "#5f6368" }}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </a>
    )}
  </div>
);

// MD3 Total Box
export const MD3TotalBox = ({ subTotal, total, currency = "₹" }) => (
  <div
    className="w-full md:w-1/3 p-5"
    style={{
      backgroundColor: "#f8f9fa",
      borderRadius: "16px",
    }}
  >
    <div
      className="flex justify-between text-sm font-medium mb-3"
      style={{ color: "#5f6368" }}
    >
      <span>Sub Total</span>
      <span>
        {currency}
        {subTotal.toFixed(2)}
      </span>
    </div>
    <MD3Divider className="my-3" />
    <div
      className="flex justify-between text-base font-medium"
      style={{ color: "#202124" }}
    >
      <span>Total ({currency === "₹" ? "INR" : "USD"})</span>
      <span>
        {currency}
        {total.toFixed(2)}
      </span>
    </div>
  </div>
);
