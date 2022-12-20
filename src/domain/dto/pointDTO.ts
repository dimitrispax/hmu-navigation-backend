export default class PointDTO {

    id?: string
    latitude: Number
    longitude: Number
    floor_id: string


    constructor() {
        this.id = '',
        this.latitude = 0
        this.longitude = 0
        this.floor_id = ''
    }
}

