# Example usage
import requests

def get_number_of_problems_solved(handle):
    url = f"https://codeforces.com/api/user.status?handle={handle}&from=1"
    
    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            if "result" in data:
                submissions = data["result"]
                solved_problems = set()
                for submission in submissions:
                    if submission["verdict"] == "OK":
                        solved_problems.add(submission["problem"]["name"])
                return len(solved_problems)
            else:
                return "No data found for the user."
        else:
            return f"Error: {response.status_code}"
    except requests.exceptions.RequestException as e:
        return f"Error making the request: {e}"
handle = "tourist"  # Replace with the desired Codeforces handle
num_problems_solved = get_number_of_problems_solved(handle)
print(f"{handle} has solved {num_problems_solved} problems on Codeforces.")