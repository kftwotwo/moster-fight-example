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

function Monster() {
  this.level = 2;
  this.health = 10;
  this.attack = 3;
  this.defense = 1;
}

function attack (attacker, defender) {
  var damageDelt = Math.floor(Math.random()*6);
  defender.health -= damageDelt;
  alert("You attack, the monster's health is " + damageDelt)
};





// Fight.prototype.defense = function () {
//
// };
