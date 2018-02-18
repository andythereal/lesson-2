var range = 5;
var award = 2;
var totalAward = 0;
var myAward = 0;
var question = 'Чи бажаєте почати гру?';
do {
var randomNumber = ((Math.random() * range) + 0 | 0);
var result = confirm(question);
if (result === false) {
  console.log('Сьогодні ви не виграли мільйон, а могли');
  } else {
  var playerNumber = parseInt(prompt('Введіть число'));
  if
  (playerNumber === randomNumber) {
  myAward = award * 5;
  } else {
  var playerNumber = parseInt(prompt('Введіть число'));}
  if (playerNumber === randomNumber) {
  myAward = award * 2.5;
    } else {
    var playerNumber = parseInt(prompt('Введіть число'));
    if (playerNumber === randomNumber) {
    myAward = award;
      } else {
      myAward = 0;
    }
  }
}
totalAward = totalAward + myAward;
question = 'Чи бажаєте продовжити гру?';
range = range * 2;
award = award * 3;
} while (result === true);
console.log('Дякуємо за гру, Ваш виграш становить - ' + totalAward + '$');