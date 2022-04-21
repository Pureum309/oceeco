export const imgs = {
    "cold": "http://placekitten.com/100/100"
}

export const qs = [
    {
        title:"Select the region you want to learn",
        // options: [ "Tropical", "Temperate", "cold"],
        // pics: [ "./imgs/climmates/climate__tropical.png", "./imgs/climmates/climate__temperate.png","./imgs/climmates/climate__cold.png"],


        options: [{
            txts: [ "Tropical", "Temperate", "cold"],
            pics: [ "./imgs/climmates/climate__tropical.png", "./imgs/climmates/climate__temperate.png","./imgs/climmates/climate__cold.png"]
        }]
    },

    {
        title:"What animals are affected in the tropical region",
        // options: ["Clown Fish", "Green Turtle"],
        // pics: ["./imgs/animals/animal__trop_nemo.png", "./imgs/animals/animal__trop_turtle.png"]

        options: [{
            txts: ["Clown Fish", "Green Turtle"],
            pics: ["./imgs/animals/animal__trop_nemo.png", "./imgs/animals/animal__trop_turtle.png"]
        },
        {
            txts: ["Shark", "Dolphin"],
            pics: ["./imgs/animals/animal__temp__shark.png", "./imgs/animals/animal__temp__dolphin.png"]
        },
        {
            txts: ["Penguin", "Polar Bear"],
            pics: ["./imgs/animals/animal__cold_penguine.png", "./imgs/animals/animal__cold_polar.png"]
        }]
    }, 

    {
        title:"How does these plastics affect?",
        options: [{
        txts: ["Plastic Bag", "Straw", "Bottle"],
        pics: ["./imgs/waste/waste__garbage.png", "./imgs/waste/waste__straw.png", "./imgs/waste/waste__bottle.png"]
        }]
    }
]

var answers = [];

export function ChangeAnswer(n, qnum, opt){
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