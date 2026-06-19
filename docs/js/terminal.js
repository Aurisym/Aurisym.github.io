// why snoop when you can help make it better instead?
// if you're a friend and know how to exactly fix my issues please be my guest,
// i'm basically vibecoding it all
// TODO:
// - fix spacing to look like actual cmd 
// - fix "C:\Users\Aurisym>" being halfway down the fucking screen

const output = document.getElementById("terminal-output");
const input = document.getElementById("command-input");

function print(text) {
  output.textContent += text + "\n";
  output.scrollTop = output.scrollHeight;
}

function handleCommand(value) {
  const command = value.toLowerCase().trim();

  if (commands[command]) {
    window.location.href = commands[command];
    return;
  }

  // Authentic CMD error message
  print(`'${value}' is not recognized as an internal or external command,\noperable program or batch file.`);
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const value = input.value.trim();
    if (!value) return;

    // Print the command line
    print(`C:\\Users\\Aurisym>${value}`);

    // Handle the command
    handleCommand(value);

    // Reprint the prompt after each command
    print(`C:\\Users\\Aurisym>`);

    // Clear input
    input.value = "";
  }
});
