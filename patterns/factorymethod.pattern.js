//tao service Car
class Car {
  constructor({
    name = "Ford Ranger 2023",
    doors = 4,
    price = "10 VND",
    customerInfo = {},
  }) {
    this.name = name;
    this.doors = doors;
    this.price = price;
    this.customerInfo = customerInfo;
  }
}

//create service Logistics
class ServiceLogistics {
  transportClass = Car;
  getTransport = (customerInfo) => {
    return new this.transportClass(customerInfo);
  };
}

//order for customer by car
const carService = new ServiceLogistics();
console.log(
  "CarService::",
  carService.getTransport({
    customerInfo: { name: "thaisondev", cargoVolume: "100 kg" },
  })
);

//lam an phat dat nen mo rong them dich vu TruckService
class Truck {
  constructor({
    name = "Container 2023",
    doors = 16,
    price = "1000 VND",
    customerInfo = {},
  }) {
    this.name = name;
    this.doors = doors;
    this.price = price;
    this.customerInfo = customerInfo;
  }
}

//cach thu 1
carService.transportClass = Truck;

console.log(
  "TruckService::",
  carService.getTransport({
    customerInfo: { name: "thaisondev", cargoVolume: "10.000 kg" },
  })
);

//cach thu 2, khoi tao 1 class moi
class TruckService extends ServiceLogistics {
  transportClass = Truck;
}

const truckService = new TruckService();
console.log(
  "TruckService::",
  truckService.getTransport({
    customerInfo: { name: "thaison91", cargoVolume: "100.000 kg" },
  })
);
