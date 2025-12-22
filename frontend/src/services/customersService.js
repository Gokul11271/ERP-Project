/**
 * Customers Service
 * Handles all customer-related API operations for the ERP system
 * Connects to Spring Boot backend API
 */

import { getAuthHeaders } from "./authService";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

/**
 * Get all customers with pagination
 * @param {number} page - Page number (0-indexed)
 * @param {number} size - Page size
 * @param {string} sortBy - Sort field
 * @param {string} sortDir - Sort direction ('asc' or 'desc')
 * @returns {Promise<{content: Array, totalElements: number, totalPages: number}>}
 */
export const getCustomers = async (
  page = 0,
  size = 10,
  sortBy = "displayName",
  sortDir = "asc"
) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/customers?page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch customers");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

/**
 * Get all customers as a list (without pagination)
 * @returns {Promise<Array>}
 */
export const getAllCustomers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/customers/all`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch customers");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching all customers:", error);
    throw error;
  }
};

/**
 * Get customer by ID
 * @param {number} id - Customer ID
 * @returns {Promise<Object>}
 */
export const getCustomerById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/customers/${id}`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Customer not found");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching customer:", error);
    throw error;
  }
};

/**
 * Search customers by name or email
 * @param {string} searchTerm - Search query
 * @param {number} page - Page number
 * @param {number} size - Page size
 * @returns {Promise<{content: Array, totalElements: number, totalPages: number}>}
 */
export const searchCustomers = async (searchTerm, page = 0, size = 10) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/customers/search?q=${encodeURIComponent(
        searchTerm
      )}&page=${page}&size=${size}`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );

    if (!response.ok) {
      throw new Error("Search failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Error searching customers:", error);
    throw error;
  }
};

/**
 * Get customers by type (BUSINESS or INDIVIDUAL)
 * @param {string} type - Customer type ('BUSINESS' or 'INDIVIDUAL')
 * @param {number} page - Page number
 * @param {number} size - Page size
 * @returns {Promise<{content: Array, totalElements: number, totalPages: number}>}
 */
export const getCustomersByType = async (type, page = 0, size = 10) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/customers/type/${type}?page=${page}&size=${size}`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch customers by type");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching customers by type:", error);
    throw error;
  }
};

/**
 * Get customers with outstanding balance
 * @returns {Promise<Array>}
 */
export const getCustomersWithOutstandingBalance = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/customers/outstanding`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch customers with outstanding balance");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching customers with outstanding balance:", error);
    throw error;
  }
};

/**
 * Get customer statistics
 * @returns {Promise<{totalCustomers: number, businessCount: number, individualCount: number, withOutstandingBalance: number}>}
 */
export const getCustomerStatistics = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/customers/statistics`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch statistics");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching customer statistics:", error);
    throw error;
  }
};

/**
 * Create a new customer
 * @param {Object} customerData - Customer data
 * @returns {Promise<Object>}
 */
export const createCustomer = async (customerData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/customers`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(customerData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || data.message || "Failed to create customer"
      );
    }

    return data;
  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
};

/**
 * Update an existing customer
 * @param {number} id - Customer ID
 * @param {Object} customerData - Updated customer data
 * @returns {Promise<Object>}
 */
export const updateCustomer = async (id, customerData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/customers/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(customerData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || data.message || "Failed to update customer"
      );
    }

    return data;
  } catch (error) {
    console.error("Error updating customer:", error);
    throw error;
  }
};

/**
 * Delete a customer (soft delete)
 * @param {number} id - Customer ID
 * @returns {Promise<{message: string}>}
 */
export const deleteCustomer = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/customers/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || data.message || "Failed to delete customer"
      );
    }

    return data;
  } catch (error) {
    console.error("Error deleting customer:", error);
    throw error;
  }
};

/**
 * Permanently delete a customer (admin only)
 * @param {number} id - Customer ID
 * @returns {Promise<{message: string}>}
 */
export const permanentlyDeleteCustomer = async (id) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/customers/${id}/permanent`,
      {
        method: "DELETE",
        headers: getAuthHeaders(),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || data.message || "Failed to permanently delete customer"
      );
    }

    return data;
  } catch (error) {
    console.error("Error permanently deleting customer:", error);
    throw error;
  }
};

/**
 * Restore a soft-deleted customer
 * @param {number} id - Customer ID
 * @returns {Promise<Object>}
 */
export const restoreCustomer = async (id) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/customers/${id}/restore`,
      {
        method: "PUT",
        headers: getAuthHeaders(),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || data.message || "Failed to restore customer"
      );
    }

    return data;
  } catch (error) {
    console.error("Error restoring customer:", error);
    throw error;
  }
};
