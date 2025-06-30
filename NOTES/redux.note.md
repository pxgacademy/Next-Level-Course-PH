
# React State to Redux


## ১. State কী?

State হলো React এর একটি মৌলিক ধারণা যা কোনো কম্পোনেন্টের ডেটা বা স্টেটাস ধরে রাখে। এটি কম্পোনেন্টের অভ্যন্তরীণ ডেটা স্টোরেজ হিসেবে কাজ করে এবং UI রেন্ডারিং নিয়ন্ত্রণ করে। State পরিবর্তন হলে React স্বয়ংক্রিয়ভাবে কম্পোনেন্টটি পুনরায় রেন্ডার করে।

**উদাহরণ:**
একটি সাধারণ কাউন্টার কম্পোনেন্ট:


import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;


এখানে `count` হলো State ভ্যারিয়েবল, এবং `setCount` ফাংশনটি এটি আপডেট করে।

## ২. State কীভাবে React এ রেন্ডার ট্রিগার করে?

React এ State পরিবর্তন হলে কম্পোনেন্ট রি-রেন্ডার হয়। এটি ঘটে কারণ React এর **Virtual DOM** তুলনা করে পুরানো এবং নতুন State এর মধ্যে পার্থক্য খাওয়া। এই প্রক্রিয়াটি **Reconciliation** নামে পরিচিত।

**কিভাবে কাজ করে:**
1. State আপডেট হলে (যেমন `setCount` কল করা হলে), React কম্পোনেন্টের রেন্ডার ফাংশন পুনরায় কল করে।
2. নতুন Virtual DOM গাছ তৈরি হয়।
3. React পুরানো এবং নতুন Virtual DOM তুলনা করে (Diffing)।
4. শুধুমাত্র পরিবর্তিত অংশগুলো ব্রাউজারের DOM এ আপডেট করে।

## ৩. Stateless vs Stateful কম্পোনেন্ট

- **Stateless কম্পোনেন্ট**: এগুলো Functional কম্পোনেন্ট যারা নিজস্ব State ধরে না। এরা শুধু Props গ্রহণ করে এবং UI রেন্ডার করে। এদের বলা হয় **Pure Components**।
- **Stateful কম্পোনেন্ট**: এরা State ধরে এবং State পরিবর্তনের ভিত্তিতে রেন্ডার ট্রিগার করে।

**উদাহরণ:**
```jsx
import React, { useState } from 'react';

// Stateless Component
function Display({ name }) {
  return <p>Hello, {name}!</p>;
}

// Stateful Component
function NameInput() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Display name={name} />
    </div>
  );
}

export default NameInput;
```

## ৪. Uni-directional এবং Bi-directional Data Flow

- **Uni-directional Data Flow**: React এ ডেটা শুধুমাত্র এক দিকে প্রবাহিত হয়, অর্থাৎ Parent থেকে Child কম্পোনেন্টে Props এর মাধ্যমে। এটি অ্যাপ্লিকেশনকে প্রেডিক্টেবল এবং সহজে ডিবাগ করা যায়।
- **Bi-directional Data Flow**: দুই দিকে ডেটা প্রবাহিত হয়। যেমন, Angular এর Two-way Data Binding। এটি দ্রুত ডেভেলপমেন্টের জন্য সুবিধাজনক কিন্তু জটিল অ্যাপ্লিকেশনে জটিলতা সৃষ্টি করে।

**সমস্যা:**
- **Uni-directional**: জটিল State Management এর জন্য অতিরিক্ত কোড লিখতে হয় (যেমন, Lifting State Up)।
- **Bi-directional**: ডেটা ফ্লো ট্র্যাক করা কঠিন, যা বাগ সৃষ্টি করতে পারে।

## ৫. Flux আর্কিটেকচার

Flux হলো Facebook এর তৈরি একটি আর্কিটেকচারাল প্যাটার্ন যা Uni-directional Data Flow প্রমোট করে। এটি Redux এর পূর্বসূরি।

