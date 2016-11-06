function Player () {
  this.level = 1;
  this.health = 10;
  this.attack = 3;
  this.defense = 4;
};

 function Warrior() {
  Player.call(this);
  this.health += 5;
  this.attack += 2;
  this.defense -= 1;
  this.klass = "Warrior";
};

function Wizard() {
  Player.call(this);
  this.health -= 3;
  this.attack += 1;
  this.defense += 4;
  this.klass = "Wizard";
};

function Monster(name) {
  this.level = 2;
  this.health = 10;
  this.attack = 3;
  this.defense = 1;
  this.name = name;
}

var gaint = new Monster("gaint");
var hellgon = new Monster("hellgon");
var warewolf = new Monster("warewolf");
var tigger = new Monster("tigger");
var vampire = new Monster("vampire");
var hillary = new Monster("hillary");

var monsters = [gaint, hellgon, warewolf, tigger, vampire, hillary];

function getMonster () {
  var number = Math.floor(Math.random()*6);
   return monsters[number];
}

function attack (attacker, defender) {
  var damageDelt = Math.floor(Math.random()*6);
  defender.health -= damageDelt;
  alert("You attack, the monster's health is " + damageDelt);
  if (damageDelt == 0 || damageDelt < 0) {
    alert("The monster is dead!")
  }
};





// Fight.prototype.defense = function () {
//
// };
