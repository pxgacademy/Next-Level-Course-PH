
# `cva` and Variant-Based styling with Tailwind CSS

Tailwind CSS এর সাথে কাজ করার সময়, কম্পোনেন্টের বিভিন্ন স্টাইলিং ভেরিয়েন্ট (যেমন, প্রাইমারি, সেকেন্ডারি, ডিস্ট্রাকটিভ) এবং সাইজ (ছোট, মাঝারি, বড়) ম্যানেজ করা একটি সাধারণ প্রয়োজন। এই কাজটি সহজ করার জন্য `cva` (Class Variance Authority) নামে একটি লাইব্রেরি ব্যবহৃত হয়। বিস্তারিতভাবে ব্যাখ্যা করব, `cva` কী, এটি কীভাবে কাজ করে, এবং `variants`, `size`, এবং `defaultVariants` এর কার্যপ্রণালী বোঝাব।

---

## **১. `cva` কী?**

### **১.১. সংজ্ঞা**
`cva` হলো **Class Variance Authority**, একটি JavaScript/TypeScript লাইব্রেরি যা Tailwind CSS ক্লাসগুলোর ভেরিয়েন্ট-ভিত্তিক স্টাইলিং সহজ করার জন্য ব্যবহৃত হয়। এটি ডেভেলপারদের কম্পোনেন্টের বিভিন্ন স্টাইলিং ভেরিয়েন্ট (যেমন, প্রাইমারি, আউটলাইন, লিঙ্ক) এবং সাইজ (যেমন, ছোট, বড়) সংজ্ঞায়িত করতে দেয়, যা পরে কম্পোনেন্টে কন্ডিশনালি প্রয়োগ করা যায়।

### **১.২. কেন দরকার?**
- **Modularity**: `cva` একটি কম্পোনেন্টের সকল স্টাইলিং লজিককে এক জায়গায় সংজ্ঞায়িত করে, যা কোডকে পরিষ্কার এবং রক্ষণাবেক্ষণযোগ্য করে।
- **Reusability**: একটি `cva` ভেরিয়েন্ট সংজ্ঞা একাধিক কম্পোনেন্টে ব্যবহার করা যায়।
- **Type Safety**: TypeScript এর সাথে ব্যবহার করলে, `cva` সঠিক ভেরিয়েন্ট এবং প্রপস নিশ্চিত করে, যা কোডে ত্রুটি কমায়।
- **Conflict Resolution**: `cva` সাধারণত `tailwind-merge` এর সাথে ব্যবহৃত হয়, যা কনফ্লিক্টিং Tailwind ক্লাসগুলো সমাধান করে।

### **১.৩. কীভাবে কাজ করে?**
`cva` একটি ফাংশন যা দুটি প্রধান অংশ গ্রহণ করে:
1. **Base ক্লাস**: কম্পোনেন্টের সাধারণ স্টাইল, যা সব ভেরিয়েন্টের জন্য প্রযোজ্য।
2. **Variants অবজেক্ট**: বিভিন্ন ভেরিয়েন্ট (যেমন, `variant`, `size`) এবং তাদের সংশ্লিষ্ট Tailwind ক্লাস।

`cva` ফাংশনটি একটি ফাংশন রিটার্ন করে, যা প্রপস গ্রহণ করে এবং উপযুক্ত ক্লাস স্ট্রিং তৈরি করে।

---

## **২. প্রদত্ত কোডের ব্যাখ্যা**

নিচের কোডটি একটি `buttonVariants` ফাংশন তৈরি করে, যা একটি বাটন কম্পোনেন্টের জন্য বিভিন্ন স্টাইলিং ভেরিয়েন্ট সংজ্ঞায়িত করে। এটি নিচে ধাপে ধাপে ব্যাখ্যা করা হলো:

