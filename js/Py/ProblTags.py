import json
import operator

data = json.load(open("./problems.json"))

contestData = json.load(open("./contestList.json"))
contests=contestData["result"]
# store in a global array contest id to contest name map

dict_map = dict()
for contest in contests:
    if 'id' in contest:
        dict_map[contest["id"]] = contest["name"]
        

def find_contest_name(contest_id):
    if contest_id in dict_map:
        return dict_map[contest_id]
    for contest in contests:
        # print(contest)
        if 'id' in contest:
            if (contest["id"]) == (contest_id):
                return contest["name"]
    return "none"

# print(find_contest_name(1958))

counter1 = dict()
counter2 = dict()
counter3 = dict()
counter4 = dict()
problems = data["result"]["problems"]
for problem in problems:
    if "tags" in problem:
        for tag in problem["tags"]:
            contestid=problem["contestId"]
            contestName=find_contest_name(contestid)
            # find substring Div. 2 in the name of the contest
            if "Div. 1" in contestName:
                if not tag in counter1:
                    counter1[tag] = 0
                counter1[tag] += 1
            if "Div. 2" in contestName:
                if not tag in counter2:
                    counter2[tag] = 0
                counter2[tag] += 1
            if "Div. 3" in contestName:
                if not tag in counter3:
                    counter3[tag] = 0
                counter3[tag] += 1
            if "Div. 4" in contestName:
                if not tag in counter4:
                    counter4[tag] = 0
                counter4[tag] += 1



sorted_x1 = sorted(counter1.items(), key=operator.itemgetter(1), reverse=True)
sorted_x2 = sorted(counter2.items(), key=operator.itemgetter(1), reverse=True)
sorted_x3 = sorted(counter3.items(), key=operator.itemgetter(1), reverse=True)
sorted_x4 = sorted(counter4.items(), key=operator.itemgetter(1), reverse=True)

# for line in sorted_x1:
#     tag_name = line[0]
#     tag_name_escaped = tag_name.replace(" ", "+")
#     value = line[1]
#     print(f" - [{tag_name}]{value}")



with open("div1.js", "w") as output_file:
    output_file.write("var div1 = [\n")
    total=0
    for line in sorted_x1:
        tag_name = line[0]
        value = line[1]
        total += value    
    # Loop through sorted tags and write data to the file
    for line in sorted_x1:
        tag_name = line[0]
        value = line[1]
        output_file.write("    {\n")
        output_file.write(f"        title: \"{tag_name}\",\n")
        output_file.write(f"        value: {value},\n")
        output_file.write(f"        all: {total}\n")
        output_file.write("    },\n")
    
    output_file.write("]\n")
    
with open("div2.js", "w") as output_file:
    output_file.write("var div2 = [\n")
    total=0
    for line in sorted_x2:
        tag_name = line[0]
        value = line[1]
        total += value
    # Loop through sorted tags and write data to the file
    for line in sorted_x2:
        tag_name = line[0]
        value = line[1]
        output_file.write("    {\n")
        output_file.write(f"        title: \"{tag_name}\",\n")
        output_file.write(f"        value: {value},\n")
        output_file.write(f"        all: {total}\n")
        output_file.write("    },\n")
    
    output_file.write("]\n")
    
    
with open("div3.js", "w") as output_file:
    output_file.write("var div3 = [\n")
    total=0
    for line in sorted_x3:
        tag_name = line[0]
        value = line[1]
        total += value
    # Loop through sorted tags and write data to the file
    for line in sorted_x3:
        tag_name = line[0]
        value = line[1]
        output_file.write("    {\n")
        output_file.write(f"        title: \"{tag_name}\",\n")
        output_file.write(f"        value: {value},\n")
        output_file.write(f"        all: {total}\n")
        output_file.write("    },\n")
    
    output_file.write("]\n")
    
with open("div4.js", "w") as output_file:
    output_file.write("var div4 = [\n")
    total=0
    for line in sorted_x4:
        tag_name = line[0]
        value = line[1]
        total += value
    # Loop through sorted tags and write data to the file
    for line in sorted_x4:
        tag_name = line[0]
        value = line[1]
        output_file.write("    {\n")
        output_file.write(f"        title: \"{tag_name}\",\n")
        output_file.write(f"        value: {value},\n")
        output_file.write(f"        all: {total}\n")
        output_file.write("    },\n")
    
    output_file.write("]\n")
