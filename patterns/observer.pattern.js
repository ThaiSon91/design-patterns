class Observer {
  //ES13 khong con dung constructor
  constructor(name) {
    //vi du nhu nam la sniper, riki
    this.namePick = name;
  }

  updateStatus(location) {
    this.goToHelp(location);
  }

  goToHelp(location) {
    console.log(`${this.namePick}:::PING:::${JSON.stringify(location)}`);
  }
}

class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(observer);
  }

  notify(location) {
    this.observerList.forEach((observer) => observer.updateStatus(location));
  }
}

const subject = new Subject();

//your pick

const riki = new Observer("Riki");
const sniper = new Observer("Sniper");

//add to Team

subject.addObserver(riki);
subject.addObserver(sniper);

//push location to Team

subject.notify({ long: 123, lat: 345 });
