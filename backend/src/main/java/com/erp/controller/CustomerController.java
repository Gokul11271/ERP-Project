package com.erp.controller;

import com.erp.dto.CustomerRequest;
import com.erp.dto.CustomerResponse;
import com.erp.entity.CustomerType;
import com.erp.service.CustomerService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * REST Controller for Customer operations
 */
@RestController
@RequestMapping("/api/customers")
@CrossOrigin
public class CustomerController {

    private static final Logger log = LoggerFactory.getLogger(CustomerController.class);

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    /**
     * Get all customers with pagination
     * GET /api/customers?page=0&size=10&sortBy=displayName&sortDir=asc
     */
    @GetMapping
    public ResponseEntity<Page<CustomerResponse>> getAllCustomers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "displayName") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDir) {

        log.debug("Fetching customers - page: {}, size: {}, sortBy: {}, sortDir: {}", page, size, sortBy, sortDir);
        Page<CustomerResponse> customers = customerService.getAllCustomers(page, size, sortBy, sortDir);
        return ResponseEntity.ok(customers);
    }

    /**
     * Get all customers as a list (without pagination)
     * GET /api/customers/all
     */
    @GetMapping("/all")
    public ResponseEntity<List<CustomerResponse>> getAllCustomersList() {
        log.debug("Fetching all customers as list");
        List<CustomerResponse> customers = customerService.getAllCustomersList();
        return ResponseEntity.ok(customers);
    }

    /**
     * Get customer by ID
     * GET /api/customers/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<CustomerResponse> getCustomerById(@PathVariable Long id) {
        log.debug("Fetching customer with id: {}", id);
        CustomerResponse customer = customerService.getCustomerById(id);
        return ResponseEntity.ok(customer);
    }

    /**
     * Search customers by name or email
     * GET /api/customers/search?q=searchTerm&page=0&size=10
     */
    @GetMapping("/search")
    public ResponseEntity<Page<CustomerResponse>> searchCustomers(
            @RequestParam("q") String searchTerm,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        log.debug("Searching customers with term: {}", searchTerm);
        Page<CustomerResponse> customers = customerService.searchCustomers(searchTerm, page, size);
        return ResponseEntity.ok(customers);
    }

    /**
     * Get customers by type (BUSINESS or INDIVIDUAL)
     * GET /api/customers/type/{type}?page=0&size=10
     */
    @GetMapping("/type/{type}")
    public ResponseEntity<Page<CustomerResponse>> getCustomersByType(
            @PathVariable CustomerType type,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        log.debug("Fetching customers by type: {}", type);
        Page<CustomerResponse> customers = customerService.getCustomersByType(type, page, size);
        return ResponseEntity.ok(customers);
    }

    /**
     * Get customers with outstanding balance
     * GET /api/customers/outstanding
     */
    @GetMapping("/outstanding")
    public ResponseEntity<List<CustomerResponse>> getCustomersWithOutstandingBalance() {
        log.debug("Fetching customers with outstanding balance");
        List<CustomerResponse> customers = customerService.getCustomersWithOutstandingBalance();
        return ResponseEntity.ok(customers);
    }

    /**
     * Get customer statistics
     * GET /api/customers/statistics
     */
    @GetMapping("/statistics")
    public ResponseEntity<CustomerService.CustomerStatistics> getCustomerStatistics() {
        log.debug("Fetching customer statistics");
        CustomerService.CustomerStatistics statistics = customerService.getCustomerStatistics();
        return ResponseEntity.ok(statistics);
    }

    /**
     * Create a new customer
     * POST /api/customers
     */
    @PostMapping
    public ResponseEntity<CustomerResponse> createCustomer(@Valid @RequestBody CustomerRequest request) {
        log.info("Creating new customer: {}", request.getDisplayName());
        CustomerResponse createdCustomer = customerService.createCustomer(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCustomer);
    }

    /**
     * Update an existing customer
     * PUT /api/customers/{id}
     */
    @PutMapping("/{id}")
    public ResponseEntity<CustomerResponse> updateCustomer(
            @PathVariable Long id,
            @Valid @RequestBody CustomerRequest request) {

        log.info("Updating customer with id: {}", id);
        CustomerResponse updatedCustomer = customerService.updateCustomer(id, request);
        return ResponseEntity.ok(updatedCustomer);
    }

    /**
     * Soft delete a customer (set active to false)
     * DELETE /api/customers/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteCustomer(@PathVariable Long id) {
        log.info("Soft deleting customer with id: {}", id);
        customerService.deleteCustomer(id);
        return ResponseEntity.ok(Map.of("message", "Customer deleted successfully"));
    }

    /**
     * Permanently delete a customer (Admin only)
     * DELETE /api/customers/{id}/permanent
     */
    @DeleteMapping("/{id}/permanent")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, String>> permanentlyDeleteCustomer(@PathVariable Long id) {
        log.info("Permanently deleting customer with id: {}", id);
        customerService.permanentlyDeleteCustomer(id);
        return ResponseEntity.ok(Map.of("message", "Customer permanently deleted"));
    }

    /**
     * Restore a soft-deleted customer
     * PUT /api/customers/{id}/restore
     */
    @PutMapping("/{id}/restore")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CustomerResponse> restoreCustomer(@PathVariable Long id) {
        log.info("Restoring customer with id: {}", id);
        CustomerResponse restoredCustomer = customerService.restoreCustomer(id);
        return ResponseEntity.ok(restoredCustomer);
    }
}
