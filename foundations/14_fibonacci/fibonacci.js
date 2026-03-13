const fibonacci = function(num) {

    if (num<0)
    {
        return "OOPS";
    }
    if (num==0)
    {
        return 0;
    }

    let arr=[];
    let sum=1;

    for (let i=0; i<num; i++)
    {
        arr[i]=sum;
        if(arr.length>2)
        {
            sum=arr[i-1]+arr[i];
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
