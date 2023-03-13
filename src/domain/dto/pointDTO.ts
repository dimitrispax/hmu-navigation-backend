export default class PointDTO {

    id?: string
    latitude: Number
    longitude: Number
    floor_id: string
    icon_type: string
    is_entrance: boolean

    constructor() {
        this.id = '',
        this.latitude = 0
        this.longitude = 0
        this.floor_id = ''
        this.icon_type = ''
        this.is_entrance = false
    }
}

