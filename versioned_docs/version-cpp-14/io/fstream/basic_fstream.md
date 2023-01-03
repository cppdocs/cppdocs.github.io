# basic_fstream
fstream handles file input and output.

```cpp
namespace std {
template <class charT, class traits=char_traits<charT>>
  class basic_fstream : public basic_iostream <charT,traits>
{
public:
    // typedefs
    typedef charT char_type;
    typedef traits traits_type;
    typedef typename traits_type::int_type int_type;
    typedef typename traits_type::pos_type pos_type;
    typedef typename traits_type::off_type off_type;

    // functions
    basic_fstream();
    explicit basic_fstream(const char* s, ios_base::openmode mode = ios_base::in|ios_base::out);
    explicit basic_fstream(const string& s, ios_base::openmode mode = ios_base::in|ios_base::out);
    basic_fstream(basic_fstream&& rhs);
    basic_fstream& operator=(basic_fstream&& rhs);
    void open(const char* s, ios_base::openmode mode = ios_base::in|ios_base::out);
    void open(const string& s, ios_base::openmode mode = ios_base::in|ios_base::out);
    bool is_open() const;
    void swap(basic_fstream& rhs);
    basic_filebuf<char_type, traits_type>* rdbuf() const;
    void close();
};
}
```

As you can std::basic_fstream (which is basically std::fstream) defines basic file functions like close, open and is_open. 
However it does not define any file io.


## Constructor
```cpp
basic_fstream();
explicit basic_fstream(const char* s, ios_base::openmode mode = ios_base::in|ios_base::out);
explicit basic_fstream(const string& s, ios_base::openmode mode = ios_base::in|ios_base::out);
basic_fstream(basic_fstream&& rhs);
basic_fstream& operator=(basic_fstream&& rhs);
```
Create a basic_fstream object. 
Open a file named s, with mode mode (defaults to r/w).

## open()
```cpp
void open(const char* s, ios_base::openmode mode = ios_base::in|ios_base::out);
void open(const string& s, ios_base::openmode mode = ios_base::in|ios_base::out);
```
Open a file named s, with mode mode (defaults to r/w).

## is_open()
```cpp
bool is_open() const;
```

Returns true if a file is open.
Example:
```cpp
#include <fstream>

int main() {
  std::fstream fout("file.out");

  if (!fout.is_open()) {
    // do something if file could not be opened
  }
}
```

## swap()
```cpp
void swap(basic_fstream& rhs);
```
Swaps current fstream with another fstream.
Example:
```cpp
#include <fstream>

int main() {
  std::fstream one("one.txt");
  std::fstream two("two.txt");

  one.swap(two);
  one << "Hello" << std::endl; // Will print to the file two.txt
}
```

## rdbuf()
```cpp
basic_filebuf<char_type, traits_type>* rdbuf() const;
```
Returns a pointer to a basic_filebuf.

## close()
```cpp
void close();
```
If a file is currently open close it.