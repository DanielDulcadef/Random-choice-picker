let box = document.getElementById("textarea");
let tagg = document.getElementById("tags");

box.addEventListener("keyup", (event) => {
    createtag(event.target.value)
    if (event.key === "Enter") {
        //  console.log("Enter pressed")
        setTimeout(() => {
            event.target.value = '';
        },10)
        randomselect();
    }
})

function createtag(i) {
    let tags = i
        .split(",")
        .filter(tag => tag.trim() !== '')
        .map(tag => tag.trim());
    // console.log(tags)

    tagg.innerHTML = '';

    tags.forEach(tag => {
        const t = document.createElement("span");
        t.classList.add("tag");
        t.innerText = tag;
        tagg.append(t);

    });
}

function randomselect() {
    let times = 30;
    let milisegs = 300;

    let interval = setInterval(() => {
        const randomtag = pickrandom();

        //highlight
        highlighttag(randomtag);

        setTimeout(() => {
            unhighlighttag(randomtag)

        }, milisegs)
        //unhighlight


    }, milisegs);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {

            const randomtag = pickrandom();

            //highlight
            highlighttag(randomtag);

        }, milisegs)

    }, milisegs * times)
}

function pickrandom() {
    let tags1 = document.querySelectorAll(".tag");
    return tags1[Math.floor(Math.random() * tags1.length)]

}

function highlighttag(tag) {
    tag.classList.add('highlight')
}

function unhighlighttag(tag) {
    tag.classList.remove('highlight')
}


