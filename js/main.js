var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var menuBtn2 = document.getElementById("menuBtn2");
var menuPrev = document.getElementById("menuPrev");
var menuClose = document.getElementById("menuClose");
var menuClose2 = document.getElementById("menuClose-2");
var menuInner = document.getElementById("menu__inner-1");
var menuInner2 = document.getElementById("menu__inner-2");
menuBtn.onclick = function () {
  menu.classList.add("show");
  menuInner.classList.add("active");
  menuInner2.classList.remove("active");
};
menuBtn2.onclick = function () {
  menuInner.classList.remove("active");
  menuInner2.classList.add("active");
};
menuPrev.onclick = function () {
  menuInner.classList.add("active");
  menuInner2.classList.remove("active");
};
menuClose.onclick = function () {
  menu.classList.remove("show");
};
menuClose2.onclick = function () {
  menu.classList.remove("show");
  menuClose.classList.remove("show");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("show");
  }
};
const tabsBtn = document.querySelectorAll(".tab__btn");
const tabsItems = document.querySelectorAll(".event");
tabsBtn.forEach((e) => {
  onTabClick(tabsBtn, tabsItems, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (e.srcElement.classList.contains("active")) {
      e.srcElement.classList.remove("active");
      e.srcElement.parentElement
        .querySelector(".accord__content")
        .classList.remove("active");
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });
      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
var scheduleContent = document.getElementById("scheduleContent");
var scheduleBtn = document.getElementById("scheduleBtn");
var scheduleClose = document.getElementById("scheduleClose");
scheduleBtn.onclick = function () {
  scheduleContent.classList.toggle("show");
  scheduleBtn.classList.toggle("hide");
};
scheduleClose.onclick = function () {
  scheduleContent.classList.remove("show");
  scheduleBtn.classList.toggle("hide");
};
