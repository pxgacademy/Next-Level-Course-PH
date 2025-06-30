Tailwind CSS এর সাথে `cn`, `clsx`, এবং `twMerge` হলো এমন কিছু টুল যা ডেভেলপারদের ক্লাস ম্যানেজমেন্ট এবং কন্ডিশনাল স্টাইলিংকে আরো সহজ ও দক্ষ করে তোলে।

---

## **১. `cn`, `clsx`, এবং `twMerge` কী?**

### **১.১. `clsx`**
- **কী?**: `clsx` হলো একটি লাইটওয়েট JavaScript লাইব্রেরি যা কন্ডিশনাল ক্লাস নেমগুলোকে একত্রিত করতে ব্যবহৃত হয়। এটি React অ্যাপ্লিকেশনে ক্লাস নেম ম্যানেজ করার জন্য খুবই জনপ্রিয়।
- **কেন দরকার?**: Tailwind CSS এর সাথে কাজ করার সময়, কখনো কখনো আমাদের ক্লাসগুলো কন্ডিশনের উপর নির্ভর করে প্রয়োগ করতে হয়। `clsx` এটি সহজ করে দেয়, বিশেষ করে অবজেক্ট বা অ্যারে ফরম্যাটে ক্লাস নেম হ্যান্ডল করার জন্য।
- **কীভাবে কাজ করে?**: `clsx` বিভিন্ন ধরনের ইনপুট (স্ট্রিং, অবজেক্ট, অ্যারে) গ্রহণ করে এবং শুধুমাত্র সত্য (Truthy) ক্লাসগুলোকে একটি স্ট্রিং হিসেবে রিটার্ন করে।

### **১.২. `twMerge`**
- **কী?**: `twMerge` হলো `tailwind-merge` লাইব্রেরির একটি ফাংশন যা Tailwind CSS ক্লাসগুলোর মধ্যে কনফ্লিক্ট (যেমন, একই প্রোপার্টির জন্য বিভিন্ন ক্লাস) সমাধান করে। এটি নিশ্চিত করে যে শেষ ক্লাসটি অগ্রাধিকার পায়।
- **কেন দরকার?**: Tailwind CSS এর ইউটিলিটি ক্লাসগুলো যখন একাধিক সোর্স থেকে মার্জ করা হয়, তখন কনফ্লিক্ট হতে পারে। উদাহরণস্বরূপ, `bg-blue-500` এবং `bg-red-500` একই প্রোপার্টি (Background Color) নিয়ন্ত্রণ করে। `twMerge` এই কনফ্লিক্ট সমাধান করে।
- **কীভাবে কাজ করে?**: `twMerge` একাধিক ক্লাস স্ট্রিং গ্রহণ করে এবং কনফ্লিক্টিং ক্লাসগুলোর মধ্যে শেষটিকে প্রাধান্য দিয়ে একটি পরিষ্কার ক্লাস স্ট্রিং রিটার্ন করে।

### **১.৩. `cn`**
- **কী?**: `cn` হলো একটি কাস্টম ইউটিলিটি ফাংশন যা `clsx` এবং `twMerge`-কে একত্রিত করে। এটি সাধারণত ডেভেলপাররা তৈরি করে Tailwind CSS ক্লাস ম্যানেজমেন্টকে আরো সহজ করার জন্য। এটি `shadcn/ui` লাইব্রেরি থেকে জনপ্রিয় হয়েছে।
- **কেন দরকার?**: `cn` ফাংশন `clsx`-এর কন্ডিশনাল ক্লাস হ্যান্ডলিং এবং `twMerge`-এর কনফ্লিক্ট রেজোলিউশনকে একত্রিত করে, যা কোডকে পরিষ্কার এবং রক্ষণাবেক্ষণযোগ্য করে।
- **কীভাবে কাজ করে?**: `cn` প্রথমে `clsx` ব্যবহার করে কন্ডিশনাল ক্লাসগুলো প্রক্রিয়া করে, তারপর `twMerge` ব্যবহার করে কনফ্লিক্টিং ক্লাসগুলো সমাধান করে।

