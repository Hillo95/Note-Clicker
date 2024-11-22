function buyUpgrade(section,toBuy) {
  if ( (up[section][toBuy].unlocked) & (!up[section][toBuy].max_level) & (n.c >= up[section][toBuy].price[up[section][toBuy].level]) ) {
    up[section][toBuy].def();
  }
}
