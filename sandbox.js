document.getElementById('run-button').addEventListener('click', () => {
  const code = document.getElementById('code-input').value;
  const iframe = document.getElementById('output-frame');

  // Reset iframe content
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(`
    <!DOCTYPE html>
    <html>
      <head><style>body { font-family: Arial; margin: 0; padding: 10px; }</style></head>
      <body>
        <script>
          try {
            ${code}
          } catch (err) {
            document.body.innerHTML = '<pre style="color: red;">' + err + '</pre>';
          }
        </script>
      </body>
    </html>
  `);
  iframeDoc.close();
});
