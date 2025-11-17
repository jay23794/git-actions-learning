const express = require('express');
const app = express();
const port = 3000;

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});
let c = "ss"
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
