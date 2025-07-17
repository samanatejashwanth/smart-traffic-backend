// 🚦 Handle Smart Suggestion Form
document.getElementById('suggestionForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const location = document.getElementById('location').value.trim();
  const congestionLevel = document.getElementById('congestion').value;
  const resultDiv = document.getElementById('result');

  resultDiv.classList.add('hidden');
  resultDiv.classList.remove('text-red-600', 'text-green-600');
  resultDiv.textContent = '⏳ Generating smart suggestion...';

  try {
    const response = await fetch('http://localhost:5000/api/suggestions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ location, congestionLevel })
    });

    const data = await response.json();

    if (response.ok && data.smartRoute) {
      resultDiv.textContent = `✅ Suggestion: ${data.smartRoute.message}`;
      resultDiv.classList.remove('hidden', 'text-red-600');
      resultDiv.classList.add('text-green-600');
    } else {
      resultDiv.textContent = `❌ Error: ${data.message || 'Unable to process suggestion'}`;
      resultDiv.classList.remove('hidden', 'text-green-600');
      resultDiv.classList.add('text-red-600');
    }
  } catch (error) {
    resultDiv.textContent = '❌ Server connection failed. Please try again later.';
    resultDiv.classList.remove('hidden', 'text-green-600');
    resultDiv.classList.add('text-red-600');
  }
});

// 📝 Handle Feedback Form
document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const location = document.getElementById('feedbackLocation').value.trim();
  const feedbackText = document.getElementById('feedbackText').value.trim();
  const rating = parseInt(document.getElementById('rating').value);
  const feedbackResult = document.getElementById('feedbackResult');

  feedbackResult.classList.add('hidden');
  feedbackResult.classList.remove('text-red-600', 'text-green-600');
  feedbackResult.textContent = '⏳ Submitting feedback...';

  try {
    const response = await fetch('http://localhost:5000/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ location, feedbackText, rating })
    });

    const data = await response.json();

    if (response.ok) {
      feedbackResult.textContent = `✅ Feedback submitted successfully!`;
      feedbackResult.classList.remove('hidden', 'text-red-600');
      feedbackResult.classList.add('text-green-600');

      // Optional: Reset form
      document.getElementById('feedbackForm').reset();
    } else {
      feedbackResult.textContent = `❌ Error: ${data.message || 'Unable to submit feedback'}`;
      feedbackResult.classList.remove('hidden', 'text-green-600');
      feedbackResult.classList.add('text-red-600');
    }
  } catch (error) {
    feedbackResult.textContent = '❌ Server connection failed. Please try again.';
    feedbackResult.classList.remove('hidden', 'text-green-600');
    feedbackResult.classList.add('text-red-600');
  }
});
