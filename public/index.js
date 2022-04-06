
import IncomeTax from "./IncomeTax.js"; 
// $$("#adding").on("submit", evt=>{
//   evt.preventDefault();
//   const oData = app.form.convertToData("#adding")
//   //alert("adding: " + oData.amount);
//   nSubtotal += Number(oData.amount);
//   const nHst = HST.calculate("ON", nSubtotal);
//   $$("#hst").html(nHst);
//   $$("#total").html(nHst + nSubtotal);
//   $$("#subtotal").html(nSubtotal);
//   $$("#amounts").prepend("<p>"+ oData.amount + "</p>");
// });

import "https://code.jquery.com/jquery-1.12.1.min.js";

$(document).ready(()=>{
    var inputs = $("form :input");
    $(inputs).keypress(function(e){
	    if (e.keyCode == 13){
		    inputs[inputs.index(this)+1].focus();
	    }
    });

    $("#deducted").keypress(function(e){
	    if (e.keyCode == 13){
        const nincome = $("#income").val();
        const oTax = new IncomeTax();
        const ontarioTax = oTax.ontarioTax(nincome);
        const ferderalTax =  oTax.federalTax(nincome);
        var nTax = ontarioTax + ferderalTax;
        const deductable = $("#deducted").val();
        $("#OntarioTax").html(ontarioTax);
        $("#FederalTax").html(ferderalTax);
        $("#total").html(nTax);
        $("#owing").html((nTax-deductable).toFixed(2));
	    }
    });

    $("#calculateON").click((evt)=>{
        evt.preventDefault();
        const nincome = $("#income").val();
        const oTax = new IncomeTax();
        $("#OntarioTax").html(oTax.ontarioTax(nincome));
    })

    $("#calculateFe").click((evt)=>{
      evt.preventDefault();
      const nincome = $("#income").val();
      const oTax = new IncomeTax();
      $("#FederalTax").html(oTax.federalTax(nincome));
    })

});