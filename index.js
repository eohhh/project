let user = [
  {id : 'user01', pw: '1111'},
  {id : 'user02', pw: '2222'},
  {id : 'user03', pw: '3333'}
]

let user_json = JSON.stringify(user);
localStorage.setItem('use', user_json);
user = JSON.parse(localStorage.getItem('use'));

console.log(user);

let userId =document.querySelector('input#userId');
let userPw = document.querySelector('input#userPw');

document.querySelector('form').addEventListener('submit', function(e) { 
  e.preventDefault();
  console.log(userId.value, userPw.value);
  console.log(user);
  for(let i = 0; i < user.length; i++) {
    if (user[i].id == userId.value && user[i].pw == userPw.value) {
      alert('로그인성공');
      location.href = 'index.html';
      return;
    } else {
      alert('다시 확인하세요.')
    } break;
  }
});

