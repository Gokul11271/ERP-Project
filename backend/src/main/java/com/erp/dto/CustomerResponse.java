package com.erp.dto;

import com.erp.entity.Customer;
import com.erp.entity.CustomerType;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * DTO for customer response data
 */
public class CustomerResponse {

    private Long id;
    private CustomerType customerType;
    private String salutation;
    private String firstName;
    private String lastName;
    private String companyName;
    private String displayName;
    private String email;
    private String workPhone;
    private String mobilePhone;
    private String language;

    // Other Details
    private String pan;
    private String currency;
    private BigDecimal openingBalance;
    private BigDecimal receivablesBalance;
    private String paymentTerms;
    private boolean enablePortal;

    // Billing Address
    private String billingAttention;
    private String billingCountry;
    private String billingAddress1;
    private String billingAddress2;
    private String billingCity;
    private String billingState;
    private String billingPinCode;
    private String billingPhone;
    private String billingFax;

    // Shipping Address
    private String shippingAttention;
    private String shippingCountry;
    private String shippingAddress1;
    private String shippingAddress2;
    private String shippingCity;
    private String shippingState;
    private String shippingPinCode;
    private String shippingPhone;
    private String shippingFax;

    // Remarks
    private String remarks;

    // Status
    private String status;
    private boolean active;

    // Audit Information
    private LocalDateTime lastContactAt;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String createdBy;
    private String updatedBy;

    // Constructors
    public CustomerResponse() {
    }

    /**
     * Static factory method to convert Customer entity to CustomerResponse DTO
     */
    public static CustomerResponse fromEntity(Customer customer) {
        CustomerResponse response = new CustomerResponse();
        response.setId(customer.getId());
        response.setCustomerType(customer.getCustomerType());
        response.setSalutation(customer.getSalutation());
        response.setFirstName(customer.getFirstName());
        response.setLastName(customer.getLastName());
        response.setCompanyName(customer.getCompanyName());
        response.setDisplayName(customer.getDisplayName());
        response.setEmail(customer.getEmail());
        response.setWorkPhone(customer.getWorkPhone());
        response.setMobilePhone(customer.getMobilePhone());
        response.setLanguage(customer.getLanguage());
        response.setPan(customer.getPan());
        response.setCurrency(customer.getCurrency());
        response.setOpeningBalance(customer.getOpeningBalance());
        response.setReceivablesBalance(customer.getReceivablesBalance());
        response.setPaymentTerms(customer.getPaymentTerms());
        response.setEnablePortal(customer.isEnablePortal());
        response.setBillingAttention(customer.getBillingAttention());
        response.setBillingCountry(customer.getBillingCountry());
        response.setBillingAddress1(customer.getBillingAddress1());
        response.setBillingAddress2(customer.getBillingAddress2());
        response.setBillingCity(customer.getBillingCity());
        response.setBillingState(customer.getBillingState());
        response.setBillingPinCode(customer.getBillingPinCode());
        response.setBillingPhone(customer.getBillingPhone());
        response.setBillingFax(customer.getBillingFax());
        response.setShippingAttention(customer.getShippingAttention());
        response.setShippingCountry(customer.getShippingCountry());
        response.setShippingAddress1(customer.getShippingAddress1());
        response.setShippingAddress2(customer.getShippingAddress2());
        response.setShippingCity(customer.getShippingCity());
        response.setShippingState(customer.getShippingState());
        response.setShippingPinCode(customer.getShippingPinCode());
        response.setShippingPhone(customer.getShippingPhone());
        response.setShippingFax(customer.getShippingFax());
        response.setRemarks(customer.getRemarks());
        response.setStatus(customer.getStatus());
        response.setActive(customer.isActive());
        response.setLastContactAt(customer.getLastContactAt());
        response.setCreatedAt(customer.getCreatedAt());
        response.setUpdatedAt(customer.getUpdatedAt());
        response.setCreatedBy(customer.getCreatedBy());
        response.setUpdatedBy(customer.getUpdatedBy());
        return response;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }

    public String getSalutation() {
        return salutation;
    }

