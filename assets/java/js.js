let cardparent = document.getElementById("cardroot");

json = [
  { name: "vikas", img: "nosrc" },
  { name: "vikas1", img: "nosrc" },
  { name: "vikas2", img: "nosrc" },
  { name: "vikas3", img: "nosrc" },
  { name: "vikas4", img: "nosrc" },
  { name: "vikas5", img: "nosrc" },
  { name: "vikas6", img: "nosrc" },
  { name: "vikas7", img: "nosrc" },
  { name: "vikas8", img: "nosrc" },
  { name: "vikas9", img: "nosrc" },
  { name: "vikas10", img: "nosrc" },
  { name: "vikas11", img: "nosrc" },
];

for (let i = 0; i < json.length; i++) {
  let card = document.createElement("div");
  card.className = "card";
  console.log(json[i]);
  card.innerHTML = `
 <div class="name"> ${json[i].name} </div> <div class="image"></div>`;
  cardparent.appendChild(card);
}
let date = new Date();
let time = date.getHours() + `:` + date.getMinutes();
document.getElementById("time").innerHTML = `${time}`;
