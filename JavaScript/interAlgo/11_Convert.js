function convertHTML(str) {
    const symbols = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    }

    return str.replace(/([&<>"'])/g, i => symbols[i]);
}

console.log(convertHTML('"Dolce" & Gabbana'));
