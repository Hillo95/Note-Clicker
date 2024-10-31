function ReloadShopItem(i) {
  shop[i].cost = Math.round(shop[i].baseCost * (shop[i].costMultiplier ** shop[i].owned));
  shop[i].psm.main = shop[i].psm.temp + shop[i].psm.base;
  shop[i].ps.main = shop[i].ps.temp + shop[i].ps.base;
  shop[i].pst = shop[i].ps.main * (shop[i].psm.main / 100) * shop[i].owned * shop[i].power;

  setShopItemInfo(i);
  UpdateAll();
}


function BuyItem(i) {
  if (n.c >= shop[i].cost) {
    n.c -= shop[i].cost;
    shop[i].owned++; //use [] if param is string
    ReloadShopItem(i);
  }
}


function setShopItemInfo(i) {  // Hide When Mouse Leave Sometime
  $("#infoNameT").text(shop[i].displayName);
  $("#infoStockT").text(`You Have ${shop[i].owned}`);
  $("#infoPriceT").text(`Price: ${abbr(shop[i].cost)} Notes`);
  $("#infoBuffT").text(`Each Gives ${abbr(shop[i].ps.main * (shop[i].psm.main / 100) * shop[i].power)} Notes Per Second`);
  $("#infoTotalBuffT").text(`You Have ${shop[i].owned} Giving ${abbr(shop[i].pst)} Notes Per Second`);

  $(".infoAllT").css("visibility", "visible");
}