// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(arr, name) {
    return arr.filter((el) => el.toLowerCase().includes(name.toLowerCase()));
  }

  function fuzzyMatch(arr, name) {
    
    const lowercaseQuery = name.toLowerCase();
  
    
    const matchingDrivers = arr.filter(driver => driver.toLowerCase().startsWith(lowercaseQuery));
  
    return matchingDrivers;
  }

  function  matchName(driver , names){
    const matchingDrivers =driver.filter(n => n.name.toLowerCase()===names.toLowerCase())
    return matchingDrivers

  }

