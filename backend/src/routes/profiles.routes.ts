import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { createPublicProfile, listPublicProfiles } from "../controllers/profiles.controller";

const router = Router();

/**
 * @route   POST /api/profiles
 * @desc    Create a candidate profile
 * @access  Private (JWT required)
 */
router.post("/", authMiddleware, createPublicProfile);

/**
 * @route   GET /api/profiles
 * @desc    List candidates with optional filters (public, in-memory for MVP)
 * @query   skills, availability, location, search, minExperience, maxExperience
 */
router.get("/", listPublicProfiles);

export default router;
