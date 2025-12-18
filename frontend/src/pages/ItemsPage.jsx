import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
  PlusIcon,
  TrashIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { getItems, searchItems, deleteItem } from "../services/itemsService";

const ItemsPage = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [successMessage, setSuccessMessage] = useState(
    location.state?.message || null
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  // Fetch items on component mount and when page changes
  useEffect(() => {
    fetchItems();
  }, [currentPage]);

  // Clear success message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getItems(currentPage, 10, "name", "asc");
      setItems(data.content || []);
      setTotalPages(data.totalPages || 0);
      setTotalElements(data.totalElements || 0);
    } catch (err) {
      setError("Failed to load items. Please ensure the backend is running.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      fetchItems();
      return;
    }

    try {
      setLoading(true);
      const data = await searchItems(term, 0, 10);
      setItems(data.content || []);
      setTotalPages(data.totalPages || 0);
      setTotalElements(data.totalElements || 0);
    } catch (err) {
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) {
      return;
    }

    try {
      await deleteItem(id);
      setSuccessMessage("Item deleted successfully!");
      fetchItems();
    } catch (err) {
      setError("Failed to delete item");
    }
  };

  const formatCurrency = (amount) => {
    if (amount === null || amount === undefined) return "-";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    // Responsive padding
    <div className="p-4 sm:p-8">
      {/* Header - Consistent Look */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          All Items
        </h1>
        <div className="flex items-center space-x-4">
          {/* New Item Button - Primary/Elevated Style (responsive text) */}
          <Link
            to="/items/new"
            className="flex items-center bg-blue-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-150"
          >
            <PlusIcon className="w-5 h-5 mr-1" />
            <span className="hidden sm:inline">New Item</span>
            <span className="sm:hidden">New</span>
          </Link>
          <button className="p-2 rounded-full hover:bg-gray-100 transition duration-150">
            <EllipsisVerticalIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
          {successMessage}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
          <button
            onClick={fetchItems}
            className="ml-4 underline hover:text-red-900"
          >
            Retry
          </button>
        </div>
      )}

      {/* Content Card - Consistent Elevation */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 min-h-[70vh]">
        {/* Search and filter row - made responsive */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-3 md:space-y-0">
          <div className="text-sm text-gray-600">
            {!loading &&
              `${totalElements} item${totalElements !== 1 ? "s" : ""} found`}
          </div>
          <div className="flex items-center w-full md:w-auto">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search item name or SKU..."
              value={searchTerm}
              onChange={handleSearch}
              className="border border-gray-300 rounded-lg p-1.5 text-sm focus:ring-blue-500 focus:border-blue-500 w-full md:w-64"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Table Container - Critical for responsiveness (overflow-x-auto) */}
        {!loading && items.length > 0 && (
          <div className="overflow-x-auto whitespace-nowrap border-t border-gray-200">
            {/* Table Header Structure - min-w ensures content doesn't squash */}
            <div className="flex items-center border-b border-gray-200 py-3 text-sm font-semibold text-gray-700 min-w-[900px]">
              <span className="w-[20%] px-2 cursor-pointer hover:text-blue-600">
                NAME ↑
              </span>
              <span className="w-[10%] px-2">TYPE</span>
              <span className="w-[15%] px-2">SELLING PRICE</span>
              <span className="w-[15%] px-2">COST PRICE</span>
              <span className="w-[20%] px-2">DESCRIPTION</span>
              <span className="w-[10%] px-2">UNIT</span>
              <span className="w-[10%] px-2">ACTIONS</span>
            </div>

            {/* Table Rows */}
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b border-gray-100 py-3 text-sm text-gray-700 min-w-[900px] hover:bg-gray-50"
              >
                <span className="w-[20%] px-2 font-medium text-gray-900">
                  {item.name}
                </span>
                <span className="w-[10%] px-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.type === "GOODS"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {item.type}
                  </span>
                </span>
                <span className="w-[15%] px-2">
                  {formatCurrency(item.sellingPrice)}
                </span>
                <span className="w-[15%] px-2">
                  {formatCurrency(item.costPrice)}
                </span>
                <span
                  className="w-[20%] px-2 truncate"
                  title={item.salesDescription}
                >
                  {item.salesDescription || "-"}
                </span>
                <span className="w-[10%] px-2">{item.unit || "-"}</span>
                <span className="w-[10%] px-2 flex space-x-2">
                  <Link
                    to={`/items/${item.id}/edit`}
                    className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                    title="Edit"
                  >
                    <PencilIcon className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id, item.name)}
                    className="p-1 text-red-600 hover:bg-red-50 rounded"
                    title="Delete"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && items.length === 0 && !error && (
          <div
            className="flex flex-col items-center justify-center h-full pt-20"
            style={{ minHeight: "40vh" }}
          >
            <svg
              className="w-16 h-16 text-blue-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H10v-2.828l8.586-8.586z"
              ></path>
            </svg>
            <p className="text-xl font-semibold text-gray-700 mb-2">
              No Items Found
            </p>
            <p className="text-gray-500 text-center">
              Goods and Services, if they have a price tag, put them here. Click
              'New Item' to get started.
            </p>
          </div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center mt-6 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
              }
              disabled={currentPage >= totalPages - 1}
              className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsPage;
