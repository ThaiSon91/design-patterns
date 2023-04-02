//thuat toan Round-Robin trong kien truc load balancing
//1. quan ly tai nguyen chung nen dung singleton
//2. du lieu cau hinh (mo duy nhat taskmanager)

"use strict";

class RoundRobin {
  constructor() {
    if (RoundRobin.instance) {
      return RoundRobin.instance;
    }
    RoundRobin.instance = this;
    this.servers = [];
    this.index = 0;
  }

  //add server, them may chu moi vao cac may chu de can bang tai
  addServer(server) {
    this.servers.push(server);
  }

  //get next server
  getNextServer() {
    if (!this.servers.length) {
      throw new Error("No server available");
    }

    const server = this.servers[this.index];
    //thuat toan modulus
    this.index = (this.index + 1) % this.servers.length;
    return server;
  }
}

const loadBalancer1 = new RoundRobin();
const loadBalancer2 = new RoundRobin();
console.log("compare::", loadBalancer2 === loadBalancer1);
loadBalancer1.addServer("Server 01");
loadBalancer1.addServer("Server 02");
loadBalancer1.addServer("Server 03");
console.log(loadBalancer1.getNextServer()); //01
console.log(loadBalancer1.getNextServer()); //02
console.log(loadBalancer1.getNextServer()); //03
console.log(loadBalancer1.getNextServer()); //01
console.log(loadBalancer1.getNextServer()); //02

//thuat toan modulus
/*const numServer = 3;
const userId1 = 100076;
const userId2 = 100077;
const userId3 = 100078;
const userId4 = 100079;
console.log(userId1 % numServer); //lay so du chinh la Server
console.log(userId2 % numServer); //lay so du chinh la Server
console.log(userId3 % numServer); //lay so du chinh la Server
console.log(userId4 % numServer); //lay so du chinh la Server
*/
