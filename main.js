
// first class increase event handler 
document.getElementById('first-class-increase-btn').addEventListener('click', function () {
    // handleFirstClassChange(true)
    handleTicketChange('first-class-ticket', true)
})


// first class decrease event handler 
document.getElementById('first-class-decrease-btn').addEventListener('click', function () {
    // handleFirstClassChange(false)
    handleTicketChange('first-class-ticket', false)
})


//economic increase event handler
document.getElementById('economic-increase-btn').addEventListener('click', function () {
    // handleEconomicChange(true);
    handleTicketChange('economic-ticket', true)
})



//economic decrease event handler
document.getElementById('economic-decrease-btn').addEventListener('click', function () {
    handleTicketChange('economic-ticket', false)
})


//booking info
document.getElementById('book-now').addEventListener('click', function () {
    bookingInfo();
})


//get input value
function getInput(id){
    const getValue = document.getElementById(id).value;
    return getValue;
}

//event handler for ticket count
function handleTicketChange(ticket, isIncrease) {
    const ticketCount = document.getElementById(ticket + '-count').value;
    let ticketCountNumber = parseInt(ticketCount);
    if (isIncrease == true) {
        ticketCountNumber = parseInt(ticketCount) + 1;
    }
    if (isIncrease == false && ticketCountNumber > 0) {
        ticketCountNumber = parseInt(ticketCount) - 1;
    }
    document.getElementById(ticket + '-count').value = ticketCountNumber;
    updatePrice();

}


//update price
function updatePrice() {
    const firstClassTicket = getInput('first-class-ticket-count');
    const economicTicket = getInput('economic-ticket-count');
    const subTotal = parseInt(firstClassTicket) * 150 + parseInt(economicTicket) * 100;
    document.getElementById('subtotal').innerText = subTotal;
    const vat = (subTotal / 100 * 10).toFixed(2);
    document.getElementById('vat').innerText = vat;
    const total = parseFloat(vat) + subTotal;
    document.getElementById('total').innerText = total;
    return total;
}


//booking information handler
function bookingInfo() {
    const firstClassTicket = getInput('first-class-ticket-count');
    const economicTicket = getInput('economic-ticket-count');
    document.getElementById('main-section').style.display = 'none';
    document.getElementById('header').style.display = '100vh';
    document.getElementById('booking-info').style.display = 'block';
    const ticketTotal = updatePrice();
    document.getElementById('purchase-first-class').innerText = firstClassTicket;
    document.getElementById('purchase-economic').innerText = economicTicket;
    document.getElementById('ticket-total').innerText = ticketTotal;
}

