#!/usr/bin/env node
var Prompt=require("prompt-sync")({sigint:true});
currencyConverter();
function currencyConverter()
{
    let choseCurrency:string=getCurrency();
    let givenAmount:number=parseFloat(Prompt(`Enter the amount:`));
    console.log("The amount is: "+givenAmount+" "+choseCurrency);
    let convertCurrency:string=getCurrency();
    let amountInUSD:number=CurrencyToUSD(choseCurrency,givenAmount);
    let convertedAmount:number=USDToConvert(amountInUSD,convertCurrency);
    console.log("Amount in "+choseCurrency+ "is equal to Amount in "+convertCurrency);
    console.log(givenAmount+"\t=\t"+convertedAmount);
}
function USDToConvert(amount:number,choseCurrency:string):number
{
    if(choseCurrency=="1"||choseCurrency=="USD")
        return amount;
    else if(choseCurrency=="2"||choseCurrency=="GPD")
        return amount*0.84;
    else if(choseCurrency=="3"||choseCurrency=="EURO")
        return amount*0.95;
    else if(choseCurrency=="4"||choseCurrency=="AUS")
        return amount*1.51;
    else if(choseCurrency=="5"||choseCurrency=="INR")
        return amount*81.85;
    else if(choseCurrency=="6"||choseCurrency=="PKR")
        return amount*278.92;
    else
        return -1;
}
function getCurrency():string
{
    let flag:boolean=false;
    let choseCurrency:string;
    do{
        console.log("Choose the currency that you want to enter\n1. USD \n2. GPD\n3. EURO\n4. AUS\n5. INR\n6. PKR \nEnter the currency:");
        choseCurrency=Prompt("");
        if(choseCurrency=="1"||choseCurrency=="USD"||choseCurrency=="2"||choseCurrency=="GPD"||choseCurrency=="3"||choseCurrency=="EURO"||choseCurrency=="4"||choseCurrency=="AUS"||choseCurrency=="5"||choseCurrency=="INR"||choseCurrency=="6"||choseCurrency=="PKR")
            flag=true;
        else
          console.log("Please enter the right choice");     
    }while(flag!=true);
    return choseCurrency;
}
function CurrencyToUSD(choseCurrency:string,amount:number):number{
    if(choseCurrency=="1"||choseCurrency=="USD")
        return amount;
    else if(choseCurrency=="2"||choseCurrency=="GPD")
        return amount/0.84;
    else if(choseCurrency=="3"||choseCurrency=="EURO")
        return amount/0.95;
    else if(choseCurrency=="4"||choseCurrency=="AUS")
        return amount/1.51;
    else if(choseCurrency=="5"||choseCurrency=="INR")
        return amount/81.85;
    else if(choseCurrency=="6"||choseCurrency=="PKR")
        return amount/278.92;
    else
        return -1;
}



