import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Side-bar";
import {
  BellIcon,
  Cog8ToothIcon,
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
  ArrowLeftEndOnRectangleIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { logout, getUserRole } from "../services/authService";

/**
 * Settings Modal - Material Design 3
 */
const SettingsModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleInvite = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus({ message: "Email is required.", type: "error" });
      return;
    }
    setStatus({
      message:
        "User invitation is currently done via Supabase Dashboard. Go to Authentication > Users to add new users with the appropriate role.",
      type: "error",
    });
    setTimeout(() => setStatus({ message: "", type: "" }), 5000);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.32)" }}
    >
      <div
        className="w-full max-w-lg overflow-hidden animate-fade-in"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "28px",
          boxShadow:
            "0 8px 12px 6px rgba(60, 64, 67, 0.15), 0 4px 4px 0 rgba(60, 64, 67, 0.3)",
        }}
      >
        {/* Header */}
        <div
          className="flex justify-between items-center p-6"
          style={{ borderBottom: "1px solid #e8eaed" }}
        >
          <h3
            className="text-xl font-medium flex items-center gap-3"
            style={{ color: "#202124" }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#e8f0fe" }}
            >
              <UserPlusIcon className="w-5 h-5" style={{ color: "#1a73e8" }} />
            </div>
            Manage Users & Access
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full transition-all duration-200 hover:bg-gray-100"
            style={{ color: "#5f6368" }}
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form className="p-6 space-y-6" onSubmit={handleInvite}>
          {/* Status Message */}
          {status.message && (
            <div
              className="p-4 rounded-xl text-sm font-medium"
              style={{
                backgroundColor:
                  status.type === "success" ? "#e6f4ea" : "#fce8e6",
                color: status.type === "success" ? "#1e8e3e" : "#d93025",
              }}
            >
              {status.message}
            </div>
          )}

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
              style={{ color: "#202124" }}
            >
              User Email (for Invitation)
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 text-base transition duration-200"
              style={{
                border: "1px solid #dadce0",
                borderRadius: "8px",
                color: "#202124",
              }}
              placeholder="user@newcompany.com"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label
              className="block text-sm font-medium mb-3"
              style={{ color: "#202124" }}
            >
              Assign Role
            </label>
            <div className="flex gap-4">
              {/* Admin Role */}
              <label
                className="flex items-center p-4 cursor-pointer w-1/2 transition-all duration-200"
                style={{
                  backgroundColor: role === "Admin" ? "#e8f0fe" : "#ffffff",
                  border:
                    role === "Admin"
                      ? "2px solid #1a73e8"
                      : "1px solid #dadce0",
                  borderRadius: "16px",
                }}
              >
                <input
                  type="radio"
                  name="userRole"
                  value="Admin"
                  checked={role === "Admin"}
                  onChange={() => setRole("Admin")}
                  className="form-radio h-4 w-4"
                  style={{ accentColor: "#1a73e8" }}
                />
                <div className="ml-3">
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#202124" }}
                  >
                    Admin
                  </p>
                  <p className="text-xs" style={{ color: "#5f6368" }}>
                    Full access & configuration
                  </p>
                </div>
              </label>

              {/* Staff Role */}
              <label
                className="flex items-center p-4 cursor-pointer w-1/2 transition-all duration-200"
                style={{
                  backgroundColor: role === "User" ? "#e8f0fe" : "#ffffff",
                  border:
                    role === "User" ? "2px solid #1a73e8" : "1px solid #dadce0",
                  borderRadius: "16px",
                }}
              >
                <input
                  type="radio"
                  name="userRole"
                  value="User"
                  checked={role === "User"}
                  onChange={() => setRole("User")}
                  className="form-radio h-4 w-4"
                  style={{ accentColor: "#1a73e8" }}
                />
                <div className="ml-3">
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#202124" }}
                  >
                    Staff
                  </p>
                  <p className="text-xs" style={{ color: "#5f6368" }}>
                    Sales, Purchase & time tracking
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Footer / Submit */}
          <div className="flex justify-end pt-4 gap-3">
            <button
              type="button"
              onClick={onClose}
              className="py-3 px-6 text-sm font-medium transition-all duration-200 hover:bg-gray-100"
              style={{
                color: "#1a73e8",
                borderRadius: "9999px",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-3 px-6 text-sm font-medium text-white transition-all duration-200"
              style={{
                backgroundColor: "#1a73e8",
                borderRadius: "9999px",
              }}
            >
              Invite User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/**
 * Profile Popup - Material Design 3
 */
const ProfilePopup = ({ role, onLogout }) => (
  <div
    className="absolute right-0 top-14 mt-2 w-64 z-20 overflow-hidden animate-fade-in"
    style={{
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      boxShadow:
        "0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px 0 rgba(60, 64, 67, 0.3)",
    }}
  >
    {/* User Info Section */}
    <div
      className="p-4 flex items-center gap-3"
      style={{ borderBottom: "1px solid #e8eaed" }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "#e8f0fe" }}
      >
        <UserCircleIcon className="w-6 h-6" style={{ color: "#1a73e8" }} />
      </div>
      <div>
        <p className="text-sm font-medium" style={{ color: "#202124" }}>
          Arulmani.G
        </p>
        <span
          className="text-xs font-medium px-2 py-0.5 mt-1 inline-block"
          style={{
            backgroundColor: role === "Admin" ? "#fce8e6" : "#e6f4ea",
            color: role === "Admin" ? "#d93025" : "#1e8e3e",
            borderRadius: "9999px",
          }}
        >
          {role || "Staff"}
        </span>
      </div>
    </div>

    {/* Actions Section */}
    <div className="p-2">
      <button
        onClick={onLogout}
        className="w-full flex items-center gap-3 p-3 text-sm font-medium transition duration-200 hover:bg-red-50"
        style={{
          color: "#d93025",
          borderRadius: "12px",
        }}
      >
        <ArrowLeftEndOnRectangleIcon className="w-5 h-5" />
        <span>Log Out</span>
      </button>
    </div>
  </div>
);

/**
 * Header Component - Material Design 3
 */
const Header = ({ onMenuClick, onSettingsClick }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const userRole = getUserRole();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <header
      className="flex items-center justify-between h-16 px-4 sm:px-6 z-10"
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e8eaed",
      }}
    >
      {/* Left Side: Mobile Menu Button + Company Info */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-full transition-all duration-200 hover:bg-gray-100"
          style={{ color: "#5f6368" }}
        >
          <Bars3Icon className="w-6 h-6" />
        </button>

        <div className="flex flex-col">
          <div className="font-medium text-base" style={{ color: "#202124" }}>
            Hello, Arulmani.G
          </div>
          <div className="text-xs" style={{ color: "#5f6368" }}>
            Kayaa Electronics Pvt Ltd
          </div>
        </div>
      </div>

      {/* Right Side: User Actions */}
      <div className="flex items-center gap-2 sm:gap-3 relative">
        {/* Search Input */}
        <div className="relative hidden md:block">
          <MagnifyingGlassIcon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
            style={{ color: "#80868b" }}
          />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 text-sm w-56 transition-all duration-200"
            style={{
              backgroundColor: "#f1f3f4",
              border: "none",
              borderRadius: "8px",
              color: "#202124",
            }}
          />
        </div>

        {/* Notification Bell */}
        <button
          className="p-2 rounded-full transition-all duration-200 hidden sm:block relative hover:bg-gray-100"
          style={{ color: "#5f6368" }}
        >
          <BellIcon className="w-5 h-5" />
          <span
            className="absolute top-2 right-2 w-2 h-2 rounded-full"
            style={{ backgroundColor: "#d93025" }}
          />
        </button>

        {/* Help */}
        <button
          className="p-2 rounded-full transition-all duration-200 hidden sm:block hover:bg-gray-100"
          style={{ color: "#5f6368" }}
        >
          <QuestionMarkCircleIcon className="w-5 h-5" />
        </button>

        {/* Settings */}
        <button
          onClick={onSettingsClick}
          disabled={userRole !== "Admin"}
          className={`p-2 rounded-full transition-all duration-200 ${
            userRole === "Admin" ? "hover:bg-gray-100" : "cursor-not-allowed"
          }`}
          style={{ color: userRole === "Admin" ? "#5f6368" : "#9aa0a6" }}
        >
          <Cog8ToothIcon className="w-5 h-5" />
        </button>

        {/* User Avatar */}
        <div className="relative">
          <button
            onClick={() => setIsPopupOpen(!isPopupOpen)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium cursor-pointer transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#1a73e8" }}
          >
            AG
          </button>

          {isPopupOpen && (
            <ProfilePopup role={userRole} onLogout={handleLogout} />
          )}
        </div>
      </div>
    </header>
  );
};

/**
 * DashboardLayout - Material Design 3
 * Main layout wrapper with sidebar and header
 */
const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const userRole = getUserRole();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSettingsClick = () => {
    if (userRole === "Admin") {
      setIsSettingsModalOpen(true);
    } else {
      alert("Access Denied: Only Administrators can manage users.");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.32)" }}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Settings Modal */}
      {isSettingsModalOpen && userRole === "Admin" && (
        <SettingsModal onClose={() => setIsSettingsModalOpen(false)} />
      )}

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          onMenuClick={toggleSidebar}
          onSettingsClick={handleSettingsClick}
        />

        {/* Main Content Area */}
        <main
          className="flex-1 overflow-x-hidden overflow-y-auto"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
