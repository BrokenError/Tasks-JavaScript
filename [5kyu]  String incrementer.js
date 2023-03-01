// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

function incrementString (strng) {
    return strng.replace(/\d*$/, match => {
      if (!match) return '1'
      const number_strng = String(parseInt(match) + 1)
      const diff = match.length - number_strng.length
      return diff >0 ? '0'.repeat(diff) + number_strng : number_strng
    })
  }