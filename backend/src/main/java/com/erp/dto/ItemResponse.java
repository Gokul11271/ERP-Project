package com.erp.dto;

import com.erp.entity.Item;
import com.erp.entity.ItemType;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * DTO for item response data
 */
public class ItemResponse {

    private Long id;
    private String name;
    private ItemType type;
    private String unit;

    // Sales Information
    private boolean sellable;
    private BigDecimal sellingPrice;
    private String salesAccount;
    private String salesDescription;

    // Purchase Information
    private boolean purchasable;
    private BigDecimal costPrice;
    private String purchaseAccount;
    private String purchaseDescription;
    private String preferredVendor;

    // Stock Information
    private BigDecimal stockQuantity;
    private BigDecimal reorderLevel;

    // SKU/Barcode
    private String sku;
    private String barcode;

    // Tax Information
    private BigDecimal taxRate;
    private String hsnCode;

    // Status
    private boolean active;

    // Audit Information
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String createdBy;
    private String updatedBy;

    // Constructors
    public ItemResponse() {
    }

    public ItemResponse(Long id, String name, ItemType type, String unit, boolean sellable,
            BigDecimal sellingPrice, String salesAccount, String salesDescription,
            boolean purchasable, BigDecimal costPrice, String purchaseAccount,
            String purchaseDescription, String preferredVendor, BigDecimal stockQuantity,
            BigDecimal reorderLevel, String sku, String barcode, BigDecimal taxRate,
            String hsnCode, boolean active, LocalDateTime createdAt, LocalDateTime updatedAt,
            String createdBy, String updatedBy) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.unit = unit;
        this.sellable = sellable;
        this.sellingPrice = sellingPrice;
        this.salesAccount = salesAccount;
        this.salesDescription = salesDescription;
        this.purchasable = purchasable;
        this.costPrice = costPrice;
        this.purchaseAccount = purchaseAccount;
        this.purchaseDescription = purchaseDescription;
        this.preferredVendor = preferredVendor;
        this.stockQuantity = stockQuantity;
        this.reorderLevel = reorderLevel;
        this.sku = sku;
        this.barcode = barcode;
        this.taxRate = taxRate;
        this.hsnCode = hsnCode;
        this.active = active;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
    }

    /**
     * Static factory method to convert Item entity to ItemResponse DTO
     */
    public static ItemResponse fromEntity(Item item) {
        return ItemResponse.builder()
                .id(item.getId())
                .name(item.getName())
                .type(item.getType())
                .unit(item.getUnit())
                .sellable(item.isSellable())
                .sellingPrice(item.getSellingPrice())
                .salesAccount(item.getSalesAccount())
                .salesDescription(item.getSalesDescription())
                .purchasable(item.isPurchasable())
                .costPrice(item.getCostPrice())
                .purchaseAccount(item.getPurchaseAccount())
                .purchaseDescription(item.getPurchaseDescription())
                .preferredVendor(item.getPreferredVendor())
                .stockQuantity(item.getStockQuantity())
                .reorderLevel(item.getReorderLevel())
                .sku(item.getSku())
                .barcode(item.getBarcode())
                .taxRate(item.getTaxRate())
                .hsnCode(item.getHsnCode())
                .active(item.isActive())
                .createdAt(item.getCreatedAt())
                .updatedAt(item.getUpdatedAt())
                .createdBy(item.getCreatedBy())
                .updatedBy(item.getUpdatedBy())
                .build();
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ItemType getType() {
        return type;
    }

    public void setType(ItemType type) {
        this.type = type;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public boolean isSellable() {
        return sellable;
    }

    public void setSellable(boolean sellable) {
        this.sellable = sellable;
    }

    public BigDecimal getSellingPrice() {
        return sellingPrice;
    }

    public void setSellingPrice(BigDecimal sellingPrice) {
        this.sellingPrice = sellingPrice;
    }

    public String getSalesAccount() {
        return salesAccount;
    }

    public void setSalesAccount(String salesAccount) {
        this.salesAccount = salesAccount;
    }

    public String getSalesDescription() {
        return salesDescription;
    }

    public void setSalesDescription(String salesDescription) {
        this.salesDescription = salesDescription;
    }

    public boolean isPurchasable() {
        return purchasable;
    }

    public void setPurchasable(boolean purchasable) {
        this.purchasable = purchasable;
    }

    public BigDecimal getCostPrice() {
        return costPrice;
    }

    public void setCostPrice(BigDecimal costPrice) {
        this.costPrice = costPrice;
    }

    public String getPurchaseAccount() {
        return purchaseAccount;
    }

    public void setPurchaseAccount(String purchaseAccount) {
        this.purchaseAccount = purchaseAccount;
    }

    public String getPurchaseDescription() {
        return purchaseDescription;
    }

    public void setPurchaseDescription(String purchaseDescription) {
        this.purchaseDescription = purchaseDescription;
    }

    public String getPreferredVendor() {
        return preferredVendor;
    }

    public void setPreferredVendor(String preferredVendor) {
        this.preferredVendor = preferredVendor;
    }

    public BigDecimal getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(BigDecimal stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public BigDecimal getReorderLevel() {
        return reorderLevel;
    }

    public void setReorderLevel(BigDecimal reorderLevel) {
        this.reorderLevel = reorderLevel;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public String getBarcode() {
        return barcode;
    }

    public void setBarcode(String barcode) {
        this.barcode = barcode;
    }

    public BigDecimal getTaxRate() {
        return taxRate;
    }

    public void setTaxRate(BigDecimal taxRate) {
        this.taxRate = taxRate;
    }

    public String getHsnCode() {
        return hsnCode;
    }

    public void setHsnCode(String hsnCode) {
        this.hsnCode = hsnCode;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    // Builder pattern
    public static ItemResponseBuilder builder() {
        return new ItemResponseBuilder();
    }

    public static class ItemResponseBuilder {
        private Long id;
        private String name;
        private ItemType type;
        private String unit;
        private boolean sellable;
        private BigDecimal sellingPrice;
        private String salesAccount;
        private String salesDescription;
        private boolean purchasable;
        private BigDecimal costPrice;
        private String purchaseAccount;
        private String purchaseDescription;
        private String preferredVendor;
        private BigDecimal stockQuantity;
        private BigDecimal reorderLevel;
        private String sku;
        private String barcode;
        private BigDecimal taxRate;
        private String hsnCode;
        private boolean active;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private String createdBy;
        private String updatedBy;

        public ItemResponseBuilder id(Long id) {
            this.id = id;
            return this;
        }

        public ItemResponseBuilder name(String name) {
            this.name = name;
            return this;
        }

        public ItemResponseBuilder type(ItemType type) {
            this.type = type;
            return this;
        }

        public ItemResponseBuilder unit(String unit) {
            this.unit = unit;
            return this;
        }

        public ItemResponseBuilder sellable(boolean sellable) {
            this.sellable = sellable;
            return this;
        }

        public ItemResponseBuilder sellingPrice(BigDecimal sellingPrice) {
            this.sellingPrice = sellingPrice;
            return this;
        }

        public ItemResponseBuilder salesAccount(String salesAccount) {
            this.salesAccount = salesAccount;
            return this;
        }

        public ItemResponseBuilder salesDescription(String salesDescription) {
            this.salesDescription = salesDescription;
            return this;
        }

        public ItemResponseBuilder purchasable(boolean purchasable) {
            this.purchasable = purchasable;
            return this;
        }

        public ItemResponseBuilder costPrice(BigDecimal costPrice) {
            this.costPrice = costPrice;
            return this;
        }

        public ItemResponseBuilder purchaseAccount(String purchaseAccount) {
            this.purchaseAccount = purchaseAccount;
            return this;
        }

        public ItemResponseBuilder purchaseDescription(String purchaseDescription) {
            this.purchaseDescription = purchaseDescription;
            return this;
        }

        public ItemResponseBuilder preferredVendor(String preferredVendor) {
            this.preferredVendor = preferredVendor;
            return this;
        }

        public ItemResponseBuilder stockQuantity(BigDecimal stockQuantity) {
            this.stockQuantity = stockQuantity;
            return this;
        }

        public ItemResponseBuilder reorderLevel(BigDecimal reorderLevel) {
            this.reorderLevel = reorderLevel;
            return this;
        }

        public ItemResponseBuilder sku(String sku) {
            this.sku = sku;
            return this;
        }

        public ItemResponseBuilder barcode(String barcode) {
            this.barcode = barcode;
            return this;
        }

        public ItemResponseBuilder taxRate(BigDecimal taxRate) {
            this.taxRate = taxRate;
            return this;
        }

        public ItemResponseBuilder hsnCode(String hsnCode) {
            this.hsnCode = hsnCode;
            return this;
        }

        public ItemResponseBuilder active(boolean active) {
            this.active = active;
            return this;
        }

        public ItemResponseBuilder createdAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public ItemResponseBuilder updatedAt(LocalDateTime updatedAt) {
            this.updatedAt = updatedAt;
            return this;
        }

        public ItemResponseBuilder createdBy(String createdBy) {
            this.createdBy = createdBy;
            return this;
        }

        public ItemResponseBuilder updatedBy(String updatedBy) {
            this.updatedBy = updatedBy;
            return this;
        }

        public ItemResponse build() {
            return new ItemResponse(id, name, type, unit, sellable, sellingPrice, salesAccount,
                    salesDescription, purchasable, costPrice, purchaseAccount,
                    purchaseDescription, preferredVendor, stockQuantity, reorderLevel,
                    sku, barcode, taxRate, hsnCode, active, createdAt, updatedAt,
                    createdBy, updatedBy);
        }
    }
}
