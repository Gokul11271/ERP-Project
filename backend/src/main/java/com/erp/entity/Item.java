package com.erp.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Item entity representing goods and services in the ERP system
 */
@Entity
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ItemType type;

    @Column(name = "unit")
    private String unit;

    // Sales Information
    @Column(name = "is_sellable")
    private boolean sellable = true;

    @Column(name = "selling_price", precision = 19, scale = 4)
    private BigDecimal sellingPrice;

    @Column(name = "sales_account")
    private String salesAccount;

    @Column(name = "sales_description", length = 1000)
    private String salesDescription;

    // Purchase Information
    @Column(name = "is_purchasable")
    private boolean purchasable = true;

    @Column(name = "cost_price", precision = 19, scale = 4)
    private BigDecimal costPrice;

    @Column(name = "purchase_account")
    private String purchaseAccount;

    @Column(name = "purchase_description", length = 1000)
    private String purchaseDescription;

    @Column(name = "preferred_vendor")
    private String preferredVendor;

    // Stock Information
    @Column(name = "stock_quantity", precision = 19, scale = 4)
    private BigDecimal stockQuantity;

    @Column(name = "reorder_level", precision = 19, scale = 4)
    private BigDecimal reorderLevel;

    // SKU/Barcode
    @Column(name = "sku", unique = true)
    private String sku;

    @Column(name = "barcode")
    private String barcode;

    // Tax Information
    @Column(name = "tax_rate", precision = 5, scale = 2)
    private BigDecimal taxRate;

    @Column(name = "hsn_code")
    private String hsnCode;

    // Active Status
    @Column(name = "is_active")
    private boolean active = true;

    // Audit fields
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_by")
    private String updatedBy;

    // Constructors
    public Item() {
    }

    public Item(Long id, String name, ItemType type, String unit, boolean sellable,
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

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
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
    public static ItemBuilder builder() {
        return new ItemBuilder();
    }

    public static class ItemBuilder {
        private Long id;
        private String name;
        private ItemType type;
        private String unit;
        private boolean sellable = true;
        private BigDecimal sellingPrice;
        private String salesAccount;
        private String salesDescription;
        private boolean purchasable = true;
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
        private boolean active = true;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private String createdBy;
        private String updatedBy;

        public ItemBuilder id(Long id) {
            this.id = id;
            return this;
        }

        public ItemBuilder name(String name) {
            this.name = name;
            return this;
        }

        public ItemBuilder type(ItemType type) {
            this.type = type;
            return this;
        }

        public ItemBuilder unit(String unit) {
            this.unit = unit;
            return this;
        }

        public ItemBuilder sellable(boolean sellable) {
            this.sellable = sellable;
            return this;
        }

        public ItemBuilder sellingPrice(BigDecimal sellingPrice) {
            this.sellingPrice = sellingPrice;
            return this;
        }

        public ItemBuilder salesAccount(String salesAccount) {
            this.salesAccount = salesAccount;
            return this;
        }

        public ItemBuilder salesDescription(String salesDescription) {
            this.salesDescription = salesDescription;
            return this;
        }

        public ItemBuilder purchasable(boolean purchasable) {
            this.purchasable = purchasable;
            return this;
        }

        public ItemBuilder costPrice(BigDecimal costPrice) {
            this.costPrice = costPrice;
            return this;
        }

        public ItemBuilder purchaseAccount(String purchaseAccount) {
            this.purchaseAccount = purchaseAccount;
            return this;
        }

        public ItemBuilder purchaseDescription(String purchaseDescription) {
            this.purchaseDescription = purchaseDescription;
            return this;
        }

        public ItemBuilder preferredVendor(String preferredVendor) {
            this.preferredVendor = preferredVendor;
            return this;
        }

        public ItemBuilder stockQuantity(BigDecimal stockQuantity) {
            this.stockQuantity = stockQuantity;
            return this;
        }

        public ItemBuilder reorderLevel(BigDecimal reorderLevel) {
            this.reorderLevel = reorderLevel;
            return this;
        }

        public ItemBuilder sku(String sku) {
            this.sku = sku;
            return this;
        }

        public ItemBuilder barcode(String barcode) {
            this.barcode = barcode;
            return this;
        }

        public ItemBuilder taxRate(BigDecimal taxRate) {
            this.taxRate = taxRate;
            return this;
        }

        public ItemBuilder hsnCode(String hsnCode) {
            this.hsnCode = hsnCode;
            return this;
        }

        public ItemBuilder active(boolean active) {
            this.active = active;
            return this;
        }

        public ItemBuilder createdAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public ItemBuilder updatedAt(LocalDateTime updatedAt) {
            this.updatedAt = updatedAt;
            return this;
        }

        public ItemBuilder createdBy(String createdBy) {
            this.createdBy = createdBy;
            return this;
        }

        public ItemBuilder updatedBy(String updatedBy) {
            this.updatedBy = updatedBy;
            return this;
        }

        public Item build() {
            return new Item(id, name, type, unit, sellable, sellingPrice, salesAccount,
                    salesDescription, purchasable, costPrice, purchaseAccount,
                    purchaseDescription, preferredVendor, stockQuantity, reorderLevel,
                    sku, barcode, taxRate, hsnCode, active, createdAt, updatedAt,
                    createdBy, updatedBy);
        }
    }
}
