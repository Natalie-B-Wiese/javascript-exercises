const removeFromArray = function(arr) {
    
    let itemsToRemove = Array.from(arguments);

    //delete the arr item from itemsToRemove array
    itemsToRemove.shift();
    
    function shouldKeepItem(item)
    {
        return (!itemsToRemove.includes(item));
    }

    return arr.filter(shouldKeepItem);
};

// Do not edit below this line
module.exports = removeFromArray;
