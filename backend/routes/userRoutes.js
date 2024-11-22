import express from "express"
import {
    addField, 
    getAllLostAndFound
} from "../controllers/lostAndFound.controller.js"


const router = express.Router()

router.route("/getAllLostAndFound").get(getAllLostAndFound)
router.route("/add").post(addField)

export default router