const palindromes = function (string) {
    
    //Removes punctuation and spaces from the string and makes it case insensitive
    stringStripped = (string.replace(/[^a-zA-Z0-9]/g, '')).toLowerCase();
    const backward=stringStripped.split('').toReversed().join('');

    return stringStripped===backward;

};

// Do not edit below this line
module.exports = palindromes;
