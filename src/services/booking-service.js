const booking = require("../models/booking");
const axios=require('axios');
const { BookingRepository } = require("../repository/index");

class BookingService {
    constructor(){
        this.bookingRepository=new BookingRepository();
    }

    async createBooking(data){
        try {
            const flightId=data.flightId;
            
        } catch (error) {
            
        }
       

    }
}

module.exports = BookingService;
