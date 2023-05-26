document.getElementById('summarizeButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
    var summarizedText = summarizeText(inputText);
    document.getElementById('summaryText').innerHTML = summarizedText;
});

function summarizeText(text) {
    
    // Implement your text summarization logic here
    // This function should take the input text and return the summarized version
    // You can use a text summarization library or algorithm of your choice
    // For simplicity, let's assume the summarized text is just the first 50 characters

    return text.substring(0, 201) + '...';
}


