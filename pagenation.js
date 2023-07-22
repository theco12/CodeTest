const rowsperpage = 10;
const rows = document.querySelectorAll("#mytable tbody tr");
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount / rowsperpage);

const numbers = document.getElementById("numbers");

//페이지 네이션 생성

for (let i = 1; i <= pageCount; i++) {
  numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}
const numbersBtn = numbers.querySelectorAll("li a");

numbersBtn.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    for (nb of numbersBtn) {
      nb.classList.remove("active");
    }
    e.target.classList.add("active");
  });
});