```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg2/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

### **২.১. Base ক্লাস**
```typescript
"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer"
```

**ব্যাখ্যা**:
- এই স্ট্রিংটি বাটনের **Base স্টাইল**, যা সব বাটনের জন্য প্রযোজ্য। এটি Tailwind CSS ক্লাস ব্যবহার করে:
  - `inline-flex items-center justify-center`: বাটনের কন্টেন্ট কেন্দ্রে সারিবদ্ধ।
  - `gap-2`: কন্টেন্টের মধ্যে 2 ইউনিট গ্যাপ।
  - `whitespace-nowrap`: টেক্সট মাল্টিলাইনে ভাঙবে না।
  - `rounded-md`: মাঝারি গোলাকার কোণ।
  - `text-sm font-medium`: ছোট ফন্ট সাইজ এবং মাঝারি ফন্ট ওজন।
  - `transition-all`: স্টাইল পরিবর্তনের সময় মসৃণ ট্রানজিশন।
  - `disabled:pointer-events-none disabled:opacity-50`: নিষ্ক্রিয় বাটনের জন্য কার্সার এবং অপাসিটি।
  - `[&_svg]:pointer-events-none [&_svg]:shrink-0`: SVG আইকনের জন্য পয়েন্টার ইভেন্ট নিষ্ক্রিয় এবং সঙ্কুচিত হবে না।
  - `[&_svg:not([class*='size-'])]:size-4`: SVG এর ডিফল্ট সাইজ 4 ইউনিট।
  - `outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]`: ফোকাস স্টেটে রিং এফেক্ট।
  - `aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`: ইনভ্যালিড স্টেটে রিং এবং বর্ডার।
  - `cursor-pointer`: কার্সার হিসেবে পয়েন্টার।

### **২.২. `variants` অবজেক্ট**
`variants` অবজেক্টে দুটি ভেরিয়েন্ট সংজ্ঞায়িত করা হয়েছে: `variant` এবং `size`। এটি বাটনের বিভিন্ন স্টাইল এবং সাইজ নির্ধারণ করে।

#### **২.২.১. `variant`**
```typescript
variant: {
  default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
  destructive:
    "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline:
    "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline",
}
```

**ব্যাখ্যা**:
- `variant` বাটনের স্টাইলিং ভেরিয়েন্ট নির্ধারণ করে। প্রতিটি ভেরিয়েন্টে Tailwind ক্লাস ব্যবহার করা হয়েছে:
  - **default**: প্রাইমারি বাটন (`bg-primary text-primary-foreground`), হোভারে সামান্য গাঢ় (`hover:bg-primary/90`)।
  - **destructive**: ডিস্ট্রাকটিভ অ্যাকশনের জন্য (যেমন, ডিলিট বাটন), লাল ব্যাকগ্রাউন্ড (`bg-destructive`) এবং হোভার/ফোকাস স্টাইল।
  - **outline**: শুধু বর্ডার সহ, হোভারে অ্যাকসেন্ট কালার (`hover:bg-accent`)।
  - **secondary**: সেকেন্ডারি কালার স্কিম (`bg-secondary`)।
  - **ghost**: কোনো ব্যাকগ্রাউন্ড ছাড়া, হোভারে অ্যাকসেন্ট (`hover:bg-accent`)।
  - **link**: লিঙ্কের মতো স্টাইল, আন্ডারলাইন সহ (`text-primary hover:underline`)।

#### **২.২.২. `size`**
```typescript
size: {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
}
```

**ব্যাখ্যা**:
- `size` বাটনের সাইজ নির্ধারণ করে:
  - **default**: উচ্চতা 9 ইউনিট, প্যাডিং 4 এবং 2, SVG আইকন থাকলে প্যাডিং 3 (`has-[>svg]:px-3`)।
  - **sm**: ছোট সাইজ, উচ্চতা 8, কম প্যাডিং এবং গ্যাপ।
  - **lg**: বড় সাইজ, উচ্চতা 10, বেশি প্যাডিং।
  - **icon**: শুধু আইকনের জন্য, বর্গাকার (9x9)।

### **২.৩. `defaultVariants`**
```typescript
defaultVariants: {
  variant: "default",
  size: "default",
}
```

**ব্যাখ্যা**:
- `defaultVariants` নির্ধারণ করে যে কোনো প্রপস পাস না করলে কোন ভেরিয়েন্ট এবং সাইজ ব্যবহৃত হবে।
- এখানে, যদি কোনো `variant` বা `size` প্রপ পাস না করা হয়, তবে `variant: "default"` এবং `size: "default"` ব্যবহৃত হবে।

---

## **৩. কীভাবে ব্যবহার করব?**

`buttonVariants` ফাংশনটি ব্যবহার করে আমরা একটি বাটন কম্পোনেন্ট তৈরি করতে পারি, যা বিভিন্ন ভেরিয়েন্ট এবং সাইজ সাপোর্ট করে। নিচে একটি সম্পূর্ণ উদাহরণ দেওয়া হলো।

### **৩.১. ইনস্টলেশন**
প্রথমে প্রয়োজনীয় ডিপেন্ডেন্সি ইনস্টল করুন:

```bash
npm install class-variance-authority tailwind-merge clsx @types/clsx
```

এরপর, Tailwind CSS কনফিগারেশন নিশ্চিত করুন (`tailwind.config.js`):

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        "primary-foreground": "#ffffff",
        destructive: "#ef4444",
        secondary: "#6b7280",
        "secondary-foreground": "#ffffff",
        accent: "#e5e7eb",
        "accent-foreground": "#1f2937",
        background: "#ffffff",
        input: "#e5e7eb",
        ring: "#3b82f6",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
```

