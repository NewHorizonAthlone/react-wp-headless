// render nav
async function getNAvItems() {
  const url = 'https://newhorizonathlone.ngo/wp-json/wp/v2/pages'
}

async function renderNav() {
  let html = "";
  let htmlSegment = `
    <nav>
      <ul class="nav-list">
          <li class="nav-item" value="home">Home</li>
          <li class="nav-item" value="about">About</li>
      </ul>
    </nav>
  `;
  html += htmlSegment;

  let container = document.querySelector("#navigation");
  container.innerHTML = html;
}

export default renderNav;
