const Reservation = require('../models/Reservation');
const Room = require('../models/Room');

exports.createReservation = async (req, res) => {
  const { guestName, roomNumber, checkInDate, checkOutDate } = req.body;
  
  try {
    const room = await Room.findOne({ number: roomNumber });
    
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    
    const newReservation = new Reservation({ guestName, room: room._id, checkInDate, checkOutDate });
    
    await newReservation.save();
    
    room.status = 'reserved';
    await room.save();
    
    res.status(201).json({ message: 'Reservation created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating reservation', error });
  }
};
