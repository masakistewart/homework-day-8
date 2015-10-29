
var winVia = ["Knockout", "Leg kick tko","head kick knockout", "spinning back elbow... Doctor stoppage" ]






var FighterMaker = function(name, age, gym){
    this.age = age;
    this.name = name;
    this.gym = gym;
    this.record = { wins: 0, losses: 0 };
    this.young = null;
    this.wins = [];
    this.getRecord = function(){
        for(var key in this.record){
            return "fighter " + name + " has " + this.record[key] + " " + key + " and " + this.record[key] + " losses";
        }
    }
    this.padRecord = function(){
        this.record.wins += 1;
    };
    this.addLoss = function(){
        this.record.losses += 1;
    };
}

function fightGame(object1, object2){
    if(object1.age < 20){
        console.log(object1.name + " is having their pro debut at such a young age");
    }else if(object2.age < 20){
        console.log(object2.name + " is having their pro debut at such a young age\n");
    }
    console.log("The bell rings and the fight is underway\n");
}

c = new FighterMaker("Cairo", 22, "WorldTeam USA");
c2 = new FighterMaker("Random", 18, "Combat Sports Academy")
c.padRecord()
c.getRecord()