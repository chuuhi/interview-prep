// Count Elements Greater Than Previous Average
// Given an array of positive integers,
// return the number of elements that are strictly greater than the average of all previous elements.
// Skip the first element.

/*
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 */

function countResponseTimeRegressions(responseTimes){
    if (responseTimes === 0){
        return 0
    }
    let count = 0
    let sum = responseTimes[0]

    for (let i = 1; i < responseTimes.length; i++){
        const average = sum / i
        if (responseTimes > average){
            count++
        }
        sum += responseTimes[i]
    }
    return count
}