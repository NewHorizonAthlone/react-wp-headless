// fetch WP posts with JS
async function fetchPosts() {
  const url = "https://newhorizonathlone.ngo/wp-json/wp/v2/posts";
  try {
    const response = await fetch(url)
      .then((response) => response.json())
      .then((posts) => {
        console.log(posts);
        const firstThreePosts = posts.slice(0, 3);
        return firstThreePosts.map((post) => {
          let card = document.querySelector("#card");
          card.innerHTML = post.title.rendered;
          card.innerHTML = post.content.rendered;
        });
      });
  } catch (e) {
    console.log("Error during fetch: " + e);
    return [];
  }
}

fetchPosts();

// modules

import { create, createReportList } from "./modules/canvas.mjs";
import { name, draw, reportArea, reportPerimeter } from "./modules/square.mjs";
import randomSquare from "./modules/square.mjs";

let myCanvas = create("myCanvas", document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

// Use the default
let square2 = randomSquare(myCanvas.ctx);

// faq
let coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
