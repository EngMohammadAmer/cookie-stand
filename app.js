'use strict';

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

let seattle = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  customers: [],
  hourlySales: [],
  cookieTotal: 0,

  randomNumber: function(){
    for(let i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

  sales: function(){
    seattle.randomNumber();
    for(let i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.ceil(this.customers[i] * this.avgSale);
      this.cookieTotal += this.hourlySales[i];
    }
  },

  render: function(){
    seattle.sales();
    let seattleUL = document.getElementById('seattle');
    for(let i = 0; i < hours.length; i++){
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      seattleUL.appendChild(liEl);
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.cookieTotal + ' cookies';
    seattleUL.appendChild(liEl);
  },
};

seattle.render();

// ------------------------------------------------------------------------------------------------------

let tokyo = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(let i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

  sales: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
    }
  },

  render: function(){
    let tokyotUL = document.getElementById('tokyo');
    for(let i = 0; i < hours.length; i++){
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      tokyotUL.appendChild(liEl);
    }
  },

  total: function(){
    let tokyoUL = document.getElementById('tokyo');
    let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    tokyoUL.appendChild(liEl);
    return cookieTotal;
  }
};


tokyo.randomNumber();
tokyo.sales();
tokyo.render();
tokyo.total();

// ---------------------------------------------------------------------------------------------------------

let dubai = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(let i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

  sales: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
    }
  },

  render: function(){
    let dubaiUL = document.getElementById('dubai');
    for(let i = 0; i < hours.length; i++){
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      dubaiUL.appendChild(liEl);
    }
  },

  total: function(){
    let dubaiUL = document.getElementById('dubai');
    let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    dubaiUL.appendChild(liEl);
    return cookieTotal;
  }
};

dubai.randomNumber();
dubai.sales();
dubai.render();
dubai.total();

// ---------------------------------------------------------------------------------------------------------

let paris = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(let i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

  sales: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlySales[i] = Math.floor(this.customers[i] * this.avgSale);
    }
  },

  render: function(){
    let parisUL = document.getElementById('paris');
    for(let i = 0; i < hours.length; i++){
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      parisUL.appendChild(liEl);
    }
  },

  total: function(){
    let parisUL = document.getElementById('paris');
    let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    parisUL.appendChild(liEl);
    return cookieTotal;
  }
};

paris.randomNumber();
paris.sales();
paris.render();
paris.total();

// --------------------------------------------------------------------------------------------------------

let lima = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  customers: [],
  hourlySales: [],

  randomNumber: function(){
    for(let i = 0; i < hours.length; i++){
      this.customers.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

  sales: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlySales[i] = (Math.floor(this.customers[i] * this.avgSale));
    }
  },

  render: function(){
    let limaUL = document.getElementById('lima');
    for(let i = 0; i < hours.length; i++){
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      limaUL.appendChild(liEl);
    }
  },

  total: function(){
    let limaUL = document.getElementById('lima');
    let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    limaUL.appendChild(liEl);
    return cookieTotal;
  }
};

lima.randomNumber();
lima.sales();
lima.render();
lima.total();


// #######################################################################################################
