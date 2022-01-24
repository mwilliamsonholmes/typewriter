let creditLimit = 0;

const loanOut = function (amount) {
  return new Promise((resolve, reject) => {
    if (creditLimit <= 0) {
      reject("Insufficient Funds!");
    } else if (creditLimit >= amount) {
      resolve(amount);
    } else {
      resolve(creditLimit);
    }
  })
};

console.log("Asking for $150, which should be okay ...");
loanOut(75)
  .then((amountReceived) => {
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $(${creditLimit - amountReceived})`);
  })
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });
