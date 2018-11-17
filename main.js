var savegame = JSON.parse(localStorage.getItem("savegame"));

var storage = 0;

if ((typeof savegame) != "undefined") {
  game = savegame;
}

function tier1produced() {
  if (game.money >= game.tier1cost) {
    game.tier1amt += 1
    game.tier1until10 += 1;
    game.money -= game.tier1cost
    if (game.tier1display >= 1e6) {
      document.getElementById("tier1amt").innerHTML = game.tier1display.toExponential(2);
    } else {
      document.getElementById("tier1amt").innerHTML = game.tier1display;
    }
    if(game.tier1until10 == 10) {
      game.tier1until10 = 0
      game.tier1cost = game.tier1cost * 100
      game.tier1mult += game.tier1mult
      document.getElementById("tier1mult").innerHTML = game.tier1mult;
      if (game.tier1cost >= 1e6) {
        document.getElementById("tier1cost").innerHTML = game.tier1cost.toExponential(2);
      } else {
        document.getElementById("tier1cost").innerHTML = game.tier1cost;
      }
    }
    document.getElementById("tier1until10").innerHTML = game.tier1until10;
  }
}

function tier2produced() {
  if (game.money >= game.tier2cost) {
    game.tier2amt += 1
    game.tier2until10 += 1;;
    game.money -= game.tier2cost
    if (game.tier2display >= 1e6) {
      document.getElementById("tier2amt").innerHTML = game.tier2display.toExponential(2);
    } else {
      document.getElementById("tier2amt").innerHTML = game.tier2display;
    }
    if(game.tier2until10 == 10) {
      game.tier2until10 = 0
      game.tier2cost = game.tier2cost * 1000
      game.tier2mult += game.tier2mult
      document.getElementById("tier2mult").innerHTML = game.tier2mult;
      if (tier2cost >= 1e6) {
        document.getElementById("tier2cost").innerHTML = game.tier2cost.toExponential(2);
      } else {
        document.getElementById("tier2cost").innerHTML = game.tier2cost;
      }
    }
    document.getElementById("tier2until10").innerHTML = game.tier2until10;
  }
}

function tier3produced() {
  if (game.money >= game.tier3cost) {
    game.tier3amt += 1
    game.tier3until10 += 1;
    game.money -= game.tier3cost
    if (game.tier3display >= 1e6) {
      document.getElementById("tier3amt").innerHTML = game.tier3display.toExponential(2);
    } else {
      document.getElementById("tier3amt").innerHTML = game.tier3display;
    }
    if(game.tier3until10 == 10) {
      game.tier3until10 = 0
      game.tier3cost = game.tier3cost * 10000
      game.tier3mult += game.tier3mult
      document.getElementById("tier3mult").innerHTML = game.tier3mult;
      if (tier3cost >= 1e6) {
        document.getElementById("tier3cost").innerHTML = game.tier3cost.toExponential(2);
      } else {
        document.getElementById("tier3cost").innerHTML = game.tier3cost;
      }
    }
    document.getElementById("tier3until10").innerHTML = game.tier3until10;
  }
}

function tier4produced() {
  if (game.money >= game.tier4cost) {
    game.tier4amt += 1
    game.tier4until10 += 1;
    game.money -= game.tier4cost
    if (game.tier4display >= 1e6) {
      document.getElementById("tier4amt").innerHTML = game.tier4display.toExponential(2);
    } else {
      document.getElementById("tier4amt").innerHTML = game.tier4display;
    }
    if(game.tier4until10 == 10) {
      game.tier4until10 = 0
      game.tier4cost = game.tier4cost * 100000
      game.tier4mult += game.tier4mult;
      document.getElementById("tier4mult").innerHTML = game.tier4mult;
      if (game.tier4cost >= 1e6) {
        document.getElementById("tier4cost").innerHTML = game.tier4cost.toExponential(2);
      } else {
        document.getElementById("tier4cost").innerHTML = game.tier4cost;
      }
    }
    document.getElementById("tier4until10").innerHTML = game.tier4until10;
  }
}

