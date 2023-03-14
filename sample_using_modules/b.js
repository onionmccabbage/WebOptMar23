// variations on 'export'
export var pi     = 3.14 // we tend to avoid var
export let sqtTwo = 1.41
export const phi  = 1.61
export default class DoStuff{} // does nothing
export const abso = (num)=>{
    if (num<0){
        num = num*-1 // always return postiive
    }
    return num
}