---

## **২. কীভাবে ইনস্টল করব?**

প্রথমে আপনার প্রজেক্টে `clsx` এবং `tailwind-merge` ইনস্টল করতে হবে। নিচের কমান্ড ব্যবহার করুন:

```bash
npm install clsx tailwind-merge
```

এরপর, একটি ইউটিলিটি ফাইল তৈরি করুন (যেমন, `utils.ts`) এবং `cn` ফাংশন তৈরি করুন:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

এই `cn` ফাংশনটি আপনার প্রজেক্টের যেকোনো কম্পোনেন্টে ইমপোর্ট করে ব্যবহার করা যাবে।

---

## **৩. কীভাবে কাজ করে?**

### **৩.১. `clsx` এর কাজ**
`clsx` বিভিন্ন ধরনের ইনপুট গ্রহণ করতে পারে:
- **স্ট্রিং**: সরাসরি ক্লাস নেম, যেমন `"px-4 py-2"`।
- **অবজেক্ট**: কন্ডিশনাল ক্লাস, যেমন `{ "bg-blue-500": isActive }`।
- **অ্যারে**: একাধিক ক্লাস নেমের লিস্ট, যেমন `["text-white", "rounded"]`।
- **মিশ্র ইনপুট**: স্ট্রিং, অবজেক্ট, এবং অ্যারের কম্বিনেশন।

**উদাহরণ**:
```javascript
import clsx from "clsx";

const isActive = true;
const isDisabled = false;

const classes = clsx(
  "px-4 py-2 text-white",
  { "bg-blue-500": isActive, "bg-gray-500": !isActive },
  isDisabled && "opacity-50 cursor-not-allowed"
);

console.log(classes);
// আউটপুট: "px-4 py-2 text-white bg-blue-500"
```

এখানে `clsx` শুধুমাত্র সত্য কন্ডিশনের ক্লাসগুলো একত্রিত করে।

### **৩.২. `twMerge` এর কাজ**
`twMerge` কনফ্লিক্টিং Tailwind ক্লাসগুলো সমাধান করে। উদাহরণস্বরূপ, যদি একই প্রোপার্টির জন্য একাধিক ক্লাস থাকে (যেমন, `bg-blue-500` এবং `bg-red-500`), তবে শেষ ক্লাসটি প্রাধান্য পায়।

**উদাহরণ**:
```javascript
import { twMerge } from "tailwind-merge";

const classes = twMerge(
  "bg-blue-500 text-white px-4 py-2 rounded",
  "bg-red-500"
);

console.log(classes);
// আউটপুট: "text-white px-4 py-2 rounded bg-red-500"
```

এখানে `bg-red-500` ক্লাসটি `bg-blue-500`-কে ওভাররাইড করেছে।

### **৩.৩. `cn` এর কাজ**
`cn` ফাংশন `clsx` এবং `twMerge`-কে একত্রিত করে:
1. প্রথমে `clsx` ইনপুট ক্লাসগুলো প্রক্রিয়া করে একটি ক্লাস স্ট্রিং তৈরি করে।
2. তারপর `twMerge` সেই স্ট্রিং থেকে কনফ্লিক্টিং ক্লাসগুলো সমাধান করে।

**উদাহরণ**:
```javascript
import { cn } from "./utils";

const isActive = true;
const isDisabled = false;

const classes = cn(
  "px-4 py-2 text-white",
  { "bg-blue-500": isActive, "bg-gray-500": !isActive },
  isDisabled && "opacity-50 cursor-not-allowed"
);

console.log(classes);
// আউটপুট: "px-4 py-2 text-white bg-blue-500"
```

---

## **৪. কীভাবে ব্যবহার করব?**

