const btn = document.getElementById("btn");
const title = document.getElementById("title");

const colors = ["Purple", "RebeccaPurple", "SteelBlue", "Turquoise", "LightSeaGreen", "LightSkyBlue", "DarkBlue", "Aquamarine"];

btn.addEventListener ("click", (event) => {
    event.persist;
    const randomColor = getRandomColor(colors);
    const color = colors[randomColor];
    console.log(color);

    document.body.style.backgroundColor = colors[randomColor];
    btn.style.backgroundColor = "Black";
    btn.style.color = "AliceBlue";
    btn.style.border = "none";
    title.innerText = `Backgound color: ${colors[randomColor]}`
    title.style.color = "AliceBlue";
    title.style.border = "2px solid Black";
    title.style.color = "AliceBlue";
    title.style.padding = "10px";
    title.style.backgroundColor = "Black";
});

const getRandomColor = (colors) => {
    return Math.floor(Math.random() * colors.length);
}