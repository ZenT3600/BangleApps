
var customCommand = "";
// Set up terminal
Bangle.loadWidgets();
var R = Bangle.appRect;
var termg = Graphics.createArrayBuffer(R.w, R.h, 1, {msb:true});
var termVisible = false;
termg.setFont("6x8");
term = require("VT100").connect(termg, {
  charWidth : 6,
  charHeight : 8
});
term.print = str => {
  let index = 0;
  for (var i of str) {
    term.char(i);
    if (index > 26) {
      term.char('\n');
    }
    index++
  }
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
showTerminal
