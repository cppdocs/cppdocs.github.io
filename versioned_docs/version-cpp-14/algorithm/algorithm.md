---
title: <algorithm>
---
# algorithm

Algorithm includes functions for manipulating data.
For example sort, which sorts things using an algorithm (for more see algorithm#std::sort)

## Patterns
- _n can usually be append to a function name if the function operates on a range. 
For example, [fill()](fill.md) and [fill_n()](fill.md), [fill()](fill.md) takes a start and an end, whereas [fill_n](fill.md) take a start and a size.

---
```cpp
namespace std {
template <class InputIterator, class Predicate> 
    bool all_of(InputIterator first, InputIterator last, Predicate pred);

template <class InputIterator, class Predicate> 
    bool any_of(InputIterator first, InputIterator last, Predicate pred);

template <class InputIterator, class Predicate> 
    bool none_of(InputIterator first, InputIterator last, Predicate pred);


template <class ForwardIterator, class T>
    void fill(ForwardIterator first, ForwardIterator last, const T& value);

template <class OutputIterator, class Size, class T>
    OutputIterator fill_n(OutputIterator first, Size n, const T& value);


template <class InputIterator, class Function> 
    Function for_each(InputIterator first, InputIterator last, Function f);

template <class InputIterator, class T>
    InputIterator find(InputIterator first, InputIterator last, const T& value);
}
```

