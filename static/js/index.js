const btnMenu = document.getElementById("btn-menu")
const btnMenuIcon = btnMenu.querySelector("i")

const menu = document.querySelector("header > nav")

const menuBtn = menu.querySelectorAll("a")

const btnMoveTop = document.getElementById("btn-move-top")


document.addEventListener("scroll", () => {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    btnMoveTop.style.display = "flex"
  } else {
    btnMoveTop.style.display = "none"
  }
})

btnMoveTop.onclick = () => {
  window.scrollTo({ top: 0 })
}

const changeMenuBtnIcon = () => {
  if (menu.classList.contains("active")) {
    btnMenuIcon.classList.replace("fa-bars", "fa-times")
  } else {
    btnMenuIcon.classList.replace("fa-times", "fa-bars")
  }
}

menu.onclick = () => {
  menu.classList.remove("active")
  changeMenuBtnIcon()
}

menuBtn.forEach((item) => {
  item.onclick = () => {
    menu.classList.remove("active")
    changeMenuBtnIcon()
  }
})

btnMenu.onclick = () => {
  menu.classList.toggle("active")
  changeMenuBtnIcon()
}

document.getElementById("btn-about").onclick = () => {
  document.getElementById("about").scrollIntoView()
}

document.getElementById("btn-skills").onclick = () => {
  document.getElementById("skills").scrollIntoView()
}

document.getElementById("btn-projects").onclick = () => {
  document.getElementById("projects").scrollIntoView()
}

document.getElementById("btn-contacts").onclick = () => {
  document.getElementById("contacts").scrollIntoView()
}
