export default class ConnectionDTO {

    distance?: number
    starting_point: string
    starting_point_lat: number
    starting_point_lon: number
    destination_point: string
    destination_point_lat: number
    destination_point_lon: number
    is_destination_point_entrace: boolean
    is_edge_disabled_accessible: boolean

    constructor() {
        this.distance = 0
        this.starting_point = ''
        this.starting_point_lat = 0
        this.starting_point_lon = 0
        this.destination_point = ''
        this.destination_point_lat = 0
        this.destination_point_lon = 0
        this.is_destination_point_entrace = false
        this.is_edge_disabled_accessible = false
    }
}

