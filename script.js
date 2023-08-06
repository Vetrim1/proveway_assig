// window.onload = () => {
//     const node = document.querySelector('.tableclone');
//     const clone = node.cloneNode(true);
//     document.getElementById('tt2').appendChild(clone);

//     document.getElementById('tt3').appendChild(
//         document.querySelector('.tableclone').cloneNode(true)
//     );
// }

let triger = (id, a, b) => {
  var table = document.querySelectorAll('.table');
  var box = document.querySelectorAll('.box');

  Object.values(table).map((item, index) => {
    table[index].style.display = 'none';
  });

  Object.values(box).map((item, index) => {
    if (index <= 2) {
      box[index].style.cssText =
        'border: 1px solid black;background-color: white;';
    }
  });

  let sel = document.getElementById(id);
  sel.style.display = 'block';

  let sel1 = document.getElementById(a);
  sel1.style.cssText = 'border: 1px solid #007F61;background-color: #F4FBF9;';

  let price = document.getElementById(b).innerHTML;
  document.querySelector('.total').innerHTML = `${price}`;
};

let add = () => {
  let total = document.querySelector('.total').innerHTML;
  total !== 'DKK 0.00'
    ? alert('cart added successfuly')
    : alert('plz select first');
};
