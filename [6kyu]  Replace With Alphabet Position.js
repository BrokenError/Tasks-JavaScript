// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  return [...text.toLowerCase().replace(/[^a-z]/g,"")].map(v=> v.charCodeAt() - 96).join(" ");
}