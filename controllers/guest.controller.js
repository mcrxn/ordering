import { GuestService } from "../services/guest.service.js";

export class GuestController {
    // Get Guest by phone number or/and address
    static async getGuestByPhoneNumberAndAddress(req, res) {
        try {

            const phoneNumber = req.query.phoneNumber;
            const address = req.query.address;

            const guest = await GuestService.getGuestByPhoneNumberAndAddress(phoneNumber, address);

            res.status(200).send(guest);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Create Guest
    static async createGuest(req, res) {
        try {
            const guestData = req.body;

            const createdGuest = await GuestService.createGuest(guestData);

            res.status(201).send(createdGuest);
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    // Update Guest

    static async updateGuest(req, res) {
        try {
            const guestId = req.params.guestId;
            const updateData = req.body;

            const updatedGuest = await GuestService.updateGuest(guestId, updateData);

            res.status(200).send(updatedGuest);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    // Delete Guest
    static async deleteGuest(req, res) {
        try {
            const guestId = req.params.guestId;

            await GuestService.deleteGuest(guestId);

            res.sendStatus(204);
        } catch (error) {
            res.status(401).send(error);
        }
    }
}
