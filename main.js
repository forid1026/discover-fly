
// first class increase event handler 
document.getElementById('first-class-increase-btn').addEventListener('click', function () {
    handleFirstClassChange(true)
})


// first class decrease event handler 
document.getElementById('first-class-decrease-btn').addEventListener('click', function () {
    handleFirstClassChange(false)
})


//economic increase event handler
document.getElementById('economic-increase-btn').addEventListener('click', function () {
    // economicIncrease();
    handleEconomicChange(true);
})


//economic decrease event handler
document.getElementById('economic-decrease-btn').addEventListener('click', function () {
    handleEconomicChange(false);
})


//booking info
document.getElementById('book-now').addEventListener('click', function () {
    bookingInfo();
})


function handleFirstClassChange(isIncrease){
    const ticketCount = document.getElementById('first-class-ticket-count').value;
    let ticketCountNumber = parseInt(ticketCount);
    if(isIncrease == true){
        ticketCountNumber = parseInt(ticketCount) + 1;
    }
    if(isIncrease == false && ticketCountNumber > 0){
        ticketCountNumber = parseInt(ticketCount) - 1;
    }
    document.getElementById('first-class-ticket-count').value = ticketCountNumber;
    updatePrice();
    return ticketCount;
}


function handleEconomicChange(isIncrease){
    const economicTicket = document.getElementById('economic-ticket-count').value;
    // const economicTicketNumber = parseInt(economicTicket) + 1;
    let economicTicketNumber = parseInt(economicTicket);
    if(isIncrease == true){
        economicTicketNumber = parseInt(economicTicket) + 1;
    }
    if(isIncrease == false && economicTicketNumber > 0){
        economicTicketNumber = parseInt(economicTicket) - 1;
    }
    document.getElementById('economic-ticket-count').value = economicTicketNumber;
    updatePrice();
    return economicTicket;
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
    const purchaseEconomic = handleEconomicChange(true);
    const purchaseFirstClass = handleFirstClassChange(true);
    const ticketTotal = updatePrice();
    document.getElementById('purchase-first-class').innerText = purchaseFirstClass;
    document.getElementById('purchase-economic').innerText = purchaseEconomic;
    document.getElementById('ticket-total').innerText = ticketTotal;
}

