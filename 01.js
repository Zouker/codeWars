function solution(str){
    const array = str.split('');
    const reversedStr = array.reduce((reversed, character) => {
      return character + reversed
    }, '')
    return reversedStr
}