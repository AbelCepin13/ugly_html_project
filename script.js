let image = document.getElementsByClassName("pokemon_images")
console.log(image);
for(let i=0;i<image.length;i++){
    image[i].style["border"]="5px dashed orange";
}
let groupphoto = document.querySelector("img");
console.log(groupphoto);
groupphoto.style["border"]="5px dashed orange";
let all=document.getElementsByClassName("all_pokemon_container");
console.log(all);
for(let i=0;i<all.length;i++) {
    all[i].style["background-color"]="blue";
}
let background=document.getElementsByClassName("each_pokemon_container");
console.log(background);
for(let i=0;i<background.length;i++) {
    background[i].style["background-color"]="blue";
}
let intro = document.getElementsByClassName("introduction");
console.log(intro);
for(let i=0;i<intro.length;i++) {
    intro[i].style["background-color"]="blue";
}
let list = document.getElementsByClassName("list");
console.log(list);
for(let i=0;i<list.length;i++) {
    list[i].style["background-color"]="blue";
}