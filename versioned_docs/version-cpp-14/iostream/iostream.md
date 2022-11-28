# iostream

Even though iostream is one of the most widely used headers, none of it's classes or functions are implemented by it, instead it just includes istream and ostream.

---

```
namespace std {
  extern ostream cout;
  extern istream cin;
  extern ostream cerr;
  extern ostream clog;
  extern wistream wcin;
  extern wostream wcout;
  extern wostream wcerr;
  extern wostream wclog;
}  // namespace std
```

---

## cout
cout is used in order to print to stdout.
### Example
```
  #include <iostream>
  int main(){
    std::cout << "This will be printed to stdout\n";
  }
```

## cin
cin is used in order to read from stdin.
