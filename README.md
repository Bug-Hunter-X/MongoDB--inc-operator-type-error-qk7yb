# MongoDB $inc operator type error
This example demonstrates an incorrect usage of the `$inc` operator in a MongoDB update operation. The `$inc` operator is used to increment a numerical field by a specified value.  However, in the provided code, we attempt to increment the `counter` field by the string '1', which results in a type error.

## Bug
The bug lies in the incorrect usage of the `$inc` operator. The value being used to increment the counter field is a string instead of a number.

## Solution
The solution corrects this by providing a numerical value (1) to increment the counter field.
