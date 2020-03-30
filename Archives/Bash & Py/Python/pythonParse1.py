import json

x = '{ "name":"John", "age":30, "city":"New York"}'
# parse x:
y = json.loads(x)

# the result is a Python dictionary:
print(y["age"])

#or py obj to json string using dump
x = {
    "name" : "Artem",
    "age" : 30,
    "tag" : "triple8six"
}

print(json.dumps(x));
#Convert Python objects into JSON strings, and print the values:
print(json.dumps({"name": "John", "age": 30}))
print(json.dumps(["apple", "bananas"]))
print(json.dumps(("apple", "bananas")))
print(json.dumps("hello"))
print(json.dumps(42))
print(json.dumps(31.76))
print(json.dumps(True))
print(json.dumps(False))
print(json.dumps(None))


y = {
  "name": "John",
  "age": 30,
  "married": True,
  "divorced": False,
  "children": ("Ann","Billy"),
  "pets": None,
  "cars": [
    {"model": "BMW 230", "mpg": 27.5},
    {"model": "Ford Edge", "mpg": 24.1}
  ]
}


print(json.dumps(y, indent=4, sort_keys=True))
print(json.dumps(y))

print(json.dumps(y['name']))
print(json.dumps(y['children']))
print(json.dumps(y['cars'][0]))