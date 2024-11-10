const QuotesURL = "https://api.quotable.io/quotes/random"
const EmojiURL = "https://emoji-api.com/emojis?access_key=d8325033372bf3eb69c3fbc1087be75f2a668ee4"

export async function getQuote() {
   const respone = await fetch(QuotesURL);
   const obj = await respone.json();
   return obj;
}

export async function getEmoji() {
   const emgRespone = await fetch(EmojiURL);
   const emojiObj = await emgRespone.json();
   return emojiObj;
}