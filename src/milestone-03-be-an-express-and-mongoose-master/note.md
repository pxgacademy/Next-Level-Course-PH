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

#### 🧱 **Static Website**

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

---

#### ⚙️ **Dynamic Website**

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

---

#### 🔁 Summary:

| Feature         | Static Website    | Dynamic Website         |
| --------------- | ----------------- | ----------------------- |
| Content         | Fixed             | Changes dynamically     |
| Backend needed? | No                | Yes                     |
| Speed           | Very fast         | Depends on backend      |
| Use cases       | Portfolios, blogs | Dashboards, social apps |

