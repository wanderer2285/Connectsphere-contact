const express = require('express');
const path    = require('path');

const app  = express();
const PORT = 3000;

// In-memory store for valid submissions (simulates a database)
const submissions = [];

// Middleware: parse JSON request bodies
app.use(express.json());

// Serve index.html when someone visits "/"
app.use(express.static(path.join(__dirname)));

// ──────────────────────────────────────────
// POST /contact-submit  — the main endpoint
// ──────────────────────────────────────────
app.post('/contact-submit', (req, res) => {
  const { name, email, message } = req.body;

  // 1. Validate — all fields must be present and non-empty
  const missing = [];
  if (!name    || name.trim()    === '') missing.push('name');
  if (!email   || email.trim()   === '') missing.push('email');
  if (!message || message.trim() === '') missing.push('message');

  if (missing.length > 0) {
    return res.status(400).json({
      success: false,
      message: `Missing required fields: ${missing.join(', ')}.`,
    });
  }

  // 2. Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please enter a valid email address.',
    });
  }

  // 3. Store the valid submission
  const entry = {
    id:        submissions.length + 1,
    name:      name.trim(),
    email:     email.trim(),
    message:   message.trim(),
    timestamp: new Date().toISOString(),
  };
  submissions.push(entry);

  // 4. Log to console so you can see it in your terminal
  console.log('\n✅ New submission received:');
  console.log(`   ID:      ${entry.id}`);
  console.log(`   Name:    ${entry.name}`);
  console.log(`   Email:   ${entry.email}`);
  console.log(`   Message: ${entry.message}`);
  console.log(`   Time:    ${entry.timestamp}`);
  console.log(`   Total submissions so far: ${submissions.length}`);

  // 5. Send success response
  return res.status(200).json({
    success: true,
    message: `Thank you, ${entry.name}! Your message has been received. We'll be in touch soon.`,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`\n🚀 Server running at http://localhost:${PORT}`);
  console.log('   Open that URL in your browser to see the form.\n');
});