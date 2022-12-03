import { Router } from "express";
import { GuestController } from "../controllers/guest.controller.js";

export const guestRouter = Router();

guestRouter.get("/", GuestController.getGuestByPhoneNumberAndAddress);
guestRouter.post("/", GuestController.createGuest);
guestRouter.patch("/:id", GuestController.updateGuest);
guestRouter.delete("/:id", GuestController.deleteGuest);
