**Q1. What is web development? Explain in your own words.**
**Answer:**
Web development is the process of building websites and web applications that run in a web browser. It involves creating the structure of pages (HTML), designing how they look (CSS), and adding interactivity and logic (JavaScript). Modern web development also includes server-side programming and databases to handle data and user accounts.

---

**Q2. What is the difference between frontend and backend?**
**Answer:**
Frontend is the part of a website users can see and interact with, such as buttons, text, images, and forms. It is built using HTML, CSS, and JavaScript. Backend is the server-side part that handles business logic, databases, authentication, and data processing. The frontend sends requests, and the backend responds with data.

---

**Q3. Explain the client–server model with an example.**
**Answer:**
In the client–server model, the client (browser) sends a request to a server, and the server sends back a response. For example, when you open a website, your browser requests the homepage from the server. The server sends back HTML, CSS, and JavaScript files, which the browser displays.

---

**Q4. What are the roles of HTML, CSS, and JavaScript in a webpage?**
**Answer:**
HTML provides the structure (headings, paragraphs, images). CSS controls the design (colors, layout, fonts). JavaScript adds behavior and logic (button clicks, form validation, dynamic content loading). Together, they form a complete web page.

---

**Q5. What is a web browser? Name two examples.**
**Answer:**
A web browser is software that loads, interprets, and displays web pages. It converts HTML, CSS, and JavaScript into a visual interface. Examples include Google Chrome and Mozilla Firefox.

---

**Q6. What is the purpose of the `<head>` tag in HTML?**
**Answer:**
The `<head>` tag contains metadata about the webpage that is not directly shown to users. This includes the page title, character encoding, viewport settings for responsiveness, and links to CSS or JavaScript files.

---

**Q7. What is the difference between block-level and inline elements? Give examples.**
**Answer:**
Block-level elements take up the full width and start on a new line, such as `<div>`, `<p>`, and `<h1>`. Inline elements only take as much space as needed and do not start on a new line, such as `<span>`, `<a>`, and `<b>`.

---

**Q8. What does the `href` attribute do in an anchor tag?**
**Answer:**
The `href` attribute specifies the URL or destination that the link should open when clicked. Without `href`, the anchor tag will not function as a proper link.

---

**Q9. Why is the `alt` attribute important in the `<img>` tag?**
**Answer:**
The `alt` attribute provides alternative text that describes the image. It is used by screen readers for visually impaired users and is displayed if the image fails to load. It also helps search engines understand the image.

---

**Q10. What is the purpose of `target="_blank"` in a link?**
**Answer:**
The attribute `target="_blank"` tells the browser to open the linked page in a new tab or window instead of replacing the current page.

---

**Q11. Identify and correct the mistake:**

```html
<img href="photo.png" alt="Profile">
```

**Answer:**
The mistake is using `href` instead of `src`. The correct code is:

```html
<img src="photo.png" alt="Profile">
```

`src` specifies the image file location.

---

**Q12. What is an HTML attribute? Give two examples.**
**Answer:**
An attribute provides extra information about an HTML element and is written inside the opening tag. Examples:

* `id="main"`
* `class="container"`

---

**Q13. What is the difference between `id` and `class` attributes?**
**Answer:**
An `id` must be unique on a page and is used to identify a single element. A `class` can be reused on multiple elements and is used for grouping elements for styling or scripting.

---

**Q14. What are semantic HTML tags? Why are they important?**
**Answer:**
Semantic tags describe the meaning of their content, such as `<header>`, `<footer>`, `<article>`, and `<section>`. They are important because they improve SEO, accessibility, and make the code easier to understand.

---

**Q15. What happens inside the browser when you open a website?**
**Answer:**
The browser sends a request to a server, downloads the HTML file, builds the DOM structure, applies CSS styles, executes JavaScript, and then renders the final visual page on the screen.