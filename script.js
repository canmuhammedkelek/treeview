function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("dataset.json", function(text) {
    var data = JSON.parse(text);


    let PARENTIDINFO = data.filter(s => s.parentID);
    let IDINFO = data.filter(c => c.ID);


    for (i = 0; i < IDINFO.length; i++) {
        console.log(IDINFO[i]);
        for (z = 0; z < PARENTIDINFO.length; z++) {
            if (PARENTIDINFO[z].parentID == IDINFO[i].ID) {
                console.log(PARENTIDINFO[z]);
            }
        }
    }
});