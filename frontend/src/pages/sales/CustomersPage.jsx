import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
  PlusIcon,
  UserGroupIcon,
  ArrowPathIcon,
  TrashIcon,
  PencilIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import {
  getCustomers,
  searchCustomers,
  deleteCustomer,
} from "../../services/customersService";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [pageSize] = useState(10);
  const [sortBy, setSortBy] = useState("displayName");
  const [sortDir, setSortDir] = useState("asc");
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);

  // Fetch customers
  const fetchCustomers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let data;
      if (searchTerm.trim()) {
        data = await searchCustomers(searchTerm, currentPage, pageSize);
      } else {
        data = await getCustomers(currentPage, pageSize, sortBy, sortDir);
      }
      setCustomers(data.content || []);
      setTotalPages(data.totalPages || 0);
      setTotalElements(data.totalElements || 0);
    } catch (err) {
      setError(err.message || "Failed to fetch customers");
      setCustomers([]);
    } finally {
      setLoading(false);
    }
  }, [currentPage, pageSize, sortBy, sortDir, searchTerm]);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  // Handle search with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage(0);
      fetchCustomers();
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Handle sort
  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDir("asc");
    }
    setCurrentPage(0);
  };

  // Handle select all
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedCustomers(customers.map((c) => c.id));
    } else {
      setSelectedCustomers([]);
    }
  };

  // Handle individual select
  const handleSelect = (id) => {
    if (selectedCustomers.includes(id)) {
      setSelectedCustomers(selectedCustomers.filter((i) => i !== id));
    } else {
      setSelectedCustomers([...selectedCustomers, id]);
    }
  };

  // Handle delete
  const handleDeleteClick = (customer) => {
    setCustomerToDelete(customer);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!customerToDelete) return;
    try {
      await deleteCustomer(customerToDelete.id);
      setDeleteModalOpen(false);
      setCustomerToDelete(null);
      fetchCustomers();
    } catch (err) {
      setError(err.message || "Failed to delete customer");
    }
  };

  // Format currency
  const formatCurrency = (amount, currency = "INR") => {
    if (amount === null || amount === undefined) return "₹0.00";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="p-4 sm:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Customers
        </h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={fetchCustomers}
            className="p-2 rounded-full hover:bg-gray-100 transition duration-150"
            title="Refresh"
          >
            <ArrowPathIcon
              className={`w-5 h-5 text-gray-500 ${
                loading ? "animate-spin" : ""
              }`}
            />
          </button>
          <Link
            to="/sales/customers/new"
            className="flex items-center bg-blue-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-150"
          >
            <PlusIcon className="w-5 h-5 mr-1" />
            <span className="hidden sm:inline">New Customer</span>
            <span className="sm:hidden">New</span>
          </Link>
          <button className="p-2 rounded-full hover:bg-gray-100 transition duration-150">
            <EllipsisVerticalIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 min-h-[70vh]">
        {/* Search and filter row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-3 md:space-y-0">
          <div className="text-sm text-gray-600">
            {totalElements > 0 &&
              `Showing ${customers.length} of ${totalElements} customers`}
          </div>
          <div className="flex items-center w-full md:w-auto">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search customer name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-lg p-1.5 text-sm focus:ring-blue-500 focus:border-blue-500 w-full md:w-48"
            />
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 flex items-center">
            <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
            {error}
          </div>
        )}

        {/* Loading state */}
        {loading ? (
          <div
            className="flex flex-col items-center justify-center h-full pt-20"
            style={{ minHeight: "40vh" }}
          >
            <ArrowPathIcon className="w-12 h-12 text-blue-500 animate-spin mb-4" />
            <p className="text-gray-500">Loading customers...</p>
          </div>
        ) : customers.length === 0 ? (
          /* Empty State */
          <div
            className="flex flex-col items-center justify-center h-full pt-20"
            style={{ minHeight: "40vh" }}
          >
            <UserGroupIcon className="w-16 h-16 text-blue-300 mb-4" />
            <p className="text-xl font-semibold text-gray-700 mb-2">
              No Customers Found
            </p>
            <p className="text-gray-500 text-center">
              {searchTerm
                ? "No customers match your search criteria."
                : "Your customer contact list is currently empty. Click 'New Customer' to add one."}
            </p>
          </div>
        ) : (
          /* Table */
          <div className="overflow-x-auto whitespace-nowrap border-t border-gray-200">
            {/* Table Header */}
            <div className="flex items-center border-b border-gray-200 py-3 text-sm font-semibold text-gray-700 min-w-[900px]">
              <input
                type="checkbox"
                className="mr-4 text-blue-600 rounded"
                checked={
                  selectedCustomers.length === customers.length &&
                  customers.length > 0
                }
                onChange={handleSelectAll}
              />
              <span
                className="w-[22%] px-2 cursor-pointer hover:text-blue-600"
                onClick={() => handleSort("displayName")}
              >
                NAME{" "}
                {sortBy === "displayName" && (sortDir === "asc" ? "↑" : "↓")}
              </span>
              <span className="w-[18%] px-2">EMAIL</span>
              <span className="w-[12%] px-2">PHONE</span>
              <span
                className="w-[15%] px-2 cursor-pointer hover:text-blue-600"
                onClick={() => handleSort("receivablesBalance")}
              >
                RECEIVABLES{" "}
                {sortBy === "receivablesBalance" &&
                  (sortDir === "asc" ? "↑" : "↓")}
              </span>
              <span className="w-[13%] px-2">LAST CONTACT</span>
              <span className="w-[10%] px-2">STATUS</span>
              <span className="w-[10%] px-2 text-right">ACTIONS</span>
            </div>

            {/* Table Rows */}
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="flex items-center border-b border-gray-100 py-3 text-sm text-gray-700 min-w-[900px] hover:bg-gray-50 transition"
              >
                <input
                  type="checkbox"
                  className="mr-4 text-blue-600 rounded"
                  checked={selectedCustomers.includes(customer.id)}
                  onChange={() => handleSelect(customer.id)}
                />
                <span className="w-[22%] px-2 font-medium text-gray-900 truncate">
                  {customer.displayName}
                  {customer.companyName && (
                    <span className="text-xs text-gray-500 block">
                      {customer.companyName}
                    </span>
                  )}
                </span>
                <span className="w-[18%] px-2 truncate">
                  {customer.email || "-"}
                </span>
                <span className="w-[12%] px-2">
                  {customer.mobilePhone || customer.workPhone || "-"}
                </span>
                <span className="w-[15%] px-2 font-medium">
                  {formatCurrency(
                    customer.receivablesBalance,
                    customer.currency
                  )}
                </span>
                <span className="w-[13%] px-2 text-gray-500">
                  {formatDate(customer.lastContactAt)}
                </span>
                <span className="w-[10%] px-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      customer.status === "ACTIVE"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {customer.status || "ACTIVE"}
                  </span>
                </span>
                <span className="w-[10%] px-2 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Link
                      to={`/sales/customers/edit/${customer.id}`}
                      className="p-1.5 rounded hover:bg-blue-100 text-blue-600 transition"
                      title="Edit"
                    >
                      <PencilIcon className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDeleteClick(customer)}
                      className="p-1.5 rounded hover:bg-red-100 text-red-600 transition"
                      title="Delete"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </span>
              </div>
            ))}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between py-4 px-2">
                <div className="text-sm text-gray-600">
                  Page {currentPage + 1} of {totalPages}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                    disabled={currentPage === 0}
                    className="px-3 py-1 text-sm border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages - 1, currentPage + 1))
                    }
                    disabled={currentPage >= totalPages - 1}
                    className="px-3 py-1 text-sm border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex items-center mb-4">
              <ExclamationTriangleIcon className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">
                Delete Customer
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete{" "}
              <span className="font-semibold">
                {customerToDelete?.displayName}
              </span>
              ? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setDeleteModalOpen(false);
                  setCustomerToDelete(null);
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomersPage;
