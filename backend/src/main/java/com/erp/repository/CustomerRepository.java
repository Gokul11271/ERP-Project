package com.erp.repository;

import com.erp.entity.Customer;
import com.erp.entity.CustomerType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Repository interface for Customer entity
 */
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    /**
     * Find all active customers
     */
    List<Customer> findByActiveTrue();

    /**
     * Find all active customers with pagination
     */
    Page<Customer> findByActiveTrue(Pageable pageable);

    /**
     * Find customers by type
     */
    List<Customer> findByCustomerType(CustomerType customerType);

    /**
     * Find active customers by type with pagination
     */
    Page<Customer> findByCustomerTypeAndActiveTrue(CustomerType customerType, Pageable pageable);

    /**
     * Find customer by display name
     */
    Optional<Customer> findByDisplayName(String displayName);

    /**
     * Find customer by email
     */
    Optional<Customer> findByEmail(String email);

    /**
     * Check if customer with display name exists
     */
    boolean existsByDisplayName(String displayName);

    /**
     * Check if customer with email exists
     */
    boolean existsByEmail(String email);

    /**
     * Check if customer with display name exists, excluding a specific customer ID
     */
    boolean existsByDisplayNameAndIdNot(String displayName, Long id);

    /**
     * Search customers by name or email (case-insensitive) with pagination
     */
    @Query("SELECT c FROM Customer c WHERE " +
            "(LOWER(c.displayName) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(c.email) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(c.companyName) LIKE LOWER(CONCAT('%', :searchTerm, '%'))) AND c.active = true")
    Page<Customer> searchByNameOrEmail(@Param("searchTerm") String searchTerm, Pageable pageable);

    /**
     * Search customers by name with pagination
     */
    @Query("SELECT c FROM Customer c WHERE LOWER(c.displayName) LIKE LOWER(CONCAT('%', :searchTerm, '%')) AND c.active = true")
    Page<Customer> searchByName(@Param("searchTerm") String searchTerm, Pageable pageable);

    /**
     * Count active customers by type
     */
    long countByCustomerTypeAndActiveTrue(CustomerType customerType);

    /**
     * Count all active customers
     */
    long countByActiveTrue();

    /**
     * Find customers with outstanding balance
     */
    @Query("SELECT c FROM Customer c WHERE c.receivablesBalance > 0 AND c.active = true")
    List<Customer> findCustomersWithOutstandingBalance();

    /**
     * Find customers by status
     */
    List<Customer> findByStatusAndActiveTrue(String status);
}
