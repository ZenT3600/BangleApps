
var customCommand = "";
// Set up terminal
Bangle.loadWidgets();
var R = Bangle.appRect;
var termg = Graphics.createArrayBuffer(R.w, R.h, 1, {msb:true});
termg.setFont("6x8");
term = require("VT100").connect(termg, {
  charWidth : 6,
  charHeight : 8
});

/*
const chunkString = (str, n, acc) => {
    if (str.length === 0) {
        return acc;
    } else {
        acc.push(str.substring(0, n));
        return chunkStr(str.substring(n), n, acc);
    }
};
*/

term.print = str => {
  let index = 1;
  /*if (str.length > 26) {
    let cs = chunkString(str, 26, []);
    for (var c of cs) {
      term.print(c + "\n");
    }
  }*/
  for (var i of str) {
    term.char(i);
  }
  //term.y += ~~(index / 26);
  //term.x = 0;
  if (termVisible) g.reset().drawImage(termg,R.x,R.y).setFont("6x8").setFontAlign(0,-1,1).drawString("MORE",R.w-1,(R.y+R.y2)/2);
};


function showTerminal() {
  E.showMenu();
  Bangle.setUI({
    mode : "custom",
  });
  termVisible = true;
  term.print(""); // redraw terminal
}

// now start
Bangle.drawWidgets();
showTerminal();



