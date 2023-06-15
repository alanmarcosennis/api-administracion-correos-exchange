const express = require('express');
const mailboxController = require('../controllers/mailboxController');


const router = express.Router();

// Ruta de creación de un buzón de correo
router.post('/create', mailboxController.createMailbox);

// Ruta de obtención de buzones de correo
router.get('/list', mailboxController.getMailboxes);

// Ruta de actualización de un buzón de correo
router.put('/update/:id', mailboxController.updateMailbox);

// Ruta de eliminación de un buzón de correo
router.delete('/delete/:id', mailboxController.deleteMailbox);

module.exports = router;
