import { sendJsonResponse } from '../helper/helper';

function createRoom(req, res, next) {
  const { idAccount, idResidence } = req.params;
  const { description } = req.body;
  if(!idAccount) {
    sendJsonResponse(res, 400, {
      'Message': 'Account Id is required!'
    });
    return;
  }
  else if(!idResidence) {
    sendJsonResponse(res, 400, {
      'Message': 'Residence Id is required!'
    });
    return;
  }
  else if(!description) {
    sendJsonResponse(res, 400, {
      'Message': 'Field description is required!'
    });
    return;
  }
  else {
    next();
  }
}

function returnRooms(req, res, next) {
  const { idAccount, idResidence } = req.params;
  if(!idAccount) {
    sendJsonResponse(res, 400, {
      'Message': 'Account Id is required!'
    });
    return;
  }
  else if(!idResidence) {
    sendJsonResponse(res, 400, {
      'Message': 'Residence Id is required!'
    });
    return;
  }
  else {
    next();
  }
}

function returnAndDeleteRoomById(req, res, next) {
  const { idAccount, idResidence, idRoom } = req.params;
  if(!idAccount) {
    sendJsonResponse(res, 400, {
      'Message': 'Account Id is required!'
    });
    return;
  }
  else if(!idResidence) {
    sendJsonResponse(res, 400, {
      'Message': 'Residence Id is required!'
    });
    return;
  }
  else if(!idRoom) {
    sendJsonResponse(res, 400, {
      'Message': 'Room Id is required!'
    });
    return;
  }
  else {
    next();
  }
}

function updateRoomById(req, res, next) {
  const { idAccount, idResidence, idRoom } = req.params;
  const { description } = req.body;
  if(!idAccount) {
    sendJsonResponse(res, 400, {
      'Message': 'Account Id is required!'
    });
    return;
  }
  else if(!idResidence) {
    sendJsonResponse(res, 400, {
      'Message': 'Residence Id is required!'
    });
    return;
  }
  else if(!idRoom) {
    sendJsonResponse(res, 400, {
      'Message': 'Room Id is required!'
    });
    return;
  }
  else if(!description) {
    sendJsonResponse(res, 400, {
      'Message': 'Field description is required!'
    });
    return;
  }
  else {
    next();
  }
}

export {
  createRoom,
  returnRooms,
  returnAndDeleteRoomById,
  updateRoomById
}