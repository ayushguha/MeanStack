
function farenheit (c){
    f = (c * (9/5) + 32)
    return f;
    };
function celcius (f){
c = (f - 32) / 1.8;
return c;
};

module.exports.farenheit = farenheit ;
module.exports.celcius=celcius;


