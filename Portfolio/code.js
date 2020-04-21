const option = document.querySelector(".option");
const navLinks = document.querySelector(".navigation");
const links = document.querySelectorAll(".navigation li");

option.addEventListener("click", () => 
{
  navLinks.classList.toggle("open");
  links.forEach(link => {link.classList.toggle("fade");});
  
});
