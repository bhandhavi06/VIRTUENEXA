Code

document.getElementById('topicForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const keywords = document.getElementById('keywords').value.trim();
    const category = document.getElementById('category').value;

    if (!keywords) {
        alert('Please enter some keywords.');
        return;
    }

    // Call the function to get suggestions
    getSuggestions(keywords, category);
});

function getSuggestions(keywords, category) {
    // Simulated suggestions based on keywords and category
    const suggestions = [
        10 Tips for ${keywords} in ${category},
        The Future of ${keywords} in ${category},
        How to Improve Your ${keywords} Skills,
        The Impact of ${keywords} on ${category},
        Exploring ${keywords}: A Deep Dive
    ];

    displaySuggestions(suggestions);
}

function displaySuggestions(suggestions) {
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';

    suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('div');
        suggestionItem.textContent = suggestion;
        suggestionsDiv.appendChild(suggestionItem);
    });
}