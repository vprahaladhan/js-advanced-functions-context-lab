// let asgardianBrothers = [
//   {
//     firstName: "Thor",
//     familyName: "Odinsson"
//   },
//   {
//     firstName: "Loki",
//     familyName: "Laufeysson-Odinsson"
//   }
// ]

// function intro(person, line) {
//   return `${person.firstName} ${person.familyName} says: ${line}`
// }

// const introWithContext = (line) => {
//   return `${this.firstName} ${this.familyName} says: ${line}`
// }

// let phrase = "I like this brown drink very much, bring me another!"
// intro(asgardianBrothers[0], phrase) //=> Thor Odinsson says: I like this brown drink very much, bring me another!
// console.log(introWithContext.call(asgardianBrothers[0], phrase)); //=> true
// console.log(introWithContext.apply(asgardianBrothers[0], [phrase])); //=> true

// let complaint = "I was falling for thirty minutes!"
// console.log(introWithContext.call(asgardianBrothers[1], complaint)); //=> true
// console.log(introWithContext.apply(asgardianBrothers[1], [complaint])); //=> true

function createTimeInEvent(dateTimeStamp) {
  console.log('This >> ', this);
  this.timeInEvents.push({
    type: 'TimeIn',
    hour: parseInt(dateTimeStamp.slice(-4)),
    date: dateTimeStamp.slice(0, 10)
  })
  return this;
}

const emp = {
  name: 'Suresh',
  age: 25,
  timeInEvents: []
};

console.log(createTimeInEvent.call(emp, "2014-02-28 1400"));