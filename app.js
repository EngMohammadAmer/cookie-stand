'use strict';

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let storeLocations = [];
let footerTotals = [];

let form = document.getElementById('cookie-form')
let salesTable = document.getElementById('locationSales');

function CookieStore(location, minCust, maxCust, avgSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.cookiesPerHour = [];
  this.dailyCookieTotal = 0;
  storeLocations.push(this);
}

CookieStore.prototype.calcCustomersPerHour = function() {
  return Math.floor( Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

CookieStore.prototype.calcCookiesPerHour = function(){
  for(let i = 0; i < hours.length ; i++) {
    this.cookiesPerHour.push((Math.floor(this.calcCustomersPerHour() * this.avgSale)));
  }
};

CookieStore.prototype.calcDailyCookieTotal = function(){
  this.calcCookiesPerHour();
  let x = 0;
  for(let i = 0; i < this.cookiesPerHour.length; i++)
    x = x + this.cookiesPerHour[i];
  this.dailyCookieTotal = x;
};

new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 1.2);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);

CookieStore.prototype.render = function() {
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);

  for(let i = 0; i < this.cookiesPerHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.dailyCookieTotal;
  trEl.appendChild(tdEl);

  salesTable.appendChild(trEl);
};

function makeHeader() {
  let trEl = document.createElement('tr');
  let thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for(let i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  salesTable.appendChild(trEl);
}

function displaySales() {
  for(let i = 0; i < storeLocations.length; i++){
    if (storeLocations[i].dailyCookieTotal === 0) {
        storeLocations[i].calcDailyCookieTotal();
      }
    }
  
    for(let i = 0; i < storeLocations.length; i++){
      storeLocations[i].render();
      console.log(storeLocations[i]);
    }
}

function footer() {
  let trEl = document.createElement('tr');
  let thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);

  for (let i = 0; i < hours.length; i++) {
    let thEl = document.createElement('th');
    thEl.textContent = footerTotals[i];
    trEl.appendChild(thEl);
  }
  let grandTotal = 0;
  for(let k=0; k < footerTotals.length; k++) {
    grandTotal += footerTotals[k];
  }
  let grandTotalEl = document.createElement('th');
  grandTotalEl.textContent = grandTotal;
  trEl.appendChild(grandTotalEl);
  salesTable.appendChild(trEl);
}

function displayHourlySales() {
  for(let i = 0; i < hours.length; i++) {
  footerTotals[i] = 0;
        for(let j = 0; j < storeLocations.length; j++) {
        footerTotals[i] += storeLocations[j].cookiesPerHour[i];
        console.log(footerTotals);
    }
  }
}

function newStoreSubmit (event) {
    event.preventDefault();
  
    const newLocation = event.target.newlocation.value;
    const newMin = event.target.minimumcustomers.value;
    const newMax = event.target.maximumcustomers.value;
    const newAvg = event.target.avgcookiespercustomer.value;
    new CookieStore (newLocation, newMin, newMax, newAvg);
  
    salesTable.innerHTML = '';
    makeHeader();
    displaySales();
    displayHourlySales();
    footer();

    form.reset();
    
}

form.addEventListener('submit', newStoreSubmit);
makeHeader();
displaySales();
displayHourlySales();
footer();
