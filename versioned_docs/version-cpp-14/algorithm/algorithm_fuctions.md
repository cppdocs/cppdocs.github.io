---
title: algorithm functions
---


## all_of()
all_of returns true if all elements in a range return true

```cpp
namespace std {
template <class InputIterator, class Predicate> 
    bool all_of(InputIterator first, 
                InputIterator last, 
                Predicate pred);
}
```
- first is the first element of a range
- last is the last element of a range
- pred a function pointer or lambda that returns a boolean

:::info
- When using pointers like in the example below the range is closed, the last value is not included. A range of 0 to 2 means 0, 1.
:::

Example:

```cpp
#include <algorithm>
#include <iostream>

int main() {
  int x[] = {3, 1, 3, 5, 5, 9};

  if (std::all_of(&x[0], &x[5], [](int n){ return n%2 == 1; })) {
    std::cout << "all of x is odd" << std::endl;
    return 0;
  }
  std::cout << "not all of x is odd" << std::endl;
}
```
output: all of x is odd
because none of the elements in x are even, the all_of function returns true

---
## any_of()
any_of returns true if one element in a range returns true

```cpp
namespace std {
template <class InputIterator, class Predicate> 
    bool any_of(InputIterator first, 
                InputIterator last, 
                Predicate pred);
}
```
- first is the first element of a range
- last is the last element of a range
- pred a function pointer or lambda that returns a boolean

:::info
- When using pointers like in the example below the range is closed, the last value is not included. A range of 0 to 2 means 0, 1.
:::

Example:
```cpp
#include <algorithm>
#include <iostream>

int main() {
  int x[] = {3, 2, 10, 8, 2, 4};

  if (std::any_of(&x[0], &x[5], [](int n){ return n%2 == 1; })) {
    std::cout << "at least one element is odd" << std::endl;
    return 0;
  }
  std::cout << "all of x is even" << std::endl;
}
```
output: at least one element is odd
because none of the elements in x is even, the all_of function returns true

---
## fill()
fill() fills a range with a given number.
fill() takes a start and an end iterator.

```cpp
namespace std {
template <class ForwardIterator, class T>
    void fill(ForwardIterator first, 
              ForwardIterator last, 
              const T& value);
}
```
- first is the first element of a range
- last is the last element of a range
- value is a value to fill the range

:::info
- When using pointers like in the example below the range is closed, the last value is not included. A range of 0 to 2 means 0, 1.
:::

Example:
```cpp
#include <algorithm>

int main() {
  int a[] = {5, 4, 6, 7, 3, 2};
  
  std::fill(&a[0], &a[6], 0);
}
```

In this example the array a will end up being [0, 0, 0, 0, 0, 0].
Again, if in line 6, at the std::fill function call, we had written &a[0], &a[5] the last element would not be filled, a would be:
[0, 0, 0, 0, 0, 2].

---

## fill_n()
Like fill(), fill_n() fill a range with a given number, the difference is in how you give the range.
fill_n() takes a start iterator, and a length.

```cpp
namespace std {
template <class OutputIterator, class Size, class T>
    OutputIterator fill_n(OutputIterator first, Size n, const T& value);
}
```

Example:
```cpp
#include <algorithm>

int main() {
  int a[6] = {5, 4, 6, 7, 3, 2};
  
  std::fill_n(&a[0], 6, 0);
}
```
In this example the array a is filled with zeros starting from &a[0] to &a[0] + 6.

---
## find()
find() attempts to find a given value in a given list. 
If the value is found, it returns an iterator to value, if the value is not found, it returns an iterator to the last value in the list.

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

:::info
- When using pointers like in the example below the range is closed, the last value is not included. A range of 0 to 2 means 0, 1.
:::

Example:
```cpp
#include <iostream>
#include <algorithm>

int main() {
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
## find_if()
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

:::info
- When using pointers like in the example below the range is close, the last value is not included. A range of 0 to 2 means 0, 1.
:::

Example:
```cpp
int main() {
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
## for_each()
Applies a given function to each value in a list.

```cpp
namespace std {
template <class InputIterator, class Function> 
    Function for_each(InputIterator first, 
                      InputIterator last, 
                      Function f);
}
```
- first is the first element of a list
- last is the last element of a list
- f is a function pointer, or a lambda

:::info
- When using pointers like in the example below the range is closed, the last value is not included. A range of 0 to 2 means 0, 1.
:::

Example:
```cpp
#include <algorithm>

int main() {
  int x[] = {1, 2, 3, 4, 5, 6, 7};

  std::for_each(&x[0], &x[5], [](int& n){ n++; });
}
```
In this example x will end up being 2, 3, 4, 5, 6, 6, 7. The last two remain unchanged because the range is 0-5.

---
## none_of()
none_of() returns true if not a single element in a range returns true

```cpp
namespace std {
template <class InputIterator, class Predicate> 
    bool none_of(InputIterator first, 
                 InputIterator last, 
                 Predicate pred);
}
```
- first is the first element of a range
- last is the last element of a range
- pred a function pointer or lambda that returns a boolean

:::info
- When using pointers like in the example below the range is closed, the last value is not included. A range of 0 to 2 means 0, 1.
:::

Example:
```cpp
#include <algorithm>
#include <iostream>

int main() {
  int x[] = {3, 2, 10, 8, 2, 4};

  if (std::none_of(&x[0], &x[5], [](int n){ return n%2 == 1; })) {
    std::cout << "there is no odd element" << std::endl;
    return 0;
  }
  std::cout << "all of x is even" << std::endl;
}
```
output: at least one element is odd
because none of the elements in x is even, the all_of function returns true