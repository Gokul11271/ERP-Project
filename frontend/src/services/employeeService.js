/**
 * Employee Service
 * Handles employee-related API operations
 */

import { getAuthHeaders } from "./authService";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

/**
 * Get all employees
 * @returns {Promise<Array>}
 */
export const getAllEmployees = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/employees`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch employees");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};

/**
 * Get employee by ID
 * @param {number} id
 * @returns {Promise<Object>}
 */
export const getEmployeeById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/employees/${id}`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Employee not found");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching employee:", error);
    throw error;
  }
};

/**
 * Create new employee
 * @param {Object} employeeData
 * @returns {Promise<Object>}
 */
export const createEmployee = async (employeeData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/employees`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(employeeData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to create employee");
    }

    return data;
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};

/**
 * Update employee
 * @param {number} id
 * @param {Object} employeeData
 * @returns {Promise<Object>}
 */
export const updateEmployee = async (id, employeeData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/employees/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(employeeData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Failed to update employee");
      }
  
      return data;
    } catch (error) {
      console.error("Error updating employee:", error);
      throw error;
    }
  };

/**
 * Delete employee
 * @param {number} id
 * @returns {Promise<void>}
 */
export const deleteEmployee = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/employees/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete employee");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
      throw error;
    }
  };

// Export as default object for compatibility with "import employeeService from ..."
export default {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};
