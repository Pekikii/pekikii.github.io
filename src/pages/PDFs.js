import React from 'react';

function PDFs() {
  return (
    <div>
      <h1>PDFs</h1>
      <ul>
        <li><a href="/pdfs/Resume.pdf" download>PDF 1</a></li>
        <li><a href="/path/to/pdf2.pdf" download>PDF 2</a></li>
        <li><a href="/path/to/pdf3.pdf" download>PDF 3</a></li>
      </ul>
    </div>
  );
}

export default PDFs;
