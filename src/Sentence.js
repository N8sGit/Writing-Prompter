import words from 'categorized-words'
import countryList from 'country-list'
import whimsy from 'whimsy'

export default function sentence(){
    
    function getRandom(){
      return Math.random();
    }

    function correctGrammar(sentence){
        let result = sentence;
        if(sentence.slice(-1) === 's'){
          result = sentence.replace(' a ', '   ')
        }
        
        if(sentence.includes('ly')){
          let tempArr = sentence.split(' ')
          let change = tempArr[tempArr.length-2]
          
          if(change.endsWith('ably')){
            change = change[change.length-2].slice(0,-2) +'le'
          }
          else change = tempArr[tempArr.length-2].slice(0,-2)
          tempArr[tempArr.length-2] = change

          return tempArr.join(' ')
        }
       return result
    }


     let nouns = words['N']
        let adjectives = words['A']
        let countries = countryList()
        let countryNames = countries.getNames()
        let countryPossibilities = ['the culture of ', 'the history of ', 'pop music of ', ' the literature of ', ' the political situation in ',
        'your thoughts on ', 'a story about a day in the life of someone who lives in ', 'the cuisine of ', 'the geography of ', 'what you fancy might go on in'   ]
        let random = getRandom()

        let result =random <= 0.20 ? `Write about ${whimsy.get(countryPossibilities)+ ' ' +  whimsy.get(countryNames)}`: 
           `Write about a ${whimsy.get(adjectives) + ' ' + whimsy.get(nouns)}`
       
      return correctGrammar(result)
}