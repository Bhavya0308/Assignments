/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const start_time = new Date();

    total_sum = 0
    for (i=0;i<n;i++){
        total_sum += i
    }

    const end_time = new Date();
    console.log(total_sum)

    console.log(end_time-start_time)
}

calculateTime(1000000)