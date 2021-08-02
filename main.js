

// first class increase event handler 
document.getElementById('first-class-increase-btn').addEventListener('click', function () {
    firstClassIncrease();
})


// first class decrease event handler 
document.getElementById('first-class-decrease-btn').addEventListener('click', function () {
    firstClassDecrease();
})

//economic increase event handler
document.getElementById('economic-increase-btn').addEventListener('click', function () {
    economicIncrease();
})
//economic decrease event handler
document.getElementById('economic-decrease-btn').addEventListener('click', function () {
    economicDecrease();
})

//booking info
document.getElementById('book-now').addEventListener('click', function () {
    bookingInfo();
})


// function getInput(){
//     const ticketCount = document.getElementById('first-class-ticket-count').value;
//     const ticketCountNumber = parseInt(ticketCount) + 1;
//     document.getElementById('first-class-ticket-count').value = ticketCountNumber;
//     return ticketCountNumber;
// }




function firstClassIncrease() {

    const ticketCount = document.getElementById('first-class-ticket-count').value;
    const ticketCountNumber = parseInt(ticketCount) + 1;
    document.getElementById('first-class-ticket-count').value = ticketCountNumber;
    updatePrice();
    return ticketCount;
}


function firstClassDecrease() {

    const ticketCount = document.getElementById('first-class-ticket-count').value;
    const ticketCountNumber = parseInt(ticketCount) - 1;
    document.getElementById('first-class-ticket-count').value = ticketCountNumber;
    updatePrice();
    
}


// function handleTicketChange(isIncrease){
//     const ticketCount = document.getElementById('first-class-ticket-count').value;
//     // const ticketCountNumber = parseInt(ticketCount) + 1;
//     let ticketCountNumber = parseInt(ticketCount);
//     if(isIncrease == true){
//         ticketCountNumber = parseInt(ticketCount) + 1;
//     }
//     if(isIncrease == false){
//         ticketCountNumber = parseInt(ticketCount) - 1;
//     }
//     document.getElementById('first-class-ticket-count').value = ticketCountNumber;
//     updatePrice();
// }

function economicIncrease() {

    const economicTicket = document.getElementById('economic-ticket-count').value;
    const economicTicketNumber = parseInt(economicTicket) + 1;
    document.getElementById('economic-ticket-count').value = economicTicketNumber;
    updatePrice();
    return economicTicket;
}


function economicDecrease() {
    const economicTicketDecrease = document.getElementById('economic-ticket-count').value;
    const economicTicketNumber = parseInt(economicTicketDecrease) - 1;
    document.getElementById('economic-ticket-count').value = economicTicketNumber;
    updatePrice();

}


function updatePrice() {
    const firstClassTicket = document.getElementById('first-class-ticket-count').value;
    const economicTicket = document.getElementById('economic-ticket-count').value;
    const subTotal = parseInt(firstClassTicket) * 150 + parseInt(economicTicket) * 100;
    document.getElementById('subtotal').innerText = subTotal;
    const vat = (subTotal / 100 * 10).toFixed(2);
    document.getElementById('vat').innerText = vat;
    const total = parseFloat(vat) + subTotal;
    document.getElementById('total').innerText = total;
    return total;
}

function bookingInfo() {
    document.getElementById('main-section').style.display = 'none';
    document.getElementById('header').style.display = '100vh';
    document.getElementById('booking-info').style.display = 'block';
    const purchaseEconomic = economicIncrease();
    const purchaseFirstClass = firstClassIncrease();
    const ticketTotal = updatePrice();
    document.getElementById('purchase-first-class').innerText = purchaseFirstClass;
    document.getElementById('purchase-economic').innerText = purchaseEconomic;
    document.getElementById('ticket-total').innerText = ticketTotal;
}

