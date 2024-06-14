### Documentation for Transaction Client Module ###

## Requirement before use ##
1. Node.js (Installation can be upon to your desire)
2. Axios lib - Installation as following
    
    'npm install axios' 
    
    *Make sure that you install it in your project directory

--------------------------------

## Running the code (execute by following command) ##

    node 'yourApplication'.js

--------------------------------

## Function operation ##

Main of function operation is in 'clientModule.js' file
In this file you will see 3 function that runs together as following

	1.	broadcastTransaction(symbol, price, timestamp)
	2.	checkTransactionStatus(txHash)
	3.	monitorTransaction(txHash)

----------- 

1. Function : broadcastTransaction

Description :
Broadcasts a transaction by sending a POST request 
with a JSON payload containing the transaction details.

Parameters :
	- symbol (string): Transaction symbol, e.g., BTC.
	- price (number): Symbol price, e.g., 10000.
	- timestamp (number): Timestamp of price retrieval.

Returns :
    - A promise that resolves to the transaction hash. | (string).

----------- 

2. Function : checkTransactionStatus

Description :
Checks the status of a transaction by sending a GET request 
with the transaction hash.

Parameters :

	- txHash (string) : The transaction hash.

Returns:
    - A promise that resolves to the transaction status. | (string).

----------- 

3. Function : monitorTransaction

Description :
Monitors the transaction status by periodically checking the status 
until it becomes CONFIRMED, FAILED, or DNE.

Parameters:

	- txHash (string): The transaction hash.

Returns:

	- A Promise that resolved with the final status.

--------------------------------

## Example of use ##

You will see fil name 'mainApp.js' in this directory
This file is set up for example quick use of this program

- First will be code for import function as 
'const { broadcastTransaction, monitorTransaction } = require('./clientModule');'

- Next you must adjust 3 constraint (symbol, price and timestamp) as your satisfied
If not any idea, I set it default for you as below for quick start

  'const symbol = 'ETH'; // Transaction symbol, e.g., BTC'
  'const price = 4500; // Symbol price, e.g., 10000'
  'const timestamp = 1678912345; //Timestamp of price retrieval'

- And finally is just log 'tx_hash' for you to observation and som error handling
*For 'status' information will be log as it define in 'clientModule.js'

- If you're all set, Just run the program by following command

    'node mainApp.js'

--------------------------------