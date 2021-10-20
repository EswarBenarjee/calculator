var digit = '';

function update(a) {
  if(a=='+'||a=='-'||a=='*'||a=='/') {
    var last = digit.substring(digit.length - 1);
    if(last=='+'||last=='-'||last=='*'||last=='/') {
      digit = digit.slice(0, -1) + a;
    }
    else {
      digit = digit + a;
    }
  }
  else {
    digit = digit + a;
  }
  see();
}

function see() {
  document.getElementById('lookMe').innerHTML = digit;
}

function answer() {
  var ans = eval(digit);
  document.getElementById('lookMe').innerHTML = ans;
  digit = '';
}

function clr() {
  digit = '0';
  see();
  digit = '';
}
