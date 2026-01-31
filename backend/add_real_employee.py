import requests
import json
import sys

BASE_URL = "http://localhost:8080/api/employees"

def add_real_employee():
    print("Adding Real Employee 'John Doe'...")

    payload = {
        "firstName": "John",
        "middleName": "Robert",
        "lastName": "Doe",
        "employeeId": "EMP-00100",
        "dateOfJoining": "2024-02-15",
        "workEmail": "john.doe@ksktechnology.in",
        "mobileNumber": "9876543210",
        "gender": "MALE",
        "workLocation": "Head Office",
        "designation": "Senior Technician",
        "department": "Production",
        "isDirector": False,
        "portalAccessEnabled": True,
        
        "annualCtc": 950000,
        "basicSalary": 45000,
        "hra": 20000,
        "specialAllowances": 5000,
        
        "dateOfBirth": "1990-05-20",
        "personalEmail": "johndoe.personal@gmail.com",
        "presentAddress": "123 Main St, Cityville",
        "permanentAddress": "456 Home Town, Villageton",
        
        "paymentMode": "BANK_TRANSFER",
        "bankName": "HDFC Bank",
        "accountNumber": "501002345678",
        "ifscCode": "HDFC0001234",
        "accountHolderName": "John Robert Doe",
        "panNumber": "ABCDE1234F"
    }

    try:
        response = requests.post(BASE_URL, json=payload)
        if response.status_code == 200:
            print("SUCCESS: John Doe added successfully!")
            print(f"Server Response: {response.json()}")
        else:
            print(f"FAILED: Status {response.status_code}")
            print(f"Response: {response.text}")
    except Exception as e:
        print(f"Exception: {e}")

if __name__ == "__main__":
    add_real_employee()
