function SaveData() {
  localStorage.setItem("n",JSON.stringify(n));
  localStorage.setItem("shop",JSON.stringify(shop));
  localStorage.setItem("shopLevel",toString(shopLevel));
  localStorage.setItem("uptime",toString(uptime));
}

function LoadData() {
  n = JSON.parse(localStorage.getItem("n"));
  shop = JSON.parse(localStorage.getItem("shop"));
  shopLevel = toNumber(localStorage.getItem("shopLevel"));
  uptime = toNumber(localStorage.getItem("uptime"));
}

function ResetData() {
  n = {
    c: 0,
    ps: 0,
    pc: 1,
    psm: { main: 100, temp: 0, base: 100 },
    pcm: { main: 100, temp: 0, base: 100 },
    m: { main: 100, temp: 0, base: 100 },
    t: 0
  };
  shop = {
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
      displayName: "Pencil"
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
      displayName: "Pen"
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
      displayName: "Worker"
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
      displayName: "Typewriter"
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
      displayName: "Keyboard"
    }
  };
  shopLevel = 0;
  SaveData();
  uptime = 0;
}

try {
  LoadData();
} catch {
  console.log("welcome");
}