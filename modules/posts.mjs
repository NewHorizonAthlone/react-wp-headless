// fetch WP posts with JS
async function fetchPosts(numberOfPost) {
  const url = "https://newhorizonathlone.ngo/wp-json/wp/v2/posts?_embed";
  try {
    const response = await fetch(url)
      .then((response) => response.json())
      .then((posts) => {
        const firstThreePosts = posts.slice(0, numberOfPost);
        let html = "";
        firstThreePosts.forEach((post) => {
          let htmlSegment = `
              <div class="card">
                <h3 class="heading-tertiary u-margin-bottom-small u-margin-bottom-medium">
                    ${post.title.rendered}
                </h3>
                <img style="max-width: 100%;
                max-height: 100%;" src="
                    ${post._embedded["wp:featuredmedia"][0].source_url}"
                >
                <p class="excerpt">
                    ${post.excerpt.rendered}
                </p>
                <p class="author">
                    ${post._embedded["author"][0].name}
                </p>
              </div>
            `;
          html += htmlSegment;
        });

        let container = document.querySelector("#cards");
        container.innerHTML = html;
      });
  } catch (e) {
    console.log("Error during fetch: " + e);
    return [];
  }
}

export { fetchPosts };
