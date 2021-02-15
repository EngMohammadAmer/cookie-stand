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

let Tokyo = {
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
    let TokyotUL = document.getElementById('Tokyo');
    for(let i = 0; i < hours.length; i++){
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      TokyotUL.appendChild(liEl);
    }
  },

  total: function(){
    let TokyoUL = document.getElementById('Tokyo');
    let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    TokyoUL.appendChild(liEl);
    return cookieTotal;
  }
};


Tokyo.randomNumber();
Tokyo.sales();
Tokyo.render();
Tokyo.total();

// ---------------------------------------------------------------------------------------------------------

let Dubai = {
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
    let DubaiUL = document.getElementById('Dubai');
    for(let i = 0; i < hours.length; i++){
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      DubaiUL.appendChild(liEl);
    }
  },

  total: function(){
    let DubaiUL = document.getElementById('Dubai');
    let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    DubaiUL.appendChild(liEl);
    return cookieTotal;
  }
};

Dubai.randomNumber();
Dubai.sales();
Dubai.render();
Dubai.total();

// ---------------------------------------------------------------------------------------------------------

let Paris = {
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
    let ParisUL = document.getElementById('Paris');
    for(let i = 0; i < hours.length; i++){
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      ParisUL.appendChild(liEl);
    }
  },

  total: function(){
    let ParisUL = document.getElementById('Paris');
    let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    ParisUL.appendChild(liEl);
    return cookieTotal;
  }
};

Paris.randomNumber();
Paris.sales();
Paris.render();
Paris.total();

// --------------------------------------------------------------------------------------------------------

let Lima = {
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
    let LimaUL = document.getElementById('Lima');
    for(let i = 0; i < hours.length; i++){
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      LimaUL.appendChild(liEl);
    }
  },

  total: function(){
    let LimaUL = document.getElementById('Lima');
    let cookieTotal = 0;
    for(let i = 0; i < hours.length; i++){
      cookieTotal += this.hourlySales[i];
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + cookieTotal + ' cookies';
    LimaUL.appendChild(liEl);
    return cookieTotal;
  }
};

Lima.randomNumber();
Lima.sales();
Lima.render();
Lima.total();


// #######################################################################################################
