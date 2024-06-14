  const { broadcastTransaction, monitorTransaction } = require('./clientModule');
  const runApp = async () => {

//*  You will need to adjust below code here

  const symbol = 'ETH'; // Transaction symbol, e.g., BTC
  const price = 4500; // Symbol price, e.g., 10000
  const timestamp = 1678912345; //Timestamp of price retrieval

//* ------------------------------------------------

  try {
    const txHash = await broadcastTransaction(symbol, price, timestamp);
    console.log(`tx_hash: ${txHash}`);

    await monitorTransaction(txHash);
  } catch (error) {
    console.error('Error in transaction process:', error.message);
  }
};

//* Execute operation
runApp();
