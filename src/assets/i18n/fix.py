import json

def convert_json_format(input_file, output_file):
    # Load the input JSON file
    with open(input_file, 'r', encoding='utf-8') as file:
        file_content = file.read()
        data = json.loads(file_content)
        print(data)

    nested_data = {}

    # Convert the flat dictionary into a nested one
    for key, value in data.items():
        if '.' in key:
            main_key, sub_key = key.split('.', 1)
            try:
                nested_data[main_key]
            except:
                nested_data[main_key] = {}
            nested_data[main_key][sub_key] = value
        else:
            nested_data[key] = value

    # Write the nested dictionary to the output JSON file
    with open(output_file, 'w') as file:
        json.dump(nested_data, file, indent=4, ensure_ascii=False)



# Example usage
input_file = 'de.json'
output_file = 'de.json'
convert_json_format(input_file, output_file)
