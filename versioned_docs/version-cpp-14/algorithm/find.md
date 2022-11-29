# find()
find attempts to find a given value in a given list. 
If the value is found, it returns value, if the value is not found, it returns the last value in the list.

```cpp
namespace std {
template <class InputIterator, class T>
    InputIterator find(InputIterator first, 
                       InputIterator last, 
                       const T& value);
}
```
- first is the start of a range
- last is the end of a range
- value is a value to find

## Notes
- When using pointers like in the example below, the last value is not included. A range of 0 to 2 means 0, 1.
## Example
```cpp
#include <iostream>
#include <algorithm>

int main(){
  int a[] = {5, 4, 6, 7, 3, 2};
  int value = 9; // Attempt to search for this value
  
  int * x = std::find(&a[0], &a[5], value);
  std::cout << *x << std::endl;
}
```
Output: 2
In this example we search for the value 2 in the array a.
Because the value 9 is not in the array, the last value in a is returned, in this case 2.
If value were to be 5, the program would output 5, because 5 is in the array.

---
# See also


