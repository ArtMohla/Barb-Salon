document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("products-table");

    // Handle Add Row button click
    document.getElementById("add-row").addEventListener("click", function () {
        const authorInput = document.getElementById("author-input").value.trim();
        const bookInput = document.getElementById("book-input").value.trim();

        if (!authorInput || !bookInput) {
            alert("Please fill in both fields before adding a row.");
            return;
        }

        const newRow = table.tBodies[0].insertRow(); // Create a new row

        // Add Author cell
        const authorCell = newRow.insertCell();
        authorCell.textContent = authorInput;

        // Add Book cell
        const bookCell = newRow.insertCell();
        bookCell.textContent = bookInput;

        // Clear input fields
        document.getElementById("author-input").value = "";
        document.getElementById("book-input").value = "";
    });
});
