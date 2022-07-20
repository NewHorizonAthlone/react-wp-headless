fetch('https://newhorizonathlone.ngo/wp-json/wp/v2/posts')
  .then(response => response.json())
  .then(data => console.log(data));