const readline = require('readline-sync');
function obj(name,kol) {
    this.name = name;
    this.kol = kol;
}
exports.addorks=function(masiv){
    let masiv2 = []
    let kas = readline.question('Vedite stroku')
    if (masiv.length==0){
        let us = new obj(kas,1);
        masiv.push(us)
        console.log('Dobavlena first position')
    }else{
        let lik=true
        let z=''
        for (let i=0; i<masiv.length; i++){
            if (kas==masiv[i].name){
                masiv[i].kol+=1
                lik=false
                console.log('Kolichestvo item up')
            }
        }
        if (lik==true){
            let us = new obj(kas,1);
            masiv.push(us)
            console.log('Dobavlena new position')
        }
    }
} 
exports.deletkors=function(masiv){
    let kas = readline.question('Vedite stroku')
    if (masiv.length==0){
        console.log('Dan item not korsina')
    }else{
        for (let i=0; i<masiv.length; i++){
            if (kas==masiv[i].name){
                delete masiv[i]
                console.log('Item delet')
            }
        }
    }
}
exports.vivod=function(masiv){
    if (masiv.length==0){
        console.log('Korzina pusta')
    }else{
        for (let i=0; i<masiv.length; i++){
            console.log(masiv[i])
        }
    }
}
