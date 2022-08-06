// fetch WP posts with JS
async function renderNav() {
  let html = "";
  let htmlSegment = `
    <input type="checkbox" class="nav-checkbox" id="nav-toggle" />
      
    <label for="nav-toggle" class="nav-button">
      <span class="nav-icon">&nbsp;</span>
    </label>

    <div class="nav-background">&nbsp;</div>

    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <a class="nav-link" href="/"><span>01</span>Home </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about.html"><span>02</span>About</a>
        </li>
      </ul>
    </nav>
  `;
  html += htmlSegment;

  let container = document.querySelector("#navigation");
  container.innerHTML = html;
}

export { renderNav };
