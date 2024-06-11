// Define constants for pricing and desk capacity
const INDIVIDUAL_DESK_CAPACITY = 10;
const TEAM_DESK_CAPACITY = 5;
const INDIVIDUAL_DESK_PRICES = {
  basic: 10,
  premium: 15,
  executive: 20
};
const TEAM_DESK_PRICE = 25;
const DISCOUNT_THRESHOLD = 3;
const DISCOUNT_RATE = 0.1;

// Initialize variables to track booked desks, desk availability, and total charged
let bookedDesks = [];
let deskAvailability = {
  individual: {
    basic: INDIVIDUAL_DESK_CAPACITY,
    premium: INDIVIDUAL_DESK_CAPACITY,
    executive: INDIVIDUAL_DESK_CAPACITY
  },
  team: {
    basic: TEAM_DESK_CAPACITY,
    premium: TEAM_DESK_CAPACITY,
    executive: TEAM_DESK_CAPACITY
  }
};
let totalCharged = 0;

// Function to update desk availability in the table
function updateDeskAvailability() {
    Object.keys(deskAvailability).forEach(deskType => {
      Object.keys(deskAvailability[deskType]).forEach(membershipTier => {
        const cellId = `${deskType}-${membershipTier}`;
        const cell = document.getElementById(cellId);
        if (cell) {
          cell.innerText = deskAvailability[deskType][membershipTier];
        } else {// Define constants for pricing and desk capacity
const INDIVIDUAL_DESK_CAPACITY = 10;
const TEAM_DESK_CAPACITY = 5;
const INDIVIDUAL_DESK_PRICES = {
  basic: 10,
  premium: 15,
  executive: 20
};
const TEAM_DESK_PRICE = 25;
const DISCOUNT_THRESHOLD = 3;
const DISCOUNT_RATE = 0.1;

// Initialize variables to track booked desks, desk availability, and total charged
let bookedDesks = [];
let deskAvailability = {
  individual: {
    basic: INDIVIDUAL_DESK_CAPACITY,
    premium: INDIVIDUAL_DESK_CAPACITY,
    executive: INDIVIDUAL_DESK_CAPACITY
  },
  team: {
    basic: TEAM_DESK_CAPACITY,
    premium: TEAM_DESK_CAPACITY,
    executive: TEAM_DESK_CAPACITY
  }
};
let totalCharged = 0;

// Function to update desk availability in the table
function updateDeskAvailability() {
  Object.keys(deskAvailability).forEach(deskType => {
    Object.keys(deskAvailability[deskType]).forEach(membershipTier => {
      const cellId = `${membershipTier}-${deskType}`;
      const cell = document.getElementById(cellId);
      if (cell) {
        cell.innerText = deskAvailability[deskType][membershipTier];
      } else {
        console.error(`Element with ID '${cellId}' not found.`);
      }
    });
  });
}

// Function to handle desk booking
function bookDesk() {
  const deskType = document.getElementById('desk-type').value;
  const membershipTier = document.getElementById('membership-tier').value;
  const hours = parseInt(document.getElementById('hours').value);

  // Check if there are enough desks available
  if (deskAvailability[deskType][membershipTier] < hours) {
    alert(`Not enough desks available for ${hours} hours of booking.`);
    return;
  }

  // Calculate price based on desk type and membership tier
  let price;
  if (deskType === 'individual') {
    price = INDIVIDUAL_DESK_PRICES[membershipTier] * hours;
  } else {
    price = TEAM_DESK_PRICE * hours;
  }

  // Apply discount for bookings over the threshold
  if (hours > DISCOUNT_THRESHOLD) {
    price -= price * DISCOUNT_RATE;
  }

  // Display total charged
  totalCharged += price;
  document.getElementById('total-charged').innerText = `Total Charged: $${totalCharged.toFixed(2)}`;

  // Update booked desks array
  const deskId = `${membershipTier}-${deskType}`;
  for (let i = 0; i < hours; i++) {
    bookedDesks.push(deskId);
  }

  // Update desk availability
  deskAvailability[deskType][membershipTier] -= hours;

  // Update desk availability table
  updateDeskAvailability();
}

// Function to initialize event listeners
function init() {
  const bookButton = document.getElementById('book-desk');
  bookButton.addEventListener('click', bookDesk);

  // Initialize desk availability table
  updateDeskAvailability();
}

// Initialize event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

          console.error(`Element with ID '${cellId}' not found.`);
        }
      });
    });
  }
  

// Function to handle desk booking
function bookDesk() {
  const deskType = document.getElementById('desk-type').value;
  const membershipTier = document.getElementById('membership-tier').value;
  const hours = parseInt(document.getElementById('hours').value);

  // Check if there are enough desks available
  if (deskAvailability[deskType][membershipTier] < hours) {
    alert(`Not enough desks available for ${hours} hours of booking.`);
    return;
  }

  // Calculate price based on desk type and membership tier
  let price;
  if (deskType === 'individual') {
    price = INDIVIDUAL_DESK_PRICES[membershipTier] * hours;
  } else {
    price = TEAM_DESK_PRICE * hours;
  }

  // Apply discount for bookings over the threshold
  if (hours > DISCOUNT_THRESHOLD) {
    price -= price * DISCOUNT_RATE;
  }

  // Display total charged
  totalCharged += price;
  document.getElementById('total-charged').innerText = `Total Charged: $${totalCharged}`;

  // Update booked desks array
  const deskId = deskType === 'individual' ? `${deskType}-${membershipTier}` : deskType;
  for (let i = 0; i < hours; i++) {
    bookedDesks.push(deskId);
  }

  // Update desk availability
  deskAvailability[deskType][membershipTier] -= hours;

  // Update desk availability table
  updateDeskAvailability();

  // Mark booked desks as reserved
  const desks = document.querySelectorAll('.desk');
  bookedDesks.forEach(bookedDesk => {
    desks.forEach(desk => {
      if (desk.dataset.id === bookedDesk) {
        desk.classList.add('booked');
      }
    });
  });
}

// Function to initialize event listeners
function init() {
  const bookButton = document.getElementById('book-desk');
  bookButton.addEventListener('click', bookDesk);
}

// Initialize desk availability table
updateDeskAvailability();

// Initialize event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
