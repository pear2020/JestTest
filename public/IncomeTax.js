
 export const  ontarioTax = (nTaxableIncome) => {
        let nOntarioTax = 0;
        if(nTaxableIncome <= 40922){
            nOntarioTax =  .0505 * nTaxableIncome
        }
        if(nTaxableIncome > 40922 && nTaxableIncome <= 81847 ){
            nOntarioTax = (nTaxableIncome - 40922) * .0915 + 2067;
        }
        if(nTaxableIncome > 81847 && nTaxableIncome <= 150000 ){
            nOntarioTax = (nTaxableIncome - 81847) * .1116 + 5811;
        }
        if(nTaxableIncome > 150000 && nTaxableIncome <= 220000 ){
            nOntarioTax = (nTaxableIncome - 150000) * .1216 + 13417;
        }
        if(nTaxableIncome > 220000){
            nOntarioTax = (nTaxableIncome - 220000) * .1316 + 21929;
        }
        return Number(nOntarioTax.toFixed(2));
    }


export const  federalTax = (nTaxableIncome) => {
        let nFederalTax = 0;
        if(nTaxableIncome <= 45282){
            nFederalTax =  .15 * nTaxableIncome;
        }
        if(nTaxableIncome > 45282 && nTaxableIncome <= 90563 ){
            nFederalTax = (nTaxableIncome - 45282) * .205 + 6792;
        }
        if(nTaxableIncome > 90563 && nTaxableIncome <= 140388 ){
            nFederalTax = (nTaxableIncome - 90563) * .26 + 16075;
        }
        if(nTaxableIncome > 140388 && nTaxableIncome <= 200000 ){
            nFederalTax = (nTaxableIncome - 140388) * .29 + 29029;
        }
        if(nTaxableIncome > 200000){
            nFederalTax = (nTaxableIncome - 200000) * .33 + 46317;
        }
        return Number(nFederalTax.toFixed(2));
    }

