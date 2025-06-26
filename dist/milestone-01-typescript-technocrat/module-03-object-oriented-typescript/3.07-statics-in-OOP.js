"use strict";
{
    // STATIC in OOP
    class Counter {
        increment() {
            return (Counter.count = Counter.count + 1);
        }
        static decrement() {
            return (Counter.count = Counter.count - 1);
        }
    }
    Counter.count = 0;
    const instance1 = new Counter();
    instance1.increment();
    const instance2 = new Counter();
    instance2.increment();
    Counter.decrement();
}
