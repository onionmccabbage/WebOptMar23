// Promises are a recent ES feature. They allow performant handling of events
// rather than handling EVERY event, a Promise lets us resolve or reject

// opt is our option - will be resolve or reject
const go = (opt)=>{
    return new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            if (opt) {
                resolve('we have resolved the promise')
            } else {
                reject( new Error('it broke (we rejected the promise)') )
            }
        }, 500 ) // hang about for half a second
    } )
}

// exercise the code
go(false) // true will resolve the promise, false will reject the promise
    .then( (val)=>{console.log(val)} )
    .catch( (err)=>{console.log(err)} )