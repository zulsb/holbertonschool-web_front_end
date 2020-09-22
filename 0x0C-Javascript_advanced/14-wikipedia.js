function createElement(data) {
    let tag = document.createElement("p");
    let text = document.createTextNode(data);
    tag.appendChild(text);
    document.body.appendChild(tag);
}

function queryWikipedia(callback) {
    let url = new XMLHttpRequest();
    url.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    url.responseType = 'json';
    url.send();
    url.onload = () => callback(url.response.query.pages["21721040"].extract);
}

queryWikipedia(createElement);
