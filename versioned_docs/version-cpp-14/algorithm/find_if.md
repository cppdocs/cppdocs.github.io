# find_if()
Exactly the same as [find()](find.md), but, instead of finding a certain value, find a value by passing it to a boolean function.

```cpp
namespace std {
template <class InputIterator, class Predicate>
    InputIterator find_if(InputIterator first, InputIterator last, Predicate pred);
}
```
