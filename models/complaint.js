const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  category:    { type: String, required: true },
  priority:    { type: String, enum: ['low','medium','high'], default: 'low' },
  status:      { type: String, enum: ['pending','assigned','in-progress','resolved','reverted','withdrawn'], default: 'pending' },
  revertReason: { type: String }, 
  student:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt:   { type: Date, default: Date.now },
  resolvedAt:  { type: Date }
});

module.exports = mongoose.model('Complaint', complaintSchema);
