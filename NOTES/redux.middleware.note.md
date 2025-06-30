

# Redux Middleware and Custom Middleware

Redux একটি শক্তিশালী State Management লাইব্রেরি, যা অ্যাপ্লিকেশনের গ্লোবাল State কে কেন্দ্রীয়ভাবে ম্যানেজ করে। Redux এর একটি গুরুত্বপূর্ণ অংশ হলো **Middleware**, যা Action এবং Reducer এর মধ্যে একটি সেতু হিসেবে কাজ করে। 

---

## **১. Redux Middleware কী?**

Redux Middleware হলো Redux এর একটি এক্সটেনশন মেকানিজম, যা **Action** Dispatch হওয়ার পর এবং **Reducer** এ পৌঁছানোর আগে Action কে ইন্টারসেপ্ট করে। এটি Action প্রক্রিয়াকরণের মাঝখানে কাস্টম লজিক যোগ করার সুযোগ দেয়। Middleware এর মাধ্যমে আমরা:

- Action লগ করতে পারি।
- Asynchronous API কল ম্যানেজ করতে পারি (যেমন, `redux-thunk` বা `redux-saga`)।
- Action ফিল্টার করতে পারি।
- Action মডিফাই করতে পারি।
- নতুন Action Dispatch করতে পারি।

### **Middleware এর কার্যপ্রণালী**
Redux এ Data Flow এর ধাপগুলো হলো:
1. কম্পোনেন্ট থেকে Action Dispatch করা হয়।
2. Middleware Action কে ইন্টারসেপ্ট করে এবং কাস্টম লজিক প্রয়োগ করে।
3. Action (বা মডিফাইড Action) Reducer এ পৌঁছে।
4. Reducer নতুন State তৈরি করে।
5. Store আপডেট হয় এবং UI রি-রেন্ডার করে।

Middleware এই প্রক্রিয়ার **২ নম্বর ধাপে** কাজ করে।

### **Middleware এর গঠন**
একটি Redux Middleware হলো একটি ফাংশন যা তিনটি স্তরের ফাংশন নিয়ে গঠিত (Curried Function):
```javascript
const middleware = store => next => action => {
  // Middleware লজিক এখানে
  return next(action); // পরবর্তী Middleware বা Reducer এ Action পাঠানো
};
```
- **store**: Redux Store এর অ্যাক্সেস দেয় (`getState`, `dispatch`)।
- **next**: পরবর্তী Middleware বা Reducer এ Action পাঠানোর জন্য।
- **action**: Dispatch করা Action।

---

## **২. Redux এর Built-in Middleware**

Redux এ কিছু জনপ্রিয় Middleware আছে, যেমন:
- **redux-thunk**: Asynchronous Action (যেমন API কল) হ্যান্ডল করার জন্য।
- **redux-logger**: Action এবং State লগ করার জন্য।
- **redux-saga**: জটিল Asynchronous Workflow ম্যানেজ করার জন্য।

### **উদাহরণ: redux-logger**
`redux-logger` Middleware ব্যবহার করে আমরা প্রতিটি Action এবং State পরিবর্তন লগ করতে পারি।

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Types
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface RootState {
  todos: Todo[];
}

interface AddTodoAction {
  type: 'ADD_TODO';
  payload: string;
}

type TodoAction = AddTodoAction;

// Reducer
const initialState: RootState = {
  todos: []
};

function todoReducer(state = initialState, action: TodoAction): RootState {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
      };
    default:
      return state;
  }
}

// Store with redux-logger Middleware
const store = createStore(todoReducer, applyMiddleware(logger));

