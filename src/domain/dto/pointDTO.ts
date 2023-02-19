export default class PointDTO {

    id?: string
    latitude: Number
    longitude: Number
    floor_id: string
    iconType: string
    isEntrance: boolean

    constructor() {
        this.id = '',
        this.latitude = 0
        this.longitude = 0
        this.floor_id = ''
        this.iconType = ''
        this.isEntrance = false
    }
}

