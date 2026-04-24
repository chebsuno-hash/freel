import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { searchCandidates, getCandidateDetail } from "../controllers/search.controller";

const router = Router();

/**
 * @route   GET /api/search/candidates
 * @desc    Search candidates with filters
 * @access  Public (for MVP demo — add authMiddleware in production)
 */
router.get("/candidates", searchCandidates);

/**
 * @route   GET /api/search/candidates/:id
 * @desc    Get detailed candidate profile
 * @access  Private (JWT required)
 */
router.get("/candidates/:id", authMiddleware, getCandidateDetail);

export default router;