এখন আমরা কিছু বাস্তব উদাহরণ দেখব, যেখানে `cn`, `clsx`, এবং `twMerge` ব্যবহার করে Tailwind CSS ক্লাস ম্যানেজ করা হয়েছে। আমরা একটি **Button কম্পোনেন্ট** তৈরি করব, যা বিভিন্ন স্টেটের উপর ভিত্তি করে স্টাইল পরিবর্তন করবে।

### **৪.১. উদাহরণ ১: বেসিক Button কম্পোনেন্ট**
```tsx
import React from "react";
import { cn } from "./utils";

type ButtonProps = {
  children: React.ReactNode;
  isPrimary?: boolean;
  isDisabled?: boolean;
  className?: string;
};

export function Button({ children, isPrimary, isDisabled, className }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded text-white",
        {
          "bg-blue-500": isPrimary,
          "bg-gray-500": !isPrimary,
          "opacity-50 cursor-not-allowed": isDisabled,
        },
        className
      )}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
```

**ব্যবহার**:
```tsx
import React from "react";
import { Button } from "./Button";

export default function App() {
  return (
    <div className="p-4">
      <Button isPrimary={true}>Primary Button</Button>
      <Button isPrimary={false}>Secondary Button</Button>
      <Button isDisabled={true}>Disabled Button</Button>
      <Button isPrimary={true} className="font-bold">Custom Button</Button>
    </div>
  );
}
```

**ব্যাখ্যা**:
- **Base ক্লাস**: `"px-4 py-2 rounded text-white"` সব বাটনের জন্য প্রযোজ্য।
- **কন্ডিশনাল ক্লাস**: `isPrimary` সত্য হলে `bg-blue-500`, মিথ্যা হলে `bg-gray-500`।
- **ডিসেবল স্টেট**: `isDisabled` সত্য হলে `opacity-50 cursor-not-allowed`।
- **কাস্টম ক্লাস**: `className` প্রপের মাধ্যমে অতিরিক্ত ক্লাস যোগ করা যায়, যেমন `font-bold`।
- `cn` ফাংশন `clsx` ব্যবহার করে কন্ডিশনাল ক্লাস প্রক্রিয়া করে এবং `twMerge` ব্যবহার করে কনফ্লিক্ট সমাধান করে। উদাহরণস্বরূপ, যদি `className="bg-red-500"` পাস করা হয়, তবে `bg-blue-500` বা `bg-gray-500` ওভাররাইড হবে।

**আউটপুট**:
- Primary Button: Blue ব্যাকগ্রাউন্ড সহ।
- Secondary Button: Gray ব্যাকগ্রাউন্ড সহ।
- Disabled Button: Gray ব্যাকগ্রাউন্ড এবং নিষ্ক্রিয় স্টাইল।
- Custom Button: Blue ব্যাকগ্রাউন্ড এবং Bold ফন্ট।

---

### **৪.২. উদাহরণ ২: Responsive এবং Dark Mode সাপোর্ট**
এই উদাহরণে আমরা একটি কার্ড কম্পোনেন্ট তৈরি করব যা Responsive এবং Dark Mode স্টাইল সাপোর্ট করে।

```tsx
import React from "react";
import { cn } from "./utils";

type CardProps = {
  children: React.ReactNode;
  isHighlighted?: boolean;
  className?: string;
};

export function Card({ children, isHighlighted, className }: CardProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-lg shadow-md",
        {
          "bg-white text-black": !isHighlighted,
          "bg-blue-100 text-blue-900": isHighlighted,
          "dark:bg-gray-800 dark:text-white": true,
          "md:p-6 lg:p-8": true,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
```

**ব্যবহার**:
```tsx
import React from "react";
import { Card } from "./Card";

export default function App() {
  return (
    <div className="p-4">
      <Card>Normal Card</Card>
      <Card isHighlighted={true}>Highlighted Card</Card>
      <Card className="border-2 border-red-500">Custom Card</Card>
    </div>
  );
}
```

