let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    return drivers.push("Ralph")
}

function destructivelyPrependDriver(name) {
    return drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(name) {
    return drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
    return drivers.shift()
}

function appendDriver(name) {
    let newDrivers = [...drivers, name]
    return newDrivers
}

function prependDriver(name) {
    let newDrivers = [name, ...drivers]
    return newDrivers
}

function removeLastDriver(name){
    let newDrivers = [... drivers];
    return newDrivers.slice(0, newDrivers.length-1)
}

function removeFirstDriver(name){
    let newDrivers = [...drivers]
    return newDrivers.slice(1, newDrivers.length)
}