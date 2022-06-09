
const getAllStores = () => {
  fetch("https://www.cheapshark.com/api/1.0/stores").then(response => {
    return response.json()
  })
  .then(data => console.log(data))
}