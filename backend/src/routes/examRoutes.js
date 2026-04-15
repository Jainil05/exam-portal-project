const express = require('express');
const router = express.Router();
const { createExam, getAllExams, getExamById, getExamForResult, updateExam, deleteExam } = require('../controllers/examController');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);
router.post('/', authorize('teacher', 'admin'), createExam);
router.get('/', getAllExams);
router.get('/:id/review', getExamForResult); // for result review - includes correctAnswer
router.get('/:id', getExamById);             // for active exam - hides correctAnswer from students
router.put('/:id', authorize('teacher', 'admin'), updateExam);
router.delete('/:id', authorize('teacher', 'admin'), deleteExam);

module.exports = router;