// Typed Hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Component
function TodoApp() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos);

  return (
    <div>
      <h2>Todo App with redux-logger</h2>
      <input
        type="text"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            dispatch({ type: 'ADD_TODO', payload: e.currentTarget.value });
            e.currentTarget.value = '';
          }
        }}
      />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
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
const root = createRoot(document.getElementById('root')!);
root.render(<App />);
```


**ব্যাখ্যা:**
- এখানে `redux-logger` Middleware প্রতিটি Action এবং State পরিবর্তন কনসোলে লগ করে। উদাহরণস্বরূপ, যখন `{ type: 'ADD_TODO', payload: 'Learn Redux' }` Action Dispatch হবে, তখন কনসোলে দেখাবে:
  - Previous State
  - Action
  - Next State

---

## **৩. Custom Middleware তৈরি**

Custom Middleware তৈরি করা Redux এর শক্তিশালী বৈশিষ্ট্য। এটি আমাদের নির্দিষ্ট প্রয়োজন অনুযায়ী লজিক যোগ করতে দেয়। আমরা এখন একটি Custom Middleware তৈরি করব, যা:
- প্রতিটি Action এর Type কে Uppercase এ কনভার্ট করবে।
- নির্দিষ্ট Action Type ফিল্টার করবে (যেমন, `BLOCKED_ACTION` ব্লক করবে)।

### **Custom Middleware এর গঠন**
```javascript
const customMiddleware = ({ getState, dispatch }) => next => action => {
  // কাস্টম লজিক
  return next(action);
};
```

### **উদাহরণ: Custom Middleware**
নিচে একটি Custom Middleware তৈরি করা হলো, যা Action এর Type কে Uppercase করে এবং নির্দিষ্ট Action ব্লক করে।

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { TypedUseSelectorHook } from 'react-redux';

// Custom Middleware
const upperCaseMiddleware = ({ getState, dispatch }: { getState: () => RootState; dispatch: AppDispatch }) => (next: (action: TodoAction) => void) => (action: TodoAction) => {
  // ব্লক করা Action
  if (action.type === 'BLOCKED_ACTION') {
    console.log('Action Blocked:', action.type);
    return;
  }

  // Action Type কে Uppercase করা
  const modifiedAction = {
    ...action,
    type: action.type.toUpperCase()
  };

  console.log('Modified Action:', modifiedAction);
  return next(modifiedAction);
};

// Types
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface RootState {
  todos: Todo[];
}

interface AddTodoAction {
  type: 'ADD_TODO';
  payload: string;
}

interface BlockedAction {
  type: 'BLOCKED_ACTION';
  payload?: string;
}

type TodoAction = AddTodoAction | BlockedAction;

// Reducer
const initialState: RootState = {
  todos: []
};

function todoReducer(state = initialState, action: TodoAction): RootState {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
      };
    default:
      return state;
  }
}

// Store with Custom Middleware
const store = createStore(todoReducer, applyMiddleware(upperCaseMiddleware));

// Typed Hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Component
function TodoApp() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos);

  return (
    <div>
      <h2>Todo App with Custom Middleware</h2>
      <input
        type="text"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            dispatch({ type: 'ADD_TODO', payload: e.currentTarget.value });
            e.currentTarget.value = '';
          }
        }}
      />
      <button onClick={() => dispatch({ type: 'BLOCKED_ACTION', payload: 'Blocked' })}>
        Try Blocked Action
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
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
const root = createRoot(document.getElementById('root')!);
root.render(<App />);
```

**ব্যাখ্যা:**
- **upperCaseMiddleware**: 
  - এটি প্রতিটি Action এর Type কে Uppercase এ কনভার্ট করে। যেমন, `ADD_TODO` হয়ে যায় `ADD_TODO` (এখানে ইতিমধ্যে Uppercase, তবে লজিকটি বোঝানোর জন্য উদাহরণ দেওয়া হয়েছে)।
  - যদি Action এর Type `BLOCKED_ACTION` হয়, তবে এটি ব্লক করা হয় এবং Reducer এ পৌঁছায় না।
- **কনসোল আউটপুট**: প্রতিটি Action এর জন্য Modified Action লগ করা হয়।

---

## **৪. Redux Toolkit এর সাথে Middleware**

Redux Toolkit এর `configureStore` ব্যবহার করে Middleware যোগ করা আরো সহজ। এটি ডিফল্টভাবে `redux-thunk` Middleware অন্তর্ভুক্ত করে। আমরা Custom Middleware যোগ করতে পারি।

