// 회원가입시 정보저장.
let na = document.querySelector('input#userName');
let id = document.querySelector('input#id');
let pw = document.querySelector('input#pw');
let btn = document.querySelector('input#btn');
let obj = new Object();

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(na.value);
  let js = JSON.parse(localStorage.getItem('use'));
  console.log(js)

  for (let i = 0; i < js.length; i++) {
    if (id.value == js[i].id) {
      alert("중복된 ID입니다.");
    } else {
      obj.id = id.value;
      obj.pw = pw.value;
      obj.na = na.value;
      js.push(obj);
      localStorage.setItem("use", JSON.stringify(js));
      alert("회원가입완료!!");
      location.href = 'blog.html';
    }
    break;
  }
})