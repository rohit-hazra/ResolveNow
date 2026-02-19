const express = require('express');
const router = express.Router();
const Complaint = require('../models/complaint');
const { protect, authorize } = require('../middleware/authmiddleware');

// Create complaint (student)
router.post('/', protect, authorize('student'), async (req, res) => {
  try {
    const { priority } = req.body;

    let slaHours = 72;
    if (priority === 'high') slaHours = 24;
    else if (priority === 'medium') slaHours = 48;

    const slaDeadline = new Date(Date.now() + slaHours * 60 * 60 * 1000);

    const complaint = await Complaint.create({
      ...req.body,
      student: req.user._id,
      slaDeadline
    });

    res.status(201).json(complaint);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Edit complaint (student - only if pending)
router.put('/edit/:id', protect, authorize('student'), async (req, res) => {
  try {
    const complaint = await Complaint.findOne({
      _id: req.params.id,
      student: req.user._id
    });

    if (!complaint)
      return res.status(404).json({ message: "Complaint not found" });

    if (complaint.status !== "pending")
      return res.status(403).json({ message: "Complaint cannot be edited now" });

    Object.assign(complaint, req.body);
    await complaint.save();

    res.json({ message: "Complaint updated successfully", complaint });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Withdraw complaint (student - only if pending) - Now sets to "withdrawn"
router.delete('/:id', protect, authorize('student'), async (req, res) => {
  try {
    const complaint = await Complaint.findOne({
      _id: req.params.id,
      student: req.user._id
    });

    if (!complaint)
      return res.status(404).json({ message: "Complaint not found" });

    if (complaint.status !== "pending")
      return res.status(403).json({ message: "Complaint cannot be withdrawn now" });

    complaint.status = "withdrawn";  // Changed from "rejected"
    await complaint.save();

    res.json({ message: "Complaint withdrawn successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all complaints (Admin / Coordinator)
router.get('/', protect, authorize('coordinator', 'admin'), async (req, res) => {
  try {
    const complaints = await Complaint.find().populate('student', 'fullName email');
    res.json(complaints);
    // console.log("GET /api/complaints HIT by user:", req.user?.email, req.user?.role);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get student complaints
router.get('/my', protect, authorize('student'), async (req, res) => {
  try {
    const complaints = await Complaint.find({ student: req.user._id });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update complaint (Coordinator/Admin)
router.put('/:id', protect, authorize('coordinator', 'admin'), async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(complaint);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;