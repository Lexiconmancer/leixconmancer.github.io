/* Puppy Idle

    This program is free software released under the terms of the GNU General Public License as published by the Free Software Foundation <https://fsf.org/>

    Special Thanks to: 
    Sam, dev of Clicker Ultimate <https://clickerultimate.github.io/> for beautiful code to read, which was immensely helpful while learning during this project.

/* TODO
make sniff its own separate clickable
boops buy things that increment sniffs
sniffs add more things to explore in the world
resource: grass that can be accessed spending sniffs (occasionally find dirt in grass, more rarely other things)
Achievements
    Bad dog - unlock 'learning'
    Make a friend (vs. sources: petstore, next door lawn) First time unlocks additional puppies, others add to count
        
action: mark territory (this should be a one-time thing for specific landmarks like fire hydrants, home, next door lawn, petstore, home, show floor, etc)
create home system (this should provide various upgrades to stats and be upgradeable by resource:behavior)
resource: behavior (related achievements: bad dog!, good boy!, etc)
resource: learning (good boy!, etc)
    training (once other puppies)

*/

/*
TODO
fix save/load
*/

/*
    boops and sniffs
*/
var boops = 0;
function boopsClick(bn){
    boops = boops + bn;
    document.getElementById("boops").innerHTML = prettify(boops);
};

var sniffs = 0;
function buySniffs(){
    var sniffsCost = Math.floor(10 * Math.pow(1.1,sniffs));             //determines cost of sniffs
    if(boops >= sniffsCost){                                            //check user can afford sniffs
        sniffs = sniffs + 1;                                            //increases sniffs when bought
        boops = boops - sniffsCost;                                     //removes spent boops
        document.getElementById('sniffs').innerHTML = sniffs;           //updates displayed sniffs
        document.getElementById('boops').innerHTML = boops;             //updates displayed boops
    };
    var nextSniffsCost = Math.floor(10 * Math.pow(1.1,sniffs));         //determines increased cost of next boop
    document.getElementById('sniffsCost').innerHTML = nextSniffsCost    //updates displayed boop cost
};

/*
Main game loop
*/
window.setInterval(function(){

    boopsClick(sniffs/10);

}, 1000);

/*
Prettify decimal display
*/
function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
        return output;
}

/*
CURRENTLY NOT WORKING AS INTENDED
localStorage Saving
*/
function save(){
    var save = {
        boops: boops,
        sniffs: sniffs
        /* prestige: prestige */
    }
    localStorage.setItem("save",JSON.stringify(save));
}

/*
CURRENTLY NOT WORKING AS INTENDED
localStorage Loading
*/
function load(){
var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.boops !== "undefined") boops = savegame.boops;
if (typeof savegame.sniffs !== "undefined") sniffs = savegame.sniffs;
/* if (typeof savegame.prestige !== "undefined") prestige = savegame.prestige; */
}
