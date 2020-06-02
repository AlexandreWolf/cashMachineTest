// AvailableNotes to cash out
const availableNotes = [1, 5, 10, 50];

function cashMachine(cash) {
  // validating received value
  if (isNaN(cash) || !Number.isInteger(cash) || cash < 1 || cash > 10000) {
    return console.log(
      "Ops... Insira um valor númerico (inteiro) entre 1 e 10000!"
    );
  }

  // making vector of available notes ordered descending
  const availableNotesSorted = availableNotes.sort((a, b) => {
    return b - a;
  });

  // control variable of notes to be used and other to store the missing value at each interaction
  let moneyNotes = [],
    missingValue = cash;

  // scanning array of available notes to get the quantity of each
  moneyNotes = availableNotesSorted.map((note) => {
    // getting the largest integer less than or equal to the result of the division
    const notes = Math.floor(missingValue / note);

    // getting the remaining amount to be processed in the next note
    missingValue -= (notes * note);

    return notes;
  });

  // log the result
  console.log(
    `Notas entregues: 
    ${moneyNotes[0]} notas de R$50,00, ${moneyNotes[1]} notas de R$10,00,  
    ${moneyNotes[2]} notas de R$5,00 e ${moneyNotes[3]} notas de R$1,00`
  );
}

cashMachine(82);
