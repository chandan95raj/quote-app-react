const QuotesURL = "https://api.quotable.io/quotes/random"

export async function getQuote() {
   const respone = await fetch(QuotesURL);
   const obj = await respone.json();   
   return obj;
}