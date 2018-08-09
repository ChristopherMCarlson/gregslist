import HouseService from "./HouseService.js"

let houseService = new HouseService

function drawHouses() {
  let houses = houseService.getHouses()
  let template = ''

  for (let i = 0; i < houses.length; i++) {
    const house = houses[i];
    template += `
    <div class="col-sm 3">
      <p>Address: ${house.address}</p>
      <p>Sq Feet: ${house.sqFt}</p>
      <p>Rooms: ${house.rooms}</p>
      <p>Baths: ${house.bath}</p>
      <p>Price: $${house.price}</p>
      <img src="${house.imgUrl}" alt="House Image">
    </div>
    `
  }

  document.getElementById("houses").innerHTML = template


}

export default class HouseController {
  constructor() {
    drawHouses()
  }

  addHouse(triggeredEvent) {
    triggeredEvent.preventDefault()
    let formData = triggeredEvent.target
    houseService.addHouse(formData)
    formData.reset()
    drawHouses()
  }
}