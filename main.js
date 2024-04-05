#!/usr/bin/env node
import inquirer from "inquirer";
let rate = {
    USD: 1, // Base Currecncy
    GBP: 0.75,
    EUR: 0.84,
    INR: 63.29,
    PKR: 278,
    Take: 109.75,
    Rupee: 299,
};
let currency = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Select the from Currency?",
        choices: ["USD", "GBP", "EUR", "INR", "PKR", "Take", "Rupee"]
    },
    {
        name: "to",
        type: "list",
        message: "Select the to Currency?",
        choices: ["USD", "GBP", "EUR", "INR", "PKR", "Take", "Rupee"],
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
let amountfrom = rate[currency.from]; // Exchange Rate
let amountTo = rate[currency.to]; // Exchange Rate
let amount = currency.amount;
let baseAmount = amount / amountfrom; // USD base currency convertor
let convertorAmount = baseAmount * amountTo;
console.log(convertorAmount);
