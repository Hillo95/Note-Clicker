// Variables

var n = {
  c: 0,
  ps: 0,
  pc: 1,
  psm: { main: 100, temp: 0, base: 100 },
  pcm: { main: 100, temp: 0, base: 100 },
  m: { main: 100, temp: 0, base: 100 },
  t: 0
};

var noteClickStack = 0;

var page = "shop"

var uptime = 0;

//shop setup ----fix later maybe (move to shop.js)


var shop_template = {
  pencil: {
    cost: 15,
    baseCost: 15,
    costMultiplier: 1.15,
    owned: 0,
    sold: 0,
    ps: { main: 0.1, temp: 0, base: 0.1 },
    psm: { main: 100, temp: 0, base: 100 },
    pst: 0,
    power: 1,
    displayName: "Pencil",
    shopLevelReq: 0
  },
  pen: {
    cost: 150,
    baseCost: 150,
    costMultiplier: 1.15,
    owned: 0,
    sold: 0,
    ps: { main: 1, temp: 0, base: 1 },
    psm: { main: 100, temp: 0, base: 100 },
    pst: 0,
    power: 1,
    displayName: "Pen",
    shopLevelReq: 0
  },
  worker: {
    cost: 4000,
    baseCost: 4000,
    costMultiplier: 1.15,
    owned: 0,
    sold: 0,
    ps: { main: 14, temp: 0, base: 14 },
    psm: { main: 100, temp: 0, base: 100 },
    pst: 0,
    power: 1,
    displayName: "Worker",
    shopLevelReq: 0
  },
  typewriter: {
    cost: 90000,
    baseCost: 90000,
    costMultiplier: 1.15,
    owned: 0,
    sold: 0,
    ps: { main: 110, temp: 0, base: 110 },
    psm: { main: 100, temp: 0, base: 100 },
    pst: 0,
    power: 1,
    displayName: "Typewriter",
    shopLevelReq: 0
  },
  keyboard: {
    cost: 3000000,
    baseCost: 3000000,
    costMultiplier: 1.15,
    owned: 0,
    sold: 0,
    ps: { main: 900, temp: 0, base: 900 },
    psm: { main: 100, temp: 0, base: 100 },
    pst: 0,
    power: 1,
    displayName: "Keyboard",
    shopLevelReq: 0
  },
  printer: {
    cost: 9000000000,
    baseCost: 9000000000,
    costMultiplier: 1.15,
    owned: 0,
    sold: 0,
    ps: { main: 0.1, temp: 0, base: 0.1 },
    psm: { main: 100, temp: 0, base: 100 },
    pst: 0,
    power: 1,
    displayName: "Printer",
    shopLevelReq: 1
  },
  moneyPrinter: {
    cost: 1000000000000,
    baseCost: 150,
    costMultiplier: 1.15,
    owned: 0,
    sold: 0,
    ps: { main: 1, temp: 0, base: 1 },
    psm: { main: 100, temp: 0, base: 100 },
    pst: 0,
    power: 1,
    displayName: "Money Printer",
    shopLevelReq: 1
  },
  laminator: {
    cost: 400000000000000,
    baseCost: 400000000000000,
    costMultiplier: 1.15,
    owned: 0,
    sold: 0,
    ps: { main: 14, temp: 0, base: 14 },
    psm: { main: 100, temp: 0, base: 100 },
    pst: 0,
    power: 1,
    displayName: "Laminator",
    shopLevelReq: 1
  },
  typingRobot: {
    cost: 15000000000000000,
    baseCost: 15000000000000000,
    costMultiplier: 1.15,
    owned: 0,
    sold: 0,
    ps: { main: 110, temp: 0, base: 110 },
    psm: { main: 100, temp: 0, base: 100 },
    pst: 0,
    power: 1,
    displayName: "Typing Robot",
    shopLevelReq: 1
  },
  paperMill: {
    cost: 10000000000000000000,
    baseCost: 10000000000000000000,
    costMultiplier: 1.15,
    owned: 0,
    sold: 0,
    ps: { main: 900, temp: 0, base: 900 },
    psm: { main: 100, temp: 0, base: 100 },
    pst: 0,
    power: 1,
    displayName: "Paper Mill",
    shopLevelReq: 1
  }
};

var shop = shop_template;

var shopLevel = 0;

var up_template = {
  
  misc: {

  },
    
  click: {
    double_click: {
      price: [200,700,2000,5000,10000,25000,60000],
      level: 0,
      levels: 7,
      max_level: false,
      unlocked: true,
      power: 1,
      id: 010,
      def: function() { //finish and fix    move the if to the upgrades.js
        if ( (this.unlocked) & (!this.max_level) & (n.c >= this.price[this.level]) ) {
          n.c -= this.price[this.level];
          n.pcm.base += 100;
          this.level++;
          if (this.level == this.levels) {this.max_level = true;}
          UpdateAll();
        }
      }
    }
  },

  pencil: {

  },

  pen: {

  },

  worker: {

  }
  
}

