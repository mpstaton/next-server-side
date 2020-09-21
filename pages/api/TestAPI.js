const data = {
    name: 'Jhon Doe',
    address: '7th Avenue, Brooklyn',
    contact: '099251456',
    bloodgroup: 'A +ve',
    favouriteSnack: 'Hotdog',
    vehicle: 'Hyundai Tucson'
  }
export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
}