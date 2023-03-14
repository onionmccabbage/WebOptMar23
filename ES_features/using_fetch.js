// fetch is the modern (performant) way to retrieve remote data
// typicaly the rmeote data is an API
// NB fetch only works in a browser

// we may use fetch directly, but it is better to use async-await
const fetchEmployees = async ()=>{ // async tells ES this is going to repond asynchronously
    const api = `https://dummy.restapiexample.com/api/v1/employees`
    try {
        //               await is the part of async-await where  we specify the asynchronous code
        const response = await fetch(api) // fetch defaults to 'get'
        // the response is everything from the server - we just need the JSON
        const {data} = await response.json() // here we wait for a response, then strip the JSON into 'data'
        return data
    } catch(error) {
        if (error){
            return error.message
        }
    }
}

// use our code
fetchEmployees() // fetch returns a Promise, so it is 'thenable'
    .then( (d)=>{
        console.log(`we received ${d}`)
        console.log(`member zero is ${d[0]['employee_name']}`)
    } )
// we can carry on with other stuff, the async-await will interrupt when it is ready