import requests
import json

# API endpoint URL
url = "https://codeforces.com/api/user.ratedList?activeOnly=true&includeRetired=false"

try:
    # Make the API request
    response = requests.get(url)
    
    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse JSON response
        data = response.json()
        
        # Check if the response contains data
        if "result" in data:
            # Write the data to a file
            with open("rated_list.json", "w") as file:
                json.dump(data["result"], file, indent=4)
                
            print("Data has been written to rated_list.json")
        else:
            print("No data found in the response.")
    else:
        print("Error:", response.status_code)
except requests.exceptions.RequestException as e:
    print("Error making the request:", e)
