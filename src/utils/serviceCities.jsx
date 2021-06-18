const cities = [
    { city:"Caracas", country: "Venezuela", countryCode: "VE"},
    { city:"Buenos Aires", country: "Argentina", countryCode: "AR"},
    { city:"Bogota", country: "Colombia", countryCode: "CO"},
    { city:"Madrid", country: "España", countryCode: "ES"},
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(c => c.countryCode === countryCode)[0].country
    )