function tier5produced() {
  if (game.money >= game.tier5cost) {
    game.tier5amt += 1
    game.tier5until10 += 1;
    game.money -= game.tier5cost
    if (game.tier5display >= 1e6) {
      document.getElementById("tier5amt").innerHTML = game.tier5display.toExponential(2);
    } else {
      document.getElementById("tier5amt").innerHTML = game.tier5display;
    }
    if(game.tier5until10 == 10) {
      game.tier5until10 = 0
      game.tier5cost = tier5cost * 10000000
      game.tier5mult += tier5mult
      document.getElementById("tier5mult").innerHTML = game.tier5mult;
      if (game.tier5cost >= 1e6) {
        document.getElementById("tier5cost").innerHTML = game.tier5cost.toExponential(2);
      } else {
        document.getElementById("tier5cost").innerHTML = game.tier5cost;
      }
    }
    document.getElementById("tier5until10").innerHTML = tier5until10;
  }
}

function tier1until10func() {
  if (game.money >= (game.tier1cost * 10 - (game.tier1until10 * game.tier1cost))) {
    oppositerange10(1)
    game.tier1amt += storage
    game.money -= (game.tier1cost * storage)
    if (game.tier1display >= 1e6) {
      document.getElementById("tier1amt").innerHTML = game.tier1display.toExponential(2);
    } else {
      document.getElementById("tier1amt").innerHTML = game.tier1display;
    }
    game.tier1until10 = 0
    game.tier1cost = game.tier1cost * 100
    game.tier1mult += game.tier1mult
    document.getElementById("tier1mult").innerHTML = game.tier1mult;
    if (game.tier1cost >= 1e6) {
      document.getElementById("tier1cost").innerHTML = game.tier1cost.toExponential(2);
    } else {
      document.getElementById("tier1cost").innerHTML = game.tier1cost;
    }
    document.getElementById("tier1until10").innerHTML = game.tier1until10;
  }
}

function tier2until10func() {
  if (game.money >= (game.tier2cost * 10 - (game.tier2until10 * game.tier2cost))) {
    oppositerange10(2)
    game.tier2amt += storage
    game.money -= (game.tier2cost * storage)
    if (game.tier2display >= 1e6) {
      document.getElementById("tier2amt").innerHTML = game.tier2display.toExponential(2);
    } else {
      document.getElementById("tier2amt").innerHTML = game.tier2display;
    }
    game.tier2until10 = 0
    game.tier2cost = game.tier2cost * 1000
    game.tier2mult += game.tier2mult
    document.getElementById("tier2mult").innerHTML = game.tier2mult;
    if (game.tier2cost >= 1e6) {
      document.getElementById("tier2cost").innerHTML = game.tier2cost.toExponential(2);
    } else {
      document.getElementById("tier2cost").innerHTML = game.tier2cost;
    }
    document.getElementById("tier2until10").innerHTML = game.tier2until10;
  }
}

function tier3until10func() {
  if (game.money >= (game.tier3cost * 10 - (game.tier3until10 * game.tier3cost))) {
    oppositerange10(3)
    game.tier3amt += storage
    game.money -= (game.tier3cost * storage)
    if (game.tier3display >= 1e6) {
      document.getElementById("tier3amt").innerHTML = game.tier3display.toExponential(2);
    } else {
      document.getElementById("tier3amt").innerHTML = game.tier3display;
    }
    game.tier3until10 = 0
    game.tier3cost = game.tier3cost * 10000
    game.tier3mult += game.tier3mult
    document.getElementById("tier3mult").innerHTML = game.tier3mult;
    if (game.tier3cost >= 1e6) {
      document.getElementById("tier3cost").innerHTML = game.tier3cost.toExponential(2);
    } else {
      document.getElementById("tier3cost").innerHTML = game.tier3cost;
    }
    document.getElementById("tier3until10").innerHTML = game.tier3until10;
  }
}

function tier4until10func() {
  if (game.money >= (game.tier4cost * 10 - (game.tier4until10 * game.tier4cost))) {
    oppositerange10(4)
    game.tier4amt += storage
    game.money -= (game.tier4cost * storage)
    if (game.tier4display >= 1e6) {
      document.getElementById("tier4amt").innerHTML = game.tier4display.toExponential(2);
    } else {
      document.getElementById("tier4amt").innerHTML = game.tier4display;
    }
    game.tier4until10 = 0
    game.tier4cost = game.tier4cost * 100000
    game.tier4mult += game.tier4mult
    document.getElementById("tier4mult").innerHTML = game.tier4mult;
    if (game.tier4cost >= 1e6) {
      document.getElementById("tier4cost").innerHTML = game.tier4cost.toExponential(2);
    } else {
      document.getElementById("tier4cost").innerHTML = game.tier4cost;
    }
    document.getElementById("tier4until10").innerHTML = game.tier4until10;
  }
}

