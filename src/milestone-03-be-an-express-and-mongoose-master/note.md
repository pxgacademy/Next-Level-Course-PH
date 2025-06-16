### 🌐 **How the Web Works (Simplified)**

1. **User types a URL** in the browser (like `example.com`).
2. **DNS** converts that domain into an **IP address** of a server.
3. **Browser sends an HTTP request** to that server (usually for HTML, CSS, JS).
4. **Server processes the request** and returns a response (often HTML content).
5. **Browser receives the response** and **renders the webpage** using HTML, styles, and scripts.
6. **User can interact** (click, submit, etc.) — browser may send more requests (AJAX, API, etc.).
7. Optional: **Cookies / Sessions / Tokens** help manage login and personalization.

🧠 Think of it like:

> **Browser** → asks the **Server** → gets a **Webpage** → shows it to the **User**


```ts
/*

https://web.example-domain.com/success
  ⬇             ⬇                 ⬇
protocol   domain name         resource

https://   135.56.195.321   :869
  ⬇              ⬇            ⬇
protocol     IP address   PORT number

domain name goes to DNS server and takes the IP address,
then goes to server and takes necessary response
The connection is called- TCP/IP socket connection  // TCP - transmission control protocol


                                       HTTP REQUEST
Client______________________________________➡_______________________________________Server
       METHOD          Request Headers                          Request Body
         ⬇                    ⬇                                       ⬇
        GET        host    : web.example.com                   ----------------
        POST       accept-encoding: gzip, deflate, br, zstd     --------------
        PUT
        PATCH
        DELETE

Client______________________________________⬅_______________________________________Server       
      Status Code & Message       Response Headers                      Request Body
               ⬇                          ⬇                                  ⬇
            200 OK        Access-Control-Allow-Credentials: true       ----------------
            400               Content-Type: text/plain                  --------------    


*/
```
---

## 💠 What is Frontend? What is Backend?

#### 🖥️ **Frontend**
The **frontend** is the part of a website or app that the **user sees and interacts with** — like buttons, text, images, forms, etc.

🛠️ Built with:

* HTML
* CSS
* JavaScript (React, Vue, Next.js, etc.)

📱 Example: When you click a "Submit" button — that’s frontend.



#### 🗄️ **Backend**

The **backend** is the **behind-the-scenes** part — it handles **data, logic, authentication, databases**, etc. It sends and receives data to/from the frontend.

🛠️ Built with:

* Node.js, Express, Django, Laravel, etc.
* Databases: MongoDB, PostgreSQL, etc.

📱 Example: When the "Submit" button sends your info to the server — that’s backend.

🔄 **Frontend ↔️ Backend** work together using **APIs (HTTP requests)**.


## 💠 Static Website vs Dynamic Website

### 🧱 **Static Website**

A **static website** shows **fixed content**.
Every user sees the **same page**, and the content does **not change** unless a developer updates the code.

🛠️ Built with:

* HTML, CSS, JavaScript (no backend or database needed)

📦 Stored as: `.html` files on a server

📌 Example:

* Portfolio site
* Landing page
* Blog made with Markdown (like Hugo, Jekyll)

✔️ **Fast, simple, secure**
❌ **No real-time content or personalization**

### ⚙️ **Dynamic Website**

A **dynamic website** shows **content that can change** based on user interaction, database, or API.

🛠️ Built with:

* Frontend (HTML, CSS, JS)
* Backend (Node.js, PHP, Python, etc.)
* Database (MongoDB, MySQL, etc.)

📌 Example:

* Facebook
* E-commerce sites (Amazon)
* News websites

✔️ **Interactive, personalized, real-time**
❌ **More complex, needs backend/server**

#### 🔁 Summary:

| Feature         | Static Website    | Dynamic Website         |
| --------------- | ----------------- | ----------------------- |
| Content         | Fixed             | Changes dynamically     |
| Backend needed? | No                | Yes                     |
| Speed           | Very fast         | Depends on backend      |
| Use cases       | Portfolios, blogs | Dashboards, social apps |

## 🖥️ What is a **Server-Side Rendering (SSR)** Website?

A **Server-Side Rendering (SSR)** website means:

* The **HTML of the page is generated on the server**, not in the browser.
* When a user visits the site, the **server builds the page**, fills in dynamic data (e.g. from a database), and sends a **fully rendered HTML page** to the browser.

#### 🔁 How SSR Works (Step-by-Step):

1. User visits a URL (e.g. `example.com/profile`).
2. Browser sends a request to the **server**.
3. Server runs backend logic (fetches data).
4. Server generates complete **HTML** with that data.
5. Server sends that HTML to the **browser**.
6. Browser shows the page immediately.

#### ✅ Advantages:

* **SEO-friendly**: Search engines see full HTML.
* **Fast initial load**: User sees the content quickly.
* **Good for dynamic content** like user dashboards or blog pages.

#### ❌ Disadvantages:

* **Slower for repeated requests** (server has to render each time).
* **More load on the server**.
* Slightly **more complex** than static sites.

#### 🛠️ Used in:

* **Next.js** (with `getServerSideProps()`)
* **Express + EJS / Pug**
* Any framework where server sends HTML directly

