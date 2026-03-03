const output = document.getElementById("terminal-output")
const input = document.getElementById("command-input")

function print(text) {
  output.textContent += text + "\n"
  output.scrollTop = output.scrollHeight
}

function handleCommand(value) {
  const command = value.toLowerCase().trim()

  if (commands[command]) {
    window.location.href = commands[command]
    return
  }

  print(`'${value}' is not recognized as an internal or external command.`)
}

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const value = input.value.trim()

    if (!value) return

    print(`C:\\Users\\Aurisym> ${value}`)
    handleCommand(value)
    input.value = ""
  }
})