package com.erp.repository;

import com.erp.entity.Item;
import com.erp.entity.ItemType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Repository interface for Item entity
 */
@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    /**
     * Find all active items
     */
    List<Item> findByActiveTrue();

    /**
     * Find all active items with pagination
     */
    Page<Item> findByActiveTrue(Pageable pageable);

    /**
     * Find items by type
     */
    List<Item> findByType(ItemType type);

    /**
     * Find active items by type with pagination
     */
    Page<Item> findByTypeAndActiveTrue(ItemType type, Pageable pageable);

    /**
     * Find item by SKU
     */
    Optional<Item> findBySku(String sku);

    /**
     * Find item by barcode
     */
    Optional<Item> findByBarcode(String barcode);

    /**
     * Check if item with name exists
     */
    boolean existsByName(String name);

    /**
     * Check if item with SKU exists
     */
    boolean existsBySku(String sku);

    /**
     * Check if item with SKU exists, excluding a specific item ID
     */
    boolean existsBySkuAndIdNot(String sku, Long id);

    /**
     * Search items by name (case-insensitive) with pagination
     */
    @Query("SELECT i FROM Item i WHERE LOWER(i.name) LIKE LOWER(CONCAT('%', :searchTerm, '%')) AND i.active = true")
    Page<Item> searchByName(@Param("searchTerm") String searchTerm, Pageable pageable);

    /**
     * Search items by name or SKU (case-insensitive) with pagination
     */
    @Query("SELECT i FROM Item i WHERE " +
            "(LOWER(i.name) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
            "LOWER(i.sku) LIKE LOWER(CONCAT('%', :searchTerm, '%'))) AND i.active = true")
    Page<Item> searchByNameOrSku(@Param("searchTerm") String searchTerm, Pageable pageable);

    /**
     * Find sellable items (for sales orders)
     */
    List<Item> findBySellableTrueAndActiveTrue();

    /**
     * Find purchasable items (for purchase orders)
     */
    List<Item> findByPurchasableTrueAndActiveTrue();

    /**
     * Find items with low stock (stock below reorder level)
     */
    @Query("SELECT i FROM Item i WHERE i.stockQuantity <= i.reorderLevel AND i.active = true AND i.type = 'GOODS'")
    List<Item> findLowStockItems();

    /**
     * Count active items by type
     */
    long countByTypeAndActiveTrue(ItemType type);

    /**
     * Count all active items
     */
    long countByActiveTrue();
}
