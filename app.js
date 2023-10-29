// a function with for in loop 
// function banaya then a b aur baqi sb default value add ki
function foo(a, b, ...rest){
    // let num ki default value = 0 krdi
    let num = 0
// for in loop banaya let seh (key in) rest (yani akri number tak)
    for(let key in rest){
        // num jo upar default tah woh liya += krwaiya the rest[key] se murad jo ham niche number pass krrhe hainn
        num += rest[key]
    }


    // return krwaiya (a +  b + num)
    return (a +  b + num)

}


document.write(foo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));