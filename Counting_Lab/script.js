console.log("Hello World")

/* Use a for loop to log numbers from 1 to 10, then another for loop to count down, logging numbers from 10 to 1.
Repeat the exercise with a while loop.
Repeat with a do while loop.
Create this array: const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Use a for…of loop to loop through the array and log all the numbers. (Note: we’re not asking you to also count down on this one.)
*/

for (let i=1; i<=10; i++) {
    console.log(i)
}

for  (let i=10; i>=1; i--) {
    console.log(i)
}


let counterUp = 1
while (counterUp <= 10) {
    console.log(counterUp++)
}

let counterDown = 10
while (counterDown >= 1) {
    console.log(counterDown--)
}


let doCounterUp = 1
do {
    console.log(doCounterUp++)
} while (doCounterUp <= 10)

let doCounterDown = 10
do {
    console.log(doCounterDown--)
} while (doCounterDown >= 1)


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (const number of numbers) {
        console.log(number)
    }