function printAlphabets() {
  let letter = "a";
  while (letter <= "z") {
    console.log(letter);
    letter = String.fromCharCode(letter.charCodeAt(0) + 1);
  }
}

printAlphabets();
