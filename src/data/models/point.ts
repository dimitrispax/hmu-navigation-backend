export class Point {

    id?: string
    latitude: Number
    longitude: Number
    geometry: Number
    floor_id: string
    iconType: string
    isEntrance: boolean



    constructor(id: string, latitude: Number, longitude: Number, geometry: Number, floor_id: string, iconType: string, isEntrance: boolean) {
        this.id = id,
        this.latitude = latitude
        this.longitude = longitude
        this.geometry = geometry
        this.floor_id = floor_id
        this.iconType = iconType
        this.isEntrance = isEntrance
    }
}

