const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/plan', async (req, res) => {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: "mistralai/mistral-7b-instruct",
        messages: [{
          role: "user",
          content: `Create a 7-day plan for "${req.body.goal}". 
          Return as JSON array with {day, task, tip} for each day.`
        }]
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'HTTP-Referer': 'http://localhost:3000',
          'X-Title': 'HabitHarbor'
        }
      }
    );
    // Try to extract JSON array from the AI response
    const content = response.data.choices[0].message.content;
    const match = content.match(/\[[\s\S]*?\]/); // matches the first [...] block anywhere in the string
    if (!match) {
      throw new Error("No JSON array found in AI response");
    }
    res.json(JSON.parse(match[0]));
  } catch (error) {
    console.error("AI Error:", error.response?.data || error.message);
    res.status(500).json({
      error: "AI request failed",
      details: error.response?.data?.error?.message || "Internal server error"
    });
  }
});

module.exports = router;