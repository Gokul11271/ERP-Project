import requests
import json

url = "http://localhost:8080/api/employees"

try:
    # Get List
    response = requests.get(url)
    employees = response.json()
    if employees:
        print("Employee JSON Structure:")
        print(json.dumps(employees[0], indent=2))
    else:
        print("No employees found.")

except Exception as e:
    print(f"Error: {e}")
