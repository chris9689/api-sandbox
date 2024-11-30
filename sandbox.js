const codeInput = document.getElementById('code-input');
const previewFrame = document.getElementById('preview-frame');

// Initial default view for the iframe
const defaultView = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
      }
      .header {
        background-color: #6200ee;
        color: white;
        padding: 15px;
        text-align: center;
        font-size: 18px;
      }
      .content {
        padding: 20px;
        text-align: center;
      }
      .banner {
        margin-top: 20px;
        padding: 10px;
        background-color: #f1c40f;
        border-radius: 5px;
        display: none; /* Hidden by default */
      }
    </style>
  </head>
  <body>
    <div class="header">My Mobile App</div>
    <div class="content">
      <p>Welcome to the default app view.</p>
      <div class="banner" id="banner">Your banner will appear here.</div>
    </div>
  </body>
  </html>
`;

// Load default view into the iframe on page load
const loadDefaultView = () => {
  const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
  doc.open();
  doc.write(defaultView);
  doc.close();
};

// Listen to changes in the textarea and update the banner
codeInput.addEventListener('input', () => {
  const code = codeInput.value;
  const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
  const banner = doc.getElementById('banner');

  try {
    // Safely evaluate user-entered JavaScript
    const renderBanner = new Function('banner', code);
    renderBanner(banner);
    banner.style.display = 'block'; // Show the banner if updated
  } catch (error) {
    console.error('Error in user code:', error);
  }
});

// Load the default view initially
loadDefaultView();
