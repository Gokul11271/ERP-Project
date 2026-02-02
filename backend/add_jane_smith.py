import requests
import json
import sys

BASE_URL = "http://localhost:8080/api/employees"

def add_jane_smith():
    print("Adding Real Employee 'Jane Smith'...")

    payload = {
        "firstName": "Jane",
        "middleName": "Marie",
        "lastName": "Smith",
        "employeeId": "EMP-00101",
        "dateOfJoining": "2023-11-01",
        "workEmail": "jane.smith@ksktechnology.in",
        "mobileNumber": "9876543211",
        "gender": "FEMALE",
        "workLocation": "Branch Office",
        "designation": "Manager",
        "department": "HR",
        "isDirector": False,
        "portalAccessEnabled": True,
        
        "annualCtc": 1200000,
        "basicSalary": 60000,
        "hra": 25000,
        "specialAllowances": 10000,
        
        "dateOfBirth": "1992-08-15",
        "personalEmail": "janesmith.personal@gmail.com",
        "presentAddress": "789 Broadway, Metropolis",
        "permanentAddress": "789 Broadway, Metropolis",
        
        "paymentMode": "BANK_TRANSFER",
        "bankName": "ICICI Bank",
        "accountNumber": "987654321012",
        "ifscCode": "ICIC0001234",
        "accountHolderName": "Jane Marie Smith",
        "panNumber": "FGHIJ5678K"
    }

    try:
        response = requests.post(BASE_URL, json=payload)
        if response.status_code == 200:
            print("SUCCESS: Jane Smith added successfully!")
            print(f"Server Response: {response.json()}")
        else:
            print(f"FAILED: Status {response.status_code}")
            print(f"Response: {response.text}")
    except Exception as e:
        print(f"Exception: {e}")

if __name__ == "__main__":
    add_jane_smith()
