// It looks like you are making a cross origin request (you are using an absolute URI).

// You can set withCredentials to include cookies.

// True when user credentials are to be included in a cross-origin request. False when they are to be excluded in a cross-origin request and when cookies are to be ignored in its response. Initially false.

// Such:

// client.withCredentials = true;

// fetch(url, {
//     method: 'POST',
//     credentials: 'include'
//     //other options
// }).then(response => console.log("Response status: ", response.status));
https://blog.webf.zone/ultimate-guide-to-http-cookies-2aa3e083dbae



// Authentication (session management)
// User tracking
// Personalization (theme, language selection, etc.)

// How Cookies work?
// The most common use of cookies is login and logout (session management or authentication) functionality for a website or application. We will see how this works in real world. Let us take an example of Facebook. If you navigate to Facebook, the very first screen is the login page:

// This is what happens when you enter your credentials and hit Log In button:
// Browser would send an HTTP request to web server pointed by www.facebook.com. It is typically a POST HTTP request containing password and email/phone.
// On arriving a request at web-server, server side code would verify username and password. If it is successful, the server would send new HTML page along with a cookie containing some sort of sessionID (basically a GUID or any identifier unique to server).
// This cookie would be sent as part of HTTP response using Set-Cookie header.
// Browser upon receiving the request, would store this cookie on the disk for persistent storage.
// Now, if user navigates to any other page on facebook.com or open a new tab/window in a same browser, browser would automatically send this cookie as part of the request.
// Facebook server would read this cookie and determine its validity. Server typically maintains a map of all the cookies it has issued so far in some sort of in-memory data structure. If the sessionID is the key of this map, then its value is userID or some information to identify user for whom the given cookie was issued.
// Once the user is identified, web application/server will serve a dynamically created web page with contents tailored for that user. This page will have information specific to that user, e.g. in case of Facebook, he will see his name, profile picture, friends list, unique activity feed, etc.

// Setting up a cookie
// To set a cookie, server must use Set-Cookie header. In the below example, we are setting a cookie named username and its value as Harshal. You can also send multiple cookies by specifying Set-Cookie header as many times:
// Set-Cookie: <cookie-name>=<cookie-value>
// // Example
// Set-Cookie: id=Harshal

// There are two types of cookies:
// Session Cookies
// Permanent Cookies
// By default, cookie has a lifetime of browser window. When a browser is closed, the cookie is gone. It is deleted. Such a cookie is called as Session Cookie. You can also create a Permanent Cookie by specifying an expiry:
// Set-Cookie: userid=1234; Expires:Sat, 30 Jan 2017;


// Restrictions on Cookies?
// There are certain restrictions about cookies. These restrictions help to provide security and reliability to servers:
// Size: Each cookie can have maximum size of 4KB.
// Number: For each domain, number of cookies are restricted to certain number. This restriction is put by browsers and not the HTTP protocol.
// Domain: Web server can set cookies only for the domain that is pointing to that web server. It cannot set cookie for any other domain. You can use Domain directive for this. (Note: Rule do change when we talk about sub-domains, but more on that later)
// Access: HTTP cookies can be read by JavaScript. However, JS code running on a browser can only access cookies set by its domain under which it is running. It cannot access other domain’s cookies.

// Of course, this approach has some drawbacks too. Your JWT token size should not exceed than that of cookie’s allowed size. But in summary:
// Use cookies for storage only
// Use token and put it in Cookie
// There are great many tutorials/articles out there to explain inner workings of tokens and cookies with tokens. You are requested to read some of those.