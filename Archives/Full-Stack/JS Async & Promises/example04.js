async function fetchCatAvatars(userId) {
  const response = await fetch(`http://catappapi.herokuapp.com/users/${userId}`)
  const user = await response.json()
  const catImageUrls = []
  for (const catId of user.cats) {
    const response = await fetch(`http://catappapi.herokuapp.com/cats/${catId}`)
    const catData = await response.json() 
    catImageUrls.push(catData.imageUrl)
  }
  return catImageUrls
}