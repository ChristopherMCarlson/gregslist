import CarController from "./app/componenets/cars/CarController.js";
import HouseController from "./app/componenets/houses/HouseController.js"
import JobController from "./app/componenets/jobs/JobController.js";

export default class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      houseController: new HouseController(),
      jobController: new JobController()
    }
  }
}

// @ts-ignore
window.app = new App()