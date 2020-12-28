const centerDiv = document.getElementById("center-div")

fetch('https://jsonplaceholder.typicode.com/photos?_limit=20').then((apiData) => {
    return apiData.json();

}).then((jsonData) => {
    jsonData.map((val) => {
        key = val.id;
        let img = document.createElement("img");
        img.src = `https://picsum.photos/200/350?random=${val.id}`;
        centerDiv.appendChild(img);
    });
});