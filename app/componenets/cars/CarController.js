import CarService from "./CarService.js";

let carService = new CarService()

function drawCars(cars) {
  let template = ''
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    template += `
    <div class="col-sm-3">
      <p>Make: ${car.make}</p>
      <p>Model: ${car.model}</p>
      <p>Year: ${car.year}</p>
      <p>Price: $${car.price}</p>
      <p>Desc: ${car.description}</p>
      <img src="${car.imgUrl}" alt="Car Image" class="img-fluid">
    </div>
    `
  }

  document.getElementById("cars").innerHTML = template


}

export default class CarController {

  constructor() {
    carService.getCars(drawCars)
  }

  addCar(e) {
    e.preventDefault()
    let formData = e.target
    carService.addCar(formData, drawCars)
    formData.reset()
  }

}