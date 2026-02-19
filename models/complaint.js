const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  category:    { type: String, required: true },
  priority:    { type: String, enum: ['low','medium','high'], default: 'low' },
  status:      { type: String, enum: ['pending','assigned','in-progress','resolved','rejected','withdrawn'], default: 'pending' },
  
  student:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt:   { type: Date, default: Date.now },
  resolvedAt:  { type: Date } // Added resolved/completion time
});

module.exports = mongoose.model('Complaint', complaintSchema);
