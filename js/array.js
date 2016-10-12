$(document).ready(function () {
  
  var indexNumber,arraysWord;
  $('.listWord li').click(function(e){
    indexNumber = $(this).index();
    console.log("indexNumber = " + indexNumber);
    indexNumber = indexNumber.toString();
    switch (indexNumber) {
      case '0':
        arraysWord = 0;
        console.log("arraysWord = " + arraysWord);
        break;
      case '1':
        arraysWord = 1;
        console.log("arraysWord = " + arraysWord);
        break;
      case '2':
        arraysWord = 2;
        console.log("arraysWord = " + arraysWord);
        break;
      case '3':
        arraysWord = '3';
        console.log("arraysWord = " + arraysWord);
        break;
      case '4':
        arraysWord = '4';
        console.log("arraysWord = " + arraysWord);
        break;
      default:y = ' switch defalt';
      }
  })
})
