# all_of()

all_of returns true if all elements in a range return true

---
```cpp
template <class InputIterator, class Predicate> 
    bool all_of(InputIterator first, 
                InputIterator last, 
                Predicate pred);
```
- first is the first element of a range
- last is the last element of a range
- pred a function pointer or lambda that returns a boolean

---
## Example

```cpp
#include <algorithm>
#include <iostream>

int main(){
  int x[] = {3, 1, 3, 5, 5, 9};

  if (std::all_of(&x[0], &x[5], [](int n){ return n%2 == 1; })){
    std::cout << "all of x is odd" << std::endl;
    return 0;
  }
  std::cout << "not all of x is odd" << std::endl;
}
```
output: all of x is odd
because none of the elements in x is even, the all_of function returns true


---
## See also

