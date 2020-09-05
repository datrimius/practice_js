// function fun1() {
//    var chbox = document.getElementById('one');
//       if (chbox.checked) {
//          alert('Выбран');
//       } else {
//          alert('Не выбран');
//       }
// };

function fun1() {
   let radi=document.querySelectorAll('#rad');
   for (var i = 0; i < radi.length; i++) {
      if (radi[i].checked) {
         alert('Выбран! ' +i+ ' элемент');
      } 
   }
}

