let restaurant = {
    name: "ASD",
    guestCap: 120,
    guestCnt: 0,
    checkAvailibilty: function (partySize) {
        if((partySize + this.guestCnt) <= this.guestCap) {
            return true;
        }
        return false;
    },
    seatParty: function(partySize){
        if(this.checkAvailibilty(partySize)) {
            this.guestCnt += partySize;
            return true;
        }
        return false;
    },
    removeParty: function(partySize) {
        if(this.guestCnt >= partySize) {
            this.guestCnt -= partySize;
            return true;
        }
        return false;
    }
};

restaurant.seatParty(100);
restaurant.removeParty(4);
console.log(restaurant.checkAvailibilty(5));