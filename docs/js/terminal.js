// why snoop when you can help make it better instead?
// if you're a friend and know how to exactly fix my issues please be my guest,
// i'm basically vibecoding it all
// TODO:
// - fix spacing to look like actual cmd 
// - fix "C:\Users\Aurisym>" being halfway down the fucking screen

const output = document.getElementById("terminal-output");
const input = document.getElementById("command-input");

function print(text = "") {
  output.textContent += text + "\n";
}

function handleCommand(value) {
  const command = value.toLowerCase().trim();

  if (commands[command]) {
    window.location.href = commands[command];
    return;
  }

  print(
    `'${value}' is not recognized as an internal or external command,\noperable program or batch file.\n`
  );
}

input.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  const value = input.value.trim();
  if (!value) return;

  // Record the command in terminal history
  print(`C:\\Users\\Aurisym>${value}`);

  // Run command
  handleCommand(value);

  // Clear input
  input.value = "";
});

function handleCommand(value) {
    const command = value.toLowerCase().trim();

    if (terminalCommands[command]) {
        terminalCommands[command]();
        return;
    }

    print(
        `'${value}' is not recognized as an internal or external command,\noperable program or batch file.\n`
    );
}
