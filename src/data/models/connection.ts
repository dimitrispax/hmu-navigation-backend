export class Connection {

    id?: string
    starting_point: string
    destination_point: string
    is_edge_disabled_accessible: boolean

    constructor(id: string, starting_point: string, destination_point: string, is_edge_disabled_accessible: boolean) {
        this.id = id,
        this.starting_point = starting_point
        this.destination_point = destination_point
        this.is_edge_disabled_accessible = is_edge_disabled_accessible
    }
}

