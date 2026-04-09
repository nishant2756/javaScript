// this is to do list 
// To Do List -> ak list ka jasa hote hai jisma ham pura din ka kaam (rutene) ko add kr sakta hai
// ke hamko din bhar main kya kaam krna hai or kaam krna ka baad usko remove kr sakta hai

////////////////////

// ismai four functions hota hai

// 1. list - to show all todos(todo mai kaam ko show krana)
// 2. add - to add a todos(kaam ko todo mai add krna)
// 3. delete - to delete a task(complete kra gaya kaam ko delete krna)
// 4.quit - to exit the todos(todo sa bhar aana)

let todo = [];
let req = prompt("please enter your request");

console.log(req);

while(true){
    if (req == "quit"){
        console.log("quitting todo");
        break;
    }
    if(req == "list"){
        console.log("-----------");
        for(let i=0;i<todo.length;i++) {
            console.log(i, todo[i]);
        }
        console.log("-----------");
    }else if(req == "add"){
        let task = prompt("please enter the tasks you want to add");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete"){
        let idx = prompt("please enter the tasks index");
        todo.splice(idx, 1);
        console.log("task deleted");
    }else{
        console.log("wrong request");
    }

    req = prompt("please enter your request");
}
