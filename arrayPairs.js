// Log all pairs of array
const array1 = [1,2,3,4,5,6];

array1.forEach((i)=> {
    array1.forEach((j)=>{
        console.log("Pair: " + i + " " + j);
    })
})
