function setuserstats(){

    this.life=100;
    this.hp=2;
    this.hitothers=function(opponet){
        opponet.life -= this.hp;
    }

}

var shyam = new setuserstats();
var vidhya = new setuserstats();

console.log("Shyam hits vidhya");
shyam.hitothers(vidhya);
console.log("Shyam's life: ",shyam.life);
console.log("Vidhya's life: ",vidhya.life);

console.log("Vidhya hits him back twice");
vidhya.hitothers(shyam);
vidhya.hitothers(shyam);
console.log("Shyam's life: ",shyam.life);
console.log("Vidhya's life: ",vidhya.life);

setuserstats.prototype.healfactor=6;
setuserstats.prototype.givelife=function(opponet){
    opponet.life += this.healfactor;
}

console.log("Shyam heals vidhya");
shyam.givelife(vidhya);
console.log("Shyam's life: ",shyam.life);
console.log("Vidhya's life: ",vidhya.life);

console.log("vidhya heals shyam");
vidhya.givelife(shyam);
console.log("Shyam's life: ",shyam.life);
console.log("Vidhya's life: ",vidhya.life);