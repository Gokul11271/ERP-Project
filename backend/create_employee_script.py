import requests
import json
import time

url = "http://localhost:8080/api/employees"
unique_id = int(time.time())

payload = {
    "firstName": "Arjun",
    "middleName": "K",
    "lastName": "Reddy",
    "employeeId": f"EMP{unique_id}",
    "dateOfJoining": "2024-01-15",
    "workEmail": f"arjun.reddy{unique_id}@example.com",
    "mobileNumber": "9876543210",
    "gender": "MALE", # API might expect UPPERCASE based on enum
    "workLocation": "Head Office",
    "designation": "Senior Developer",
    "department": "Engineering",
    "director": False,
    "portalAccessEnabled": True, # Changed from portalAccess to match Entity/DTO if needed
    
    # Salary - CTC 12,00,000
    "annualCtc": 1200000.0,
    "basicSalary": 600000.0, 
    "specialAllowances": 600000.0,
    "hra": 0.0,
    
    # Personal
    "dateOfBirth": "1995-08-20",
    "personalEmail": f"arjun.personal{unique_id}@gmail.com",
    "fatherName": "Venkata Reddy",
    "presentAddress": "Flat 402, Sunshine Apts, Hyderabad",
    "permanentAddress": "Flat 402, Sunshine Apts, Hyderabad",
    
    # Payment
    "paymentMode": "BANK_TRANSFER", # Enum likely uppercase
    "bankName": "HDFC Bank",
    "accountNumber": "123456789012",
    "ifscCode": "HDFC0001234",
    "accountHolderName": "Arjun Reddy",
    "panNumber": "ABCDE1234F"
}

headers = {
    'Content-Type': 'application/json'
}

print(f"Sending payload for EMP{unique_id}...")
try:
    response = requests.post(url, headers=headers, data=json.dumps(payload))
    print(f"Response Status: {response.status_code}")
    print("Response Body:")
    print(response.text)
except Exception as e:
    print(f"Error: {e}")
