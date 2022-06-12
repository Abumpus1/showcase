
export const getAllStores = () => {
  return fetch("https://www.cheapshark.com/api/1.0/stores").then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
}

export const getStoreDeals = (storeID) => {
  return fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}&pageSize=5`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
}

export const getDeals = (params) => {
  return fetch(`https://www.cheapshark.com/api/1.0/deals?${params}pageSize=5`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
}