export class Connection {

    id?: string
    starting_point: string
    destination_point: string


    constructor(id: string, starting_point: string, destination_point: string) {
        this.id = id,
        this.starting_point = starting_point
        this.destination_point = destination_point
    }
}

