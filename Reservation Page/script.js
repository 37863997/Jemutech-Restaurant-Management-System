document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (name && email && phone && date && time && guests) {
        document.getElementById('confirmationMessage').innerText = `Thank you, ${name}. Your reservation for ${guests} guests on ${date} at ${time} has been confirmed.`;
        document.getElementById('reservationForm').reset();
    } else {
        document.getElementById('confirmationMessage').innerText = 'Please fill out all fields.';
    }
});
