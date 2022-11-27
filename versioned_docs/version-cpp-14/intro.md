---
sidebar_position: 1
---

# C++ 14

## Conventions
- To keep things clear, all objects part of a namespace will be explicitly labeled as such. 
That is, cout will never be refered to as cout, but as std::cout, or it will come in a namespace declaration:
  ```
  namespace std {
    extern ostream cout;
  }
  ```


- To make it absolutely clear where to find an object, all mentions of objects other than the object currently being described have the name of the header where they are found prepended onto it with a # symbol seperating them. 
For example, if std::cout is being described and std::istream is mentioned that would look something like so:

  - For more info see ostream#std::ostream.

