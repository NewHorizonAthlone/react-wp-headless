// modules
import { renderNav } from "./modules/nav.mjs";
import { fetchPosts } from "./modules/posts.mjs";

renderNav();

// enter number of posts if empty 10
// will be displayed
fetchPosts(3);

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
