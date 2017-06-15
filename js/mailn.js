$(document).ready(function () {
  var arraysWord;
  var arraylength;
  var indexNumber;
  var arraysed = [];//первое число массива рандомних чисел
  var x = 0,//для клавиши revers
      c = 0;//для клавиши next

  $('.listWord li').click(function(){
    console.log("c = " + c);
    c = 0;
    indexNumber = $(this).index();
    indexNumber = indexNumber.toString();
    console.log("indexNumber = " + indexNumber);
    switch (indexNumber) {
      case '0':
        arraysWord = xxx;
        break;
      case '1':
        arraysWord = one;
        break;
      case '2':
        arraysWord = two;
        break;
      case '3':
        arraysWord = three;
        break;
      case '4':
        arraysWord = four;
        break;
      case '5':
        arraysWord = dafault;
        break;
      default: y = ' switch defalt';
    };
    console.log("arraysWord = " + arraysWord);
    arraylength = arraysWord.length;
    console.log("arraylength = " +arraylength);
    arraysed = [getRandomInt(0,arraylength)];
    loopWhile();
    pasteWord();

  })

  $('.listwordSecond li').click(function(){
    console.log("c = " + c);
    c = 0;
    indexNumber = $(this).index();
    indexNumber = indexNumber.toString();
    console.log("indexNumber = " + indexNumber);
    switch (indexNumber) {
      case '0':
        arraysWord = listttt;
        break;
      case '1':
        arraysWord = nnnnn;
        break;
      case '2':
        arraysWord = bbbbb;
        break;

      default: arraysWord = ' switch defalt';
    };
    console.log("arraysWord = " + arraysWord);
    arraylength = arraysWord.length;
    console.log("arraylength = " +arraylength);
    arraysed = [getRandomInt(0,arraylength)];
    loopWhile();
    pasteWord();

});
  $('.howToUseGit li').click(function(){
    console.log("c = " + c);
    c = 0;
    indexNumber = $(this).index();
    indexNumber = indexNumber.toString();
    console.log("indexNumber = " + indexNumber);
    switch (indexNumber) {
      case '0':
        arraysWord = introduction;
        break;
      case '1':
        arraysWord = courseOverview;
        break;
      case '2':
        arraysWord = differencesBetweenTwoFiles;
        break;
      case '3':
        arraysWord = findingDiffsBetweenLargestFiles;
        break;
      case '4':
        arraysWord = findingDiffsBetweenLargestFiles2;
        break;
      case '5':
        arraysWord = findingDiffsBetweenLargestFiles3;
        break;
      case '6':
        arraysWord = reflections;
        break;
      case '7':
        arraysWord = reflections2;
        break;
      case '8':
        arraysWord = whereDoVersionCome;
        break;
      case '9':
        arraysWord = propertiesOfaVCS;
        break;
      case '10':
          arraysWord = propertiesOfaVSCforCS;
          break;
      case '11':
        arraysWord = manualCommitInGit;
        break;
      default: arraysWord = 'switch defalt';
    };
    console.log("arraysWord = " + arraysWord);
    arraylength = arraysWord.length;
    console.log("arraylength = " +arraylength);
    arraysed = [getRandomInt(0,arraylength)];
    loopWhile();
    pasteWord();

  })

  function invsaArray(value, array) {
      for(var n = 0, p = array.length; n < p ; n++) {
          if(array[n] == value) return true;
      }
      return false;
  };
  function loopWhile() {
    while (arraysed.length < arraylength) {
      var f = getRandomInt(0,arraylength);
      if (!(invsaArray(f,arraysed))) arraysed = arraysed.concat(f);
    }
  };
  function pasteWord (){
     $("p.oneWord").text(arraysWord[arraysed[c]][0]);
     $("p.twoWord").text(arraysWord[arraysed[c]][1]);
  };
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  $("button[name=hide]").click(function () {
    $(".secondWord").toggleClass("hideTwoWord")
  })
  $("button[name=revers]").click(function () {
    x++;
    if (x % 2 == 1) {
      $('.firstWord').removeClass("oneWord").addClass("twoWord");
      $('.secondWord').removeClass("twoWord").addClass("oneWord");
      pasteWord ();
    }
    else {
      $('.firstWord').removeClass("twoWord").addClass("oneWord");
      $('.secondWord').removeClass("oneWord").addClass("twoWord");
      pasteWord ();
      }
  });
  $("button[name=next]").click(function () {
    c++;
    if (c == arraylength) {
      c = 0;
      arraysed = [getRandomInt(0,arraylength)];
      loopWhile();
    }
    pasteWord ();
    console.log(arraysWord[arraysed[c]][0]);
  });
  $('.accordionClick').click(function(e){
    var item = $(this).closest(".accordionListItem"),
        time = 400,
        content = item.find(".acordionTexItem");
    $('.acordionTexItem').slideUp(time);
    content.stop(true).slideToggle(time);
  })
});
