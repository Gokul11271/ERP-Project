package com.erp.controller;

import com.erp.dto.ItemRequest;
import com.erp.dto.ItemResponse;
import com.erp.entity.ItemType;
import com.erp.service.ItemService;
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
 * REST Controller for Item operations
 */
@RestController
@RequestMapping("/api/items")
@CrossOrigin
public class ItemController {

    private static final Logger log = LoggerFactory.getLogger(ItemController.class);

    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    /**
     * Get all items with pagination
     * GET /api/items?page=0&size=10&sortBy=name&sortDir=asc
     */
    @GetMapping
    public ResponseEntity<Page<ItemResponse>> getAllItems(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "name") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDir) {

        log.debug("Fetching items - page: {}, size: {}, sortBy: {}, sortDir: {}", page, size, sortBy, sortDir);
        Page<ItemResponse> items = itemService.getAllItems(page, size, sortBy, sortDir);
        return ResponseEntity.ok(items);
    }

    /**
     * Get all items as a list (without pagination)
     * GET /api/items/all
     */
    @GetMapping("/all")
    public ResponseEntity<List<ItemResponse>> getAllItemsList() {
        log.debug("Fetching all items as list");
        List<ItemResponse> items = itemService.getAllItemsList();
        return ResponseEntity.ok(items);
    }

    /**
     * Get item by ID
     * GET /api/items/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<ItemResponse> getItemById(@PathVariable Long id) {
        log.debug("Fetching item with id: {}", id);
        ItemResponse item = itemService.getItemById(id);
        return ResponseEntity.ok(item);
    }

    /**
     * Get item by SKU
     * GET /api/items/sku/{sku}
     */
    @GetMapping("/sku/{sku}")
    public ResponseEntity<ItemResponse> getItemBySku(@PathVariable String sku) {
        log.debug("Fetching item with SKU: {}", sku);
        ItemResponse item = itemService.getItemBySku(sku);
        return ResponseEntity.ok(item);
    }

    /**
     * Search items by name or SKU
     * GET /api/items/search?q=searchTerm&page=0&size=10
     */
    @GetMapping("/search")
    public ResponseEntity<Page<ItemResponse>> searchItems(
            @RequestParam("q") String searchTerm,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        log.debug("Searching items with term: {}", searchTerm);
        Page<ItemResponse> items = itemService.searchItems(searchTerm, page, size);
        return ResponseEntity.ok(items);
    }

    /**
     * Get items by type (GOODS or SERVICE)
     * GET /api/items/type/{type}?page=0&size=10
     */
    @GetMapping("/type/{type}")
    public ResponseEntity<Page<ItemResponse>> getItemsByType(
            @PathVariable ItemType type,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        log.debug("Fetching items by type: {}", type);
        Page<ItemResponse> items = itemService.getItemsByType(type, page, size);
        return ResponseEntity.ok(items);
    }

    /**
     * Get sellable items (for sales orders)
     * GET /api/items/sellable
     */
    @GetMapping("/sellable")
    public ResponseEntity<List<ItemResponse>> getSellableItems() {
        log.debug("Fetching sellable items");
        List<ItemResponse> items = itemService.getSellableItems();
        return ResponseEntity.ok(items);
    }

    /**
     * Get purchasable items (for purchase orders)
     * GET /api/items/purchasable
     */
    @GetMapping("/purchasable")
    public ResponseEntity<List<ItemResponse>> getPurchasableItems() {
        log.debug("Fetching purchasable items");
        List<ItemResponse> items = itemService.getPurchasableItems();
        return ResponseEntity.ok(items);
    }

    /**
     * Get low stock items
     * GET /api/items/low-stock
     */
    @GetMapping("/low-stock")
    public ResponseEntity<List<ItemResponse>> getLowStockItems() {
        log.debug("Fetching low stock items");
        List<ItemResponse> items = itemService.getLowStockItems();
        return ResponseEntity.ok(items);
    }

    /**
     * Get item statistics
     * GET /api/items/statistics
     */
    @GetMapping("/statistics")
    public ResponseEntity<ItemService.ItemStatistics> getItemStatistics() {
        log.debug("Fetching item statistics");
        ItemService.ItemStatistics statistics = itemService.getItemStatistics();
        return ResponseEntity.ok(statistics);
    }

    /**
     * Create a new item
     * POST /api/items
     */
    @PostMapping
    public ResponseEntity<ItemResponse> createItem(@Valid @RequestBody ItemRequest request) {
        log.info("Creating new item: {}", request.getName());
        ItemResponse createdItem = itemService.createItem(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdItem);
    }

    /**
     * Update an existing item
     * PUT /api/items/{id}
     */
    @PutMapping("/{id}")
    public ResponseEntity<ItemResponse> updateItem(
            @PathVariable Long id,
            @Valid @RequestBody ItemRequest request) {

        log.info("Updating item with id: {}", id);
        ItemResponse updatedItem = itemService.updateItem(id, request);
        return ResponseEntity.ok(updatedItem);
    }

    /**
     * Soft delete an item (set active to false)
     * DELETE /api/items/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteItem(@PathVariable Long id) {
        log.info("Soft deleting item with id: {}", id);
        itemService.deleteItem(id);
        return ResponseEntity.ok(Map.of("message", "Item deleted successfully"));
    }

    /**
     * Permanently delete an item (Admin only)
     * DELETE /api/items/{id}/permanent
     */
    @DeleteMapping("/{id}/permanent")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, String>> permanentlyDeleteItem(@PathVariable Long id) {
        log.info("Permanently deleting item with id: {}", id);
        itemService.permanentlyDeleteItem(id);
        return ResponseEntity.ok(Map.of("message", "Item permanently deleted"));
    }

    /**
     * Restore a soft-deleted item
     * PUT /api/items/{id}/restore
     */
    @PutMapping("/{id}/restore")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ItemResponse> restoreItem(@PathVariable Long id) {
        log.info("Restoring item with id: {}", id);
        ItemResponse restoredItem = itemService.restoreItem(id);
        return ResponseEntity.ok(restoredItem);
    }
}
