import express from "express"
import { generateUrl } from "../Controllers/UrlGenerationController.js"

const router = express.Router();
router.post("/:port", generateUrl)

export default router;