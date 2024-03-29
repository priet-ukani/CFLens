import json
import operator

# https://codeforces.com/api/problemset.problems
# data.json has the api response of the CF API for all problems data 

data = json.load(open("data.json"))
counter = dict()
problems = data["result"]["problems"]
for problem in problems:
    if "tags" in problem:
        for tag in problem["tags"]:
            if not tag in counter:
                counter[tag] = 0
            counter[tag] += 1


sorted_x = sorted(counter.items(), key=operator.itemgetter(1), reverse=True)

for line in sorted_x:
    tag_name = line[0]
    tag_name_escaped = tag_name.replace(" ", "+")
    value = line[1]
    # print(f" - [{tag_name}] ({link}) {value}")
    print(tag_name,",",value)