#### 🔁 In short:

> SSR = Server builds the full page and sends it
> CSR (Client-Side Rendering) = Browser builds the page using JS

---

## ⚙️ **How JavaScript Engine Works**

A **JavaScript Engine** is a program inside the browser (like Chrome, Firefox) that **reads, compiles, and runs JavaScript code**.

#### ⚙️ JavaScript Engine Execution Flow (Simplified)

```
1️⃣ Parser
   ⬇️
2️⃣ Abstract Syntax Tree (AST)
   ⬇️
3️⃣ Interpreter (Baseline execution)
   ⬇️
4️⃣ Compiler (JIT - Just-In-Time)
   ⬇️
5️⃣ Optimized Machine Code (Output)
```

### 🧠 Step-by-Step Explanation:

#### 1️⃣ **Parser**

* Reads your JavaScript code.
* Breaks it into **tokens** (words/symbols).
* Converts those into an **Abstract Syntax Tree (AST)** — a structured representation of your code.

#### 2️⃣ **AST (Abstract Syntax Tree)**

* Represents the code’s logic and structure.
* Makes it easier for the engine to understand what to do.

#### 3️⃣ **Interpreter**

* Quickly **translates AST into bytecode**.
* Starts executing right away (good for speed).
* Example: V8’s interpreter is called **Ignition**.

#### 4️⃣ **JIT Compiler**

* While code runs, it **detects "hot" code** (frequently used).
* Compiles that code into **optimized machine code**.
* Example: V8 uses **TurboFan** as its compiler.

#### 5️⃣ **Machine Code (Output)**

* Final optimized version runs **very fast** on the CPU.
* Unused or inefficient parts may be discarded (de-optimized) and recompiled.

### ✅ Summary:

> The JS engine **parses → interprets → compiles → executes** code to run fast and efficiently.

### 🔥 Popular JavaScript Engines:

| Browser      | JS Engine              |
| ------------ | ---------------------- |
| Chrome, Edge | V8                     |
| Firefox      | SpiderMonkey           |
| Safari       | JavaScriptCore (Nitro) |

### 🛠️ Bonus Features:

* Optimizes code during runtime (Just-In-Time compilation)
* Handles asynchronous tasks using **event loop** & **callback queue**

```ts
/*

_____________________________________________
|                                           |
|   _________________  _________________    |
|   |               |  |               |    |
|   |               |  |               |    |
|   |               |  |               |    |
|   |               |  |               |    |
|   | _____________ |  | ______
|   | |           | |  | |    | _____
|   | |___________| |  | |____| |
|   | _____________ |  | _____________ |    |
|   | |           | |  | |           | |    |
|   | |___________| |  | |___________| |    |
|   | _____________ |  | _____________ |    |
|   | |           | |  | |           | |    |
|   | |___________| |  | |___________| |    |
|   |_______________|  |_______________|    |
|                                           |
|___________________________________________|                                   




*/
```


```


                            JavaScript Runtime in Browser


                                                           ╔══════════════╗                   
╔════════════════════════════════════════════════╗         ║   WEB APIs   ║ 
║                                                ║         ╚══════════════╝                   
║ ╔═══════════════════╗   ╔═══════════════════╗  ║  ╔═════════════════════════════╗            
║ ║                   ║   ║                   ║  ║  ║            DOM              ║ 
║ ║                   ║   ║          ░░░░░░   ║  ║  ╚═════════════════════════════╝ 
║ ║                   ║   ║          ░░░░░░   ║  ║  ╔═════════════════════════════╗ 
║ ║ ┌───────────────┐ ║   ║  ▒▒▒▒▒▒           ║  ║  ║         FETCH API           ║ 
║ ║ │   Function 3  │ ║   ║  ▒▒▒▒▒▒  ▓▓▓▓▓▓   ║  ║  ╚═════════════════════════════╝ 
║ ║ ├───────────────┤ ║   ║          ▓▓▓▓▓▓   ║  ║       ┌──────────────────┐         
║ ║ │   Function 2  │ ║   ║  ▒▒▒▒▒▒           ║  ║  ╔════│  Callback Queue  │═════╗    
║ ║ ├───────────────┤ ║   ║  ▒▒▒▒▒▒  ▓▓▓▓▓▓   ║  ║  ║    └──────────────────┘     ║    
║ ║ │   Function 1  │ ║   ║          ▓▓▓▓▓▓   ║  ║  ║                             ║    
║ ║ └───────────────┘ ║   ║                   ║  ║  ║ ┌───────────┬─────────────┐ ║    
║ ╚═══════════════════╝   ╚═══════════════════╝  ║  ║ │  Timers   │Clicks Events│ ║    
║      Call Stack                  Heap          ║  ║ └───────────┴─────────────┘ ║    
╚════════════════════════════════════════════════╝  ╚═════════════════════════════╝ 
                                                                                               
    ⚙️ Execution Order:
    1. Functions pushed to Call Stack
    2. Long tasks offloaded to Web APIs (e.g., setTimeout, fetch)
    3. When done, callback → Callback Queue
    4. Event Loop checks if Call Stack is empty
    5. Then pushes next callback to Call Stack


```