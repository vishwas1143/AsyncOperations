console.log('person1: show ticket');
console.log('person2: show ticket');

function waitFor(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function buyTicket() {
  await waitFor(3000);
  console.log('wife: I got the ticket');
  return 'ticket';
}

async function getPopCorn(ticket) {
  console.log('husband: we should go in');
  await waitFor(2000);
  console.log('wife: no, I\'m hungry');
  return `${ticket} popcorn`;
}

async function getButter(popcorn) {
  console.log('husband: we should go in');
  await waitFor(1000);
  console.log('wife: I need butter');
  return `${popcorn} butter`;
}

async function getColdDrinks(butter) {
  console.log('husband: we should go in');
  await waitFor(500);
  console.log('husband: and some cold drinks too');
  return `${butter} cold drinks`;
}

(async () => {
  try {
    const ticket = await buyTicket();
    const popcorn = await getPopCorn(ticket);
    const butter = await getButter(popcorn);
    const coldDrinks = await getColdDrinks(butter);
    console.log(coldDrinks);
  } catch (error) {
    console.error(error);
  }
})();

console.log('person4: show ticket');
console.log('person5: show ticket');