**Flux এর উপাদান:**
- **Store**: অ্যাপ্লিকেশনের State ধরে রাখে।
- **Action**: ডেটা পরিবর্তনের ইভেন্ট।
- **Dispatcher**: Action গুলো Store এ পাঠায়।
- **View**: UI কম্পোনেন্ট যা State এর উপর ভিত্তি করে রেন্ডার করে।

## ৬. useState এর কার্যপ্রণালী: Vanilla JS এ সিমুলেশন

React এর `useState` হুক একটি সাধারণ API যা State ম্যানেজ করতে সাহায্য করে। এটি পেছনে Fiber আর্কিটেকচার এবং React Reconciler ব্যবহার করে।

**Vanilla JS এ সিমুলেশন:**
```javascript
let state;
let isFirstRender = true;

function useState(initialValue) {
  if (isFirstRender) {
    state = initialValue;
    isFirstRender = false;
  }

  function setState(newValue) {
    state = newValue;
    render();
  }

  return [state, setState];
}

function render() {
  const [count, setCount] = useState(0);
  console.log(`Count: ${count}`);
  // সিমুলেটেড রেন্ডার
}

render(); // Initial render
const [, setCount] = useState(0);
setCount(1); // State আপডেট এবং রি-রেন্ডার
```

## ৭. React Reconciler এবং Fiber

- **React Reconciler**: এটি React এর কোর অ্যালগরিদম যা Virtual DOM এর তুলনা করে এবং আপডেট প্রয়োজন এমন অংশ চিহ্নিত করে।
- **Fiber**: React 16 থেকে প্রবর্তিত একটি নতুন আর্কিটেকচার। এটি কম্পোনেন্ট গাছকে ছোট ছোট ইউনিটে ভাগ করে (Fiber নোড) এবং আপডেট প্রক্রিয়াকে অ্যাসিঙ্ক্রোনাস করতে সাহায্য করে।

**Fiber এর সুবিধা:**
- রেন্ডারিং প্রক্রিয়া থামানো এবং পুনরায় শুরু করা যায়।
- অগ্রাধিকার ভিত্তিতে আপডেট প্রক্রিয়া করা।

## ৮. useState এর Synchronous vs Asynchronous Behavior

- **Synchronous**: `useState` এর `setState` ফাংশন কল করলে তা তৎক্ষণাৎ State আপডেট করে না। এটি React এর Event Loop এর পরবর্তী রেন্ডার সাইকেলে আপডেট করে।
- **Asynchronous**: State আপডেটের ফলে রেন্ডারিং ব্যাচে প্রক্রিয়া করা হয়। এটি পারফরম্যান্স অপ্টিমাইজেশনের জন্য।

**উদাহরণ:**
```jsx
import React, { useState } from 'react';

function AsyncCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // পুরানো মান দেখাবে
    setTimeout(() => console.log(count), 0); // এখনো পুরানো মান
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default AsyncCounter;
```

## ৯. Signals কী?

Signals হলো একটি নতুন ধরনের State Management প্যাটার্ন যা Reactive Programming এর উপর ভিত্তি করে। এটি Fine-grained Reactivity প্রদান করে, যেখানে শুধুমাত্র নির্দিষ্ট ডেটার পরিবর্তন UI এর নির্দিষ্ট অংশ আপডেট করে।

**ভবিষ্যৎ:**
- Signals React এর ভবিষ্যৎ হতে পারে কারণ এটি রেন্ডারিংকে আরো দক্ষ করে।
- SolidJS এবং Preact এর মতো ফ্রেমওয়ার্ক ইতিমধ্যে Signals ব্যবহার করে।

## ১০. Object হিসেবে State ব্যবহার

React এ State হিসেবে Object ব্যবহার করা যায়। তবে, Object আপডেট করার সময় পুরানো State এর কপি তৈরি করে নতুন মান দিতে হয়।

**উদাহরণ:**
```jsx
import React, { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({ name: '', age: 0 });

  const updateUser = () => {
    setUser({ ...user, name: 'John', age: 30 });
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
}

export default UserProfile;
```

