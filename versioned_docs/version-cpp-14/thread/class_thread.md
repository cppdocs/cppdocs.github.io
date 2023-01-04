---
title: class thread
---

# class thread

```cpp
namespace std {
class thread {
public:
    class id;
    typedef pthread_t native_handle_type;
    thread() noexcept;
    template <class F, class ...Args> explicit thread(F&& f, Args&&... args);
    thread(const thread&) = delete;
    thread(thread&& t) noexcept;
    ~thread();
    
    void detach();
    id get_id() const noexcept;
    static unsigned hardware_concurrency() noexcept;
    void join();
    bool joinable() const noexcept;
    native_handle_type native_handle();
    void swap(thread& t) noexcept;

    thread& operator=(const thread&) = delete;
    thread& operator=(thread&& t) noexcept;
};
}
```

## Multithreading
To multithread in C++ you must create a std::thread object with a function pointer like so:
```cpp
std::thread thread1(function1, args...);
```

Example:
```cpp
#include <thread>
#include <iostream>

int result = 0;

void function1(int x, int y) {
    result = x + y;
}

int main() {
    std::thread thread1(function1, 4, 6);
    std::cout << "Working in another thread" << std::endl;
    thread1.join();
    std::cout << "Here is the result: " << result << std::endl;
}
```

## Constructor
```cpp
thread() noexcept;
template <class F, class ...Args> explicit thread(F&& f, Args&&... args);
thread(const thread&) = delete;
thread(thread&& t) noexcept;
```

Creates a thread object.

## swap()
```cpp
void swap(thread& t) noexcept;
```
