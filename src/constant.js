/*
Please decode the text below. Upon decoding, 
you will be taken to a URL with further instructions 
on completing the challenge. 
aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw==
*/

function decodeBase64AndGenerateURL(encodedString) {
  const decodedString = atob(encodedString);
  return decodedString;
}

const encodedString =
  "aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw==";

export const decodedURL = decodeBase64AndGenerateURL(encodedString);
// console.log({ decodedURL });
