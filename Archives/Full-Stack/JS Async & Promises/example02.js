const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  const data = await response.json()
  return data.imageUrl
}