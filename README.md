# Hook getters

A demo of the awesome hook getter pattern described by Paco Coursey in this blog post: https://paco.me/writing/hook-getter.

This pattern allows you to dramatically reduce the amount of react re-renders in your app by using a clever proxy object that keeps track of tracked state and only re-renders when that state changes.
