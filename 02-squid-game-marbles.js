class Player {
    constructor(name, hitsPerMinute) {
        this.name = name;
        this.hitsPerMinute = hitsPerMinute;
        this.marbleCount = 100;
    }

    status() {
        console.log(`Player: ${this.name} -- Marbles Left: ${this.marbleCount}`)
    }

    gettingHit(){
        this.marbleCount = this.marbleCount - this.hitsPerMinute;
    }
}

function everyMinutes(p1, p2){
    p1.gettingHit() 
    p2.gettingHit()
}

function marbleAttack(p1, p2) {
    for (let index = 0; index < 10; index++) {
        everyMinutes(p1, p2);
    }

    if(p1.marbleCount == p2.marbleCount){console.log("tie")}
    else if(p1.marbleCount > p2.marbleCount){p1.status()}
    else{p2.status()}
}

const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);

marbleAttack(p1, p2); // return p1

const p3 = new Player('p1', 5);
const p4 = new Player('p2', 5);
 
marbleAttack(p3, p4); // return Tie
