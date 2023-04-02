//dich vu moi gioi

class Leader {
  receiveRequest(offer) {
    console.log(`Result:: ${offer}`);
    //console.log(`Bosss said Accept:: ${offer}`);
  }
}

class Secretary {
  constructor() {
    this.leader = new Leader();
  }

  receiveRequest(offer) {
    //date
    this.leader.receiveRequest(offer);
  }
}

class Developer {
  constructor(offer) {
    this.offer = offer;
  }

  applyFor(target) {
    target.receiveRequest(this.offer);
  }
}

//how to use

const devs = new Developer("Thaisondev up to 1K USD");
devs.applyFor(new Secretary());
