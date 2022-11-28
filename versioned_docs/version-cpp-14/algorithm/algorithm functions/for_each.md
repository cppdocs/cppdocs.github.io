# for_each()
Applies a given function to each value in a list.

---
```cpp
template <class InputIterator, class Function> 
    Function for_each(InputIterator first, 
                      InputIterator last, 
                      Function f);
```
- first is the first element of a list
- last is the last element of a list
- f is a function pointer, or a lambda

---
## Example
```cpp
#include <algorithm>

int main(){
  int x[] = {1, 2, 3, 4, 5, 6, 7};

  std::for_each(&x[0], &x[5], [](int& n){ n++; });
}
```
In this example x will end up being 2, 3, 4, 5, 6, 6, 7. The last two remain unchanged because the range is 0-5.
