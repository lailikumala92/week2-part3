const num = (number) => {
    if(typeof number == 'number') {
        let x = Array.from(number.toString()).map(Number)
        let a = x.slice(0,6).sort((a,b)=> a-b)
        let b = x.slice(7,13).sort((a,b)=> a-b)
        let c = x.slice(14,16).sort((a,b)=> a-b)
        let d = a.concat(b).concat(c)
        let str = ' '
            for(i=0; i<d.length; i++) {
                str += d[i] + ''
            }
        let num = parseInt(str)
        console.log(num);
    } else {
        console.log('not number');
    }
}
num(5956560159466056)