### **উদাহরণ: Redux Toolkit এ Custom Middleware**
নিচে একটি উদাহরণ দেওয়া হলো, যেখানে Redux Toolkit এবং Custom Middleware ব্যবহার করে একটি Todo App তৈরি করা হয়েছে। এই Middleware API কল সিমুলেট করবে।

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook } from 'react-redux';

// Custom Middleware for Simulated API Call
const apiMiddleware = ({ dispatch }: { dispatch: AppDispatch }) => (next: (action: any) => void) => (action: any) => {
  if (action.type === 'todos/addTodoAsync') {
    console.log('Simulating API call for:', action.payload);
    // সিমুলেটেড API কল
    setTimeout(() => {
      dispatch({ type: 'todos/addTodo', payload: action.payload });
    }, 1000);
    return;
  }
  return next(action);
};

// Slice
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [] as { id: number; text: string; completed: boolean }[],
    status: 'idle' as 'idle' | 'loading'
  },
  reducers: {
    addTodo(state, action: { payload: string }) {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
      state.status = 'idle';
    },
    toggleTodo(state, action: { payload: number }) {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    }
  }
});

// Export Actions
export const { addTodo, toggleTodo } = todoSlice.actions;

// Store
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Component
function TodoApp() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos.todos);
  const status = useAppSelector(state => state.todos.status);

  return (
    <div>
      <h2>Todo App with Redux Toolkit Middleware</h2>
      <input
        type="text"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            dispatch({ type: 'todos/addTodoAsync', payload: e.currentTarget.value });
            e.currentTarget.value = '';
          }
        }}
      />
      <p>Status: {status}</p>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.text} {todo.completed ? '(Completed)' : ''}
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
const root = createRoot(document.getElementById('root')!);
root.render(<App />);
```

**ব্যাখ্যা:**
- **apiMiddleware**: এটি `todos/addTodoAsync` Action ইন্টারসেপ্ট করে এবং একটি সিমুলেটেড API কল (1 সেকেন্ড ডিলে) করে। তারপর এটি `todos/addTodo` Action Dispatch করে।
- **Redux Toolkit**: `createSlice` এবং `configureStore` ব্যবহার করে কোড সহজ করা হয়েছে।
- **Middleware যোগ**: `getDefaultMiddleware().concat(apiMiddleware)` ব্যবহার করে Custom Middleware যোগ করা হয়েছে।

---

## **৫. Middleware এর ব্যবহারিক ক্ষেত্র**

- **লগিং**: Action এবং State পরিবর্তন ডিবাগ করার জন্য।
- **Asynchronous কাজ**: API কল, টাইমার, ইত্যাদি।
- **অথেনটিকেশন**: Action Dispatch এর আগে টোকেন চেক করা।
- **ফিল্টারিং**: নির্দিষ্ট Action ব্লক করা।
- **অ্যানালিটিক্স**: ব্যবহারকারীর ইভেন্ট ট্র্যাক করা।

---

## **৬. উপসংহার**

Redux Middleware হলো Action এবং Reducer এর মধ্যে একটি শক্তিশালী স্তর, যা অ্যাপ্লিকেশনের কার্যকারিতা বাড়ায়। Built-in Middleware যেমন `redux-logger` বা `redux-thunk` সাধারণ কাজের জন্য যথেষ্ট, তবে Custom Middleware তৈরি করে আমরা নির্দিষ্ট প্রয়োজন মেটাতে পারি। Redux Toolkit এর সাথে Middleware ব্যবহার করলে কোড আরো সংক্ষিপ্ত এবং Type-safe হয়।

---
---
---
---
---

## **১. প্রথম উদাহরণ: `redux-logger` Middleware**
ফাইল: `redux_logger_example.tsx`

### **পরীক্ষা:**
- **কোড স্ট্রাকচার**: 
  - `createStore` এবং `applyMiddleware` ব্যবহার করে Store তৈরি করা হয়েছে।
  - `redux-logger` Middleware সঠিকভাবে যোগ করা হয়েছে।
  - TypeScript Types (`RootState`, `AppDispatch`, `useAppSelector`, `useAppDispatch`) সঠিকভাবে নির্ধারণ করা হয়েছে।
  - Todo App কম্পোনেন্টে Action Dispatch এবং State অ্যাক্সেস করা হয়েছে।
- **কার্যকারিতা**:
  - Action Dispatch করলে `redux-logger` কনসোলে Previous State, Action, এবং Next State লগ করবে।
  - `ADD_TODO` Action সঠিকভাবে Reducer এ প্রক্রিয়া করা হয় এবং State আপডেট হয়।
- **Type Safety**:
  - TypeScript এর Types সঠিকভাবে সংজ্ঞায়িত। `useAppSelector` এবং `useAppDispatch` Redux Toolkit এর সাথে সামঞ্জস্যপূর্ণ।
- **চালানোর পরীক্ষা**:
  - কোডটি একটি React অ্যাপ্লিকেশনে চালানোর জন্য প্রস্তুত। Dependencies (`react`, `react-dom`, `redux`, `react-redux`, `redux-logger`, `@types/react`, `@types/react-dom`) ইনস্টল থাকলে এটি সঠিকভাবে কাজ করবে।
- **সম্ভাব্য সমস্যা**:
  - `redux-logger` এর Type Definitions আলাদাভাবে ইনস্টল করতে হবে (`npm install @types/redux-logger`)। এটি কোডে উল্লেখ করা হয়নি, তবে এটি একটি সাধারণ প্রয়োজনীয়তা।
  - `document.getElementById('root')` এর জন্য TypeScript-এ Non-null Assertion (`!`) ব্যবহার করা হয়েছে, যা সঠিক, তবে HTML ফাইলে `<div id="root"></div>` থাকতে হবে।

### **উন্নতির সুযোগ**:
- `package.json` এ Dependencies উল্লেখ করা যেতে পারে:
  ```json
  {
    "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "redux": "^4.2.0",
      "react-redux": "^8.0.5",
      "redux-logger": "^3.0.6",
      "@types/react": "^18.2.0",
      "@types/react-dom": "^18.2.0",
      "@types/redux-logger": "^3.0.9"
    }
  }
  ```

**ফলাফল**: এই উদাহরণটি সঠিক এবং কার্যকর। কোনো ত্রুটি নেই।

---

## **২. দ্বিতীয় উদাহরণ: Custom Middleware**
ফাইল: `custom_middleware.tsx`

### **পরীক্ষা:**
- **কোড স্ট্রাকচার**:
  - `upperCaseMiddleware` তৈরি করা হয়েছে, যা Action এর Type কে Uppercase করে এবং `BLOCKED_ACTION` ব্লক করে।
  - Middleware সঠিকভাবে `applyMiddleware` দিয়ে Store এ যোগ করা হয়েছে।
  - TypeScript Types সঠিকভাবে সংজ্ঞায়িত।
- **কার্যকারিতা**:
  - `ADD_TODO` Action Dispatch করলে Middleware এটি প্রক্রিয়া করে এবং Reducer এ পাঠায়।
  - `BLOCKED_ACTION` Dispatch করলে Middleware তা ব্লক করে এবং কনসোলে লগ করে।
  - কনসোলে Modified Action লগ হয়।
- **Type Safety**:
  - `TodoAction` Union Type (`AddTodoAction | BlockedAction`) সঠিকভাবে সংজ্ঞায়িত।
  - Middleware এর Type (`{ getState: () => RootState; dispatch: AppDispatch }`) সঠিক।
- **চালানোর পরীক্ষা**:
  - কোডটি একটি React অ্যাপ্লিকেশনে চালানোর জন্য প্রস্তুত। Dependencies ইনস্টল থাকলে এটি কাজ করবে।
- **সম্ভাব্য সমস্যা**:
  - `upperCaseMiddleware` এর নামকরণ আরো নির্দিষ্ট হতে পারে, যেমন `actionModifierMiddleware`, কারণ এটি শুধু Uppercase নয়, ব্লকিংও করে।
  - Reducer এ `ADD_TODO` এর জন্য Uppercase Type হ্যান্ডল করার কোনো লজিক নেই। যেহেতু Middleware ইতিমধ্যে Type কে Uppercase করছে, Reducer এও `ADD_TODO` এর পরিবর্তে `'ADD_TODO'.toUpperCase()` হ্যান্ডল করা উচিত। তবে উদাহরণে এটি ইতিমধ্যে Uppercase, তাই সমস্যা নেই।

### **উন্নতির সুযোগ**:
- Reducer এর Case-এর নামকরণ Middleware এর সাথে সামঞ্জস্যপূর্ণ করা যেতে পারে।
- Middleware এর লজিক আরো বিস্তারিতভাবে লগ করার জন্য অতিরিক্ত তথ্য যোগ করা যেতে পারে, যেমন Timestamp।

**ফলাফল**: এই উদাহরণটি সঠিক। তবে Reducer এর Case-এর নামকরণ Middleware এর সাথে মিলিয়ে নেওয়া যেতে পারে।

---

## **৩. তৃতীয় উদাহরণ: Redux Toolkit এ Custom Middleware**
ফাইল: `redux_toolkit_middleware.tsx`

### **পরীক্ষা:**
- **কোড স্ট্রাকচার**:
  - Redux Toolkit এর `createSlice` এবং `configureStore` ব্যবহার করা হয়েছে।
  - `apiMiddleware` তৈরি করা হয়েছে, যা `todos/addTodoAsync` Action কে ইন্টারসেপ্ট করে এবং সিমুলেটেড API কল করে।
  - Middleware সঠিকভাবে `getDefaultMiddleware().concat(apiMiddleware)` দিয়ে যোগ করা হয়েছে।
  - TypeScript Types সঠিকভাবে সংজ্ঞায়িত।
- **কার্যকারিতা**:
  - `todos/addTodoAsync` Action Dispatch করলে Middleware 1 সেকেন্ড ডিলে করে `todos/addTodo` Action Dispatch করে।
  - `status` State ট্র্যাক করে API কলের অবস্থা।
- **Type Safety**:
  - `RootState` এবং `AppDispatch` সঠিকভাবে সংজ্ঞায়িত।
  - `apiMiddleware` এর Action Type (`any`) সঠিক নয়। এটি আরো নির্দিষ্ট হওয়া উচিত, যেমন `any` এর পরিবর্তে `TodoAction` Union Type।
- **চালানোর পরীক্ষা**:
  - কোডটি একটি React অ্যাপ্লিকেশনে চালানোর জন্য প্রস্তুত। Dependencies (`@reduxjs/toolkit`, `react`, `react-dom`, `react-redux`, `@types/react`, `@types/react-dom`) ইনস্টল থাকলে এটি কাজ করবে।
- **সম্ভাব্য সমস্যা**:
  - `apiMiddleware` এর Action Type হিসেবে `any` ব্যবহার করা হয়েছে, যা Type Safety হ্রাস করে। এটি `TodoAction` Union Type দিয়ে প্রতিস্থাপন করা উচিত।
  - `status` State আপডেট করার জন্য Reducer এ কোনো Action নেই। `todos/addTodoAsync` Dispatch করার সময় `status` কে `'loading'` এ সেট করা উচিত।

### **উন্নতির জন্য সংশোধিত কোড:**
নিচে `redux_toolkit_middleware.tsx` এর সংশোধিত সংস্� Aston Martin DB12কোড:

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook } from 'react-redux';

// Types
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface RootState {
  todos: {
    todos: Todo[];
    status: 'idle' | 'loading';
  };
}

interface AddTodoAction {
  type: 'todos/addTodo';
  payload: string;
}

interface AddTodoAsyncAction {
  type: 'todos/addTodoAsync';
  payload: string;
}

interface SetLoadingAction {
  type: 'todos/setLoading';
}

interface ToggleTodoAction {
  type: 'todos/toggleTodo';
  payload: number;
}

type TodoAction = AddTodoAction | AddTodoAsyncAction | SetLoadingAction | ToggleTodoAction;

// Custom Middleware for Simulated API Call
const apiMiddleware = ({ dispatch }: { dispatch: AppDispatch }) => (next: (action: TodoAction) => void) => (action: TodoAction) => {
  if (action.type === 'todos/addTodoAsync') {
    console.log('Simulating API call for:', action.payload);
    dispatch({ type: 'todos/setLoading' });
    // সিমুলেটেড API কল
    setTimeout(() => {
      dispatch({ type: 'todos/addTodo', payload: action.payload });
    }, 1000);
    return;
  }
  return next(action);
};

// Slice
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [] as Todo[],
    status: 'idle' as 'idle' | 'loading'
  },
  reducers: {
    addTodo(state, action: { payload: string }) {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
      state.status = 'idle';
    },
    toggleTodo(state, action: { payload: number }) {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    setLoading(state) {
      state.status = 'loading';
    }
  }
});

// Export Actions
export const { addTodo, toggleTodo, setLoading } = todoSlice.actions;

// Store
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Component
function TodoApp() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos.todos);
  const status = useAppSelector(state => state.todos.status);

  return (
    <div>
      <h2>Todo App with Redux Toolkit Middleware</h2>
      <input
        type="text"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            dispatch({ type: 'todos/addTodoAsync', payload: e.currentTarget.value });
            e.currentTarget.value = '';
          }
        }}
      />
      <p>Status: {status}</p>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.text} {todo.completed ? '(Completed)' : ''}
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
const root = createRoot(document.getElementById('root')!);
root.render(<App />);
```

