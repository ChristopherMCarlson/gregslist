import CarService from "./CarService.js";

let carService = new CarService()

function drawCars() {
  let cars = carService.getCars()
  let template = ''

  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    template += `
    <div class="col-sm 3">
      <p>Make: ${car.make}</p>
      <p>Model: ${car.model}</p>
      <p>Year: ${car.year}</p>
      <p>Price: $${car.price}</p>
      <p>Color: ${car.color}</p>
      <img src="${car.imgUrl}" alt="Car Image">
    </div>
    `
  }

  document.getElementById("cars").innerHTML = template


}

export default class CarController {

  constructor() {
    drawCars()
  }

  addCar(triggeredEvent) {
    triggeredEvent.preventDefault()
    let formData = triggeredEvent.target
    carService.addCar(formData)
    formData.reset()
    drawCars()
  }

}