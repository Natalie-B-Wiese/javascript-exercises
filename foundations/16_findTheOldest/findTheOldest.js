const findTheOldest = function(array) {
    /*
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    */
   //if year of death is blank, then use today's year

   array.sort(function(a,b){
    const thisYear=new Date().getFullYear();

    const aYears=a.yearOfBirth - (a.yearOfDeath ? a.yearOfDeath : thisYear);
    const bYears=b.yearOfBirth - (b.yearOfDeath ? b.yearOfDeath : thisYear);
    if (aYears>bYears)
    {
        return 1;
    }
    else
    {
        return -1;
    }
   });

   return array[0];
   
};

// Do not edit below this line
module.exports = findTheOldest;
