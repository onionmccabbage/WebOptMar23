// we need to refer to bits of the DOM
const search = document.getElementById('search') // ...as an HTMLInputElement

// here are some useful keyboard codes (just printable characters)
const isNum = (code)=>{return 32 && code <=126}

// observables work best wth STREAMS of data, such as key-presses
// we conventionaly use a trailing $ to identify an observable
const keyup$ = Rx.Observable.fromEvent(document, 'keyup') // listen for keyboard events
// the observable is only instantiated once there is at least one subscriber
// as many subscribers as we like
sub2 = keyup$.pluck('keyCode')
    .filter(isNum) // only respond if the keyCode is 32-126
    .subscribe( (keyCode)=>{
        console.log(`we can sell the following tracking info: ${String.fromCharCode(keyCode)}`)
    } )
sub1 = keyup$.pluck('keyCode')
    .filter(isNum) // only respond if the keyCode is 32-126
    .subscribe( (keyCode)=>{
        console.log(`user typed: ${String.fromCharCode(keyCode)}`)
    } )

