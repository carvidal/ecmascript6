const url = 'https://gist.githubusercontent.com/lomefin/907bab0a42231d3ecaf4a2d4559b8e53/raw/bfdb5f2fbcbeb88e3b0ae5ec4f32fcd4aa5e768d/movements.txt';

fetch(url)
.then(response => response.text())
  .then(data => console.log(data));
