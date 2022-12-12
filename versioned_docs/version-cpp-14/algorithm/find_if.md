# find_if()
Exactly the same as [find()](find.md), but, instead of finding a certain value, find a value by passing it to a boolean function.

```cpp
namespace std {
template <class InputIterator, class Predicate>
    InputIterator find_if(InputIterator first, InputIterator last, Predicate pred);
}
```

- first is the start of a range
- last is the end of a range
- pred is a function pointer or lambda that returns a boolean

## Notes
- When using pointers like in the example below, the last value is not included. A range of 0 to 2 means 0, 1.

## Example
```cpp
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
