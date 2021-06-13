'use strict';
let salmonCookies = document.getElementById('salmonCookies');


let seattle = {
    name:'seattle' ,
    minCust:3 ,
    maxCust:65,
    avgCookie:6.3,
    hourWork:['6am' , '7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    cookiesPh:[],
   
    customerPerHour: function(minCust , maxCust){
        minCust = Math.ceil(minCust);
        maxCust = Math.floor(maxCust);
        return Math.random() * (this.maxCust - this.minCust) + this.minCust;
    },
    cookiesPerHour: function(){
        for(let i =0; i < this.hourWork.length; i++){
         this.cookiesPh.push  (this.customerPerHour()*this.avgCookie);
        }
        console.log(cookiesPerHour);
         console.log(cookiesPh);
         
    },
  render: function() {
      let cookiesPh = document.createElement('ul');
      articleElement.appendChild(cookiesPh);

      for(let i = 0 ; i < this.cookiesPh.length ; i++){
          console.log('i');
          console.log(cookiesPh[i]);
          this.cookiesPh.textContent = cookiesPh[i];
          this.cookiesPh.appendChild(cookiesPh);
          listItem.textContent = `${cookiesPh[i]}` + hourWork[i];
      }

  }
};
 


let tokyo = {
    name:'tokyo' ,
    minCust:3 ,
    maxCust:24,
    avgCookie:1.2,
    hourWork:['6am' , '7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    cookiesPh:[],
   
    customerPerHour: function(minCust , maxCust){
        minCust = Math.ceil(minCust);
        maxCust = Math.floor(maxCust);
        return Math.random() * (this.maxCust - this.minCust) + this.minCust;
    },
    cookiesPerHour: function(){
        for(let i =0; i < this.hourWork.length; i++){
         this.cookiesPh.push  (this.customerPerHour()*this.avgCookie);
        }
        console.log(cookiesPerHour);
         console.log(cookiesPh);
         
    },
  render: function() {
      let cookiesPh = document.createElement('ul');
      articleElement.appendChild(cookiesPh);

      for(let i = 0 ; i < this.cookiesPh.length ; i++){
          console.log('i');
          console.log(cookiesPh[i]);
          this.cookiesPh.textContent = cookiesPh[i];
          this.cookiesPh.appendChild(cookiesPh);
          listItem.textContent = `${cookiesPh[i]}` + hourWork[i];
      }

  }
};

let dubai = {
    name:'dubai' ,
    minCust:11,
    maxCust:38,
    avgCookie:3.7,
    hourWork:['6am' , '7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    cookiesPh:[],
   
    customerPerHour: function(minCust , maxCust){
        minCust = Math.ceil(minCust);
        maxCust = Math.floor(maxCust);
        return Math.random() * (this.maxCust - this.minCust) + this.minCust;
    },
    cookiesPerHour: function(){
        for(let i =0; i < this.hourWork.length; i++){
         this.cookiesPh.push  (this.customerPerHour()*this.avgCookie);
        }
        console.log(cookiesPerHour);
         console.log(cookiesPh);
         
    },
  render: function() {
      let cookiesPh = document.createElement('ul');
      articleElement.appendChild(cookiesPh);

      for(let i = 0 ; i < this.cookiesPh.length ; i++){
          console.log('i');
          console.log(cookiesPh[i]);
          this.cookiesPh.textContent = cookiesPh[i];
          this.cookiesPh.appendChild(cookiesPh);
          listItem.textContent = `${cookiesPh[i]}` + hourWork[i];
      }

  }
};
let paris = {
    name:'paris' ,
    minCust:20,
    maxCust:38,
    avgCookie:2.3,
    hourWork:['6am' , '7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    cookiesPh:[],
   
    customerPerHour: function(minCust , maxCust){
        minCust = Math.ceil(minCust);
        maxCust = Math.floor(maxCust);
        return Math.random() * (this.maxCust - this.minCust) + this.minCust;
    },
    cookiesPerHour: function(){
        for(let i =0; i < this.hourWork.length; i++){
         this.cookiesPh.push  (this.customerPerHour()*this.avgCookie);
        }
        console.log(cookiesPerHour);
         console.log(cookiesPh);
         
    },
  render: function() {
      let cookiesPh = document.createElement('ul');
      articleElement.appendChild(cookiesPh);

      for(let i = 0 ; i < this.cookiesPh.length ; i++){
          console.log('i');
          console.log(cookiesPh[i]);
          this.cookiesPh.textContent = cookiesPh[i];
          this.cookiesPh.appendChild(cookiesPh);
          listItem.textContent = `${cookiesPh[i]}` + hourWork[i];
      }

  }
};

let lima = {
    name:'lima' ,
    minCust:2,
    maxCust:16,
    avgCookie:4.6,
    hourWork:['6am' , '7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    cookiesPh:[],
   
    customerPerHour: function(minCust , maxCust){
        minCust = Math.ceil(minCust);
        maxCust = Math.floor(maxCust);
        return Math.random() * (this.maxCust - this.minCust) + this.minCust;
    },
    cookiesPerHour: function(){
        for(let i =0; i < this.hourWork.length; i++){
         this.cookiesPh.push  (this.customerPerHour()*this.avgCookie);
        }
        console.log(cookiesPerHour);
         console.log(cookiesPh);
         
    },
  render: function() {
      let cookiesPh = document.createElement('ul');
      articleElement.appendChild(cookiesPh);

      for(let i = 0 ; i < this.cookiesPh.length ; i++){
          console.log('i');
          console.log(cookiesPh[i]);
          this.cookiesPh.textContent = cookiesPh[i];
          this.cookiesPh.appendChild(cookiesPh);
          listItem.textContent = `${cookiesPh[i]}` + hourWork[i];
      }

  }
};

console.log(seattle);
console.log( tokyo );
console.log(dubai);
console.log(paris);
console.log(lima);