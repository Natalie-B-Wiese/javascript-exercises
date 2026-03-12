const sumAll = function(num1, num2) {
    
    if (num1<0 || num2<0 || !Number.isInteger(num1) || !Number.isInteger(num2))
    {
        return "ERROR";
    }
    else
    {
        let smallNum;
        let bigNum;

        if (num1<num2)
        {
            smallNum=num1;
            bigNum=num2;
        }
        else
        {
            smallNum=num2;
            bigNum=num1;
        }

        let sum=0;
        for (i=smallNum; i<=bigNum; i++)
        {
            sum+=i;
        }
        return sum;

    }

    


};

// Do not edit below this line
module.exports = sumAll;
