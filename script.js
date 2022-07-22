async function getData() {
  let url = "https://newhorizonathlone.ngo/wp-json/wp/v2/posts";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderData() {
  let data = await getData();
  let posts = "";
  posts += `<ul></ul>`;
  data.forEach((post) => {
    posts += `<li> Post id: ${post.id}</li>`;
  });

  let postList = document.querySelector("#app");
  postList.innerHTML = posts;
}

renderData();
