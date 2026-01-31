import requests
import sys

BASE_URL = "http://localhost:8080/api/employees"

def verify_custom_inputs():
    print("TEST: Creating Employee with custom department 'Quantum Research'...")
    
    payload = {
        "firstName": "Custom",
        "lastName": "Tester",
        "employeeId": "TEST-CUST-001",
        "dateOfJoining": "2024-06-01",
        "workEmail": "custom.tester@ksk.in",
        "gender": "MALE",
        "workLocation": "Virtual Lab",
        "designation": "Chief Visionary",
        "department": "Quantum Research",  # Custom value
        "annualCtc": 2000000,
        "paymentMode": "CASH"
    }
    
    try:
        resp = requests.post(BASE_URL, json=payload)
        if resp.status_code != 200:
            print(f"FAILED: {resp.status_code} {resp.text}")
            sys.exit(1)
            
        data = resp.json()
        print(f"Created ID: {data.get('id')}")
        
        if data.get('department') == 'Quantum Research':
            print("SUCCESS: Custom department 'Quantum Research' saved correctly.")
        else:
            print(f"FAILURE: Expected 'Quantum Research', got '{data.get('department')}'")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    verify_custom_inputs()
