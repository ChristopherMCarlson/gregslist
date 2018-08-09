import Car from "../../models/Car.js";

let cars = []


export default class CarService {
  constructor() {

  }

  getCars() {
    let carsCopy = []

    cars.forEach(car => {
      carsCopy.push(new Car(
        car.make,
        car.model,
        car.year,
        car.price,
        car.color,
        car.imgUrl
      ))
    })
    return carsCopy
  }

  addCar(formData) {
    let newCar = new Car(
      formData.make.value,
      formData.model.value,
      formData.year.value,
      formData.price.value,
      formData.color.value,
      formData.imgUrl.value
    )
    cars.push(newCar)
    console.log(cars)


  }
}