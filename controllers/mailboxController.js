const Mailbox = require('../models/Mailbox');

exports.createMailbox = async (req, res) => {
  try {
    const { email } = req.body;
    console.log('User ID:', req.userId);
    // Crea un nuevo buzón de correo
    const newMailbox = new Mailbox({ user: req.userId, email });
    await newMailbox.save();

    res.status(201).json({ message: 'Mailbox created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Mailbox creation failed' });
  }
};

exports.getMailboxes = async (req, res) => {
  try {
    // Obtén todos los buzones de correo
    const mailboxes = await Mailbox.find();

    res.status(200).json(mailboxes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get mailboxes' });
  }
};

exports.updateMailbox = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    // Busca el buzón de correo por ID y actualiza el email
    const updatedMailbox = await Mailbox.findByIdAndUpdate(id, { email }, { new: true });

    if (!updatedMailbox) {
      return res.status(404).json({ error: 'Mailbox not found' });
    }

    res.status(200).json({ message: 'Mailbox updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update mailbox' });
  }
};

exports.deleteMailbox = async (req, res) => {
  try {
    const { id } = req.params;

    // Busca el buzón de correo por ID y elimínalo
    const deletedMailbox = await Mailbox.findByIdAndDelete(id);

    if (!deletedMailbox) {
      return res.status(404).json({ error: 'Mailbox not found' });
    }

    res.status(200).json({ message: 'Mailbox deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete mailbox' });
  }
};

