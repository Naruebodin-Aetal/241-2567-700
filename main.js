/*
//String, Number, Boolean, Object, Array

//String
let firstname = "John";
const idcard = '1234'; //ค่าไม่เปลี่ยนแปลง

//Number
let age = 25;
let height = 5.9;

//Boolean
let isMarried = false;
console.log('my name is ' + firstname + ' and I am ' + age + ' years old');*/

/*[ + - * / % == != > < >= <= ]*/

/*
let number1 = 5;
let number2 = 8;
*/

/*
let result = number1 + number2;
console.log('new number is ',result);//48

let condition = number1 == number2;//Boolean ค่าเป็น true หรือ false
console.log('result of condition is',condition);
*/

/*
// if-else condition
if (number1 != number2) {
        console.log('this is if');
}else if(number1 == number2){
        console.log('this is else if');
}else{
        console.log('this is else');
}
*/

/*
let score = prompt('Enter your score: ');//'60'
console.log('Your score is',score);
if (score >= 80) {//false
        console.log('Grade A');
}else if(score >= 70){//false
        console.log('Grade B');
}else if(score >= 60){//true
        console.log('Grade C');
}else if(score >= 50){
        console.log('Grade D');
}else{
        console.log('Grade F');
}*/

/* && คือ and || คือ or  ! คือ not */

/*//True && True = True
let condition = !(number1>=3 || number2>=10);
console.log('result of condition is',condition);

let age = 30;
let gender = 'male';
//True && True = True
if(age >= 20 && gender == 'male'){
        console.log('You are male adult');
}*/

let number = 20;

if(!(number % 2 == 0)){
        console.log('This is even number');
}

/* while for */
let counter = 0;
console.log('while loop');

while(counter < 10){
        console.log('while loop');
        counter++;
}
for (let counter = 0; counter < 10; counter++) {
        console.log('for loop');
}

/* Array */
/*
let ages = [30, 35, 40];
console.log('new age', ages[0], ages[2]);
console.log('age list', ages);

//1.แทนที่ค่าใน array
ages = [45, 50];
console.log('age list', ages);

//2.ต่อค่าใน array
ages.push(55);
console.log('new age', ages);*/

/*
let ages = [30, 35, 40, 45, 50];
if(!ages.includes(40)){
    console.log('you have to be 40');
}*/

/*
let ages = [90,60,40,45,50];
console.log(ages);
ages.sort();
console.log(ages);

let names_list = ['John', 'Jane', 'Joe'];
names_list.push('Jack');
console.log(names_list.length);
for(let index = 0; index < names_list.length; index++){
    console.log('names list', names_list[index]);
}*/

/* Object *//*
let student = [{
    name: 'zz',
    age: 20,
    grade: 'A'
},{
   name: 'xx',
   age: 25,
   grade: 'B'
}];

//student.pop()//ลบข้อมูลตัวสุดท้าย ใช่ push sort ได้เหมือนกัน

for(let index = 0; index < student.length; index++){
    console.log('student number', (index+1));
    console.log('student name', student[index].name);
    console.log('student age', student[index].age);
    console.log('student grade', student[index].grade);
}

let scores1 = 50
let scores2 = 90
let grade = ''*/
//ประกาศฟังก์ชัน ที่มีparameter เป็น scores
//let calculateGrade = (scores) => { //arrow function
/*function calculateGrade(scores) {
    if (scores >= 80) {
        grade = 'A';
    } else if (scores >= 70) {
        grade = 'B';
    } else if (scores >= 60) {
        grade = 'C';
    } else if (scores >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return grade;
}
let student1 = calculateGrade(scores1);
let student2 = calculateGrade(scores2);
console.log('grade', student1, student2);*/

/*
let scores = [50, 90, 70, 80, 60];
for (let index = 0; index < scores.length; index++) {
    console.log((scores[index]));
}
scores = scores.map((s) => {
    return s*2;});//เอาค่าใน array มาคูณ 2

scores.forEach((s) => {
    console.log('newscore:', s);
})*/

/*let scores = [10, 20, 30, 40];
let newscores = []

for(let index = 0; index < scores.length; index++){
    console.log('score:', scores[index]);
    /*
    if(scores[index] >= 30){
        newscores.push(scores[index]);
    }
}*/

/*let newscotes = scores.filter((s) => {
    return s >= 30;
    })

newscores.forEach((ns) => {
    console.log('newscore:', ns);
})*/

// object function
let students = [
    {
        name: 'John',
        age: 25,
        grade: 'A'
    },
    {
        name: 'Jane',
        age: 30,
        grade: 'B'
    },
    {
        name: 'Joe',
        age: 35,
        grade: 'C'
    }
]
let student = students.find((s) =>{
    if (s.name == 'Jane') {
        return s;
    }
})

let doublescore_student = students.map((s) => {
    s.score = s.score * 2;
})

let highscore_student = students.filter((s) => {
    if(scores > 80){
        return true;
    }
})
console.log('student:', student);
console.log('highscore_student:', highscore_student);