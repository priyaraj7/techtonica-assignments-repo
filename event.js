class TicketType {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }
  // addAvailableTickets
  addAvailableTickets(name, price) {
    this.availableTickets.push(new TicketType(name, price));
  }

  allTickets() {
    let str = "All tickets: ";
    for (let i = 0; i < this.availableTickets.length; i++) {
      str +=
        i +
        1 +
        "." +
        this.availableTickets[i].name +
        " ($" +
        this.availableTickets[i].price +
        ")" +
        " ";
    }
    return str;
  }
  // search function
  searchTickets(lower, upper) {
    let str = `Eligible tickets: `;
    let count = 0;
    for (let i = 0; i < this.availableTickets.length; i++)
      if (
        this.availableTickets[i].price >= lower &&
        this.availableTickets[i].price <= upper
      ) {
        str += `${++count}. ${this.availableTickets[i].name} $(${
          this.availableTickets[i].price
        }) `;
      }
    return count > 0 ? str : "No tickets available.";
  }
}

// The below statement create an object.

const eventObj1 = new Event(
  "KLOD Golden Gala",
  "An evening with hollywood vampires"
);

const eventObj2 = new Event("Skillet & Sevendust', 'Victorious war tour");

const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019");

// create an empty object

const eventArray = new Array();

// pushing single object to an array
eventArray.push(eventObj1);

// pushing multiple objects to an array at once
eventArray.push(eventObj2, eventObj3);

//console.log(eventArray);

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);

eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);

eventObj3.searchTickets(0, 250);

console.log(eventObj3.searchTickets(0, 250));
console.log(eventObj3.searchTickets(101, 350));
//console.log(eventObj1.availableTickets);

//console.log(eventObj1.allTickets());

// jQuery code

// $(document).ready(function () {
//   let html = "";
//   // .each  iterates over the DOM elements that are part of the jQuery object
//   $.each(eventArray, function (index, item) {
//     console.log(item);
//     html += `<li>${item.name} - ${
//       item.description
//     }</li> - ${item.allTickets()}`;
//   });
//   // insert final html into #event..
//   $("#event").html(html);
// });

//without Jquery

document.addEventListener("DOMContentLoaded", function (event) {
  let html = "";
  let eventList = document.querySelector("#event");
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item.description}</li> - ${item.searchTickets(
      0,
      100
    )}`;
    // insert final html into #event..
    eventList.innerHTML = html;
  });
});
