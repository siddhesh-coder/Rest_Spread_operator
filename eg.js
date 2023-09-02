//REST Operator
function square(by,...nums){
    return nums.map((items) => by*items);
}

const ans = square(2,1,2,3,4,5,6,7,8,9,10);
console.log(ans);

//SPREAD Operator

const array= [34,56,78];
function add(num1,num2,num3){
   const addition = num1+num2+num3;
   console.log("Addition of three numbers:"+ addition);
}

add(...array);

//Combination of both REST & SPREAD Operator

const place = ["Mumbai","Pune","Satara","Kolhapur","Goa"];

function visitLog(place1,place2,...restVisit){
   console.log(`first visit ${place1} then go for place second ${place2} then go for rest of the places ${restVisit}`);
}

visitLog(...place);

//String to array using spread

const string = "JavaScript";
const stringArray = [...string];
console.log(stringArray);
