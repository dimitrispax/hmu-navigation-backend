export const filterNotReservableRooms = async (getAllRoomsData: any, getAllReservableRoomsData: any) => {
    const roomsData = await getAllRoomsData();
    const roomsReserveData = await getAllReservableRoomsData();

    let notReservableRoomsData = roomsData.filter((room: any) => !roomsReserveData.some((reservableRoom: any) => room.id === reservableRoom.sort_key));

    notReservableRoomsData = notReservableRoomsData.filter((room: any) => !room.id.includes('Κ38') && !room.id.includes('Κ37') && !room.id.includes('Κ28') && !room.id.includes('Κ39') && !room.id.includes('Κ40') && room.id.split('.')[2] !== '00');

    const RoomsDataWithNotReservableField = notReservableRoomsData.map((room: any) => {
        return ({ id: room.id, description: room.description, sort_key: room.id, is_reservable: false })
    })

    const AreaIDsArray = [...new Set(roomsReserveData.map((reservableRoom: any) => reservableRoom.area_id))];
    return { RoomsDataWithNotReservableField, roomsReserveData, AreaIDsArray };
}