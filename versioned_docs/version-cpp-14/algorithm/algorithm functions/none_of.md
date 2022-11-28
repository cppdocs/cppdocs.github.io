# none_of()

none_of returns true if not a single element in a range returns true

---
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

---
## Example

```cpp
#include <algorithm>
#include <iostream>

int main() {
  int x[] = {3, 2, 10, 8, 2, 4};

  if (std::none_of(&x[0], &x[5], [](int n){ return n%2 == 1; })){
    std::cout << "there is no odd element" << std::endl;
    return 0;
  }
  std::cout << "all of x is even" << std::endl;
}
```
output: at least one element is odd
because none of the elements in x is even, the all_of function returns true
