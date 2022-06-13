export const cleanGames = (games) => {
  return games.map(game => {

    let { dealID, normalPrice, salePrice, savings, thumb, title, storeID } = game
    let cleanedGame = {
      dealID, 
      normalPrice, 
      salePrice, 
      savings, 
      thumb, 
      title, 
      storeID
    }

    return cleanedGame
  })
}

export const cleanDashGames = (games) => {
  return games.map(game => {

    let { dealID, normalPrice, salePrice, title } = game
    let cleanedGame = {
      dealID, 
      normalPrice, 
      salePrice, 
      title, 
    }

    return cleanedGame
  })
}