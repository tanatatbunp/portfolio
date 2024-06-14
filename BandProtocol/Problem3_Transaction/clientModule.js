//! MIRO Flowchart : https://miro.com/app/board/uXjVK8OTvXA=/?share_link_id=741474566114

const axios = require('axios');

//? Function to broadcast a transaction
const broadcastTransaction = async (symbol, price, timestamp) => {
  try {
    // Create payload data into object
    const payload = {
      symbol: symbol, // Transaction symbol, e.g., BTC
      price: price, // Symbol price, e.g., 10000
      timestamp: timestamp //Timestamp of price retrieval
    };
    // Broadcast the transaction
    const response = await axios.post('https://mock-node-wgqbnxruha-as.a.run.app/broadcast', payload);
    // console.log(response.data); //* Check hash here
    return response.data.tx_hash;
  } catch (error) {
    console.error('Error broadcasting transaction:', error.message);
    throw error;
  }
};

//? Function to check the transaction status
const checkTransactionStatus = async (txHash) => {
  try {
    // Check the transaction status
    const response = await axios.get(`https://mock-node-wgqbnxruha-as.a.run.app/check/${txHash}`);
    // console.log(response.data); //* Check status here
    return response.data.tx_status;
  } catch (error) {
    console.error('Error checking transaction status:', error.message);
    throw error;
  }
};

//? Function to monitor the transaction status

//Monitor the transaction status every __ seconds
const monitorTransaction = async (txHash) => {
  const interval = 5000; // Check every 5 seconds //! Can be adjusted

  const checkStatus = async () => {
    try {
      const status = await checkTransactionStatus(txHash);
      console.log(`tx_status: ${status}`);

      if (status === 'CONFIRMED' || status === 'FAILED' || status === 'DNE') {
        clearInterval(intervalId);
        //? This condition will only be executed if the transaction is CONFIRMED, FAILED, or DNE
        //? And will clear the interval
      }
    } catch (error) {
      console.error('Error during status check:', error.message);
    }
  };
  const intervalId = setInterval(checkStatus, interval);

};

//? Example usage in the other file
// Or just copy-paste to use in other files and remove comment for quick use

//* Start here \/
//*            \/

//   const { broadcastTransaction, monitorTransaction } = require('./clientModule');
//   const runApp = async () => {

// //*  You will need to adjust below code here

//   const symbol = 'string'; // Transaction symbol, e.g., BTC
//   const price = uint64; // Symbol price, e.g., 10000
//   const timestamp = uint64; //Timestamp of price retrieval

// //* ------------------------------------------------

//   try {
//     const txHash = await broadcastTransaction(symbol, price, timestamp);
//     console.log(`tx_hash: ${txHash}`);

//     await monitorTransaction(txHash);
//   } catch (error) {
//     console.error('Error in transaction process:', error.message);
//   }
// };

// //* Execute operation
// runApp();

//? ----------------------------------------------------

//! Export functions for use in other files
module.exports = {
  broadcastTransaction,
  checkTransactionStatus,
  monitorTransaction
};


