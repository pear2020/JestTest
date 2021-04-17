import Framework7 from 'framework7/framework7-bundle'
const HST = require("./HST.js"); 

// If your using custom DOM library, then save it to $$ variable
const $$ = Dom7;

// Init F7
const app = new Framework7();

// Add the view
app.view.create('#app', {

  // enable the dynamic navbar for this view:
  dynamicNavbar: true
});

let nSubtotal = 0;

$$("#adding").on("submit", evt=>{
  evt.preventDefault();
  const oData = app.form.convertToData("#adding")
  //alert("adding: " + oData.amount);
  nSubtotal += Number(oData.amount);
  const nHst = HST.calculate("ON", nSubtotal);
  $$("#hst").html(nHst);
  $$("#total").html(nHst + nSubtotal);
  $$("#subtotal").html(nSubtotal);
  $$("#amounts").prepend("<p>"+ oData.amount + "</p>");
});