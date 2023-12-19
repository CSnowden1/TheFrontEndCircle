const express = require('express');
const router = express.Router();

function checkAccess(req, res, next) {
    const user = req.user;
  
    const hasAccess = user.accessTickets.some(ticket => 
      ticket.isActivated && new Date(ticket.validUntil) > new Date()
    );
  
    if (!hasAccess) {
      return res.status(403).send({ message: "Access denied. No valid ticket found." });
    }
  
    next();
  }
  
  