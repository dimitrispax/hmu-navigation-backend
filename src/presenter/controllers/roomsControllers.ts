import { Request, Response, NextFunction } from 'express';
import { Error400 } from '../../config/Errors/models/error400';
import { Error404 } from '../../config/Errors/models/error404';

import { roomDAO } from '../../data/dao/roomDAO';
import roomDTO from '../../domain/dto/roomDTO';
import dtoMapper from '../../domain/utillities/dtoMapper';



/**************************************************************/
/**************************** READ ****************************/
/**************************************************************/

export const getAllRooms = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roomsDAOCalls = new roomDAO();                                        // Calling DAO.
        const allRooms = await roomsDAOCalls.getAll();                              // Get All Rooms from DAO.
        console.log("all rooms: ", allRooms);
        const DTORooms = allRooms.map((room) => dtoMapper(room, new roomDTO()));    // Transforming objects with DTO.

        res.status(200).json({
            message: 'All rooms',
            count: DTORooms.length,
            rooms: DTORooms
        })
    } catch (err) {
        console.log("ERROR")
        return next(err)
    }
}

export const getRoomByID = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roomID = req.params.roomID;

        const roomsDAOCalls = new roomDAO();                                        // Calling DAO.
        const room = await roomsDAOCalls.getById(roomID);                           // Get room by ID from DAO.

        if (!room) { throw new Error404(`Room with id ${roomID} was not found.`, null) }

        const DTORoom = dtoMapper(room, new roomDTO());                             // Transforming objects with DTO.

        res.status(200).json({
            found: true,
            room: DTORoom
        })
    }
    catch (err) {
        console.log("ERROR")
        return next(err)
    }
}

export const getRoomsByDescription = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roomDescription = req.params.roomDescription;

        const roomsDAOCalls = new roomDAO();                                        // Calling DAO.
        const room = await roomsDAOCalls.getRoomsByDescription(roomDescription);    // Get room by description from DAO.

        if (room?.length === 0) { throw new Error404(`Room with description ${roomDescription} was not found.`, null) }
        const DTORooms = room.map((room) => dtoMapper(room, new roomDTO()));        // Transforming objects with DTO.

        res.status(200).json({
            message: `Room with description ${roomDescription} found`,
            room: DTORooms
        })
    }
    catch (err) {
        console.log("ERROR")
        return next(err)
    }
}

export const getRoomsByCamera = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roomCamera = parseInt(req.params.roomCamera);
        if (isNaN(roomCamera)) { throw new Error400('camera field must be a number', null) }

        const roomsDAOCalls = new roomDAO();                                        // Calling DAO.
        const rooms = await roomsDAOCalls.getRoomsByCamera(roomCamera);             // Get room by camera from DAO.

        if (rooms?.length === 0) { throw new Error404(`There are not rooms that contain a camera.`, null) }
        const DTORooms = rooms.map((room) => dtoMapper(room, new roomDTO()));        // Transforming objects with DTO.

        res.status(200).json({
            message: `Rooms with camera`,
            count: DTORooms.length,
            rooms: DTORooms
        })
    }
    catch (err) {
        console.log("ERROR")
        return next(err)
    }
}


export const getRoomsByProjector = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roomProjector = parseInt(req.params.roomProjector);
        if (isNaN(roomProjector)) { throw new Error400('projector field must be a number', null) }

        const roomsDAOCalls = new roomDAO();                                         // Calling DAO.
        const rooms = await roomsDAOCalls.getRoomsByProjector(roomProjector);        // Get room by projector from DAO.

        if (rooms?.length === 0) { throw new Error404(`There are not rooms that contain a projector.`, null) }
        const DTORooms = rooms.map((room) => dtoMapper(room, new roomDTO()));        // Transforming objects with DTO.

        res.status(200).json({
            message: `Rooms with projector`,
            count: DTORooms.length,
            rooms: DTORooms
        })
    }
    catch (err) {
        console.log("ERROR")
        return next(err)
    }
}


export const getRoomsByManager = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roomManager = req.params.roomManager;

        const roomsDAOCalls = new roomDAO();                                        // Calling DAO.
        const rooms = await roomsDAOCalls.getRoomsByManager(roomManager);            // Get room by manager from DAO.

        if (rooms?.length === 0) { throw new Error404(`There is no room managed by ${roomManager}.`, null) }
        const DTORooms = rooms.map((room) => dtoMapper(room, new roomDTO()));        // Transforming objects with DTO.

        res.status(200).json({
            message: `Rooms managed by ${roomManager}.`,
            count: DTORooms.length,
            room: DTORooms
        })
    }
    catch (err) {
        console.log("ERROR")
        return next(err)
    }
}

