// we start with an immutable stateful object
const state = {'usr':'Timnit', 'logged_in':true, 'code':['ES', 'TS', 'CSS', 'API']}
// maybe something happens and we have fresh data
const delta = {'logged_in':false}
// we throw away the old state and replace with a new state
const reduce = (state, delta) =>{
    return { // we are creating a brand new ES object
        ...state, 'logged_in':delta.logged_in
    }
}
// use the code (missing some of the rigour of Redux)
console.log( reduce(state, delta) ) // we have a FRESH object which can replace our immutable state