## ১১. useReducer কী এবং কীভাবে কাজ করে?

`useReducer` হলো React এর একটি হুক যা জটিল State লজিক ম্যানেজ করতে ব্যবহৃত হয়। এটি Redux এর Reducer ধারণার মতো কাজ করে।

**কীভাবে কাজ করে:**
- এটি একটি Reducer ফাংশন গ্রহণ করে যা State এবং Action এর উপর ভিত্তি করে নতুন State রিটার্ন করে।
- `useReducer` তিনটি মূল উপাদান নিয়ে কাজ করে: State, Dispatch ফাংশন, এবং Reducer ফাংশন।

**উদাহরণ:**
```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;
```

## ১২. useReducer vs useState

- **useState**: সাধারণ এবং সরল State আপডেটের জন্য।
- **useReducer**: জটিল State লজিক এবং একাধিক Action এর জন্য।

**বড় উদাহরণ:**
```jsx
import React, { useState, useReducer } from 'react';

// useState Example
function CounterWithUseState() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div>
      <h2>useState Counter</h2>
      <p>Count: {count}</p>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <button onClick={() => setCount(count + step)}>Increment</button>
      <button onClick={() => setCount(count - step)}>Decrement</button>
    </div>
  );
}

// useReducer Example
const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

function CounterWithUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>useReducer Counter</h2>
      <p>Count: {state.count}</p>
      <input
        type="number"
        value={state.step}
        onChange={(e) => dispatch({ type: 'setStep', payload: Number(e.target.value) })}
      />
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <CounterWithUseState />
      <CounterWithUseReducer />
    </div>
  );
}

export default App;
```

## ১৩. useReducer এর সাথে Business Logic

`useReducer` ব্যবহার করে জটিল Business Logic ম্যানেজ করা যায়। নিচে একটি Todo App এর উদাহরণ দেওয়া হলো:

