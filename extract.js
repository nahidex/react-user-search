const fs = require('fs');
const pdfreader = require("pdfreader");

fs.readFile("261059_com_5753_female.pdf", (err, pdfBuffer) => {
  // pdfBuffer contains the file content
  new pdfreader.PdfReader().parseBuffer(pdfBuffer, function(err, item) {
    if (err) callback(err);
    else if (!item) callback();
    else if (item.text) console.log(item.text);
  });
});