function tier5until10func() {
  if (game.money >= (game.tier5cost * 10 - (game.tier5until10 * game.tier5cost))) {
    oppositerange10(5)
    game.tier5amt += storage
    game.money -= (game.tier5cost * storage)
    if (game.tier5display >= 1e6) {
      document.getElementById("tier5amt").innerHTML = game.tier5display.toExponential(2);
    } else {
      document.getElementById("tier5amt").innerHTML = game.tier5display;
    }
    game.tier5until10 = 0
    game.tier5cost = game.tier5cost * 10000000
    game.tier5mult += game.tier5mult
    document.getElementById("tier5mult").innerHTML = game.tier5mult;
    if (game.tier5cost >= 1e6) {
      document.getElementById("tier5cost").innerHTML = game.tier5cost.toExponential(2);
    } else {
      document.getElementById("tier5cost").innerHTML = game.tier5cost;
    }
    document.getElementById("tier5until10").innerHTML = game.tier5until10;
  }
}

function infupgrade1() {
  if (game.infcoins >= game.infupgrade1cost) {
    game.infcoins -= game.infupgrade1cost
    game.infupgrade1cost = game.infupgrade1cost * 2;
    game.infupgrade1 = game.infupgrade1 * 10;
    document.getElementById("infcurrency").innerHTML = game.infcoins;
    document.getElementById("infupgrade1cost").innerHTML = game.infupgrade1cost;
  }
}

function infupgrade2() {
  if (game.infcoins >= game.infupgrade2cost) {
    game.infcoins -= game.infupgrade2cost
    game.infupgrade2cost = game.infupgrade2cost * 2;
    game.infupgrade2 = game.infupgrade2 * 5;
    document.getElementById("infcurrency").innerHTML = game.infcoins;
    document.getElementById("infupgrade2cost").innerHTML = game.infupgrade2cost;
  }
}

function autobuyfunc() {
  game.autobuy = !game.autobuy
}

function prestige() {
  if(game.tier5amt >= game.prestigecost) {
    game.money = game.infupgrade1;
    game.prestigecost += 20;
    game.prestigemult = game.prestigemult * 100;
    game.tier1amt = 0;
    game.tier1cost = 1e1;
    game.tier1mult = 1;
    game.tier1until10 = 0;
    game.tier1display = 0;
    game.tier2amt = 0;
    game.tier2cost = 1e2;
    game.tier2mult = 1;
    game.tier2until10 = 0;
    game.tier2display = 0;
    game.tier3amt = 0;
    game.tier3cost = 1e3;
    game.tier3mult = 1;
    game.tier3until10 = 0;
    game.tier3display = 0;
    game.tier4amt = 0;
    game.tier4cost = 1e4;
    game.tier4mult = 1;
    game.tier4until10 = 0;
    game.tier4display = 0;
    game.tier5amt = 0;
    game.tier5cost = 1e5;
    game.tier5mult = 1;
    game.tier5until10 = 0;
    game.tier5display = 0;
      document.getElementById("currency").innerHTML = game.money;
      document.getElementById("tier1amt").innerHTML = game.tier1display;
      document.getElementById("tier2amt").innerHTML = game.tier2display;
      document.getElementById("tier3amt").innerHTML = game.tier3display;
      document.getElementById("tier4amt").innerHTML = game.tier4display;
      document.getElementById("tier5amt").innerHTML = game.tier5display;
      document.getElementById("tier1cost").innerHTML = game.tier1cost;
      document.getElementById("tier2cost").innerHTML = game.tier2cost;
      document.getElementById("tier3cost").innerHTML = game.tier3cost;
      document.getElementById("tier4cost").innerHTML = game.tier4cost;
      document.getElementById("tier5cost").innerHTML = game.tier5cost;
      document.getElementById("tier1mult").innerHTML = game.tier1mult;
      document.getElementById("tier2mult").innerHTML = game.tier2mult;
      document.getElementById("tier3mult").innerHTML = game.tier3mult;
      document.getElementById("tier4mult").innerHTML = game.tier4mult;
      document.getElementById("tier5mult").innerHTML = game.tier5mult;
      document.getElementById("prestigecost").innerHTML = game.prestigecost;
  }
}

