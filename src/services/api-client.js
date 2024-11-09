const JokeURL = "http://api.quotable.io/quotes/random"

export async function getJoke() {
   const respone = await fetch(JokeURL);
   const obj = await respone.json();   
   return obj;
}