import { Router } from "express";
import { createPublicProfile, listPublicProfiles } from "../controllers/profiles.controller";

const router = Router();

/**
 * @route   POST /api/profiles
 * @desc    Create a candidate profile (public, in-memory for MVP)
 */
router.post("/", createPublicProfile);

/**
 * @route   GET /api/profiles
 * @desc    List candidates with optional filters (public, in-memory for MVP)
 * @query   skills, availability, location, search, minExperience, maxExperience
 */
router.get("/", listPublicProfiles);

export default router;