    public void setSalutation(String salutation) {
        this.salutation = salutation;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getWorkPhone() {
        return workPhone;
    }

    public void setWorkPhone(String workPhone) {
        this.workPhone = workPhone;
    }

    public String getMobilePhone() {
        return mobilePhone;
    }

    public void setMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getPan() {
        return pan;
    }

    public void setPan(String pan) {
        this.pan = pan;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public BigDecimal getOpeningBalance() {
        return openingBalance;
    }

    public void setOpeningBalance(BigDecimal openingBalance) {
        this.openingBalance = openingBalance;
    }

    public BigDecimal getReceivablesBalance() {
        return receivablesBalance;
    }

    public void setReceivablesBalance(BigDecimal receivablesBalance) {
        this.receivablesBalance = receivablesBalance;
    }

    public String getPaymentTerms() {
        return paymentTerms;
    }

    public void setPaymentTerms(String paymentTerms) {
        this.paymentTerms = paymentTerms;
    }

    public boolean isEnablePortal() {
        return enablePortal;
    }

    public void setEnablePortal(boolean enablePortal) {
        this.enablePortal = enablePortal;
    }

    public String getBillingAttention() {
        return billingAttention;
    }

    public void setBillingAttention(String billingAttention) {
        this.billingAttention = billingAttention;
    }

    public String getBillingCountry() {
        return billingCountry;
    }

    public void setBillingCountry(String billingCountry) {
        this.billingCountry = billingCountry;
    }

    public String getBillingAddress1() {
        return billingAddress1;
    }

    public void setBillingAddress1(String billingAddress1) {
        this.billingAddress1 = billingAddress1;
    }

    public String getBillingAddress2() {
        return billingAddress2;
    }

    public void setBillingAddress2(String billingAddress2) {
        this.billingAddress2 = billingAddress2;
    }

    public String getBillingCity() {
        return billingCity;
    }

    public void setBillingCity(String billingCity) {
        this.billingCity = billingCity;
    }

    public String getBillingState() {
        return billingState;
    }

    public void setBillingState(String billingState) {
        this.billingState = billingState;
    }

    public String getBillingPinCode() {
        return billingPinCode;
    }

    public void setBillingPinCode(String billingPinCode) {
        this.billingPinCode = billingPinCode;
    }

    public String getBillingPhone() {
        return billingPhone;
    }

    public void setBillingPhone(String billingPhone) {
        this.billingPhone = billingPhone;
    }

    public String getBillingFax() {
        return billingFax;
    }

    public void setBillingFax(String billingFax) {
        this.billingFax = billingFax;
    }

    public String getShippingAttention() {
        return shippingAttention;
    }

    public void setShippingAttention(String shippingAttention) {
        this.shippingAttention = shippingAttention;
    }

    public String getShippingCountry() {
        return shippingCountry;
    }

    public void setShippingCountry(String shippingCountry) {
        this.shippingCountry = shippingCountry;
    }

    public String getShippingAddress1() {
        return shippingAddress1;
    }

    public void setShippingAddress1(String shippingAddress1) {
        this.shippingAddress1 = shippingAddress1;
    }

    public String getShippingAddress2() {
        return shippingAddress2;
    }

    public void setShippingAddress2(String shippingAddress2) {
        this.shippingAddress2 = shippingAddress2;
    }

    public String getShippingCity() {
        return shippingCity;
    }

    public void setShippingCity(String shippingCity) {
        this.shippingCity = shippingCity;
    }

    public String getShippingState() {
        return shippingState;
    }

    public void setShippingState(String shippingState) {
        this.shippingState = shippingState;
    }

    public String getShippingPinCode() {
        return shippingPinCode;
    }

    public void setShippingPinCode(String shippingPinCode) {
        this.shippingPinCode = shippingPinCode;
    }

    public String getShippingPhone() {
        return shippingPhone;
    }

    public void setShippingPhone(String shippingPhone) {
        this.shippingPhone = shippingPhone;
    }

    public String getShippingFax() {
        return shippingFax;
    }

    public void setShippingFax(String shippingFax) {
        this.shippingFax = shippingFax;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public LocalDateTime getLastContactAt() {
        return lastContactAt;
    }

    public void setLastContactAt(LocalDateTime lastContactAt) {
        this.lastContactAt = lastContactAt;
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
}
