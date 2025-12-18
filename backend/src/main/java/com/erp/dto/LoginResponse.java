package com.erp.dto;

/**
 * DTO for login response containing authentication token and user info
 */
public class LoginResponse {

    private boolean success;
    private String token;
    private String email;
    private String name;
    private String role;
    private String error;

    public LoginResponse() {
    }

    public LoginResponse(boolean success, String token, String email, String name, String role, String error) {
        this.success = success;
        this.token = token;
        this.email = email;
        this.name = name;
        this.role = role;
        this.error = error;
    }

    /**
     * Create a successful login response
     */
    public static LoginResponse success(String token, String email, String name, String role) {
        return new LoginResponse(true, token, email, name, role, null);
    }

    /**
     * Create a failed login response
     */
    public static LoginResponse failure(String error) {
        return new LoginResponse(false, null, null, null, null, error);
    }

    // Getters and Setters
    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
