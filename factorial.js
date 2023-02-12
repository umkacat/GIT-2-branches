function factorial1(n) {
    let n1 = 1
    for (let i = 1; i <= n; i++) {
        n1 = n1 * i
        console.log(n1)
    }
    alert(n1)
    return(n1)
}

export{factorial1}