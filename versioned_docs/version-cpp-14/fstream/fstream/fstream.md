# fstream
fstream handles file input and output.

```cpp
namespace std {
template <class charT, class traits=char_traits<charT> >
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
    void swap(basic_fstream& rhs);
    basic_filebuf<char_type, traits_type>* rdbuf() const;
    bool is_open() const;
    void open(const char* s, ios_base::openmode mode = ios_base::in|ios_base::out);
    void open(const string& s, ios_base::openmode mode = ios_base::in|ios_base::out);
    void close();
};
}
```