### **৩.২. `cn` ইউটিলিটি ফাংশন**
আমরা `cn` ফাংশন ব্যবহার করব, যা `clsx` এবং `twMerge` কে একত্রিত করে।

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### **৩.৩. Button কম্পোনেন্ট**
নিচে `buttonVariants` ব্যবহার করে একটি বাটন কম্পোনেন্ট তৈরি করা হলো:

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";
import React from "react";

// Button Variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
  };

export function Button({
  children,
  variant,
  size,
  isLoading,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin size-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        children
      )}
    </button>
  );
}
```

**ব্যাখ্যা**:
- **ButtonProps**: `VariantProps<typeof buttonVariants>` ব্যবহার করে `variant` এবং `size` প্রপসের Type নিশ্চিত করা হয়েছে। `isLoading` প্রপ যোগ করা হয়েছে লোডিং স্টেট হ্যান্ডল করার জন্য।
- **ক্লাস জেনারেশন**: `buttonVariants({ variant, size })` কল করে উপযুক্ত ক্লাস স্ট্রিং তৈরি করা হয়, যা `cn` ফাংশনের মাধ্যমে `className` প্রপের সাথে মার্জ করা হয়।
- **লোডিং স্টেট**: `isLoading` সত্য হলে একটি স্পিনিং SVG আইকন দেখানো হয়।

### **৩.৪. ব্যবহার**
```tsx
import React from "react";
import { Button } from "./Button";

