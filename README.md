# ConnectSphere Contact Form

A beginner-friendly full-stack contact form project built with HTML and Node.js/Express.

## What it does
- Displays a contact form (name, email, message)
- Sends the form data to a Node.js server via HTTP POST
- Server validates the data and returns a success or error response
- Valid submissions are stored in memory and logged to the console

## Prerequisites
- [Node.js](https://nodejs.org) (v18 or later)

## Setup

1. Clone the repository:
```bash
   git clone https://github.com/YOUR_USERNAME/connectsphere-contact.git
   cd connectsphere-contact
```

2. Install dependencies:
```bash
   npm install
```

3. Start the server:
```bash
   node server.js
```

4. Open your browser and go to:
http://localhost:3000

## Testing the form
- Fill in all fields and click "Send message" → you'll see a green success message
- Leave a field empty and submit → you'll see a red error message
- Check your terminal to see each valid submission logged

## Project Structure

```bash
connectsphere-contact/
│
├── index.html
│   # The contact form (runs in the browser)
│
├── server.js
│   # The Node.js / Express backend
│
├── package.json
│   # Project configuration and dependencies
│
└── README.md
    # Project documentation
