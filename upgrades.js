function buyUpgrade(section,toBuy) { //maybe change if sometime if there are other currencies & change to compensate for untiered upgrades
  if ( (up[section][toBuy].unlocked) & (!up[section][toBuy].max_level) & (n.c >= up[section][toBuy].price[up[section][toBuy].level]) ) {
    up[section][toBuy].def();
  }
}

function setUpgradeInfo(section,i) {  // Hide When Mouse Leave Sometime ***** done???
  if (up[section][i].unlocked) {
    $("#infoNameT").text(up[section][i].display_name);
    $("#infoStockT").text(up[section][i].max_level ? 'Max Level' : `Level ${up[section][i].level + 1} Out Of ${up[section][i].levels}`);
    $("#infoPriceT").text(`Price: ${abbr(up[section][i].price[up[section][i].level])} Notes`);
    $("#infoBuffT").text('Doubles Your Notes Per Click');
    $("#infoTotalBuffT").text(' ');

    $(".infoAllT").css("visibility", "visible");
  }
}