export const getRoomsByFloor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roomFloor = req.params.roomFloor;
        console.log('Room: ', roomFloor);
        const roomsDAOCalls = new roomDAO();                                         // Calling DAO.
        const rooms = await roomsDAOCalls.getRoomsByFloor(roomFloor);                // Get room by floor from DAO.

        if (rooms?.length === 0) { throw new Error404(`There is no room at floor ${roomFloor}.`, null) }
        const DTORooms = rooms.map((room) => dtoMapper(room, new roomDTO()));        // Transforming objects with DTO.

        res.status(200).json({
            message: `Rooms at ${roomFloor} floor.`,
            count: DTORooms.length,
            room: DTORooms
        })
    }
    catch (err) {
        console.log("ERROR")
        return next(err)
    }
}

export const getRoomsByUsage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roomUsageID = parseInt(req.params.roomUsageID);

        if (isNaN(roomUsageID)) { throw new Error400('usageId field must be a number', null) }

        const roomsDAOCalls = new roomDAO();                                         // Calling DAO.
        const rooms = await roomsDAOCalls.getRoomsByUsage(roomUsageID);              // Get room by usage from DAO.

        if (rooms?.length === 0) { throw new Error404(`There are not rooms that have ${roomUsageID} usage.`, null) }
        const DTORooms = rooms.map((room) => dtoMapper(room, new roomDTO()));        // Transforming objects with DTO.

        res.status(200).json({
            message: `Rooms with ${roomUsageID} usage.`,
            count: DTORooms.length,
            rooms: DTORooms
        })
    }
    catch (err) {
        console.log("ERROR")
        return next(err)
    }
}

export const getRoomsByCapacity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roomCapacity = parseInt(req.params.roomCapacity);

        if (isNaN(roomCapacity)) { throw new Error400('capacity field must be a number', null) }

        const roomsDAOCalls = new roomDAO();                                         // Calling DAO.
        const rooms = await roomsDAOCalls.getRoomsByCapacity(roomCapacity);          // Get room by usage from DAO.

        if (rooms?.length === 0) { throw new Error404(`There are not rooms that have more than ${roomCapacity} person capacity.`, null) }
        const DTORooms = rooms.map((room) => dtoMapper(room, new roomDTO()));        // Transforming objects with DTO.

        res.status(200).json({
            message: `Rooms with more than ${roomCapacity} person capacity.`,
            count: DTORooms.length,
            rooms: DTORooms
        })
    }
    catch (err) {
        console.log("ERROR")
        return next(err)
    }
}


/**************************************************************/
/*************************** UPDATE ***************************/
/**************************************************************/

export const updateRoom = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roomID = req.params.roomID
        console.log("BUT MY BODY IS TELLING ME: ", req.body.camera)
        const { description, usageId, manager, computer, camera, projector, capacity } = req.body

        console.log("test: ", !camera);

        /* Handling if user leaves an input field empty */
        if (!description) { throw new Error400("No 'description' given.", null) }
        if (!manager) { throw new Error400("No 'manager' given.", null) }
        if (!usageId) { throw new Error400("No 'usageId' given.", null) }
        if (!capacity) { throw new Error400("No 'capacity' given.", null) }

        /* Handling if user gives wrong input */
        if (isNaN(usageId)) { throw new Error400('UsageID must be a number.', null) }
        if (isNaN(capacity)) { throw new Error400('Capacity must be a number.', null) }
        if (computer !== 0 && computer !== 1) { throw new Error400('Computer must be a boolean (0 or 1).', null) }
        if (camera !== 0 && computer !== 1) { throw new Error400('Camera must be a boolean (0 or 1).', null) }
        if (projector !== 0 && projector !== 1) { throw new Error400('Projector must be a boolean (0 or 1).', null) }


        /* Checking if the user given exists */
        const roomsDAOCalls = new roomDAO();                                                                               // Calling DAO.
        const room = await roomsDAOCalls.getById(roomID);                                                                  // Get room by usage from DAO
        if (!room) { throw new Error404(`Room with id ${roomID} does not exist`, null) }

        /* Updating room data */
        const updatedRoom = await roomsDAOCalls.update(roomID, { description, usageId, manager, computer, camera, projector, capacity })

        const DTORoom = dtoMapper(room, new roomDTO());                                                                   // Transforming object with DTO.

        res.status(201).json({
            message: `Room with id ${roomID} was updated.`,
            room: DTORoom
        })
    }
    catch (err) {
        console.log("ERROR")
        return next(err)
    }
}


