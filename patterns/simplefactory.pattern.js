//ung dung Logictics
//factory pattern duoc su dung pho bien nhat trong lap trinh huong doi tuong
//Simple Factory Pattern: su dung phat trien phan mem, hoc cac pattern con lai
//Factory Method Pattern:
//Abstract Factory Pattern:

//lv0: without simple factory pattern

const serviceLogicstics = (cargoVolume) => {
  switch (cargoVolume) {
    case "10":
      return {
        name: "Truck 10",
        doors: 6,
        price: "100.000VND",
      };
    case "20":
      return {
        name: "Truck 20",
        doors: 12,
        price: "1.000.000VND",
      };
  }
};

console.log(`Level 0::`, serviceLogicstics("20"));

//lv1: with simple factory pattern
//neu co them yeu cau phai chinh sua code, vi pham quy tac SOLID

class ServiceLogistics {
  constructor(doors = 6, price = "100.000 VND", name = "Truck 10") {
    this.name = name;
    this.doors = doors;
    this.price = price;
  }

  static getTransport = (cargoVolume) => {
    switch (cargoVolume) {
      case "10":
        return new ServiceLogistics();
      case "20":
        return new ServiceLogistics(16, "1.000.000 VND", "Truck 20");
    }
  };
}

console.log(`Level XXX::`, ServiceLogistics.getTransport("10"));
