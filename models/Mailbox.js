const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mailboxSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  email: { type: String, required: true },
  // Otros campos necesarios para tu aplicación
});

module.exports = mongoose.model('Mailbox', mailboxSchema);