function megaprestige() {
  if(game.tier5amt >= game.megaprestigecost) {
    game.money = game.infupgrade1;
    game.megaprestigecost += 100;
    game.megaprestigemult = game.megaprestigemult * 500;
    game.prestigecost = 20;
    game.prestigemult = 1;
    game.tier1amt = 0;
    game.tier1cost = 1e1;
    game.tier1mult = 1;
    game.tier1until10 = 0;
    game.tier1display = 0;
    game.tier2amt = 0;
    game.tier2cost = 1e2;
    game.tier2mult = 1;
    game.tier2until10 = 0;
    game.tier2display = 0;
    game.tier3amt = 0;
    game.tier3cost = 1e3;
    game.tier3mult = 1;
    game.tier3until10 = 0;
    game.tier3display = 0;
    game.tier4amt = 0;
    game.tier4cost = 1e4;
    game.tier4mult = 1;
    game.tier4until10 = 0;
    game.tier4display = 0;
    game.tier5amt = 0;
    game.tier5cost = 1e5;
    game.tier5mult = 1;
    game.tier5until10 = 0;
    game.tier5display = 0;
      document.getElementById("currency").innerHTML = game.money;
      document.getElementById("tier1amt").innerHTML = game.tier1display;
      document.getElementById("tier2amt").innerHTML = game.tier2display;
      document.getElementById("tier3amt").innerHTML = game.tier3display;
      document.getElementById("tier4amt").innerHTML = game.tier4display;
      document.getElementById("tier5amt").innerHTML = game.tier5display;
      document.getElementById("tier1cost").innerHTML = game.tier1cost;
      document.getElementById("tier2cost").innerHTML = game.tier2cost;
      document.getElementById("tier3cost").innerHTML = game.tier3cost;
      document.getElementById("tier4cost").innerHTML = game.tier4cost;
      document.getElementById("tier5cost").innerHTML = game.tier5cost;
      document.getElementById("tier1mult").innerHTML = game.tier1mult;
      document.getElementById("tier2mult").innerHTML = game.tier2mult;
      document.getElementById("tier3mult").innerHTML = game.tier3mult;
      document.getElementById("tier4mult").innerHTML = game.tier4mult;
      document.getElementById("tier5mult").innerHTML = game.tier5mult;
      document.getElementById("prestigecost").innerHTML = game.prestigecost;
      document.getElementById("megaprestigecost").innerHTML = game.megaprestigecost;
  }
}

function infinityprestige() {
  if(game.money >= Infinity || isNaN(game.money)) {
    game.money = game.infupgrade1;
    game.prestigecost = 20;
    game.prestigemult = 1;
    game.megaprestigecost = 100;
    game.megaprestigemult = 1;
    game.tier1amt = 0;
    game.tier1cost = 1e1;
    game.tier1mult = 1;
    game.tier1until10 = 0;
    game.tier1display = 0;
    game.tier2amt = 0;
    game.tier2cost = 1e2;
    game.tier2mult = 1;
    game.tier2until10 = 0;
    game.tier2display = 0;
    game.tier3amt = 0;
    game.tier3cost = 1e3;
    game.tier3mult = 1;
    game.tier3until10 = 0;
    game.tier3display = 0;
    game.tier4amt = 0;
    game.tier4cost = 1e4;
    game.tier4mult = 1;
    game.tier4until10 = 0;
    game.tier4display = 0;
    game.tier5amt = 0;
    game.tier5cost = 1e5;
    game.tier5mult = 1;
    game.tier5until10 = 0;
    game.tier5display = 0;
    game.infcoins += 1;
      document.getElementById("currency").innerHTML = game.money;
      document.getElementById("tier1amt").innerHTML = game.tier1display;
      document.getElementById("tier2amt").innerHTML = game.tier2display;
      document.getElementById("tier3amt").innerHTML = game.tier3display;
      document.getElementById("tier4amt").innerHTML = game.tier4display;
      document.getElementById("tier5amt").innerHTML = game.tier5display;
      document.getElementById("tier1cost").innerHTML = game.tier1cost;
      document.getElementById("tier2cost").innerHTML = game.tier2cost;
      document.getElementById("tier3cost").innerHTML = game.tier3cost;
      document.getElementById("tier4cost").innerHTML = game.tier4cost;
      document.getElementById("tier5cost").innerHTML = game.tier5cost;
      document.getElementById("tier1mult").innerHTML = game.tier1mult;
      document.getElementById("tier2mult").innerHTML = game.tier2mult;
      document.getElementById("tier3mult").innerHTML = game.tier3mult;
      document.getElementById("tier4mult").innerHTML = game.tier4mult;
      document.getElementById("tier5mult").innerHTML = game.tier5mult;
      document.getElementById("prestigecost").innerHTML = game.prestigecost;
      document.getElementById("megaprestigecost").innerHTML = game.megaprestigecost;

      document.getElementById("infcurrency").innerHTML = game.infcoins;
  }
}


