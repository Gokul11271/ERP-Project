import React from "react";

/**
 * ShimmerCard Component - Material Design 3 Style
 */
const ShimmerCard = ({ className = "" }) => (
  <div
    className={`p-6 animate-pulse ${className}`}
    style={{
      backgroundColor: "#ffffff",
      borderRadius: "24px",
      boxShadow:
        "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)",
    }}
  >
    {/* Header */}
    <div
      className="flex justify-between items-center mb-6 pb-4"
      style={{ borderBottom: "1px solid #e8eaed" }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl"
          style={{ backgroundColor: "#e8eaed" }}
        />
        <div
          className="h-5 rounded-lg w-32"
          style={{ backgroundColor: "#e8eaed" }}
        />
      </div>
      <div
        className="h-8 rounded-full w-20"
        style={{ backgroundColor: "#e8f0fe" }}
      />
    </div>

    {/* Info Banner */}
    <div
      className="h-12 mb-6 rounded-xl"
      style={{ backgroundColor: "#f1f3f4" }}
    />

    {/* Metric Boxes */}
    <div className="grid grid-cols-2 gap-4">
      <div
        className="p-5 rounded-2xl"
        style={{ backgroundColor: "#f8f9fa", border: "1px solid #e8eaed" }}
      >
        <div
          className="h-3 rounded w-16 mb-3"
          style={{ backgroundColor: "#e8eaed" }}
        />
        <div
          className="h-7 rounded w-24"
          style={{ backgroundColor: "#dadce0" }}
        />
      </div>
      <div
        className="p-5 rounded-2xl"
        style={{ backgroundColor: "#f8f9fa", border: "1px solid #e8eaed" }}
      >
        <div
          className="h-3 rounded w-14 mb-3"
          style={{ backgroundColor: "#e8eaed" }}
        />
        <div
          className="h-7 rounded w-20"
          style={{ backgroundColor: "#dadce0" }}
        />
      </div>
    </div>
  </div>
);

/**
 * ShimmerDashboard - Material Design 3 Loading State
 */
const ShimmerDashboard = () => {
  return (
    <div className="p-6 sm:p-8 space-y-8">
      {/* Header with Tabs Shimmer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div
          className="h-8 rounded-lg w-36"
          style={{ backgroundColor: "#e8eaed" }}
        />

        {/* Pill-style tabs shimmer */}
        <div
          className="flex gap-2 p-1 rounded-full"
          style={{ backgroundColor: "#e8eaed" }}
        >
          <div
            className="h-9 rounded-full w-24"
            style={{ backgroundColor: "#ffffff" }}
          />
          <div
            className="h-9 rounded-full w-28"
            style={{ backgroundColor: "transparent" }}
          />
          <div
            className="h-9 rounded-full w-32"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </div>

      {/* Receivables & Payables Cards Shimmer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ShimmerCard />
        <ShimmerCard />
      </div>

      {/* Cash Flow Section Shimmer */}
      <div
        className="p-6 animate-pulse"
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
          <div
            className="h-5 rounded-lg w-24"
            style={{ backgroundColor: "#e8eaed" }}
          />
          <div
            className="h-10 rounded-lg w-36"
            style={{ backgroundColor: "#f1f3f4" }}
          />
        </div>

        {/* Chart Area Shimmer */}
        <div
          className="flex h-80 p-4 rounded-2xl"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <div className="w-full relative">
            {/* Bar chart placeholder */}
            <div className="flex h-full items-end justify-around gap-4 px-8">
              <div
                className="w-8 rounded-t-lg"
                style={{ backgroundColor: "#e8f0fe", height: "25%" }}
              />
              <div
                className="w-8 rounded-t-lg"
                style={{ backgroundColor: "#d2e3fc", height: "75%" }}
              />
              <div
                className="w-8 rounded-t-lg"
                style={{ backgroundColor: "#e8f0fe", height: "50%" }}
              />
              <div
                className="w-8 rounded-t-lg"
                style={{ backgroundColor: "#d2e3fc", height: "65%" }}
              />
              <div
                className="w-8 rounded-t-lg"
                style={{ backgroundColor: "#e8f0fe", height: "20%" }}
              />
              <div
                className="w-8 rounded-t-lg"
                style={{ backgroundColor: "#d2e3fc", height: "60%" }}
              />
              <div
                className="w-8 rounded-t-lg"
                style={{ backgroundColor: "#e8f0fe", height: "35%" }}
              />
              <div
                className="w-8 rounded-t-lg"
                style={{ backgroundColor: "#d2e3fc", height: "80%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerDashboard;
