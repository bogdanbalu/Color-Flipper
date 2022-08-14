const btn = document.getElementById("btn");
const title = document.getElementById("title");

const colors = ["Purple", "RebeccaPurple", "SteelBlue", "Turquoise", "LightSeaGreen", "LightSkyBlue", "DarkBlue", "Aquamarine"];

btn.addEventListener ("click", (event) => {
    event.persist;
    const randomColor = getRandomColor(colors);
    const color = colors[randomColor];
    console.log(color);

    document.body.style.backgroundColor = colors[randomColor];
    btn.style.backgroundColor = colors[randomColor];
    btn.style.color = "AliceBlue";
    btn.style.border = "2px solid AliceBlue";
    title.innerText = `Backgound color: ${colors[randomColor]}`
    title.style.color = "AliceBlue";
});

const getRandomColor = (colors) => {
    return Math.floor(Math.random() * colors.length);
}