```jsx
import React, { useReducer } from 'react';

const initialState = {
  todos: [],
  filter: 'all'
};

function reducer(state, action) {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
      };
    case 'toggleTodo':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'setFilter':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'all') return true;
    if (state.filter === 'completed') return todo.completed;
    return !todo.completed;
  });

  return (
    <div>
      <h2>Todo App</h2>
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            dispatch({ type: 'addTodo', payload: e.target.value });
            e.target.value = '';
          }
        }}
      />
      <div>
        <button onClick={() => dispatch({ type: 'setFilter', payload: 'all' })}>All</button>
        <button onClick={() => dispatch({ type: 'setFilter', payload: 'completed' })}>
          Completed
        </button>
        <button onClick={() => dispatch({ type: 'setFilter', payload: 'active' })}>
          Active
        </button>
      </div>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id} onClick={() => dispatch({ type: 'toggleTodo', payload: todo.id })}>
            {todo.text} {todo.completed ? '(Completed)' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

## ১৪. State Management Wrap-Up

React এর State Management এর জন্য বিভিন্ন টুল রয়েছে:
- **useState**: সাধারণ State এর জন্য।
- **useReducer**: জটিল State লজিক এবং Action এর জন্য।
- **Redux**: বৃহৎ অ্যাপ্লিকেশনের জন্য গ্লোবাল State Management।
- **Context API**: ছোট থেকে মাঝারি অ্যাপ্লিকেশনে Props Drilling এড়াতে।

## ১৫. Redux কী?

Redux হলো একটি ওপেন-সোর্স JavaScript লাইব্রেরি যা অ্যাপ্লিকেশনের State কে গ্লোবালি ম্যানেজ করতে ব্যবহৃত হয়। এটি Flux আর্কিটেকচারের উপর ভিত্তি করে তৈরি।

**Redux এর মূল উপাদান:**
- **Store**: পুরো অ্যাপ্লিকেশনের State ধরে রাখে।
- **State**: অ্যাপ্লিকেশনের সম্পূর্ণ ডেটা।
- **Action**: State পরিবর্তনের ইভেন্ট বর্ণনা করে।
- **Payload**: Action এর সাথে প্রেরিত ডেটা।
- **Reducer**: State এবং Action থেকে নতুন State তৈরি করে।
- **Selector**: Store থেকে নির্দিষ্ট ডেটা বের করে।
- **Dispatch**: Action কে Store এ পাঠায়।

## ১৬. Redux কীভাবে কাজ করে?

Redux Uni-directional Data Flow অনুসরণ করে:
1. একটি Action Dispatch করা হয়।
2. Reducer Action এবং বর্তমান State থেকে নতুন State তৈরি করে।
3. Store নতুন State দিয়ে আপডেট হয়।
4. UI নতুন State এর উপর ভিত্তি করে রেন্ডার করে।

## ১৭. Redux এর বড় উদাহরণ

নিচে একটি Todo App এর Redux বাস্তবায়ন দেওয়া হলো:

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';

// Reducer
const initialState = {
  todos: [],
  filter: 'all'
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

// Store
const store = createStore(todoReducer);

// Selector
const selectFilteredTodos = state => {
  if (state.filter === 'all') return state.todos;
  if (state.filter === 'completed') return state.todos.filter(todo => todo.completed);
  return state.todos.filter(todo => !todo.completed);
};

// Component
function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector(selectFilteredTodos);

  return (
    <div>
      <h2>Redux Todo App</h2>
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            dispatch({ type: 'ADD_TODO', payload: e.target.value });
            e.target.value = '';
          }
        }}
      />
      <div>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}>All</button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}>
          Completed
        </button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}>
          Active
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
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
const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

## ১৮. Typescript এ Redux

Typescript এর সাথে Redux ব্যবহার করলে Type Safety নিশ্চিত করা যায়। নিচে Typescript এর সাথে Redux এর একটি উদাহরণ দেওয়া হলো:

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import { TypedUseSelectorHook } from 'react-redux';

// Types
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface RootState {
  todos: Todo[];
  filter: 'all' | 'completed' | 'active';
}

interface AddTodoAction {
  type: 'ADD_TODO';
  payload: string;
}

interface ToggleTodoAction {
  type: 'TOGGLE_TODO';
  payload: number;
}

interface SetFilterAction {
  type: 'SET_FILTER';
  payload: 'all' | 'completed' | 'active';
}

type TodoAction = AddTodoAction | ToggleTodoAction | SetFilterAction;

// Reducer
const initialState: RootState = {
  todos: [],
  filter: 'all'
};

function todoReducer(state = initialState, action: TodoAction): RootState {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

// Store
const store = createStore(todoReducer);

// Typed Hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<() => (action: TodoAction) => void>();

// Selector
const selectFilteredTodos = (state: RootState) => {
  if (state.filter === 'all') return state.todos;
  if (state.filter === 'completed') return state.todos.filter(todo => todo.completed);
  return state.todos.filter(todo => !todo.completed);
};

// Component
function TodoApp() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectFilteredTodos);

  return (
    <div>
      <h2>Typescript Redux Todo App</h2>
      <input
        type="text"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            dispatch({ type: 'ADD_TODO', payload: e.currentTarget.value });
            e.currentTarget.value = '';
          }
        }}
      />
      <div>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}>All</button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}>
          Completed
        </button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}>
          Active
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
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

## ১৯. উপসংহার

React এর State Management থেকে শুরু করে Redux পর্যন্ত আমরা বিভিন্ন ধারণা এবং তাদের ব্যবহার দেখলাম। `useState` এবং `useReducer` ছোট থেকে মাঝারি অ্যাপ্লিকেশনের জন্য যথেষ্ট, তবে বৃহৎ অ্যাপ্লিকেশনের জন্য Redux এবং Typescript এর মতো টুল ব্যবহার করা উচিত। Signals এর মতো নতুন প্রযুক্তি ভবিষ্যতে State Management কে আরো দক্ষ করবে।

</xaiArtifact>