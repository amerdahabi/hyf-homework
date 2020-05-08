console.log("Gitting Into Promises");

const container = document.querySelector(".container");
const userName = '';

function fetchData(userName) {
  const api = `https://api.github.com/search/repositories?q=user:${userName}`;
  fetch(api)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      renderData(data);
    });
}

function renderData(data) {
  data.items.forEach(item => {
    const ul = document.createElement("ul");

    ul.innerHTML = `
        <h4>${item.full_name}</h4>
        <ul>
        ${item.owner.login}'s repositories
        <ul>
            <li>
               Repo full name: ${item.full_name}
            </li>
            <li>
               Repo URL: ${item.url}
            </li>
        </ul>
        </ul>
        `;
        container.appendChild(ul);
  });
}

function promiseAll(){
    Promise.all([
        fetchData('amerdahabi'),
        fetchData('SwathiSankararaman'),
        fetchData("benhamid")
    ])
}
promiseAll();
