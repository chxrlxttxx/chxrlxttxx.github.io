function geklickt (name) {
    alert ("hello, who are you");
    document.write("Hallo " + name);
  }

function liebestest(name1, name2){
    var punkte;
    punkte = (((name1 + name2).length)/name2.length)*2;
    document.write(name1 + " und " + name2 + " passen zu " + punkte*10 + "% zusammen!");
  }
  liebestest("Karin","Hans");