export default function App() {
  return (
    <div className="p-4 space-y-4">
      <Button>Default Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline" size="sm">
        Small Outline Button
      </Button>
      <Button variant="secondary" size="lg">
        Large Secondary Button
      </Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
      <Button isLoading>Loading Button</Button>
      <Button size="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </Button>
    </div>
  );
}
```

**আউটপুট**:
- **Default Button**: নীল ব্যাকগ্রাউন্ড, সাদা টেক্সট।
- **Destructive Button**: লাল ব্যাকগ্রাউন্ড, সাদা টেক্সট।
- **Small Outline Button**: বর্ডার সহ, ছোট সাইজ।
- **Large Secondary Button**: ধূসর ব্যাকগ্রাউন্ড, বড় সাইজ।
- **Ghost Button**: হোভারে অ্যাকসেন্ট ব্যাকগ্রাউন্ড।
- **Link Button**: আন্ডারলাইন সহ লিঙ্ক স্টাইল।
- **Loading Button**: স্পিনিং আইকন।
- **Icon Button**: শুধু আইকন সহ বর্গাকার বাটন।

### **৩.৫. Redux এর সাথে Integration**
এখন আমরা `buttonVariants` কে Redux এর সাথে একত্রিত করে একটি Todo App তৈরি করব, যেখানে বাটনগুলো `buttonVariants` ব্যবহার করবে।

```tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { cn } from "./utils";
import { Button } from "./Button";

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
          "focus:outline-none focus:ring-2 focus:ring-primary"
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
          <Button
            key={f}
            variant={filter === f ? "default" : "outline"}
            size="sm"
            onClick={() => dispatch(setFilter(f as "all" | "completed" | "active"))}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={cn(
              "p-2 rounded border flex justify-between items-center",
              {
                "bg-green-100 text-green-900": todo.completed,
                "bg-white text-black": !todo.completed,
              }
            )}
          >
            <span>{todo.text}</span>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.completed ? "Undo" : "Complete"}
            </Button>
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
- **Filter Buttons**: `variant` প্রপ ব্যবহার করে সক্রিয় ফিল্টারের জন্য `default` এবং অন্যদের জন্য `outline` ভেরিয়েন্ট প্রয়োগ করা হয়েছে। সাইজ `sm` ব্যবহার করা হয়েছে।
- **Todo Items**: প্রতিটি Todo আইটেমে একটি `Button` কম্পোনেন্ট ব্যবহার করা হয়েছে, যা `destructive` ভেরিয়েন্ট এবং `sm` সাইজ ব্যবহার করে।
- **Redux Integration**: Redux Toolkit ব্যবহার করে State এবং Action ম্যানেজ করা হয়েছে।
- **Type Safety**: `RootState` এবং `AppDispatch` ব্যবহার করে TypeScript এর সুবিধা নেওয়া হয়েছে।
- **ক্লাস ম্যানেজমেন্ট**: `cn` ফাংশন ব্যবহার করে কন্ডিশনাল ক্লাস এবং কনফ্লিক্ট রেজোলিউশন নিশ্চিত করা হয়েছে।

**আউটপুট**:
- ইনপুট ফিল্ডে টেক্সট টাইপ করে Enter চাপলে নতুন Todo যোগ হবে।
- ফিল্টার বাটনগুলো সক্রিয় হলে নীল ব্যাকগ্রাউন্ড দেখাবে, অন্যথায় আউটলাইন স্টাইল।
- Todo আইটেমগুলো কমপ্লিট হলে সবুজ ব্যাকগ্রাউন্ড এবং একটি লাল "Complete" বা "Undo" বাটন দেখাবে।

---

## **৪. কেন `cva` ব্যবহার করব?**

- **কেন্দ্রীভূত স্টাইলিং**: সকল স্টাইলিং লজিক এক জায়গায় সংজ্ঞায়িত, যা কোড রক্ষণাবেক্ষণ সহজ করে।
- **Type Safety**: TypeScript এর সাথে ব্যবহার করলে ভেরিয়েন্ট এবং প্রপসের সঠিকতা নিশ্চিত হয়।
- **ফ্লেক্সিবিলিটি**: একাধিক ভেরিয়েন্ট এবং সাইজ সাপোর্ট করে।
- **কনফ্লিক্ট রেজোলিউশন**: `twMerge` এর সাথে ব্যবহার করলে Tailwind ক্লাসের কনফ্লিক্ট সমাধান হয়।
- **রিইউজেবিলিটি**: একটি `cva` সংজ্ঞা একাধিক কম্পোনেন্টে ব্যবহার করা যায়।

---

## **৫. উপসংহার**

`cva` হলো Tailwind CSS এর সাথে ভেরিয়েন্ট-ভিত্তিক স্টাইলিংয়ের জন্য একটি শক্তিশালী টুল। এটি Base ক্লাস, ভেরিয়েন্ট, এবং ডিফল্ট ভেরিয়েন্ট সংজ্ঞায়িত করে কম্পোনেন্ট স্টাইলিংকে সহজ, মডুলার, এবং Type-safe করে। উপরের উদাহরণগুলোর মাধ্যমে দেখানো হয়েছে কীভাবে `buttonVariants` ব্যবহার করে একটি বাটন কম্পোনেন্ট এবং Redux-ভিত্তিক Todo App তৈরি করা যায়। `cn` ফাংশনের সাথে একত্রিত করলে, `cva` ক্লাস ম্যানেজমেন্টকে আরো দক্ষ করে তোলে।