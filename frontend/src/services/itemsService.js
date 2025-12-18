/**
 * Items Service
 * Handles all item-related API operations for the ERP system
 * Connects to Spring Boot backend API
 */

import { getAuthHeaders } from "./authService";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

/**
 * Get all items with pagination
 * @param {number} page - Page number (0-indexed)
 * @param {number} size - Page size
 * @param {string} sortBy - Sort field
 * @param {string} sortDir - Sort direction ('asc' or 'desc')
 * @returns {Promise<{content: Array, totalElements: number, totalPages: number}>}
 */
export const getItems = async (
  page = 0,
  size = 10,
  sortBy = "name",
  sortDir = "asc"
) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/items?page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

/**
 * Get all items as a list (without pagination)
 * @returns {Promise<Array>}
 */
export const getAllItems = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/items/all`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching all items:", error);
    throw error;
  }
};

/**
 * Get item by ID
 * @param {number} id - Item ID
 * @returns {Promise<Object>}
 */
export const getItemById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/items/${id}`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Item not found");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching item:", error);
    throw error;
  }
};

/**
 * Search items by name or SKU
 * @param {string} searchTerm - Search query
 * @param {number} page - Page number
 * @param {number} size - Page size
 * @returns {Promise<{content: Array, totalElements: number, totalPages: number}>}
 */
export const searchItems = async (searchTerm, page = 0, size = 10) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/items/search?q=${encodeURIComponent(
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
    console.error("Error searching items:", error);
    throw error;
  }
};

/**
 * Get items by type (GOODS or SERVICE)
 * @param {string} type - Item type ('GOODS' or 'SERVICE')
 * @param {number} page - Page number
 * @param {number} size - Page size
 * @returns {Promise<{content: Array, totalElements: number, totalPages: number}>}
 */
export const getItemsByType = async (type, page = 0, size = 10) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/items/type/${type}?page=${page}&size=${size}`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch items by type");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching items by type:", error);
    throw error;
  }
};

/**
 * Get sellable items
 * @returns {Promise<Array>}
 */
export const getSellableItems = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/items/sellable`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch sellable items");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching sellable items:", error);
    throw error;
  }
};

/**
 * Get purchasable items
 * @returns {Promise<Array>}
 */
export const getPurchasableItems = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/items/purchasable`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch purchasable items");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching purchasable items:", error);
    throw error;
  }
};

/**
 * Get item statistics
 * @returns {Promise<{totalItems: number, goodsCount: number, servicesCount: number, lowStockCount: number}>}
 */
export const getItemStatistics = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/items/statistics`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch statistics");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching item statistics:", error);
    throw error;
  }
};

/**
 * Create a new item
 * @param {Object} itemData - Item data
 * @returns {Promise<Object>}
 */
export const createItem = async (itemData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/items`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(itemData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to create item");
    }

    return data;
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
};

/**
 * Update an existing item
 * @param {number} id - Item ID
 * @param {Object} itemData - Updated item data
 * @returns {Promise<Object>}
 */
export const updateItem = async (id, itemData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/items/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(itemData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to update item");
    }

    return data;
  } catch (error) {
    console.error("Error updating item:", error);
    throw error;
  }
};

/**
 * Delete an item (soft delete)
 * @param {number} id - Item ID
 * @returns {Promise<{message: string}>}
 */
export const deleteItem = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/items/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to delete item");
    }

    return data;
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};

/**
 * Permanently delete an item (admin only)
 * @param {number} id - Item ID
 * @returns {Promise<{message: string}>}
 */
export const permanentlyDeleteItem = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/items/${id}/permanent`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to permanently delete item");
    }

    return data;
  } catch (error) {
    console.error("Error permanently deleting item:", error);
    throw error;
  }
};

/**
 * Restore a soft-deleted item
 * @param {number} id - Item ID
 * @returns {Promise<Object>}
 */
export const restoreItem = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/items/${id}/restore`, {
      method: "PUT",
      headers: getAuthHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to restore item");
    }

    return data;
  } catch (error) {
    console.error("Error restoring item:", error);
    throw error;
  }
};
