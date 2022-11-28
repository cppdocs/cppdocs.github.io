# all_of()

all_of returns true if all elements in a range return true

---
``` 
template <class InputIterator, class Predicate> bool 
    all_of(InputIterator first, 
           InputIterator last, 
           Predicate pred);
```
- first is the first element of a range
- last is the last element of a range
- pred a function pointer or lambda that returns a boolean

---
## Example



---
## See also
[[any_of.md]]
