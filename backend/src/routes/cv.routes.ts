import { Router, Request, Response, NextFunction } from "express";
import { authMiddleware, requireRole } from "../middleware/auth";
import {
  uploadMiddleware,
  uploadAndParseCV,
  saveParsedProfile,
} from "../controllers/cv.controller";

const router = Router();

/**
 * @route   POST /api/cv/upload
 * @desc    Upload and parse a CV file (PDF/Word)
 * @access  Private (CANDIDAT only)
 */
router.post(
  "/upload",
  authMiddleware,
  requireRole("CANDIDAT"),
  (req: Request, res: Response, next: NextFunction) => {
    uploadMiddleware(req, res, (err: any) => {
      if (err) {
        res.status(400).json({
          success: false,
          message: err.message || "Erreur lors de l'upload du fichier.",
        });
        return;
      }
      next();
    });
  },
  uploadAndParseCV
);

/**
 * @route   POST /api/cv/save-profile
 * @desc    Save the parsed CV data to the candidate profile
 * @access  Private (CANDIDAT only)
 */
router.post(
  "/save-profile",
  authMiddleware,
  requireRole("CANDIDAT"),
  saveParsedProfile
);

/**
 * @route   POST /api/cv/parse
 * @desc    Upload and parse a CV file (public demo route for profile wizard)
 * @access  Public (no JWT required — for onboarding flow)
 * @note    In production, replace with auth-protected route above
 */
router.post(
  "/parse",
  (req: Request, res: Response, next: NextFunction) => {
    uploadMiddleware(req, res, (err: any) => {
      if (err) {
        res.status(400).json({
          success: false,
          message: err.message || "Erreur lors de l'upload du fichier.",
        });
        return;
      }
      next();
    });
  },
  uploadAndParseCV
);

export default router;
