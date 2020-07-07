//start
// ?========================= PRVI NACIN============= //
// const navList = document.querySelector(".nav-list");
// const hamburgerMenu = document.querySelector(".open");
// const exitHambMenu = document.querySelector(".close");

// hamburgerMenu.addEventListener("click", function(){
//     navList.classList.add("active");
// })

// exitHambMenu.addEventListener('click', function(){
//     navList.classList.remove("active");
// })

//? ================= DRUGI NACIN =============== //

const selectElement = (s) => document.querySelector(s);

selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});

selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});
