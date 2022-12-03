import { Guest } from "../models/guest.model.js";

export class GuestService {
    // Get Guest by phone number or/and address
    static async getGuestByPhoneNumberAndAddress(phoneNumber, address) {
        try {
            const guest = await Guest.find({ phoneNumber, address }).populate("orders").populate("products");

            return guest;
        } catch (error) {
            throw error;
        }
    }

    // Create Guest
    static async createGuest(guestData) {
        try {
            const guest = new Guest({ ...guestData });

            const createdGuest = await guest.save();

            return createdGuest;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    // Update Guest
    static async updateGuest(guestId, updateData) {
        try {
            const guest = await Guest.findById(guestId);

            if (!guest) throw "Guest not found";

            const allowedUpdates = ["phoneNumber", "address"];

            const updateKeys = Object.keys(updateData);

            updateKeys.forEach((key) => {
                if (allowedUpdates.includes(key)) {
                    guest[key] = updateData[key];
                }
            });

            const updatedGuest = await guest.save();

            return updatedGuest;
        } catch (error) {
            throw error;
        }
    }

    // Delete Guest
    static async deleteGuest(guestId) {
        try {
            const deletedGuest = await Guest.findByIdAndDelete(guestId);

            if (!deletedGuest) throw "Guest not found";
        } catch (error) {
            throw error;
        }
    }
}
