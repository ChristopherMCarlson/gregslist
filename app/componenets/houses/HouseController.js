import HouseService from "./HouseService.js"

let houseService = new HouseService

function drawHouses(houses) {
  let template = ''
  for (let i = 0; i < houses.length; i++) {
    const house = houses[i];
    template += `
    <div class="col-sm-3">
      <p>Bedrooms: ${house.bedrooms}</p>
      <p>Bathrooms: ${house.bathrooms}</p>
      <img src="${house.imgUrl}" alt="House Image" class="img-fluid">
      <p>Levels: ${house.levels}</p>
      <p>Year: ${house.year}</p>
      <p>Price: $${house.price}</p>
    </div>
    `
  }

  document.getElementById("houses").innerHTML = template


}

export default class HouseController {
  constructor() {
    houseService.getHouses(drawHouses)
  }

  addHouse(e) {
    e.preventDefault()
    let formData = e.target
    houseService.addHouse(formData, drawHouses)
    formData.reset()
  }
}