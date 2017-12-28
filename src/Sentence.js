import words from 'categorized-words'
import countryList from 'country-list'
import whimsy from 'whimsy'

export default function sentence(){
    
    function getRandom(){
      return Math.random();
    }

     let nouns = words['N']
        let adjectives = words['A']
        let countries = countryList()
        let countryNames = countries.getNames()
        let countryPossibilities = ['the culture of ', 'the history of ', 'pop music of ', ' the literature of ', ' the political situation in ',
        'your the thoughts on ', 'a story about a day in the life of someone who lives in ', 'the cuisine of ', 'the geography of ', 'what you fancy might go on in'   ]
        let random = getRandom()

        let result =random <= 0.25 ? `Write about ${whimsy.get(countryPossibilities)+ ' ' +  whimsy.get(countryNames)}`: 
           `Write about a ${whimsy.get(adjectives) + ' ' + whimsy.get(nouns)}`
       
      return result 
}