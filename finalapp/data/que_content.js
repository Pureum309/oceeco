
export const qs = [

    {
        title:"Select the region you want to learn in",
        // options: [ "Tropical", "Temperate", "cold"],
        // pics: [ "./imgs/climmates/climate__tropical.png", "./imgs/climmates/climate__temperate.png","./imgs/climmates/climate__cold.png"],

        options: [{
            txts: [ "Tropical", "Temperate", "Cold"],
            pics: [ "./imgs/climmates/climate__tropical.png", "./imgs/climmates/climate__temperate.png","./imgs/climmates/climate__cold.png"]
        }],
        background: ["#FFECA8", "#91DEA6", "#86D4FD"], 
        enter: ["#FFC8A8", "#D0DE91", "#86B8FD"],
        leave: ["#FFECA8", "#91DEA6", "#86D4FD"]
    },

    {
        title:"Select the animal you want to learn more about in this region",
        // options: ["Clown Fish", "Green Turtle"],
        // pics: ["./imgs/animals/animal__trop_nemo.png", "./imgs/animals/animal__trop_turtle.png"]

        options: [{
            txts: ["Clownfish", "Green turtle"],
            pics: ["./imgs/animals/animal__trop_nemo.png", "./imgs/animals/animal__trop_turtle.png"], 
        },
        {
            txts: ["Shark", "Dolphin"],
            pics: ["./imgs/animals/animal__temp__shark.png", "./imgs/animals/animal__temp__dolphin.png"]
        },
        {
            txts: ["Penguin", "Polar bear"],
            pics: ["./imgs/animals/animal__cold_penguine.png", "./imgs/animals/animal__cold_polar.png"]
        }], 
        background: ["#E8E8E8", "#E8E8E8"],
        enter: ["#DBDBDB", "#DBDBDB"], 
        leave: ["#E8E8E8", "#E8E8E8"]
    }, 

    {
        title:"Select a plastic to learn more about how it affects the animal.",
        options: [{
        txts: ["Plastic bag", "Plastic straw", "Plastic bottle"],
        pics: ["./imgs/waste/waste__garbage.png", "./imgs/waste/waste__straw.png", "./imgs/waste/waste__bottle.png"]
        }], 
        background: ["#E8E8E8", "#E8E8E8", "#E8E8E8"],
        enter: ["#DBDBDB", "#DBDBDB", "#DBDBDB"], 
        leave: ["#E8E8E8", "#E8E8E8", "#E8E8E8"]
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