import House from '../../models/House.js'

let houses = []

export default class HouseService {
  constructor() {

  }

  getHouses() {
    let housesCopy = []

    houses.forEach(house => {
      housesCopy.push(new House(
        house.address,
        house.sqFt,
        house.rooms,
        house.bath,
        house.price,
        house.imgUrl
      ))
    })
    return housesCopy
  }

  addHouse(formData) {
    let newHouse = new House(
      formData.address.value,
      formData.sqFt.value,
      formData.rooms.value,
      formData.bath.value,
      formData.price.value,
      formData.imgUrl.value
    )
    houses.push(newHouse)
  }
}