$('.child').on('click', () => {
  console.log('.childのイベントハンドラ');
});

const $newElemet = $('<P>', {
  class: 'child',
  text: '追加した要素',
});

$newElemet.on('click', () => {
  console.log('追加した.childのイベントハンドラ');
});

$('#parent').append($newElemet);