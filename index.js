const existing = [];

function generateUsername() {
  const fName = document.getElementById("first-name").value.trim();
  const lName = document.getElementById("last-name").value.trim();
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?".split("");

  if (!fName || !lName) {
    alert("Please enter both first and last names.");
    return;
  }

  let username;
  do {
    const randNum = Math.floor((Math.random() * 900) + 100).toString();

    const nameChars = [...fName, ...lName];

    const allChars = [
      ...nameChars,
      ...randNum.split(""),
      ...specialChars.slice(0, 3) 
    ];

    for (let i = allChars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allChars[i], allChars[j]] = [allChars[j], allChars[i]];
    }

    username = allChars.join("");
  } while (existing.includes(username));

  const uniName = document.getElementById("username-result");
  uniName.textContent = `Your unique username is: ${username}`;

  existing.push(username);
}

document.getElementById("generate-btn").addEventListener("click", generateUsername);
