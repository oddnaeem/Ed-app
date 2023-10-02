// Initialize an array to store documents
let documents = [];

// Function to add a document to the clip book
function addDocument() {
    const title = document.getElementById('document-title').value;
    const content = document.getElementById('document-content').value;

    // Create a new document object
    const documentObj = {
        title: title,
        content: content
    };

    // Add the document to the array
    documents.push(documentObj);

    // Clear the input fields
    document.getElementById('document-title').value = '';
    document.getElementById('document-content').value = '';

    // Display the documents
    displayDocuments();
}

// Function to display documents
function displayDocuments() {
    const documentsList = document.getElementById('documents-list');
    documentsList.innerHTML = '';

    // Loop through the documents array and display each document
    for (let i = 0; i < documents.length; i++) {
        const document = documents[i];
        const documentElement = document.createElement('div');
        documentElement.innerHTML = `<h2>${document.title}</h2><p>${document.content}</p>`;
        documentsList.appendChild(documentElement);
    }
}
