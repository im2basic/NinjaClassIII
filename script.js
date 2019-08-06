class Ninja{
    constructor (name, health = 100, speed = 3, strength = 3){
        this._name = name;
        this._speed = speed;
        this._strength = strength;
        this._health = health;
    }
    sayName(){
        console.log(`${this._name} is a ninja`);
    }
    showStats(){
        if(this._health <= 0 ){
            console.log(`${this._name} is no more`);
        }
        else{
        console.log(`Name: ${this._name}\nSpeed: ${this._speed}\nstrength: ${this._strength}\nhealth: ${this._health}`);
        }
    }
    drinkSake(){
        this._health += 10;
        console.log(`${this._name} just drank sake.`);
    }   
    kick(ninja){
        var damage = this._speed * this._strength;
        ninja._health -= damage;
        console.log(`${this._name} tornado kicked ${ninja._name} and almost killed him`);
    }
}
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this._speed = 10;
        this._strength = 10;
        this._health = 200;
    }
    speakWisdom(){
        super.drinkSake();
        console.log(`benny bob is nearly over`);
    }
    elbowdrop(ninja){
        super.kick(ninja);
        ninja._health -= 50;
        console.log(`${this._name} has been blown with a fatal elbow to ${ninja._name}.`);

    }
    kick(ninja){
        var damage = this._speed * this._strength;
        ninja._health -= damage;
        console.log(`${this._name} tornado kicked ${ninja._name} and almost killed him`);
    }

}
var nibbles = new Ninja ("sir.nibbles");
var benny = new Ninja ("benny bob");
var anisong = new Sensei("Anisong");
console.log(nibbles._speed);
nibbles.sayName();
nibbles.showStats();
nibbles.drinkSake();
anisong.showStats();
benny.showStats();
benny.sayName();
benny.kick(nibbles);
anisong.elbowdrop(benny);
benny.showStats();
nibbles.showStats();