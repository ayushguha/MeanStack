
function calculateNetPay(basicPay){
if(basicPay>50000)
{
return (basicPay+(basicPay*0.4)-1000);
}
else{
   return (basicPay+(basicPay*0.3)-1000);
}

}
module.exports.calculateNetPay=calculateNetPay;