function roundNum(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}

function cheat() {
  game.money = game.money * 1e100
  game.prestigemult = game.prestigemult * 100
}

function save() {
  localStorage.setItem("savegame", JSON.stringify(game));
}

function oppositerange10(tiernum) {
  if (tiernum == 1) {
    if (game.tier1until10 == 10) {
      storage = 0;
    } else if (game.tier1until10 == 9) {
      storage = 1;
    } else if (game.tier1until10 == 8) {
      storage = 2;
    } else if (game.tier1until10 == 7) {
      storage = 3;
    } else if (game.tier1until10 == 6) {
      storage = 4;
    } else if (game.tier1until10 == 5) {
      storage = 5;
    } else if (game.tier1until10 == 4) {
      storage = 6;
    } else if (game.tier1until10 == 3) {
      storage = 7;
    } else if (game.tier1until10 == 2) {
      storage = 8;
    } else if (game.tier1until10 == 1) {
      storage = 9;
    } else {
      storage = 10;
    }
  } else if (tiernum == 2) {
    if (game.tier2until10 == 10) {
      storage = 0;
    } else if (game.tier2until10 == 9) {
      storage = 1;
    } else if (game.tier2until10 == 8) {
      storage = 2;
    } else if (game.tier2until10 == 7) {
      storage = 3;
    } else if (game.tier2until10 == 6) {
      storage = 4;
    } else if (game.tier2until10 == 5) {
      storage = 5;
    } else if (game.tier2until10 == 4) {
      storage = 6;
    } else if (game.tier2until10 == 3) {
      storage = 7;
    } else if (game.tier2until10 == 2) {
      storage = 8;
    } else if (game.tier2until10 == 1) {
      storage = 9;
    } else {
      storage = 10;
    }
  } else if (tiernum == 3) {
    if (game.tier3until10 == 10) {
      storage = 0;
    } else if (game.tier3until10 == 9) {
      storage = 1;
    } else if (game.tier3until10 == 8) {
      storage = 2;
    } else if (game.tier3until10 == 7) {
      storage = 3;
    } else if (game.tier3until10 == 6) {
      storage = 4;
    } else if (game.tier3until10 == 5) {
      storage = 5;
    } else if (game.tier3until10 == 4) {
      storage = 6;
    } else if (game.tier3until10 == 3) {
      storage = 7;
    } else if (game.tier3until10 == 2) {
      storage = 8;
    } else if (game.tier3until10 == 1) {
      storage = 9;
    } else {
      storage = 10;
    }
  } else if (tiernum == 4) {
    if (game.tier4until10 == 10) {
      storage = 0;
    } else if (game.tier4until10 == 9) {
      storage = 1;
    } else if (game.tier4until10 == 8) {
      storage = 2;
    } else if (game.tier4until10 == 7) {
      storage = 3;
    } else if (game.tier4until10 == 6) {
      storage = 4;
    } else if (game.tier4until10 == 5) {
      storage = 5;
    } else if (game.tier4until10 == 4) {
      storage = 6;
    } else if (game.tier4until10 == 3) {
      storage = 7;
    } else if (game.tier4until10 == 2) {
      storage = 8;
    } else if (game.tier4until10 == 1) {
      storage = 9;
    } else {
      storage = 10;
    }
  } else if (tiernum == 5) {
    if (game.tier5until10 == 10) {
      storage = 0;
    } else if (game.tier5until10 == 9) {
      storage = 1;
    } else if (game.tier5until10 == 8) {
      storage = 2;
    } else if (game.tier5until10 == 7) {
      storage = 3;
    } else if (game.tier5until10 == 6) {
      storage = 4;
    } else if (game.tier5until10 == 5) {
      storage = 5;
    } else if (game.tier5until10 == 4) {
      storage = 6;
    } else if (game.tier5until10 == 3) {
      storage = 7;
    } else if (game.tier5until10 == 2) {
      storage = 8;
    } else if (game.tier5until10 == 1) {
      storage = 9;
    } else {
      storage = 10;
    }
  }
}

