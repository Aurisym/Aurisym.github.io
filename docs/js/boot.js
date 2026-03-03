const bootScreen = document.getElementById("boot-screen")
const terminalContainer = document.getElementById("terminal-container")

const bootLines = [
  "AURIX v1.05",
  "Copyright. Aurisym 2026",
  "",
  "Memory Test........ 8192 KB OK",
  "Mounting C: .....",
  "Mounting D: .....",
  "Starting Aurix......."
]

const loginLines = [
  "",
  "Login: Aurisym",
  "Password: ***************",
  "Access granted.",
  ""
]

function runBoot() {
  let i = 0

  function nextBootLine() {
    if (i < bootLines.length) {
      bootScreen.textContent += bootLines[i] + "\n"
      i++
      const delay = 150 + Math.random() * 150 // 150ms to 300ms
      setTimeout(nextBootLine, delay)
    } else {
      // After boot lines, clear screen and start login sequence
      setTimeout(() => {
        bootScreen.textContent = "" // clear screen
        runLogin()
      }, 500)
    }
  }

  nextBootLine()
}

function runLogin() {
  let j = 0

  function typeLine() {
    if (j < loginLines.length) {
      typeText(loginLines[j], 0, () => {
        bootScreen.textContent += "\n"
        j++
        setTimeout(typeLine, 300) // delay between lines
      })
    } else {
      setTimeout(() => {
        bootScreen.classList.add("hidden")
        terminalContainer.classList.remove("hidden")
        localStorage.setItem("booted", "true")
      }, 500)
    }
  }

  typeLine()
}

// Type text one character at a time
function typeText(text, index, callback) {
  if (index < text.length) {
    bootScreen.textContent += text[index]
    const delay = 50 + Math.random() * 50 // 50-100ms per character
    setTimeout(() => typeText(text, index + 1, callback), delay)
  } else {
    callback()
  }
}

if (localStorage.getItem("booted")) {
  bootScreen.classList.add("hidden")
  terminalContainer.classList.remove("hidden")
} else {
  runBoot()
}