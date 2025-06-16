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
then goes to server and takes necessary returns
The connection is called- TCP/IP socket connection  // TCP - transmission control protocol

*/
```