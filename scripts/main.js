<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

function geklickt (name) {
    alert ("fa fa-fw fa-home Benachrichtigung");
    document.write("Hallo " + name);
  }

function liebestest(name1, name2){
    var punkte;
    punkte = (((name1 + name2).length)/name2.length)*2;
    document.write(name1 + " und " + name2 + " passen zu " + punkte*10 + "% zusammen!");
  }
  liebestest("Karin","Hans");
