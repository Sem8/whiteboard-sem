/* Pseudocode:
1. Initialize an empty array, call it finalTickets.
2. Initialize an empty object call it, flightInfoObj. 
3. Loop through the matrix to get each array element and place the first string in each array element (source) as a key in the flightInfoObj 
object and the 2nd string element from the array element in each matrix element (destination) as it's value in the flightInfoObj object.
4. Make an if statment, check if the first string in array element in the matrix is null, if so, push the second string element from that 
array element into the final tickets array.
5. Intialize a variable called finalTicketsPointer and set it to 0.
6. Make a while loop of while flightInfoObj[finalTickets[finalTicketsPointer]] is not null, push the value of the string element of the key
which is at the current pointer of finalTicketsPointer in the finalTickets array. Increment the finalTicketsPointer by 1
 */

// My own solution: Time complexity = ~O(2n) --> O(n);
const oneWayFlight = ticketMatrix => {
  let finalTickets = [];
  let flightInfoObj = {};
  let finalTicketsPointer = 0;

  for (let i = 0; i < ticketMatrix.length; i++) {
    flightInfoObj[ticketMatrix[i][0]] = ticketMatrix[i][1];

    if (ticketMatrix[i][0] === null) {
      finalTickets.push(ticketMatrix[i][1]);
    }
  }

//   console.log("finalTickets", finalTickets);
//   console.log("flightInfoObj", flightInfoObj);
  while (flightInfoObj[finalTickets[finalTicketsPointer]] !== null) {
      finalTickets.push(flightInfoObj[finalTickets[finalTicketsPointer]]);
      finalTicketsPointer++;
  }
  return finalTickets;
};

const tickets = [
  ["PIT", "ORD"],
  ["XNA", "CID"],
  ["SFO", "BHM"],
  ["FLG", "XNA"],
  [null, "LAX"],
  ["LAX", "SFO"],
  ["CID", "SLC"],
  ["ORD", null],
  ["SLC", "PIT"],
  ["BHM", "FLG"]
];

const shorterSet = [
    [null, 'PDX'],
    ['PDX', 'DCA'],
    ['DCA', null],
  ];

console.log(oneWayFlight(tickets)); // ['LAX', 'SFO', 'BHM', 'FLG', 'XNA', 'CID', 'SLC', 'PIT', 'ORD']
console.log(oneWayFlight(shorterSet)); // should print [ 'PDX', 'DCA' ]
// oneWayFlight(tickets);
