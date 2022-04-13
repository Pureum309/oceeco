export const header = "Answer these questions!";

export const imgs = {
    "cold": "http://placekitten.com/100/100"
}

export const qs = [
    {
        title:"Select the region you want to learn",
        options: ["Tropical", "Temperate", "cold"]
    }, 
    {
        title:"What animals are affected in the tropical region",
        options: ["Clown Fish", "Green Turtle"]
    }, 
    {
        title:"How does these plastics affect?",
        options: ["Plastic Bag", "Straw", "Bottle"]
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