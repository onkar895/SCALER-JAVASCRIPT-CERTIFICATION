// if - else
var myScore = [90, 64, 78, 94]

if (myScore[1] > 90) {
  console.log('Get Reward !!!')
}else {
  console.log('Not getting Reward !!!')
}

// if - elseif

// 90 to 100 - A
// 70 to 89 - B
// 50 to 69 - C
// lower than 50 - F

var studentScore = 72

if (studentScore >= 90 && studentScore <= 100) {
  console.log('Passed with grade A')
}

else if (studentScore >= 70 && studentScore <= 89) {
  console.log('Passed with grade B')
}

else if (studentScore >= 50 && studentScore <= 69) {
  console.log('Passed with grade C')
}else {
  console.log('Fail')
}
