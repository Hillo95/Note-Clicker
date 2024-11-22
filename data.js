function SaveData() {
  localStorage.setItem("n",JSON.stringify(n));
  localStorage.setItem("shop",JSON.stringify(shop));
  localStorage.setItem("shopLevel",JSON.stringify(shopLevel));
  localStorage.setItem("uptime",JSON.stringify(uptime));
  localStorage.setItem("up",JSON.stringify(up));
}

function LoadData() {
  n = JSON.parse(localStorage.getItem("n"));
  shop = JSON.parse(localStorage.getItem("shop"));
  shopLevel = JSON.parse(localStorage.getItem("shopLevel"));
  uptime = JSON.parse(localStorage.getItem("uptime"));
  up = JSON.parge(localStorage.getItem("up"));
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
  shop = shop_template;
  up = up_template;
  
  shopLevel = 0;
  uptime = 0;
  SaveData(); //uptime moved above SaveData();
};

try {
  LoadData();
} catch {
  console.log("welcome");
}
