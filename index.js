function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const p = document.createElement("p");
      p.textContent = data.id;
      document.body.appendChild(p);
    })
    .catch((error) => {
      const p = document.createElement("p");
      p.textContent = error.message;
      document.body.appendChild(p);
    });
}

// Leave this at the bottom of index.js so the test file can access the function
module.exports = submitData;
