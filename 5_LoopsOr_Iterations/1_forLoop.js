// for loop

for (let i = 0; i < 11; i++) {
    const element  = i;
    if(i == 5){
        // console.log(`${i} is best number`);
        
    }
    // console.log(element); 
} 

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <=  10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);  
    } 
}

const arr = ["saurabh", "pragya"]
// console.log(arr);  

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
    
}

// break: used to terminate the loop when a condition is met.
for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log(`detected 5`);
        break;
    }
    console.log(i);   
}

// continue: skips the current iteration and moves to the next one.
for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log(`detected 5`);
        continue;
    }
    console.log(i);   
}