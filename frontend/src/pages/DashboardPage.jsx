import React, { useState, useEffect } from "react";
import {
  CurrencyRupeeIcon,
  PlusIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";
import ShimmerDashboard from "../Components/ShimmerDashboard";
import { Link } from "react-router-dom";

/**
 * DashboardPage - Material Design 3 (Google Store Aesthetic)
 */
const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ShimmerDashboard />;
  }

  // Metric Box Component - MD3 Style
  const MetricBox = ({ title, amount, isOverdue = false }) => (
    <div
      className="flex-1 p-5 transition-all duration-200"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #e8eaed",
      }}
    >
      <p
        className="text-xs font-medium uppercase tracking-wide mb-2"
        style={{ color: isOverdue ? "#d93025" : "#5f6368" }}
      >
        {title}
      </p>
      <div
        className="flex items-center text-2xl font-normal"
        style={{ color: isOverdue ? "#d93025" : "#202124" }}
      >
        <CurrencyRupeeIcon className="w-5 h-5 mr-1" />
        {amount.toFixed(2)}
      </div>
    </div>
  );

  // Dashboard Card Component - MD3 Style
  const DashboardCard = ({ title, icon, iconBg, children }) => (
    <div
      className="p-6 flex flex-col"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "24px",
        boxShadow:
          "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)",
      }}
    >
      <div
        className="flex justify-between items-center mb-6 pb-4"
        style={{ borderBottom: "1px solid #e8eaed" }}
      >
        <div className="flex items-center gap-3">
          <span
            className="p-2.5 rounded-xl"
            style={{ backgroundColor: iconBg }}
          >
            {icon}
          </span>
          <h3 className="text-lg font-medium" style={{ color: "#202124" }}>
            {title}
          </h3>
        </div>
        <Link
          to="/items/new"
          className="flex items-center text-sm font-medium py-2 px-4 transition-all duration-200"
          style={{
            color: "#1a73e8",
            backgroundColor: "transparent",
            borderRadius: "9999px",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#e8f0fe")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <PlusIcon className="w-4 h-4 mr-1" />
          <span className="hidden sm:inline">New Item</span>
          <span className="sm:hidden">New</span>
        </Link>
      </div>
      {children}
    </div>
  );

  return (
    <div className="p-6 sm:p-8 space-y-8">
      {/* Page Title & Tabs - MD3 pill-style tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1
          className="text-2xl sm:text-3xl font-normal"
          style={{ color: "#202124" }}
        >
          Dashboard
        </h1>

        {/* Pill-style tabs */}
        <div
          className="flex gap-2 p-1 overflow-x-auto"
          style={{
            backgroundColor: "#e8eaed",
            borderRadius: "9999px",
          }}
        >
          {[
            { id: "overview", label: "Overview" },
            { id: "getting-started", label: "Getting Started" },
            { id: "recent", label: "Recent Updates" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="py-2 px-5 text-sm font-medium transition-all duration-200 whitespace-nowrap"
              style={{
                backgroundColor:
                  activeTab === tab.id ? "#ffffff" : "transparent",
                color: activeTab === tab.id ? "#202124" : "#5f6368",
                borderRadius: "9999px",
                boxShadow:
                  activeTab === tab.id
                    ? "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)"
                    : "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Receivables & Payables Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Total Receivables Card */}
        <DashboardCard
          title="Total Receivables"
          icon={
            <ArrowTrendingUpIcon
              className="w-5 h-5"
              style={{ color: "#1e8e3e" }}
            />
          }
          iconBg="#e6f4ea"
        >
          <div
            className="text-sm mb-6 p-4"
            style={{
              backgroundColor: "#e6f4ea",
              borderRadius: "12px",
              color: "#1e8e3e",
            }}
          >
            Total Unpaid Invoices: <span className="font-medium">₹0.00</span>
          </div>

          <div className="flex gap-4 flex-1">
            <MetricBox title="Current" amount={0.0} />
            <MetricBox title="Overdue" amount={0.0} isOverdue={true} />
          </div>
        </DashboardCard>

        {/* Total Payables Card */}
        <DashboardCard
          title="Total Payables"
          icon={
            <ArrowTrendingDownIcon
              className="w-5 h-5"
              style={{ color: "#d93025" }}
            />
          }
          iconBg="#fce8e6"
        >
          <div
            className="text-sm mb-6 p-4"
            style={{
              backgroundColor: "#fce8e6",
              borderRadius: "12px",
              color: "#d93025",
            }}
          >
            Total Unpaid Bills: <span className="font-medium">₹0.00</span>
          </div>

          <div className="flex gap-4 flex-1">
            <MetricBox title="Current" amount={0.0} />
            <MetricBox title="Overdue" amount={0.0} isOverdue={true} />
          </div>
        </DashboardCard>
      </div>

      {/* Cash Flow Section */}
      <div
        className="p-6"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          boxShadow:
            "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)",
        }}
      >
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 gap-4"
          style={{ borderBottom: "1px solid #e8eaed" }}
        >
          <h3 className="text-lg font-medium" style={{ color: "#202124" }}>
            Cash Flow
          </h3>
          <select
            className="text-sm p-2.5 transition-all duration-200 w-full sm:w-auto cursor-pointer"
            style={{
              backgroundColor: "#f1f3f4",
              border: "none",
              borderRadius: "8px",
              color: "#202124",
            }}
          >
            <option>This Fiscal Year</option>
            <option>Last 30 Days</option>
            <option>Last 12 Months</option>
          </select>
        </div>

        {/* Chart Placeholder */}
        <div
          className="flex h-80 overflow-hidden"
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "16px",
          }}
        >
          {/* Y-Axis Labels */}
          <div
            className="w-12 sm:w-16 py-4 pr-2 sm:pr-4 flex flex-col justify-between text-xs flex-shrink-0"
            style={{
              color: "#5f6368",
              borderRight: "1px solid #e8eaed",
            }}
          >
            <p className="text-right">5 K</p>
            <p className="text-right">4 K</p>
            <p className="text-right">3 K</p>
            <p className="text-right">2 K</p>
            <p className="text-right">1 K</p>
            <p className="text-right">0 K</p>
          </div>

          {/* Chart Area */}
          <div className="flex-1 relative p-4 overflow-x-auto">
            {/* Cash Balance Display */}
            <div
              className="absolute top-4 right-4 p-4 text-right"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                boxShadow:
                  "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)",
              }}
            >
              <p className="text-xs font-medium" style={{ color: "#5f6368" }}>
                Cash as on 01/04/2025
              </p>
              <div
                className="flex items-center justify-end font-medium text-xl mt-1"
                style={{ color: "#1a73e8" }}
              >
                <CurrencyRupeeIcon className="w-5 h-5 mr-1" />
                0.00
              </div>
            </div>

            {/* Chart Placeholder Text */}
            <div className="flex items-center justify-center h-full min-w-[300px] sm:min-w-0">
              <p
                className="text-base font-medium p-6"
                style={{
                  color: "#80868b",
                  border: "2px dashed #dadce0",
                  borderRadius: "16px",
                }}
              >
                Cash Flow Chart Placeholder (Coming Soon)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
