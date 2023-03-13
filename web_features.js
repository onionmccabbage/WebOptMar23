// ECMAScript offers many optimisation opportunities

// string interpolation
let arr = [4,3,2]
let obj = {'lat':3.0, 'lon':4.0}
// why is back-tick more optimal? strings are immutable
const s = `Values: ${arr[2]}, ${obj['lat']}`
const s2= arr[2] + ' ' + obj['lat']

// we should explicitly use const
// start by assuming immutability
// then open mutability as needed

// what about code style, e.g. fn?
const fnA=()=>{
    //
}
// choose a code style and stick to it - within a team
const fnB =  x => x**x
const fnC =  (x) => {
    x = y
    return x**x
}

const closureFN = ()=>{
    return ()=>{}
}

// unpacking
//         positional args first, keyword args next then everything else (else)
const fnD = (a, b, c=1, ...rest)=>{
    if (rest.length > 0) {

    }
}

// closure
closureFN(...arr)()

// classes
// class MyClass(object){
    
// }