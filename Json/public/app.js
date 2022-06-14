



function app() {
    fetch("./data.json")
        .then(response => response.json())
        .then((jsondata) => {
            jsondata.results.forEach(data => {
                console.log(data.title);
            })
        });

}

app();
