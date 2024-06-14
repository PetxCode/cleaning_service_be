"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agentController_1 = require("../controller/agentController");
const multer_1 = require("../utils/multer");
const router = (0, express_1.Router)();
router.route("/all-agent").get(agentController_1.viewAllAgent);
router.route("/agent/:agentID").get(agentController_1.viewSingleAgent);
router.route("/verify-agent/:agentID").get(agentController_1.verifyAgent);
router.route("/create-agent").post(agentController_1.createAgent);
router.route("/signin-agent").post(agentController_1.signinAgent);
router.route("/update-agent-avatar/:agentID").patch(multer_1.upload, agentController_1.uploadAgentAvatar);
exports.default = router;