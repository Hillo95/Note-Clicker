function SaveData() {
  localStorage.setItem("n",JSON.stringify(n));
  localStorage.setItem("shop",JSON.stringify(shop));
  localStorage.setItem("shopLevel",toString(shopLevel));
  localStorage.setItem("uptime",toString(uptime));
}

function LoadData() {
  n = JSON.parse(localStorage.getItem("n"));
  shop = JSON.parse(localStorage.getItem("shop"));
  shopLevel = Number(localStorage.getItem("shopLevel"));
  uptime = Number(localStorage.getItem("uptime"));
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
  
  };
  shopLevel = 0;
  SaveData();
  uptime = 0;
};

try {
  LoadData();
} catch {
  console.log("welcome");
}
