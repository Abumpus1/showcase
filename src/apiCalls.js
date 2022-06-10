
export const getAllStores = () => {
  return fetch("https://www.cheapshark.com/api/1.0/stores").then(response => {
    return response.json()
  })
}

export const getStoreDeals = (storeID) => {
  return fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}&pageSize=5`).then(response => {
    return response.json()
  })
}