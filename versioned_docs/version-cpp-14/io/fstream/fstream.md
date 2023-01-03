---
title: <fstream>
---
# <fstream\>
```cpp
namespace std {
class basic_fstream;
}
```


Writing to a file in C++ is hard if you don't know what you are doing.
In it's most basic form you create an fstream object, then push to that object like you would with std::cout, like so:

```cpp
#include <fstream>

int main() {
  std::fstream outputFile("FILE_NAME");

  outputFile << "Hello World!\n";
}
```
:::caution
fstream cannot create a file if it doesn't exist. Be sure that the file exists when you open it, or check if a file is open ([is_open()](basic_fstream#is_open)).
:::

If you would like to understand more the first step is to understand that std::fstream is a type alias for basic_fstream like so:

```cpp
namespace std {
typedef basic_fstream<char> fstream;
}
```

Now look at [basic_fstream](basic_fstream.md).
