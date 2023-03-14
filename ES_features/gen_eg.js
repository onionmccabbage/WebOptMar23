// generators. We sometimes need access to very large data collection
// good to avoid storing in memory; we can generate subsequent members

fin_seq = [1, 2, 3, 5, 8, 13, 21, 34] // these live in memory!

// here is generator syntax
function* fib(){ // fibonacci 1, 2, 3, 5, 8, 13, 21, 34 ...
    let first = 1, second = 2
    // let i=0; i < Number.POSITIVE_INFINITY; i++
    for(;;){ // an endless loop
        let sum = second + first
        yield sum // in place of return we say 'yield'
        first = second
        second = sum
    }
}

const prettyPrint = (item)=>{
    console.log( JSON.stringify(item) )
}
// use the code
const iter = fib()
prettyPrint(iter.next() ) // {value:3 ...}
prettyPrint(iter.next() ) // {value:5 ...}

// Number values
const inf = Number.POSITIVE_INFINITY - Number.NEGATIVE_INFINITY
// use epsilon to ignore rounding erros below this threshold
const epsilon = Number.EPSILON // this is dead useful


