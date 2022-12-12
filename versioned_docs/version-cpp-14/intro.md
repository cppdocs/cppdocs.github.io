---
sidebar_position: 1
title: C++ 14
---

# C++ 14

## Conventions
- To keep things clear, all objects part of a namespace will be explicitly labeled as such. 
That is, cout will never be refered to as cout, but as std::cout, or it will come in a namespace declaration:
  ```cpp
  namespace std {
    extern ostream cout;
  }
  ```
