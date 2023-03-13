export class Point {

    id?: string
    latitude: Number
    longitude: Number
    geometry: Number
    floor_id: string
    icon_type: string
    is_entrance: boolean



    constructor(id: string, latitude: Number, longitude: Number, geometry: Number, floor_id: string, icon_type: string, is_entrance: boolean) {
        this.id = id,
            this.latitude = latitude
        this.longitude = longitude
        this.geometry = geometry
        this.floor_id = floor_id
        this.icon_type = icon_type
        this.is_entrance = is_entrance
    }
}

