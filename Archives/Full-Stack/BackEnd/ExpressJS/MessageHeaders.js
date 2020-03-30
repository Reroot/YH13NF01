//HTTP message headers are represented by an object like this:

{ 'content-length': '123',
  'content-type': 'text/plain',
  'connection': 'keep-alive',
  'host': 'mysite.com',
  'accept': '*/*' }


//   In order to support the full spectrum of possible HTTP applications, Node.js's HTTP API is very low-level. It deals with stream handling and message parsing only. It parses a message into headers and body but it does not parse the actual headers or the body.

// See message.headers for details on how duplicate headers are handled.

// The raw headers as they were received are retained in the rawHeaders property, which is an array of [key, value, key2, value2, ...]. For example, the previous message header object might have a rawHeaders list like the following:

[ 'ConTent-Length', '123456',
  'content-LENGTH', '123',
  'content-type', 'text/plain',
  'CONNECTION', 'keep-alive',
  'Host', 'mysite.com',
  'accepT', '*/*' ]


//   Request URL string. This contains only the URL that is present in the actual HTTP request. If the request is:

// GET /status?name=ryan HTTP/1.1\r\n
// Accept: text/plain\r\n
// \r\n
// To parse the URL into its parts:

// new URL(request.url, `http://${request.headers.host}`);


When request.url is '/status?name=ryan' and request.headers.host is 'localhost:3000':

// $ node
new URL(request.url, request.headers.host)
URL {
  href: 'http://localhost:3000/status?name=ryan',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/status',
  search: '?name=ryan',
  searchParams: URLSearchParams { 'name' => 'ryan' },
  hash: ''
}