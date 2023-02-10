const data = [
  {
    id: 1,
    name: "이상해씨",
    type: 10,
    url: "img/000101.png",
  },
  {
    id: 2,
    name: "파이리",
    type: 20,
    url: "img/000401.png",
  },
  {
    id: 3,
    name: "꼬북이",
    type: 30,
    url: "img/000701.png",
  },
  {
    id: 4,
    name: "버터풀",
    type: 40,
    url: "img/001201.png",
  },

  {
    id: 5,
    name: "피죤",
    type: 50,
    url: "img/001701.png",
  },
];

const list = document.getElementById("list");

function showList(val = "") {
  list.innerHTML = "";
  const res = data.forEach((data) => {
    if (data.name.includes(val)) {
      const li = document.createElement("li");

      li.innerHTML = `
        <img src= "${data.url}" alt="${data.name}" width="80%">
        <p>이름: ${data.name}</p>
        <p>속성: ${data.type}</p>
        `;
      list.appendChild(li);
    }
  });
}

showList();

const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search_button");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = searchInput.value;
  console.log(val);
  showList(val);
});
