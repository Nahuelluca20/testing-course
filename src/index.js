const cities = ["Mendoza", "San Luis", "San Francisco", "Córdoba"]

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)]
  return string 
}

module.exports = randomString;