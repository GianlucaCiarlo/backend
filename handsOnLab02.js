//definicion de clase ticketmanager, el cual tendra un arreglo de evenotos que iniciarara vacio
// la calse debe contar con una variable privada "gain", que sera la ganancia de un ticket(15%)
// debe contar con el metodo "getevents" que mostrara los eventos guardados

class TicketManager{
    #gain
    constructor(datos) {
        this.events = []
        this.#gain = 0.15
    }
    getEvents() {
        console.log(this.events)
        return this.events
    }
    addEvent({ name, place, price, capacity, date }) {
        capacity = capacity ?? 50
        date = date ?? new date()
        let id = 1
        if (this.events.length === 0) {
            id= 1
        } else {
            //buscarl el ultimo evento del array
            let lastEvents =this.events[this.events.length-1]// el ultimo elemento tiene indice igual a la longitud del array -1
            // hallar la clave id de ese elemento
            lastEvents.id + 1
            // y a ese id recien ahi sumarle 1
        }

        price = price + this.#gain * price
        

        let event={name,place,price,capacity,date, id, participants: []}
        this.events.push(event)
    }

}


let ticket = new TicketManager()
ticket.getEvents()
// console.log(ticket.gain)
ticket.addEvent({ name: "alice in borderland", place: "korea", price: 5, capacity: 1000, date: new Date("05/20/2023") })
ticket.addEvent({ name: "hp", place: "arg", price: 5, capacity: 1000, date: new Date("05/20/2023") })
ticket.addEvent({name:"pokemon",place:"japon",price:5 ,capacity: 1000,date: new Date("05/20/2023")})
ticket.getEvents()

