export default class PointDTO {

    id?: string
    latitude: Number
    longitude: Number
    floor_id: string
    iconType: string
    is_entrance: boolean

    constructor() {
        this.id = '',
        this.latitude = 0
        this.longitude = 0
        this.floor_id = ''
        this.iconType = ''
        this.is_entrance = false
    }
}

