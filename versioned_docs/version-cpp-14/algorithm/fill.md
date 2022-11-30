# fill()
fill() fills a range with a given number.
fill() takes a start and an end iterator.

```cpp
namespace std {
template <class ForwardIterator, class T>
    void fill(ForwardIterator first, ForwardIterator last, const T& value);
}
```
- first is the first element of a range
- last is the last element of a range
- value is a value to fill the range

## Notes
- When using pointers like in the example below, the last value is not included. A range of 0 to 2 means 0, 1.

## Example
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

# fill_n()
Like fill(), fill_n() fill a range with a given number, the difference is in how you give the range.
fill_n() takes a start iterator, and a length.

```cpp
namespace std {
template <class OutputIterator, class Size, class T>
    OutputIterator fill_n(OutputIterator first, Size n, const T& value);
}
```

## Example
```cpp
#include <algorithm>

int main(){
  int a[6] = {5, 4, 6, 7, 3, 2};
  
  std::fill_n(&a[0], 6, 0);
}
```
In this example the array a is filled with zeros starting from &a[0] to &a[0] + 6.

---
# See also