var game = {
  money: 10,

  prestigecost: 20,
  prestigemult: 1,

  megaprestigecost: 100,
  megaprestigemult: 1,

  infcoins: 0,

  tier1amt: 0,
  tier1cost: 1e1,
  tier1mult: 1,
  tier1until10: 0,
  tier1display: 0,

  tier2amt: 0,
  tier2cost: 1e2,
  tier2mult: 1,
  tier2until10: 0,
  tier2display: 0,

  tier3amt: 0,
  tier3cost: 1e3,
  tier3mult: 1,
  tier3until10: 0,
  tier3display: 0,

  tier4amt: 0,
  tier4cost: 1e4,
  tier4mult: 1,
  tier4until10: 0,
  tier4display: 0,

  tier5amt: 0,
  tier5cost: 1e5,
  tier5mult: 1,
  tier5until10: 0,
  tier5display: 0,

  autobuy: false,

  infupgrade1: 10,
  infupgrade1cost: 1,

  infupgrade2: 1,
  infupgrade2cost: 1
};

window.setInterval(function() {

  game.money += (game.tier1amt / 10 * game.tier1mult * game.prestigemult * game.megaprestigemult * game.infupgrade2)
  game.tier1amt += (game.tier2amt / 10 * game.tier2mult * game.prestigemult * game.megaprestigemult * game.infupgrade2)
  game.tier2amt += (game.tier3amt / 10 * game.tier3mult * game.prestigemult * game.megaprestigemult * game.infupgrade2)
  game.tier3amt += (game.tier4amt / 10 * game.tier4mult * game.prestigemult * game.megaprestigemult * game.infupgrade2)
  game.tier4amt += (game.tier5amt / 10 * game.tier5mult * game.prestigemult * game.megaprestigemult * game.infupgrade2)

  if (game.autobuy) {
    tier1until10func()
    tier2until10func()
    tier3until10func()
    tier4until10func()
    tier5until10func()
    tier1until10func()
    tier2until10func()
    tier3until10func()
    tier4until10func()
    tier5until10func()
    tier1until10func()
    tier2until10func()
    tier3until10func()
    tier4until10func()
    tier5until10func()
  }

  game.money = roundNum(game.money, 1)

  game.tier1amt = roundNum(game.tier1amt, 1)
  game.tier2amt = roundNum(game.tier2amt, 1)
  game.tier3amt = roundNum(game.tier3amt, 1)
  game.tier4amt = roundNum(game.tier4amt, 1)

  game.tier1display = roundNum(game.tier1amt, 0)
  game.tier2display = roundNum(game.tier2amt, 0)
  game.tier3display = roundNum(game.tier3amt, 0)
  game.tier4display = roundNum(game.tier4amt, 0)
  game.tier5display = roundNum(game.tier5amt, 0)

  if (game.money >= 1e6) {
    if (game.money >= Infinity) {
      game.money = Infinity;
      document.getElementById("currency").innerHTML = game.money;
    } else {
      document.getElementById("currency").innerHTML = game.money.toExponential(2);
    }
  } else {
    document.getElementById("currency").innerHTML = game.money;
  }

  if (game.tier1display >= 1e6) {
    document.getElementById("tier1amt").innerHTML = game.tier1display.toExponential(2);
  } else {
    document.getElementById("tier1amt").innerHTML = game.tier1display;
  }

  if (game.tier2display >= 1e6) {
    document.getElementById("tier2amt").innerHTML = game.tier2display.toExponential(2);
  } else {
    document.getElementById("tier2amt").innerHTML = game.tier2display;
  }

  if (game.tier3display >= 1e6) {
    document.getElementById("tier3amt").innerHTML = game.tier3display.toExponential(2);
  } else {
    document.getElementById("tier3amt").innerHTML = game.tier3display;
  }

  if (game.tier4display >= 1e6) {
    document.getElementById("tier4amt").innerHTML = game.tier4display.toExponential(2);
  } else {
    document.getElementById("tier4amt").innerHTML = game.tier4display;
  }

  if (game.tier5display >= 1e6) {
    document.getElementById("tier5amt").innerHTML = game.tier5display.toExponential(2);
  } else {
    document.getElementById("tier5amt").innerHTML = game.tier5display;
  }

  document.getElementById("prestigecost").innerHTML = game.prestigecost;
  document.getElementById("megaprestigecost").innerHTML = game.megaprestigecost;

  document.getElementById("infcurrency").innerHTML = game.infcoins;

  document.getElementById("infupgrade1cost").innerHTML = game.infupgrade1cost;
  document.getElementById("infupgrade2cost").innerHTML = game.infupgrade2cost;
}, 100);
