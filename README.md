 


# h1 WEB DEVELOPMENT REPORT
by DANG QUANG VINH - ITITIU19247

# h2 REPORT


1. INTRODUCTION

1.1/ Problems Statement

Nowadays, technology has evolved into an indispensable tool for online marketing. However, there are a growing number of small shops and grocery stores in Vietnam that operate primarily offline. This commerce model will result in a slew of negative experiences for both buyers and sellers. For example, the seller may have the product they want to offer but the buyer is unaware of it, or the buyer may have an urgent need to purchase something but the store is out of stock. Furthermore, online shopping allows customers to select from a wide range of products and prices, as well as easily compare them to one another.

Given the shortcomings and weaknesses of the offline business model, developing a website application for searching and purchasing items for each shop is critical right now. Many e-commerce sites, such as Amazon and eBay, have recently been exported, as have stores that can sell products through social media channels such as Facebook. Customers, however, continue to have difficulty selecting the products they want due to the large variety of products on these sites and the lack of a focus on specific things. Furthermore, the sellers must spend a significant amount of money on marketing or paying fees. Customers can quickly search for available products and come to the store to pick them up, or they can contact the shop owner directly to learn more about the products that they are looking for.

With MERN (MongoDB, Express.js framework, ReactJS library, NodeJS platform) is one of the powerful stacks that can help us develop an e-commerce web application that can meet the needs of both customers and retailers.

2.LITERATURE REVIEW
2.1. JavaScript

JavaScript is a scripting language that is object-oriented and cross-platform. Objects from the host environment can be linked to JavaScript and used in various ways.
JavaScript includes standard libraries for objects such as Array, Date, Math, and the essential components of programming languages such as managers, control framework, and statements.

JavaScript could be extended for many principles by adding objects, such as:

•		Client-side JavaScript: JavaScript is created by implementing objects that control the browser and the document object model (DOM). For example, client-side extensions allow an application to influence HTML page components and respond to user behavior such as mouse hovers, form input, and page changeover.
•		Server-side JavaScript: JavaScript is created by implementing the additional objects needed to run JavaScript on the server. This server-side extension, for example, allows an application to connect to a database, transfer data frequently from one request to another section of the application, or execute an application with another function file on the server.

In 1996, JavaScript was officially named ECMAScript. ECMAScript 2 was released in 1998 and ECMAScript 3 was released in 1999. It is continuously evolving into today's JavaScript, now works on all browsers and devices from mobile to desktop. Open stand- ard language can be used by association to establish their own JavaScript applications. The ECMAScript Standard is one of the parts of the ECMA-262 specification.

ISO has approved the ECMA-262 standard at ISO-16262. The ECMAScript standard does not include descriptions for the DOM, it is standardized by the W3C. The DOM specifies how your scripts display HTML objects. To get a advance anticipate of the distinctive innovations used when programming with JavaScript, check out the JavaScript technology analysis article. 

2.2. NodeJS

Node.js is an open source, a system application and furthermore is an environment for servers. Nodejs is an independent development platform based on Chrome's JavaScript Runtime that allows us to quickly and easily build network applications. Node.js executes code using the Google V8 JavaScript engine. Furthermore, a large proportion of critical modules are written in JavaScript.

Node.js is used in products that receive a lot of traffic. Nonetheless, Node.js handles applications that need to spread quickly, innovate, or build Startup projects as quickly as possible. 

Applications using NodeJS: 
• WebSocket server 
• Notification system 
• Applications that need to upload files on the client. 
• Other real-time data applications.

2.3. Expressjs
Express.js is a framework built on top of Nodejs. It has robust features for web and mobile development. Because Express.js supports HTTP and middleware methods, the API is both powerful and simple to use.
Importantly, the well-known frameworks of NodeJS apply Express.js as a substance function, for instance: Sails.js, MEAN. 

2.4. MongoDB
MongoDB is an open source database that is also the most popular NoSQL (*) database, with millions of users. It's written in one of today's most popular programming languages. Furthermore, MongoDB is a cross-platform data storage system that operates on the concepts of Collections and Documents, delivering high performance, high availability, and ease of expansion. 
(*) NoSQL is a source database format that does not use Transact-SQL to access information, this database was developed on JavaScript Framework on JSON data type.
MongoDB Atlas is MongoDB's cloud database launched in 2016 on AWS, Microsoft Az- ure and Google Cloud Platform.
The data in each Cluster in the Atlas is stored by Replication mechanism, with 3 nodes: 1 master (primary) and 2 slaves (secondary).

			Figure 1. MongoDB Atlas screenshot.
 
2.5. React JS
2.5.1.Virtual-DOM 

Virtual-DOM is a JavaScript object  that contains all of the information required to create a DOM. When the data changes, it calculates the difference between the object and the real tree, which helps optimize re-rendering of the DOM tree. It is reasonable to assume that a virtual model can handle client data. 

2.5.2. Component
React is built around components, not templates like other frameworks. The create Class function of the React object, the starting point for accessing this library, can be used to create a component.
ReactJS generates HTML tags in a different way than we normally do, but it uses Component to wrap HTML tags into stratified objects to render.
The render function is the most important React Component. It is a function that handles HTML tag generation as well as a demonstration of the ability to process through Virtual-DOM. Any changes of data at any time will be processed and updated immediately by Virtual-DOM. [10]

3.SYSTEM DESIGN
3.1.Features
3.1.1.User.

In homepage, user can see all of product.

 

Searching product on searching bar.




or chose product with category filter which sort by their price or time of product upload.

When you click in user icon, website move to sign in page which you can login your account 


or register new user to buy product. 

After login to your account, you can add product to shopping cart.
 
and buy it through your paypal account.

3.1.2.Admin.

On the admin page, the header will change a little 
 

which have fix icon to create new category




Create new product base on category that have existed. 


Or delete any product you want with click in check box product and delete button.

 

3.2.System Design Specification

3.2.1. Use-cases Diagram


3.2.2.Sequence Diagram

	Searching Products Sequence Diagram

3.3. Activity Diagram
Shopping cart
 
3.4. Database Diagram 



4.CONCLUSION AND DISCUSSION
4.1.List of accomplished work
Currently, I have been built:
•	Login.
•	Register.
•	Detail of product.
•	Cart page.
•	Buying throgh paypal.
•	Searching box.
•	Filter to sort product.
•	Upload product page.
•	Create category page.

4.2. Future Work.
•	Comment of product.
•	More form of payment.
•	Profile update page.



References 

1. E-commerce Definition – What is E-commerce? [Internet]. Shopify.com. Availa- ble from: https://www.shopify.com/encyclopedia/what-is-ecommerce 
2. JavaScript [Internet]. Mozilla.org. Available from: https://devel- oper.mozilla.org/en-US/docs/Web/JavaScript 
3. NodeJS Introduction [Internet]. Tutorialspoint.com. Available from: https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm 
4.. NodeJS Pros and Cons [Internet]. Mindinventory.com. Available from: https://www.mindinventory.com/blog/pros-and-cons-of-node-js-web-app-devel- opment/ 
5. NodeJS use cases [Internet]. Credencys.com. Available from: https://www.cre- dencys.com/blog/node-js-development-use-cases/ 
6. Express.js Introduction [Internet]. Mozilla.org. Available from: https://devel- oper.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction 
7. Virtual-DOM [Internet]. Reactjs.org. Available from: https://reactjs.org/docs/faq- internals.html 
8. Component [Internet]. Reactjs.org. Available from: https://reactjs.org/docs/com- ponents-and-props.html


