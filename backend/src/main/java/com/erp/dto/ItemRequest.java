package com.erp.dto;

import com.erp.entity.ItemType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

import java.math.BigDecimal;

/**
 * DTO for creating and updating items
 */
public class ItemRequest {

    @NotBlank(message = "Item name is required")
    private String name;

    @NotNull(message = "Item type is required")
    private ItemType type;

    private String unit;

    // Sales Information
    private Boolean sellable;

    @PositiveOrZero(message = "Selling price must be positive or zero")
    private BigDecimal sellingPrice;

    private String salesAccount;

    private String salesDescription;

    // Purchase Information
    private Boolean purchasable;

    @PositiveOrZero(message = "Cost price must be positive or zero")
    private BigDecimal costPrice;

    private String purchaseAccount;

    private String purchaseDescription;

    private String preferredVendor;

    // Stock Information
    @PositiveOrZero(message = "Stock quantity must be positive or zero")
    private BigDecimal stockQuantity;

    @PositiveOrZero(message = "Reorder level must be positive or zero")
    private BigDecimal reorderLevel;

    // SKU/Barcode
    private String sku;

    private String barcode;

    // Tax Information
    @PositiveOrZero(message = "Tax rate must be positive or zero")
    private BigDecimal taxRate;

    private String hsnCode;

    // Constructors
    public ItemRequest() {
    }

    public ItemRequest(String name, ItemType type, String unit, Boolean sellable,
            BigDecimal sellingPrice, String salesAccount, String salesDescription,
            Boolean purchasable, BigDecimal costPrice, String purchaseAccount,
            String purchaseDescription, String preferredVendor, BigDecimal stockQuantity,
            BigDecimal reorderLevel, String sku, String barcode, BigDecimal taxRate,
            String hsnCode) {
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
    }

    // Getters and Setters
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

    public Boolean getSellable() {
        return sellable;
    }

    public void setSellable(Boolean sellable) {
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

    public Boolean getPurchasable() {
        return purchasable;
    }

    public void setPurchasable(Boolean purchasable) {
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

    // Builder pattern
    public static ItemRequestBuilder builder() {
        return new ItemRequestBuilder();
    }

    public static class ItemRequestBuilder {
        private String name;
        private ItemType type;
        private String unit;
        private Boolean sellable;
        private BigDecimal sellingPrice;
        private String salesAccount;
        private String salesDescription;
        private Boolean purchasable;
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

        public ItemRequestBuilder name(String name) {
            this.name = name;
            return this;
        }

        public ItemRequestBuilder type(ItemType type) {
            this.type = type;
            return this;
        }

        public ItemRequestBuilder unit(String unit) {
            this.unit = unit;
            return this;
        }

        public ItemRequestBuilder sellable(Boolean sellable) {
            this.sellable = sellable;
            return this;
        }

        public ItemRequestBuilder sellingPrice(BigDecimal sellingPrice) {
            this.sellingPrice = sellingPrice;
            return this;
        }

        public ItemRequestBuilder salesAccount(String salesAccount) {
            this.salesAccount = salesAccount;
            return this;
        }

        public ItemRequestBuilder salesDescription(String salesDescription) {
            this.salesDescription = salesDescription;
            return this;
        }

        public ItemRequestBuilder purchasable(Boolean purchasable) {
            this.purchasable = purchasable;
            return this;
        }

        public ItemRequestBuilder costPrice(BigDecimal costPrice) {
            this.costPrice = costPrice;
            return this;
        }

        public ItemRequestBuilder purchaseAccount(String purchaseAccount) {
            this.purchaseAccount = purchaseAccount;
            return this;
        }

        public ItemRequestBuilder purchaseDescription(String purchaseDescription) {
            this.purchaseDescription = purchaseDescription;
            return this;
        }

        public ItemRequestBuilder preferredVendor(String preferredVendor) {
            this.preferredVendor = preferredVendor;
            return this;
        }

        public ItemRequestBuilder stockQuantity(BigDecimal stockQuantity) {
            this.stockQuantity = stockQuantity;
            return this;
        }

        public ItemRequestBuilder reorderLevel(BigDecimal reorderLevel) {
            this.reorderLevel = reorderLevel;
            return this;
        }

        public ItemRequestBuilder sku(String sku) {
            this.sku = sku;
            return this;
        }

        public ItemRequestBuilder barcode(String barcode) {
            this.barcode = barcode;
            return this;
        }

        public ItemRequestBuilder taxRate(BigDecimal taxRate) {
            this.taxRate = taxRate;
            return this;
        }

        public ItemRequestBuilder hsnCode(String hsnCode) {
            this.hsnCode = hsnCode;
            return this;
        }

        public ItemRequest build() {
            return new ItemRequest(name, type, unit, sellable, sellingPrice, salesAccount,
                    salesDescription, purchasable, costPrice, purchaseAccount,
                    purchaseDescription, preferredVendor, stockQuantity, reorderLevel,
                    sku, barcode, taxRate, hsnCode);
        }
    }
}
