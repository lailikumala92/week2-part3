let checkPalindrom = (text) => {
    if(typeof text == 'string') {
        let x = text.toLocaleLowerCase()
        for(i=0; i<x.length; i++) {
            let reverse = x[x.length -1 -i];
            if(x[i] == reverse) {
                console.log(' palindrom');
            } else {
                console.log('not palindrom');
            }
        }
    } else {
        console.log('text must be a string');
    }
}
checkPalindrom('Malam')


function reverseword(x) {
    if(typeof x == 'string') {
        let lowerCase = x.toLocaleLowerCase()
        let kata = lowerCase.split(' ')
        let temp = ' '
        for(let i=kata.length-1; i>=0; i--) {
            if(kata[i]) {
                temp += kata[i] + ' '
            }
        }
        console.log(temp); 
    } else {
        console.log('bukan string');
    }
}
reverseword('saya belaJAr Javascript')
