import requests
import json
import sys

BASE_URL = "http://localhost:8080/api/employees"

def test_create_and_verify_employee():
    print("Starting Automated API Test for Employee Feature...")

    # 1. Define Employee Data
    employee_data = {
        "firstName": "Auto",
        "lastName": "Tester",
        "employeeId": "EMP-AUTO-TEST",
        "dateOfJoining": "2024-01-01",
        "workEmail": "auto.tester@example.com",
        "gender": "MALE",
        "designation": "QA Engineer",
        "department": "Engineering",
        "status": "ACTIVE",
        
        "annualCtc": 1200000,
        "basicSalary": 60000,
        
        "dateOfBirth": "1995-01-01",
        "personalEmail": "personal.tester@example.com",
        
        "paymentMode": "BANK_TRANSFER",
        "panNumber": "ABCDE1234F"
    }

    # 2. CREATE (POST)
    print("\n[1] Creating Employee...")
    try:
        response = requests.post(BASE_URL, json=employee_data)
        if response.status_code != 200:
            with open("test_failure.txt", "w") as f:
                f.write(f"Status: {response.status_code}\n")
                f.write(f"Response: {response.text}\n")
            print(f"FAILED: Create failed with status {response.status_code}. See test_failure.txt")
            sys.exit(1)
        
        created_employee = response.json()
        employee_id_db = created_employee['id']
        print(f"SUCCESS: Employee created with DB ID: {employee_id_db}")
    except Exception as e:
        print(f"FAILED: Exception during create: {e}")
        sys.exit(1)

    # 3. VERIFY IN LIST (GET)
    print("\n[2] Verifying Employee in List...")
    try:
        response = requests.get(BASE_URL)
        if response.status_code != 200:
            print(f"FAILED: List failed with status {response.status_code}")
            sys.exit(1)
            
        employees = response.json()
        found = False
        for emp in employees:
            if emp['employeeId'] == "EMP-AUTO-TEST":
                found = True
                break
        
        if found:
            print("SUCCESS: Employee found in the list.")
        else:
            print("FAILED: Employee NOT found in the list.")
            sys.exit(1)
    except Exception as e:
        print(f"FAILED: Exception during list verification: {e}")
        sys.exit(1)

    # 4. CLEANUP (DELETE)
    print(f"\n[3] Cleaning up (Deleting Employee ID {employee_id_db})...")
    try:
        response = requests.delete(f"{BASE_URL}/{employee_id_db}")
        if response.status_code == 200:
            print("SUCCESS: Employee deleted.")
        else:
            print(f"WARNING: Delete failed with status {response.status_code}")
    except Exception as e:
        print(f"WARNING: Exception during delete: {e}")

    print("\nAll Backend Tests Passed Successfully!")

if __name__ == "__main__":
    test_create_and_verify_employee()
