export class Room {

    id?: string

    floorId?: string | null

    description: string | null

    usageId: number | null

    manager: string | null

    computer: number | null

    camera: number | null

    projector: number | null

    capacity: number | null

    geodata?: string | null


    constructor(description: string, usageId: number, manager: string, computer: number, camera: number, projector: number, capacity: number) {
        this.description = description
        this.usageId = usageId
        this.manager = manager
        this.computer = computer
        this.camera = camera
        this.projector = projector
        this.capacity = capacity
    }
}

