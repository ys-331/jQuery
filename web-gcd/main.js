// $('#button-gcd').on('click', () => {
//   const num1 = $('#num1').val();
//   const num2 = $('#num2').val();
//   const NumberNum1 = Number.parseFloat(num1);
//   const NumberNum2 = Number.parseFloat(num2);
//   const amari = NumberNum1 % NumberNum2
//   for ( amari % )
//   $('#box').html(amari);
// });

$('#button-gcd').on('click', () => {
  let amari = $('#num1').val() % $('#num2').val()
  $('#box').html(amari);
});

console.log('miss');

// const abc = ('abc') 
// $('#box').text(abc);