**ব্যাখ্যা**:
- **Base ক্লাস**: `"p-4 rounded-lg shadow-md"` সব কার্ডের জন্য প্রযোজ্য।
- **কন্ডিশনাল ক্লাস**: `isHighlighted` সত্য হলে `bg-blue-100 text-blue-900`, মিথ্যা হলে `bg-white text-black`।
- **Dark Mode**: `dark:bg-gray-800 dark:text-white` Dark Mode এর জন্য।
- **Responsive**: `md:p-6 lg:p-8` মিডিয়াম এবং লার্জ স্ক্রিনে প্যাডিং পরিবর্তন।
- **কাস্টম ক্লাস**: `className` প্রপের মাধ্যমে অতিরিক্ত ক্লাস যোগ করা যায়, যেমন `border-2 border-red-500`।
- `twMerge` নিশ্চিত করে যে কনফ্লিক্টিং ক্লাস (যেমন, `bg-white` এবং `bg-blue-100`) সঠিকভাবে হ্যান্ডল হয়।

**আউটপুট**:
- Normal Card: সাদা ব্যাকগ্রাউন্ড সহ।
- Highlighted Card: হালকা নীল ব্যাকগ্রাউন্ড সহ।
- Custom Card: সাদা ব্যাকগ্রাউন্ড এবং লাল বর্ডার।
- Dark Mode এ: কার্ডগুলো গাঢ় ব্যাকগ্রাউন্ড সহ।
- Responsive স্ক্রিনে: প্যাডিং পরিবর্তন।

---

## **৫. Redux এর সাথে Integration**
কীভাবে `cn` ফাংশন Redux এবং Tailwind CSS এর সাথে একত্রিত করা যায়। নিচে একটি Todo App এর উদাহরণ দেওয়া হলো, যেখানে `cn` ব্যবহার করে কন্ডিশনাল স্টাইলিং করা হয়েছে।

```tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { cn } from "./utils";

// Types
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface RootState {
  todos: {
    todos: Todo[];
    filter: "all" | "completed" | "active";
  };
}

interface AddTodoAction {
  type: "todos/addTodo";
  payload: string;
}

interface ToggleTodoAction {
  type: "todos/toggleTodo";
  payload: number;
}

interface SetFilterAction {
  type: "todos/setFilter";
  payload: "all" | "completed" | "active";
}

type TodoAction = AddTodoAction | ToggleTodoAction | SetFilterAction;

// Slice
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [] as Todo[],
    filter: "all" as "all" | "completed" | "active",
  },
  reducers: {
    addTodo(state, action: { payload: string }) {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo(state, action: { payload: number }) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    setFilter(state, action: { payload: "all" | "completed" | "active" }) {
      state.filter = action.payload;
    },
  },
});

// Export Actions
export const { addTodo, toggleTodo, setFilter } = todoSlice.actions;

// Store
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Selector
const selectFilteredTodos = (state: RootState) => {
  const { todos, filter } = state.todos;
  if (filter === "all") return todos;
  if (filter === "completed") return todos.filter((todo) => todo.completed);
  return todos.filter((todo) => !todo.completed);
};

// Component
function TodoApp() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectFilteredTodos);
  const filter = useAppSelector((state) => state.todos.filter);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Todo App</h2>
      <input
        type="text"
        className={cn(
          "w-full p-2 border rounded",
          "focus:outline-none focus:ring-2 focus:ring-blue-500"
        )}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            dispatch(addTodo(e.currentTarget.value));
            e.currentTarget.value = "";
          }
        }}
      />
      <div className="flex gap-2 my-4">
        {["all", "completed", "active"].map((f) => (
          <button
            key={f}
            className={cn(
              "px-4 py-2 rounded",
              {
                "bg-blue-500 text-white": filter === f,
                "bg-gray-200 text-gray-800": filter !== f,
              }
            )}
            onClick={() => dispatch(setFilter(f as "all" | "completed" | "active"))}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={cn(
              "p-2 rounded border",
              {
                "bg-green-100 text-green-900": todo.completed,
                "bg-white text-black": !todo.completed,
              }
            )}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text} {todo.completed ? "(Completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

// App
function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

// Render
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
```

