const request = new XMLHttpRequest();
const main = document.getElementById("projectslist");
request.open('GET', 'https://api.github.com/search/repositories?q=user:stone-red-code');
request.responseType = 'text';
request.onload = function() {
    console.log(request.response);
    let jsonData = JSON.parse(request.response);
    for (let i = 0; i < jsonData.items.length; i++) {
        let item = jsonData.items[i];
        console.log(item.name);
        addItem(item);
    }
};

function addItem (item)
{
    let row = document.createElement("div");
    let col = document.createElement("div");
    let jumbotron = document.createElement("div");
    let heading = document.createElement("h2");
    let description = document.createElement("p");
    let repo = document.createElement("a");

    row.classList.add("row");
    col.classList.add("col");
    jumbotron.classList.add("jumbotron");
    jumbotron.classList.add("p-5");

    jumbotron.appendChild(heading);
    jumbotron.appendChild(description);
    jumbotron.appendChild(repo);
    col.appendChild(jumbotron);
    row.appendChild(col);

    
    let head = document.createTextNode(item.name);
    let desc = document.createTextNode(item.description);
    repo.innerHTML = "Repository";
    repo.href = item.html_url;

    heading.appendChild(head);
    description.appendChild(desc);
    
    main.appendChild(row);
}
request.send();