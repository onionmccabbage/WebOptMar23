// fetch is the modern (performant) way to retrieve remote data
// typicaly the rmeote data is an API
// NB fetch only works in a browser

// we may use fetch directly, but it is better to use async-await
const fetchEmployees = async ()=>{ // async tells ES this is going to repond asynchronously
    const api = `https://dummy.restapiexample.com/api/v1/employees`
    try {
        //               await is the part of async-await where  we specify the asynchronous code
        const response = await fetch(api) // fetch defaults to 'get'
    } catch(error) {
        if (error){
            return error.message
        }
    }
}

// use our code
fetchEmployees() // fetch is a Promise, so it is 'thenable'
    .then( (d)=>{console.log(`we received ${d}`)} )