var up = up_template;


function hideInfo() { //turn off for testing
  $(".infoAllT").css("visibility", "hidden");
}

function UpdateAll() {
  n.c = (Math.round(n.c * 100)) / 100;  //fixing js decimals
  n.t = (Math.round(n.t * 100)) / 100;

  n.psm.main = n.psm.base + n.psm.temp;
  n.pcm.main = n.pcm.base + n.pcm.temp;
  n.m.main = n.m.base + n.m.temp;

  n.ps = shop.pencil.pst + shop.pen.pst + shop.worker.pst + shop.typewriter.pst + shop.keyboard.pst + shop.printer.pst + shop.moneyPrinter.pst + shop.laminator.pst + shop.typingRobot.pst + shop.paperMill.pst;
  n.ps = (Math.round(n.ps * 100)) / 100; //more fixing
  
  try {
    $("#nCounterT").text(`Notes: ${abbr(Math.round(n.c))}`);
    $("#nsCounterT").text(`Notes Per Second: ${abbr(n.ps)}`);
  } catch {
    alert("didnt update text");
  }
}

function NoteOnClick() {
  //alert("noteclicked" + n.c);
  noteClickStack++;

  n.c += n.pc * (n.pcm.main / 100) * (n.m.main / 100);
  n.t += n.pc * (n.pcm.main / 100) * (n.m.main / 100);
  //alert("before updateall" + n.c);
  UpdateAll();
  //alert("after updateall" + n.c);
  $("#tNoteGainPart").text(`+${abbr(n.pc * (n.pcm.main / 100) * (n.m.main / 100))}`);
  $("#tNoteGainPart").css({
    left: `${Math.floor(Math.random() * 361) + 5}px`,
    top: `${Math.floor(Math.random() * 394) + 5}px`,
    visibility: "visible"
  });
  setTimeout(function() {
    if (noteClickStack == 1) $("#tNoteGainPart").css("visibility", "hidden")
    noteClickStack--;
  }, 800)
}  // Use Note Click Stack To Make Changing The Text More Efficient If Possible

function abbr(i) {
  let c;
  let l = String(i).length;
  if (l > 3) {

    if (l < 7) { c = `${(Math.floor((i / 10 ** 3) * 10) / 10)}K`; }
    else if (l < 10) { c = `${(Math.floor((i / 10 ** 6) * 10) / 10)}M`; }
    else if (l < 13) { c = `${(Math.floor((i / 10 ** 9) * 10) / 10)}B`; }
    else if (l < 16) { c = `${(Math.floor((i / 10 ** 12) * 10) / 10)}T`; }
    else if (l < 19) { c = `${(Math.floor((i / 10 ** 15) * 10) / 10)}Qd`; }
    else if (l < 22) { c = `${(Math.floor((i / 10 ** 18) * 10) / 10)}Qn`; }
    else if (l < 25) { c = `${(Math.floor((i / 10 ** 21) * 10) / 10)}Sx`; }
    else if (l < 28) { c = `${(Math.floor((i / 10 ** 24) * 10) / 10)}Sp`; }
    else if (l < 31) { c = `${(Math.floor((i / 10 ** 27) * 10) / 10)}Oc`; }
    else { c = "toomuch"; }

  } else { return (i); }

  return (c);
}

// Page Switch

function PageHide(tohide) {
  switch (tohide) {
    case "shop":
      $("#pShopD").css("visibility", "hidden");
      break;
    case "settings":
      $("#pSettingsD").css("visibility", "hidden");
      break;
    case "upgrades":
      $("#pUpgradesD").css("visibility", "hidden");
      break;
    default:
      break;
  }
}

function PageSwitch(topage) {
  switch (topage) {
    case "shop":
      PageHide("settings");
      PageHide("upgrades");
      $("#pShopD").css("visibility","visible");
      if (shopLevel < 1) { $(".sRow2").css("filter","brightness(0%)"); }
      else { $(".sRow2").css("filter","brightness(100%)"); }
      break;
    case "settings":
      PageHide("shop");
      PageHide("upgrades");
      $("#pSettingsD").css("visibility","visible");
      break;
    case "upgrades":
      PageHide("shop");
      PageHide("settings");
      $("#pUpgradesD").css("visibility","visible");
    default:
      break;
  }
}

PageSwitch("shop");

// Main Loop

function MainLoop() {
  n.c += n.ps * (n.psm.main / 100) * (n.m.main / 100);
  n.t += n.ps * (n.psm.main / 100) * (n.m.main / 100);
  
  UpdateAll();
  uptime++;
  if (uptime % 10 == 0) { SaveData(); }
}


UpdateAll();

setInterval(MainLoop, 1000);
