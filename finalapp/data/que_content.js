


export const imgs = {
    "cold": "http://placekitten.com/100/100"
}

export const qs = [
    {
        title:"Select the region you want to learn",
        options: ["Tropical", "Temperate", "Cold"],
        pics: [ "./imgs/climmates/climate__tropical.png", "./imgs/climmates/climate__temperate.png","./imgs/climmates/climate__cold.png"],
        background: ["#FFECA8", "#91DEA6", "#86D4FD"]
    }, 
    {
        title:"What animals are affected in the tropical region",
        options: ["Clown Fish", "Green Turtle"],
        pics: ["./imgs/animals/animal__trop_nemo.png", "./imgs/animals/animal__trop_turtle.png"]
    }, 
    {
        title:"How does these plastics affect?",
        options: ["Plastic Bag", "Straw", "Bottle"],
        pics: ["./imgs/waste/waste__garbage.png", "./imgs/waste/waste__straw.png", "./imgs/waste/waste__bottle.png"]
    }
]

var answers = [];

export function ChangeAnswer(n, qnum){
    answers[qnum] = n;
    console.log(answers);
}

export function GetAnswer(){
    return answers;
}

//Store name
var name = "";

export function ChangeName(n){
    name = n;
    console.log(name);
}

export function GetName(){
    return name;
}