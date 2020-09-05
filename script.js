function fun1() {
   var chbox = document.getElementById('one');
      if (chbox.checked) {
         alert('Выбран');
      } else {
         alert('Не выбран');
      }
};

function fun2() {
   let radi=document.querySelectorAll('#rad');
   for (var i = 0; i < radi.length; i++) {
      if (radi[i].checked) {
         alert('Выбран! ' +i+ ' элемент');
      } 
   }
}

function fun3() {
   var sel = document.getElementById('mySelect').selectedIndex;
   var options=document.getElementById('mySelect').options;
   alert('Выбрана опция ' +options[sel].text);
}

function fun4() {
   var rng = document.getElementById('r2');
   var two=document.getElementById('two');
   two.value=rng.value;
}

function fun5() {
   var dv = document.getElementById('r3');
   var div=document.getElementById('test');
   div.style.width=dv.value+'%';
}



