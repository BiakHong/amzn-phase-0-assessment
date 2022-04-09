// 1. Write your functions here
function line(array){
    if(array.length === 0){
        console.log("The line is currently empty.")
    }
    else{
    let line ="The line is curently: "
    //console.log("The line is currently:")
    for(let i =0; i < array.length; i++){
        line += ` ${i+1}. ${array[i]} `
       // process.stdout.write((i+1)+ ". "+ array[i]+" ")
    }
    console.log(line)
}
}

// 2. Example Usage

 const katzDeli = ["biak", "hong","nuam", "neu"]
 line(katzDeli);

 function takeANumber(arr,name){
    for(let i =0; i < arr.length; i++){
        if(name === arr[i]){
            console.log(` Welcome, ${name}. You are number ${i+1} in line.`)
        }
    
}
 }
takeANumber(katzDeli, "nuam")
// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."
function nowServing(arr){
    if(arr.length ===0){
        console.log("There is nobody waiting to be served!")
    }
    else{
    console.log(`Currently serving ${arr[0]}.`)
    arr = arr.splice(0, 1);}
}

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"
line(katzDeli)
// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.
takeANumber(katzDeli,"nuam")
// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"
line(katzDeli)
// nowServing(katzDeli) //=> "Currently serving Grace."
nowServing(katzDeli)

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"
line(katzDeli)
nowServing(katzDeli)
line(katzDeli)
nowServing(katzDeli)
line(katzDeli)
nowServing(katzDeli)
line(katzDeli)
nowServing(katzDeli)
line(katzDeli)