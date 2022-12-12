---
title: File IO
---
# File IO
Writing to a file in C++ is hard if you don't know what you are doing.
In it's most basic form you create an fstream object then you push to that object like you would with std::cout, like so:

```cpp
#include <fstream>

int main() {
  std::fstream outputFile("FILE_NAME");

  outputFile << "Hello World!\n";
}
```

Note that fstream cannot create a file if it doesn't exist.  
If you would like to understand more the first step is to understand that std::fstream is a type alias for basic_fstream like so:

```cpp
namespace std {
typedef basic_fstream<char> fstream;
}
```

Now look at [basic_fstream](basic_fstream/basic_fstream.md).
