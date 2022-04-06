import { ontarioTax, federalTax } from "../public/IncomeTax.js";

it("checks for Ontario tax on $40922", ()=>{
    expect(ontarioTax(40922)).toBe(2066.56);
});

it("checks for Ontario tax on $50000", ()=>{
    expect(ontarioTax(50000)).toBe(2897.64);
});

it("checks for Ontario tax on $90000", ()=>{
    expect(ontarioTax(90000)).toBe(6720.87);
});

it("checks for Ontario tax on $200000", ()=>{
    expect(ontarioTax(200000)).toBe(19497);
});

it("checks for Ontario tax on $250000", ()=>{
    expect(ontarioTax(250000)).toBe(25877);
});

it("checks for federal tax on $45282", ()=>{
    expect(federalTax(45282)).toBe(6792.3);
});

it("checks for federal tax on $50000", ()=>{
    expect(federalTax(50000)).toBe(7759.19);
});

it("checks for federal tax on $100000", ()=>{
    expect(federalTax(100000)).toBe(18528.62);
});

it("checks for federal tax on $150000", ()=>{
    expect(federalTax(150000)).toBe(31816.48);
});

it("checks for federal tax on $210000", ()=>{
    expect(federalTax(210000)).toBe(49617);
});

