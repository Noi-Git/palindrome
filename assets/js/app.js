//find sum

//const a = [9, 23, 6, 19, 15, 144]
/*
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(a.reduce(reducer));
*/

/*
let sum = 0
  for(let i = 0; i < a.lenght; i++){
    sum += i
  }
  console.log(sum)


  let sum = 0
    for(let i = 0; i < a.lenght; i++){
      sum += a[i]
    }
    console.log(sum)
*/


/*
//Step 1
const isAnagram = (word1, word2) => {
  const sortedWord1 = word1.split('').sort().join('')
  const sortedWord2 = word2.split('').sort().join('')

  //check if they are equle

  console.log(sortWord1 === sortedWord2)
*/



//Sept 2
const isAnagram = (word1, word2) => {

  if(word1.length !== word2.length){
    console.log('Not an anagram')
  }
  const sortedWord1 = word1.split('').sort().join('')
  const sortedWord2 = word2.split('').sort().join('')

  //check if they are equle

  console.log(sortWord1 === sortedWord2)
}



//Sept 3
const isAnagram = (word1, word2) => {

  const unspaceWord1 = word.replace (' ', '')
  const unspaceWord2 = word.replace (' ', '')


  if(word1.length !== word2.length){
    console.log('Not an anagram')
  }
  const sortedWord1 = word1.split('').sort().join('')
  const sortedWord2 = word2.split('').sort().join('')

  //check if they are equle

  console.log(sortWord1 === sortedWord2)
}

//Sept 4
const isAnagram = (word1, word2) => {

  if(typeof word1 !== 'string' || typeof  word2 !== 'string'){
    console.log('Please compare')
    return
}

  const unspaceWord1 = word.replace (' ', '')
  const unspaceWord2 = word.replace (' ', '')


  if(word1.length !== word2.length){
    console.log('Not an anagram')
    return
  }

  const sortedWord1 = word1.split('').sort().join('')
  const sortedWord2 = word2.split('').sort().join('')

  //check if they are equle

  console.log(sortWord1 === sortedWord2)
}
