import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserPlusIcon,
  ArrowUpTrayIcon,
  TrashIcon,
  PlusCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { createCustomer } from "../../services/customersService";

/**
 * NewCustomerPage - Material Design 3 (Google Store Aesthetic)
 */
const NewCustomerPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("details");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    customerType: "business",
    salutation: "Mr.",
    firstName: "",
    lastName: "",
    companyName: "",
    displayName: "",
    email: "",
    workPhone: "",
    mobilePhone: "",
    currency: "INR",
    openingBalance: "",
    paymentTerms: "Due on Receipt",
    enablePortal: false,
    billingAttention: "",
    billingCountry: "",
    billingAddress1: "",
    billingAddress2: "",
    billingCity: "",
    billingState: "",
    billingPinCode: "",
    billingPhone: "",
    shippingAttention: "",
    shippingCountry: "",
    shippingAddress1: "",
    shippingAddress2: "",
    shippingCity: "",
    shippingState: "",
    shippingPinCode: "",
    shippingPhone: "",
    contactPersons: [
      {
        salutation: "Mr.",
        firstName: "",
        lastName: "",
        email: "",
        workPhone: "",
        mobile: "",
      },
    ],
    remarks: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleContactPersonChange = (index, field, value) => {
    const updatedContactPersons = [...formData.contactPersons];
    updatedContactPersons[index][field] = value;
    setFormData((prev) => ({ ...prev, contactPersons: updatedContactPersons }));
  };

  const addContactPerson = () => {
    setFormData((prev) => ({
      ...prev,
      contactPersons: [
        ...prev.contactPersons,
        {
          salutation: "Mr.",
          firstName: "",
          lastName: "",
          email: "",
          workPhone: "",
          mobile: "",
        },
      ],
    }));
  };

  const removeContactPerson = (index) => {
    if (formData.contactPersons.length > 1) {
      setFormData((prev) => ({
        ...prev,
        contactPersons: prev.contactPersons.filter((_, i) => i !== index),
      }));
    }
  };

  const copyBillingAddress = () => {
    setFormData((prev) => ({
      ...prev,
      shippingAttention: prev.billingAttention,
      shippingCountry: prev.billingCountry,
      shippingAddress1: prev.billingAddress1,
      shippingAddress2: prev.billingAddress2,
      shippingCity: prev.billingCity,
      shippingState: prev.billingState,
      shippingPinCode: prev.billingPinCode,
      shippingPhone: prev.billingPhone,
    }));
  };

  const handleSave = async () => {
    if (!formData.displayName.trim()) {
      setError("Display Name is required");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const customerData = {
        customerType: formData.customerType.toUpperCase(),
        salutation: formData.salutation,
        firstName: formData.firstName,
        lastName: formData.lastName,
        companyName: formData.companyName,
        displayName: formData.displayName,
        email: formData.email,
        workPhone: formData.workPhone,
        mobilePhone: formData.mobilePhone,
        currency: formData.currency,
        openingBalance: formData.openingBalance
          ? parseFloat(formData.openingBalance)
          : 0,
        paymentTerms: formData.paymentTerms,
        enablePortal: formData.enablePortal,
        billingAttention: formData.billingAttention,
        billingCountry: formData.billingCountry,
        billingAddress1: formData.billingAddress1,
        billingAddress2: formData.billingAddress2,
        billingCity: formData.billingCity,
        billingState: formData.billingState,
        billingPinCode: formData.billingPinCode,
        billingPhone: formData.billingPhone,
        shippingAttention: formData.shippingAttention,
        shippingCountry: formData.shippingCountry,
        shippingAddress1: formData.shippingAddress1,
        shippingAddress2: formData.shippingAddress2,
        shippingCity: formData.shippingCity,
        shippingState: formData.shippingState,
        shippingPinCode: formData.shippingPinCode,
        shippingPhone: formData.shippingPhone,
        contactPersons: formData.contactPersons,
        remarks: formData.remarks,
      };
      await createCustomer(customerData);
      setSuccess(true);
      setTimeout(() => navigate("/sales/customers"), 1500);
    } catch (err) {
      setError(err.message || "Failed to create customer");
    } finally {
      setLoading(false);
    }
  };

  // Form Input Component - MD3
  const FormInput = ({
    label,
    required,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
  }) => (
    <div>
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

  // Form Select Component - MD3
  const FormSelect = ({ label, required, name, value, onChange, children }) => (
    <div>
      <label
        className="block text-sm font-medium mb-2"
        style={{ color: required ? "#d93025" : "#202124" }}
      >
        {label}
        {required && "*"}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 text-sm transition-all duration-200 cursor-pointer focus:outline-none"
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #dadce0",
          borderRadius: "8px",
          color: "#202124",
        }}
      >
        {children}
      </select>
    </div>
  );

  const tabs = [
    { key: "details", label: "Details" },
    { key: "address", label: "Address" },
    { key: "contacts", label: "Contact Persons" },
    { key: "remarks", label: "Remarks" },
  ];

  return (
    <div
      className="p-6 sm:p-8"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <Link
            to="/sales/customers"
            className="p-2 rounded-full transition-all duration-200 hover:bg-gray-100"
            style={{ color: "#5f6368" }}
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#e8f0fe" }}
            >
              <UserPlusIcon className="w-5 h-5" style={{ color: "#1a73e8" }} />
            </div>
            <h1 className="text-2xl font-normal" style={{ color: "#202124" }}>
              New Customer
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/sales/customers"
            className="py-3 px-6 text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: "#ffffff",
              color: "#5f6368",
              border: "1px solid #dadce0",
              borderRadius: "9999px",
            }}
          >
            Cancel
          </Link>
          <button
            onClick={handleSave}
            disabled={loading}
            className="py-3 px-6 text-sm font-medium text-white transition-all duration-200 disabled:opacity-50"
            style={{ backgroundColor: "#1a73e8", borderRadius: "9999px" }}
          >
            {loading ? "Saving..." : "Save Customer"}
          </button>
        </div>
      </div>

      {/* Success Message */}
      {success && (
        <div
          className="mb-4 p-4 flex items-center gap-3"
          style={{
            backgroundColor: "#e6f4ea",
            borderRadius: "12px",
            color: "#1e8e3e",
          }}
        >
          <CheckCircleIcon className="w-5 h-5" />
          Customer created successfully! Redirecting...
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div
          className="mb-4 p-4 flex items-center gap-3"
          style={{
            backgroundColor: "#fce8e6",
            borderRadius: "12px",
            color: "#d93025",
          }}
        >
          <ExclamationTriangleIcon className="w-5 h-5" />
          {error}
        </div>
      )}

      {/* Form Card */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          boxShadow:
            "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)",
          overflow: "hidden",
        }}
      >
        {/* Tabs */}
        <div
          className="flex gap-2 p-4"
          style={{ borderBottom: "1px solid #e8eaed" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="px-5 py-2.5 text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor:
                  activeTab === tab.key ? "#e8f0fe" : "transparent",
                color: activeTab === tab.key ? "#1a73e8" : "#5f6368",
                borderRadius: "9999px",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8">
          {/* Details Tab */}
          {activeTab === "details" && (
            <div className="space-y-6 max-w-3xl">
              {/* Customer Type */}
              <div className="flex items-center gap-6">
                <label
                  className="text-sm font-medium"
                  style={{ color: "#202124" }}
                >
                  Customer Type
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="customerType"
                    value="business"
                    checked={formData.customerType === "business"}
                    onChange={handleInputChange}
                    style={{ accentColor: "#1a73e8" }}
                  />
                  <span className="text-sm" style={{ color: "#202124" }}>
                    Business
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="customerType"
                    value="individual"
                    checked={formData.customerType === "individual"}
                    onChange={handleInputChange}
                    style={{ accentColor: "#1a73e8" }}
                  />
                  <span className="text-sm" style={{ color: "#202124" }}>
                    Individual
                  </span>
                </label>
              </div>

              {/* Primary Contact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormSelect
                  label="Salutation"
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleInputChange}
                >
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Ms.</option>
                  <option>Dr.</option>
                </FormSelect>
                <FormInput
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                />
                <FormInput
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                />
              </div>

              <FormInput
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              />
              <FormInput
                label="Display Name"
                required
                name="displayName"
                value={formData.displayName}
                onChange={handleInputChange}
                placeholder="This name will be displayed"
              />
              <FormInput
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="Work Phone"
                  name="workPhone"
                  value={formData.workPhone}
                  onChange={handleInputChange}
                />
                <FormInput
                  label="Mobile Phone"
                  name="mobilePhone"
                  value={formData.mobilePhone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormSelect
                  label="Currency"
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                >
                  <option value="INR">INR - Indian Rupee</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                </FormSelect>
                <FormInput
                  label="Opening Balance"
                  type="number"
                  name="openingBalance"
                  value={formData.openingBalance}
                  onChange={handleInputChange}
                />
              </div>

              <FormSelect
                label="Payment Terms"
                name="paymentTerms"
                value={formData.paymentTerms}
                onChange={handleInputChange}
              >
                <option>Due on Receipt</option>
                <option>Net 15</option>
                <option>Net 30</option>
                <option>Net 60</option>
              </FormSelect>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="enablePortal"
                  checked={formData.enablePortal}
                  onChange={handleInputChange}
                  style={{ accentColor: "#1a73e8" }}
                />
                <span className="text-sm" style={{ color: "#5f6368" }}>
                  Allow portal access for this customer
                </span>
              </div>
            </div>
          )}

          {/* Address Tab */}
          {activeTab === "address" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Billing Address */}
              <div className="space-y-5">
                <h3
                  className="text-lg font-medium"
                  style={{
                    color: "#202124",
                    borderBottom: "1px solid #e8eaed",
                    paddingBottom: "8px",
                  }}
                >
                  Billing Address
                </h3>
                <FormInput
                  label="Attention"
                  name="billingAttention"
                  value={formData.billingAttention}
                  onChange={handleInputChange}
                />
                <FormSelect
                  label="Country/Region"
                  name="billingCountry"
                  value={formData.billingCountry}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </FormSelect>
                <FormInput
                  label="Address Line 1"
                  name="billingAddress1"
                  value={formData.billingAddress1}
                  onChange={handleInputChange}
                  placeholder="Street 1"
                />
                <FormInput
                  label="Address Line 2"
                  name="billingAddress2"
                  value={formData.billingAddress2}
                  onChange={handleInputChange}
                  placeholder="Street 2"
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    label="City"
                    name="billingCity"
                    value={formData.billingCity}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="State"
                    name="billingState"
                    value={formData.billingState}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    label="Pin Code"
                    name="billingPinCode"
                    value={formData.billingPinCode}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Phone"
                    name="billingPhone"
                    value={formData.billingPhone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="space-y-5">
                <div
                  className="flex items-center justify-between"
                  style={{
                    borderBottom: "1px solid #e8eaed",
                    paddingBottom: "8px",
                  }}
                >
                  <h3
                    className="text-lg font-medium"
                    style={{ color: "#202124" }}
                  >
                    Shipping Address
                  </h3>
                  <button
                    onClick={copyBillingAddress}
                    className="text-sm font-medium"
                    style={{ color: "#1a73e8" }}
                  >
                    Copy from Billing
                  </button>
                </div>
                <FormInput
                  label="Attention"
                  name="shippingAttention"
                  value={formData.shippingAttention}
                  onChange={handleInputChange}
                />
                <FormSelect
                  label="Country/Region"
                  name="shippingCountry"
                  value={formData.shippingCountry}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </FormSelect>
                <FormInput
                  label="Address Line 1"
                  name="shippingAddress1"
                  value={formData.shippingAddress1}
                  onChange={handleInputChange}
                  placeholder="Street 1"
                />
                <FormInput
                  label="Address Line 2"
                  name="shippingAddress2"
                  value={formData.shippingAddress2}
                  onChange={handleInputChange}
                  placeholder="Street 2"
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    label="City"
                    name="shippingCity"
                    value={formData.shippingCity}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="State"
                    name="shippingState"
                    value={formData.shippingState}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    label="Pin Code"
                    name="shippingPinCode"
                    value={formData.shippingPinCode}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Phone"
                    name="shippingPhone"
                    value={formData.shippingPhone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Contact Persons Tab */}
          {activeTab === "contacts" && (
            <div className="space-y-6">
              {formData.contactPersons.map((contact, index) => (
                <div
                  key={index}
                  className="p-5"
                  style={{ backgroundColor: "#f8f9fa", borderRadius: "16px" }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#202124" }}
                    >
                      Contact Person {index + 1}
                    </span>
                    {formData.contactPersons.length > 1 && (
                      <button
                        onClick={() => removeContactPerson(index)}
                        className="p-1.5 rounded-full transition-all duration-200 hover:bg-red-50"
                        style={{ color: "#d93025" }}
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <select
                      value={contact.salutation}
                      onChange={(e) =>
                        handleContactPersonChange(
                          index,
                          "salutation",
                          e.target.value
                        )
                      }
                      className="px-4 py-3 text-sm focus:outline-none"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #dadce0",
                        borderRadius: "8px",
                        color: "#202124",
                      }}
                    >
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Ms.</option>
                    </select>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={contact.firstName}
                      onChange={(e) =>
                        handleContactPersonChange(
                          index,
                          "firstName",
                          e.target.value
                        )
                      }
                      className="px-4 py-3 text-sm focus:outline-none"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #dadce0",
                        borderRadius: "8px",
                        color: "#202124",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={contact.lastName}
                      onChange={(e) =>
                        handleContactPersonChange(
                          index,
                          "lastName",
                          e.target.value
                        )
                      }
                      className="px-4 py-3 text-sm focus:outline-none"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #dadce0",
                        borderRadius: "8px",
                        color: "#202124",
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <input
                      type="email"
                      placeholder="Email"
                      value={contact.email}
                      onChange={(e) =>
                        handleContactPersonChange(
                          index,
                          "email",
                          e.target.value
                        )
                      }
                      className="px-4 py-3 text-sm focus:outline-none"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #dadce0",
                        borderRadius: "8px",
                        color: "#202124",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Work Phone"
                      value={contact.workPhone}
                      onChange={(e) =>
                        handleContactPersonChange(
                          index,
                          "workPhone",
                          e.target.value
                        )
                      }
                      className="px-4 py-3 text-sm focus:outline-none"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #dadce0",
                        borderRadius: "8px",
                        color: "#202124",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Mobile"
                      value={contact.mobile}
                      onChange={(e) =>
                        handleContactPersonChange(
                          index,
                          "mobile",
                          e.target.value
                        )
                      }
                      className="px-4 py-3 text-sm focus:outline-none"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #dadce0",
                        borderRadius: "8px",
                        color: "#202124",
                      }}
                    />
                  </div>
                </div>
              ))}
              <button
                onClick={addContactPerson}
                className="inline-flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: "#e8f0fe",
                  color: "#1a73e8",
                  borderRadius: "9999px",
                }}
              >
                <PlusCircleIcon className="w-5 h-5 mr-2" />
                Add Contact Person
              </button>
            </div>
          )}

          {/* Remarks Tab */}
          {activeTab === "remarks" && (
            <div className="max-w-2xl">
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#202124" }}
              >
                Remarks
              </label>
              <textarea
                name="remarks"
                rows="5"
                placeholder="Add any remarks or notes about this customer..."
                value={formData.remarks}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-sm transition-all duration-200 resize-none focus:outline-none"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #dadce0",
                  borderRadius: "8px",
                  color: "#202124",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewCustomerPage;
