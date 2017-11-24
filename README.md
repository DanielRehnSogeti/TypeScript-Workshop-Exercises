# TypeScript Workshop Exercises

## Exercise 1 - Greetings!
Display a greeting message.
* Create a simple function that takes two arguments.
* The first argument is a string.
* The second argument is a number.
* Make a greeting message using both parameters and a template string.
* The function should return the greeting message.
* Alert or log the result of the function.

## Exercise 2 - Shape up!
Create an interface that defines the properties of a shape.
* color - string
* area - method that calculates and returns the area of the shape
* toString - method that returns the name of the shape as well as its color and area

Create at least two classes that implements the interface and has the listed private properties.
* Circle
  * radius - number
* Rectangle
  * width - number
  * height - number

Create an instance of each shape and alert or log the result of each objects toString() method.

Example output for the circle class: 
```
Circle - 3.14159 - green
```

## Exercise 3 - Dictionary
Implement a dictionary class using generics that uses one type for the key and another for the value.

Add the following methods
* Add - Add a new key-value pair to the dictionary
* Remove - Remove a key-value pair using key
* ContainsKey - Returns true if the given key exists in the dictionary
* Set - Update the value of a given key-value pair
* Get - Get the value of a key-value pair
* toString - Returns the contents of the dictionary as a string where all key-value pairs are separated by a new line.

Create a new instance of the dictionary and add some data to it. Alert or log the result of the toString method.

Example usage:
```
let d = new Dictionary<string, number>();
d.Add('foo', 3);
let a = d.Get('foo');
```

### Bonus 1

Throw an exception when the dictionary is used incorrectly. For instance when getting the value of a key that does not exist or when trying to add a key that already does.

### Bonus 2

Add a ForEach method that iterates over every key-value pair in the dictionary and triggers a callback function. The callback function takes one parameter that is the key-value pair.

Example usage:
```
myDictionary.ForEach((kvp) => {
    //kvp.key
    //kvp.value
});
```

### Bonus 3
Modify the ForEach method so that if false is returned in the callback method, the loop breaks.