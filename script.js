let triger = (id, a, b) => {
  var table = document.querySelectorAll('.table');
  var box = document.querySelectorAll('.box');

  // Using onclick event we send a parameter like id,a,b
  // table id for table shown, box id for background change,p1 for get a price details

  Object.values(table).map((item, index) => {
    table[index].style.display = 'none';
  });

  Object.values(box).map((item, index) => {
    if (index <= 2) {
      box[index].style.cssText =
        'border: 1px solid black;background-color: white;';
    }
  });
  //for onclick event we show the table block
  let sel = document.getElementById(id);
  sel.style.display = 'block';

  //for onclick event we change the background
  let sel1 = document.getElementById(a);
  sel1.style.cssText = 'border: 1px solid #007F61;background-color: #F4FBF9;';

  //get onclick price detail in total
  let price = document.getElementById(b).innerHTML;
  document.querySelector('.total').innerHTML = `Total : <b>${price}</b>`;
};

//It can be use for cannot select any pair then the add card button will alert
let add = () => {
  let total = document.querySelector('.total').innerHTML;
  total !== 'DKK 0.00'
    ? alert('cart added successfuly')
    : alert('plz select first');
};

//nothing////
/////////////////////////////////////////////////
// window.onload = () => {
//     const node = document.querySelector('.tableclone');
//     const clone = node.cloneNode(true);
//     document.getElementById('tt2').appendChild(clone);

//     document.getElementById('tt3').appendChild(
//         document.querySelector('.tableclone').cloneNode(true)
//     );

//  window.onload=()=>{
//     //let tab1=[[ , 'size','colour'],['#1',]]
//     var table = document.createElement('table');
//     table.setAttribute("class", "tableclone");
//     table.style.emptyCells="hide";
//     document.getElementById('tt2').appendChild(table);
//     var header = table.createTHead();
//     var row = header.insertRow();
//     var th = document.createElement('th')
//     th.innerHTML='';
//     var th1 = document.createElement('th')
//     th1.innerHTML='size';
//     var th2 = document.createElement('th')
//     th2.innerHTML='colour';
//     row.appendChild(th)
//     row.appendChild(th1)
//     row.appendChild(th2)

//     var tbody = table.createTBody();
//     tbody.style.backgroundColor="white;"
//     var brow = tbody.insertRow();
//     var cell = brow.insertCell(0)

//     var select = document.createElement("select");
//     //row.appendChild(select)
//  }
// }
