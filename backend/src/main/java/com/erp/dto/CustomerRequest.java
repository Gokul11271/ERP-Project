package com.erp.dto;

import com.erp.entity.CustomerType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.util.List;

/**
 * DTO for creating and updating customers
 */
public class CustomerRequest {

    @NotNull(message = "Customer type is required")
    private CustomerType customerType;

    private String salutation;
    private String firstName;
    private String lastName;
    private String companyName;

    @NotBlank(message = "Display name is required")
    private String displayName;

    private String email;
    private String workPhone;
    private String mobilePhone;
    private String language;

    // Other Details
    private String pan;
    private String currency;
    private BigDecimal openingBalance;
    private String paymentTerms;
    private Boolean enablePortal;

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

    // Contact Persons (stored as JSON or separate table in future)
    private List<ContactPersonDTO> contactPersons;

    // Remarks
    private String remarks;

    // Constructors
    public CustomerRequest() {
    }

    // Getters and Setters
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

    public String getPaymentTerms() {
        return paymentTerms;
    }

    public void setPaymentTerms(String paymentTerms) {
        this.paymentTerms = paymentTerms;
    }

    public Boolean getEnablePortal() {
        return enablePortal;
    }

    public void setEnablePortal(Boolean enablePortal) {
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

    public List<ContactPersonDTO> getContactPersons() {
        return contactPersons;
    }

    public void setContactPersons(List<ContactPersonDTO> contactPersons) {
        this.contactPersons = contactPersons;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    /**
     * Nested DTO for contact persons
     */
    public static class ContactPersonDTO {
        private String salutation;
        private String firstName;
        private String lastName;
        private String email;
        private String workPhone;
        private String mobile;

        public ContactPersonDTO() {
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

        public String getMobile() {
            return mobile;
        }

        public void setMobile(String mobile) {
            this.mobile = mobile;
        }
    }
}
