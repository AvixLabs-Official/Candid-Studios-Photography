const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8092;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// API endpoint for session booking / inquiries
app.post('/api/booking', (req, res) => {
  const { name, email, phone, packageType, backdrop, preferredDate, preferredTime, notes } = req.body;
  
  if (!name || !email || !packageType) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all required booking fields.'
    });
  }

  const bookingId = 'CND-' + Math.floor(100000 + Math.random() * 900000);

  return res.status(200).json({
    success: true,
    message: `Studio booking reserved successfully! Confirmation #${bookingId} sent to ${email}.`,
    booking: {
      bookingId,
      name,
      email,
      phone,
      packageType,
      backdrop,
      preferredDate,
      preferredTime,
      notes,
      timestamp: new Date().toISOString()
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Candid Studios London server running on http://localhost:${PORT}`);
});
