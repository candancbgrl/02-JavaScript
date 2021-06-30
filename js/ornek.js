
function getLetter(s) {
    let letter;
    letter = s.charAt(0)
    switch(letter){
        case('a' || 'e' ||'i' || 'o' ||'u') :
            return 'A';

        case ('b' || 'c' ||'d' || 'f' ||'g' ):
            return  'B';

        case ('h' || 'k' ||'j' || 'l' ||'m') :
            return 'C';

        case ('n' || 'p' ||'q' || 'r' ||'s' ||'t' || 'v' ||'w' || 'x' ||'y' ||'z'): 
            return  'D';

    }   
}
    
    
console.log(getLetter("adf"))