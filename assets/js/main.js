const tabs = document.querySelectorAll(".tab");
const panes = document.querySelectorAll(".timetab-container");

const tabAddress = document.querySelectorAll(".nav-link");
const tabMaps = document.querySelectorAll(".tab-pane");

const tabActive = document.querySelector(".nav-link.active");
const line = document.querySelector(".nav-tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

// Areas of strength-Active
tabs.forEach(function (tab, index) {
  const pane = panes[index];
  tab.onclick = function () {
    document.querySelector(".tab.active").classList.remove("active");
    document
      .querySelector(".timetab-container.active")
      .classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
  };
});

// Contact-Active
tabAddress.forEach(function (tab, index) {
  const tabMap = tabMaps[index];
  tab.onclick = function () {
    document.querySelector(".nav-link.active").classList.remove("active");
    document.querySelector(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    tabMap.classList.add("active");
  };
});
