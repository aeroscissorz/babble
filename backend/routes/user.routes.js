import express from 'express'; // Import the express package
import { getUsersForSidebar } from '../controllers/user.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router(); // Create a new router

router.get("/",protectRoute, getUsersForSidebar);

export default router; // Export the router