export class Room {

    id?: string

    floorId: string

    description: string

    usageId: number

    manager: string

    computer: number

    projector: number

    capacity: number

    geodata: string

    constructor(floorId: string, description: string, usageId: number, manager: string, computer: number, projector: number, capacity: number, geodata: string) {
        this.floorId = floorId,
            this.description = description,
            this.usageId = usageId,
            this.manager = manager,
            this.computer = computer,
            this.projector = projector,
            this.capacity = capacity,
            this.geodata = geodata
    }
}