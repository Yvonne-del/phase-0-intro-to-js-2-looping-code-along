// Code your solutions in this file
const name = ["Charlie", "Samip", "Ali"];
function whiteCard(name){
    for (let i=0; i<name.length; i++){
        console.log(`Thank you, ${name[i]}, for the wonderful birthday gift!`)
    }
    return name;
}


function writeCards(names, event) {
  // Create an empty array to hold the messages
  const messages = [];
    for (let i = 0; i < names.length; i++) {
      // Build the thank you message using string interpolation
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      // Add the message to the new array
      messages.push(message);
    }
    return messages;
}
function countDown(num){
  let i = num;
  while(i >= 0){
    console.log(i);
    i--;
  }
}
countDown(5)