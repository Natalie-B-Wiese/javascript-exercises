const reverseString = function(string) {
    
    const lettersReversed=string.split("").reverse();
    
    let reversedString="";
    for (i=0; i<lettersReversed.length; i++)
    {
        reversedString+=lettersReversed[i];
    }
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
