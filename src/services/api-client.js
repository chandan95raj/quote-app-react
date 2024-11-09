const QuotesURL = "http://api.quotable.io/quotes/random"

export async function getJoke() {
   const respone = await fetch(QuotesURL);
   const obj = await respone.json();   
   return obj;
}