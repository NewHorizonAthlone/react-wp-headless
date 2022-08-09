// modules
import renderPosts from "./modules/posts.mjs";
import faq from "./modules/faq.mjs";

// components
import renderNav from "./components/nav.js";

window.onload = function () {
  const path =
    window.location.pathname.split("/") +
    window.location.pathname.replace("/teach-react-wp-template", "");

  switch (path[1]) {
    case "/": {
      loadPage("home");
      break;
    }
    case "about": {
      loadPage("about");
      break;
    }
    default: {
      loadPage("404");
      break;
    }
  }

  renderPosts(3);

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", function () {
      const path = item.getAttribute("value");
      loadPage(path);
      // enter number of posts
      // default 10 posts
      renderPosts(3);
      faq();
      if (path == "home") {
        window.history.pushState("", "", "/");
        return;
      }

      window.history.pushState("", "", path);
    });
  });

  function loadPage($path) {
    if ($path == "") return;

    const container = document.getElementById("container");

    const request = new XMLHttpRequest();
    request.open("GET", "pages/" + $path + ".html");
    request.send();
    request.onload = function () {
      if (request.status == 200) {
        container.innerHTML = request.responseText;
        document.title = $path;
      }
    };
  }
};

// navigation
renderNav();