**ব্যাখ্যা**:
- **Input Field**: `cn` ব্যবহার করে Base ক্লাস (`w-full p-2 border rounded`) এবং Focus স্টেট (`focus:outline-none focus:ring-2 focus:ring-blue-500`) যোগ করা হয়েছে।
- **Filter Buttons**: `filter` স্টেটের উপর ভিত্তি করে কন্ডিশনাল ক্লাস প্রয়োগ করা হয়েছে (`bg-blue-500 text-white` যদি সক্রিয় থাকে, অন্যথায় `bg-gray-200 text-gray-800`)।
- **Todo Items**: `completed` স্টেটের উপর ভিত্তি করে কন্ডিশনাল ক্লাস প্রয়োগ করা হয়েছে (`bg-green-100 text-green-900` যদি কমপ্লিট হয়, অন্যথায় `bg-white text-black`)।
- **Redux Integration**: Redux Toolkit ব্যবহার করে State এবং Action ম্যানেজ করা হয়েছে। `RootState` এবং `AppDispatch` টাইপ ব্যবহার করে Type Safety নিশ্চিত করা হয়েছে।
- **কনফ্লিক্ট রেজোলিউশন**: `cn` ফাংশন নিশ্চিত করে যে কোনো কনফ্লিক্টিং ক্লাস থাকলে সেটি সঠিকভাবে হ্যান্ডল হয়।

**আউটপুট**:
- ইনপুট ফিল্ডে টেক্সট টাইপ করে Enter চাপলে নতুন Todo যোগ হবে।
- ফিল্টার বাটনগুলো সক্রিয় হলে নীল ব্যাকগ্রাউন্ড দেখাবে।
- Todo আইটেমগুলো কমপ্লিট হলে সবুজ ব্যাকগ্রাউন্ড দেখাবে।

---

## **৬. কেন `cn`, `clsx`, এবং `twMerge` ব্যবহার করব?**

- **পরিষ্কার কোড**: `clsx` এবং `twMerge` কন্ডিশনাল এবং কনফ্লিক্টিং ক্লাসগুলোকে পরিষ্কারভাবে হ্যান্ডল করে, যা কোড পড়তে এবং রক্ষণাবেক্ষণ করতে সহজ করে।
- **Type Safety**: TypeScript এর সাথে ব্যবহার করলে `ClassValue` টাইপ নিশ্চিত করে যে ক্লাস নেমগুলো সঠিক ফরম্যাটে থাকবে।
- **কনফ্লিক্ট রেজোলিউশন**: `twMerge` নিশ্চিত করে যে Tailwind ক্লাসগুলোর কনফ্লিক্ট সঠিকভাবে সমাধান হয়, যা ডেভেলপারদের ম্যানুয়ালি ক্লাস অর্ডার ম্যানেজ করার ঝামেলা থেকে বাঁচায়।
- **রিইউজেবিলিটি**: `cn` ফাংশন ব্যবহার করে কম্পোনেন্টগুলোর স্টাইলিংকে আরো মডুলার এবং রিইউজেবল করা যায়।

---

## **৭. উপসংহার**

`cn`, `clsx`, এবং `twMerge` হলো Tailwind CSS এর সাথে কাজ করার জন্য শক্তিশালী টুল। `clsx` কন্ডিশনাল ক্লাস হ্যান্ডল করে, `twMerge` কনফ্লিক্ট সমাধান করে, এবং `cn` এই দুটোর শক্তিকে একত্রিত করে। উপরের উদাহরণগুলোর মাধ্যমে দেখানো হয়েছে কীভাবে এগুলো ব্যবহার করে Button, Card, এবং Todo App কম্পোনেন্ট তৈরি করা যায়। এই টুলগুলো ব্যবহার করলে আপনার কোড পরিষ্কার, রক্ষণাবেক্ষণযোগ্য, এবং Type-safe হবে।

