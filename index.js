let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0
class Driver{
  constructor(name){
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers(){
    return this.trips().map(trip => {
      return trip.passenger()
    })
  }
}

class Passenger{
  constructor(name){
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(trip=>{
      return trip.passengerId === this.id
    })
  }

  drivers(){
    return this.trips().map(trip=>{
      return trip.driver()
    })
  }
}

class Trip{
  constructor(driver,passenger){
    this.id = ++tripId
    store.trips.push(this)
    if(driver){
      this.driverId = driver.id
    }
    if(passenger){
      this.passengerId = passenger.id
    }
  }

  driver(){
    return store.drivers.filter(driver => {
      return driver.id === this.driverId
    })[0]
  }

  passenger(){
    return store.passengers.filter(passenger => {
      return passenger.id === this.passengerId
    })[0]
  }
}