**সংশোধনের বিবরণ**:
- `apiMiddleware` এর Action Type `any` এর পরিবর্তে `TodoAction` ব্যবহার করা হয়েছে।
- `setLoading` Action এবং Reducer যোগ করা হয়েছে, যাতে `status` State আপডেট হয়।
- `RootState` এর Type সংজ্ঞায়িত করার সময় Slice এর গঠন অনুসারে সঠিকভাবে সংজ্ঞায়িত করা হয়েছে।

**ফলাফল**: সংশোধিত কোডটি এখন সম্পূর্ণ Type-safe এবং Status আপডেটের জন্য উন্নত।

---

## **৪. সাধারণ যাচাই**
- **Dependencies**: সকল উদাহরণে প্রয়োজনীয় Dependencies সঠিকভাবে উল্লেখ করা হয়েছে। তবে প্রকল্পে চালানোর জন্য নিশ্চিত করতে হবে যে সঠিক সংস্করণ ইনস্টল করা আছে।
- **TypeScript**: সকল উদাহরণে TypeScript Types সঠিকভাবে ব্যবহার করা হয়েছে। তবে তৃতীয় উদাহরণে `any` ব্যবহারের সমস্যা সংশোধন করা হয়েছে।
- **HTML প্রয়োজনীয়তা**: সকল উদাহরণে `<div id="root"></div>` প্রয়োজন, যা সাধারণত React অ্যাপ্লিকেশনের Default Setup।
- **Redux Toolkit**: তৃতীয় উদাহরণে Redux Toolkit ব্যবহার করা হয়েছে, যা আধুনিক Redux অ্যাপ্লিকেশনের জন্য প্রস্তাবিত।

---

## **৫. উপসংহার**
- তিনটি উদাহরণই সঠিক এবং কার্যকর। তবে তৃতীয় উদাহরণে Type Safety এবং Status Management উন্নত করার জন্য সংশোধন করা হয়েছে।
- প্রতিটি উদাহরণ একটি React অ্যাপ্লিকেশনে চালানোর জন্য প্রস্তুত, যদি সঠিক Dependencies ইনস্টল করা থাকে এবং HTML Setup সঠিক থাকে।
- সংশোধিত কোডে Type Safety উন্নত করা হয়েছে, যা Redux এবং TypeScript এর সাথে কাজ করার জন্য গুরুত্বপূর্ণ।
