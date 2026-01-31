import requests
import json
import sys

BASE_URL = "http://localhost:8080/api/employees"

def test_frontend_payload():
    print("Testing Frontend Payload...")

    # Mimicking the exact structure from NewEmployee.jsx
    # Note: Empty strings for optional fields might be the issue if backend expects null or specific format
    # But usually Spring handles empty strings okay unless it's a number or date
    
    payload = {
        "firstName": "Dummy",
        "middleName": "",
        "lastName": "Employee",
        "employeeId": "DUMMY-001",
        "dateOfJoining": "2024-01-01",
        "workEmail": "dummy@example.com",
        "mobileNumber": "",
        "gender": None, 
        "workLocation": "",
        "designation": "",
        "department": None,
        "isDirector": False,
        "portalAccessEnabled": False,

        "annualCtc": None, 
        "basicSalary": None, 
        "hra": None, 
        "specialAllowances": None,  

        "dateOfBirth": None, 
        "fatherName": "",
        "personalEmail": "",
        "presentAddress": "",
        "permanentAddress": "",

        "paymentMode": "BANK_TRANSFER",
        "bankName": "",
        "accountNumber": "",
        "ifscCode": "",
        "accountHolderName": "",
        "panNumber": ""
    }

    print("Sending payload with empty strings (imitating unvisited steps)...")
    try:
        response = requests.post(BASE_URL, json=payload)
        if response.status_code != 200:
            print(f"FAILED: Status {response.status_code}")
            print(f"Response: {response.text}")
        else:
            print("SUCCESS: Employee created!")
    except Exception as e:
        print(f"Exception: {e}")

if __name__ == "__main__":
    test_frontend_payload()
