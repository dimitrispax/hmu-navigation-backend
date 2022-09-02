
export default class roomDTO {
    id: string

    floorId: string

    description: string

    usageId: number

    manager: string

    computer: number

    camera: number

    projector: number

    capacity: number

    geodata: string

    constructor() {
        this.id = ""
        this.floorId = ""
        this.description = ""
        this.usageId = 0
        this.manager = ""
        this.computer = 0
        this.camera = 0
        this.projector = 0
        this.capacity = 0
        this.geodata = ""
    }
}