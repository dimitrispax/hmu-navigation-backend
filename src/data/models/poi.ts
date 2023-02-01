export class POI {

    id?: Number
    room_name?: string
    sort_key: string
    description: string
    capacity: Number
    room_admin_mail: string
    room_type: string
    projector: Number
    camera: Number
    is_reservable: Boolean


    constructor(id: Number, room_name: string, sort_key: string, description: string, capacity: Number, room_admin_mail: string, room_type: string, projector: Number, camera: Number, is_reservable: Boolean) {
        this.id = id,
        this.room_name = room_name
        this.sort_key = sort_key
        this.description = description
        this.capacity = capacity
        this.room_admin_mail = room_admin_mail
        this.room_type = room_type
        this.projector = projector
        this.camera = camera
        this.is_reservable = is_reservable
    }
}

