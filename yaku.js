function Yakuhansu(hea, mentsu, pro, agari, dor, urador, jyunme, reach, agarikata, tyankan, fanpa, gamemode, peinuki, ippatsu) {
    var head = hea.map(Number);
    for (var i = 0; i < mentsu.length; i++) {
        for (var j = 0; j < mentsu[i].length; j++) {
            mentsu[i][j] = Number(mentsu[i][j]);
        }
    }
    var prop = pro.map(Number);
    var agari = Number(agari);
    var dora = dor.map(Number);
    var uradora = urador.map(Number);
    var jyunme = Number(jyunme);
    var reach = Number(reach);
    var agarikata = Number(agarikata);
    var tyankan = Number(tyankan);
    var fanpai = fanpa.map(Number);
    var gamemode = Number(gamemode);
    var peinuki = Number(peinuki);
    var ippatsu = Number(ippatsu);
    var doora = [];
    for (var i = 0; i < dora.length; i++) {
        if (Math.floor(dora[i] / 10) === 4) {
            if (dora[i] === 44) {
                doora.push(41);
            } else if (dora[i] === 47) {
                doora.push(45);
            } else {
                doora.push(dora[i] + 1);
            }
        } else if (dora[i] % 10 === 9) {
            doora.push(dora[i] - 8);
        } else {
            doora.push(Number(dora[i] + 1));
        }
    }
    var uradoora = [];
    for (var i = 0; i < uradora.length; i++) {
        if (Math.floor(uradora[i] / 10) === 4) {
            if (uradora[i] === 44) {
                uradoora.push(41);
            } else if (uradora[i] === 47) {
                uradoora.push(45);
            } else {
                uradoora.push(uradora[i] + 1);
            }
        } else if (uradora[i] % 10 === 9) {
            uradoora.push(uradora[i] - 8);
        } else {
            uradoora.push(Number(uradora[i] + 1));
        }
    }
    var bafu = fanpai[0] + 1;
    var jifu = ((fanpai[4] - 1) * fanpai[1] + gamemode + 1) % fanpai[4] + 1;
    if (jifu === 0) {
        jifu += fanpai[4];
    }
    var yaku = [[], [], []];
    var menzen = 0;
    if (Math.max.apply(null, prop) === 0) {
        menzen = 1;
    }
    var property1 = mentsu.map(function (x) { return x.length; });
    var property2 = [];
    for (var i = 0; i < 4; i++) {
        if (mentsu[i][1] - mentsu[i][0] === 1) {
            property2.push(1);
        } else {
            property2.push(0);
        }
    }
    var property3 = [];
    for (var i = 0; i < 4; i++) {
        if (property2[i] === 0) {
            if (Math.floor(mentsu[i][0] / 10) === 4) {
                if (mentsu[i][0] === 40 + bafu) {
                    property3.push(5);
                } else if (mentsu[i][0] === 40 + jifu) {
                    property3.push(4);
                } else if (mentsu[i][0] === 45 || mentsu[i][0] === 46 || mentsu[i][0] === 47) {
                    property3.push(3);
                } else {
                    property3.push(2);
                }
            } else if (mentsu[i][0] % 10 === 1 || mentsu[i][0] % 10 === 9) {
                property3.push(1);
            } else {
                property3.push(0);
            }
        } else {
            if (mentsu[i][0] % 10 === 1 || mentsu[i][0] % 10 === 7) {
                property3.push(1);
            } else {
                property3.push(0);
            }
        }
    }
    var a = 1;
    if (menzen === 1) {
        for (var i = 0; i < 4; i++) {
            if (property2[i] !== 0) {
                a = 0;
            }
        }
        if (a === 1) {
            if (head[0] === agari) {
                yaku[0].push("四暗刻単騎");
                yaku[1].push(26);
            } else if (agarikata === 1) {
                yaku[0].push("四暗刻");
                yaku[1].push(13);
            }
        }
    }
    a = 0;
    for (var i = 0; i < 4; i++) {
        if (property3[i] === 3) {
            a += 1;
        }
    }
    if (a === 3) {
        yaku[0].push("大三元");
        yaku[1].push(13);
    }
    a = 0;
    if (head[0] < 45 && head[0] > 40) {
        for (var i = 0; i < 4; i++) {
            if (property3[i] === 2 || property3[i] === 4 || property3[i] === 5) {
                a += 1;
            }
        }
        if (a === 3) {
            yaku[0].push("小四喜");
            yaku[1].push(13);
        }
    }
    a = 0;
    for (var i = 0; i < 4; i++) {
        if (property3[i] === 2 || property3[i] === 4 || property3[i] === 5) {
            a += 1;
        }
    }
    if (a === 4) {
        yaku[0].push("大四喜");
        yaku[1].push(26);
    }
    a = 1;
    var ryu = [32, 33, 34, 36, 38, 46];
    for (var i = 0; i < 4; i++) {
        if (property2[i] === 1) {
            if (!ryu.includes(mentsu[i][0])) {
                a = 0;
            }
        } else {
            if (!ryu.includes(mentsu[i][0])) {
                a = 0;
            }
        }
    }
    if (!ryu.includes(head[0])) {
        a = 0;
    }
    if (a === 1) {
        yaku[0].push("緑一色");
        yaku[1].push(13);
    }
    a = 1;
    for (var i = 0; i < 4; i++) {
        if (mentsu[i][0] < 40) {
            a = 0;
        }
    }
    if (head[0] < 40) {
        a = 0;
    }
    if (a === 1) {
        yaku[0].push("字一色");
        yaku[1].push(13);
    }
    a = 1;
    if (head[0] % 10 !== 1 || head[0] % 10 !== 9) {
        a = 0;
    }
    for (var i = 0; i < 4; i++) {
        if (property2[i] !== 0 || property3[i] !== 1) {
            a = 0;
        }
    }
    if (a === 1) {
        yaku[0].push("清老頭");
        yaku[1].push(13);
    }
    if (jyunme === 2 && jifu === 1) {
        yaku[0].push("天和");
        yaku[1].push(13);
    }
    if (jyunme === 2 && jifu !== 1) {
        yaku[0].push("地和");
        yaku[1].push(13);
    }
    a = 1;
    for (var i = 0; i < 4; i++) {
        if (property1[i] !== 4) {
            a = 0;
        }
    }
    if (a === 1) {
        yaku[0].push("四槓子");
        yaku[1].push(13);
    }
    if (yaku[0].reduce(function (a, b) { return a + b; }, 0) === 0) {
        if (reach === 2) {
            yaku[0].push("ダブル立直");
            yaku[1].push(2);
        } else if (reach === 1) {
            yaku[0].push("立直");
            yaku[1].push(1);
        }
        if (menzen === 1 && agarikata === 1) {
            yaku[0].push("門前清自摸和");
            yaku[1].push(1);
        }
        if (jyunme === 0) {
            if (agarikata === 1) {
                yaku[0].push("海底摸月");
                yaku[1].push(1);
            } else {
                yaku[0].push("河底撈魚");
                yaku[1].push(1);
            }
        }
        if (tyankan === 1) {
            yaku[0].push("槍槓");
            yaku[1].push(1);
        } else if (tyankan === 2) {
            yaku[0].push("嶺上開花");
            yaku[1].push(1);
        }
        if (ippatsu === 1) {
            yaku[0].push("一発");
            yaku[1].push(1);
        }
        for (var i = 0; i < 4; i++) {
            if (property3[i] === 5) {
                yaku[0].push("場風牌");
                yaku[1].push(1);
            }
            if (property3[i] === 4) {
                yaku[0].push("自風牌");
                yaku[1].push(1);
            }
            if (mentsu[i][0] === 45) {
                yaku[0].push("白");
                yaku[1].push(1);
            } else if (mentsu[i][0] === 46) {
                yaku[0].push("發");
                yaku[1].push(1);
            } else if (mentsu[i][0] === 47) {
                yaku[0].push("中");
                yaku[1].push(1);
            }
        }
        a = 1;
        if (head[0] > 40 || head[0] % 10 === 1 || head[0] % 10 !== 9) {
            a = 0;
        }
        for (var i = 0; i < 4; i++) {
            if (property3[i] !== 0) {
                a = 0;
            }
        }
        if (a === 1) {
            yaku[0].push("断么九");
            yaku[1].push(1);
        }
        a = 1;
        b = 0;
        if (menzen === 1) {
            for (var i = 0; i < 4; i++) {
                if (property2[i] === 1) {
                    if (mentsu[i][0] === agari || mentsu[i][2] === agari) {
                        b = 1;
                    }
                } else {
                    a = 0;
                }
            }
            if (a === 1 && b === 1) {
                if (head[0] != 40 + jifu && head[0] != 40 + bafu && head[0] < 45) {
                    yaku[0].push("平和");
                    yaku[1].push(1);
                }
            }
        }
        var aa = [];
        b = 1;
        for (var i = 0; i < 4; i++) {
            if (property2[i] === 1) {
                aa.push(mentsu[i][0]);
            }
        }
        aa.sort();
        if (aa.length === 3) {
            if (aa[2] - aa[1] !== 10 || aa[1] - aa[0] !== 10) {
                b = 0;
            }
        } else if (aa.length === 4) {
            var d = 0;
            for (var i = 0; i < 4; i++) {
                var c = aa.slice();
                c.splice(i, 1);
                if (c[2] - c[1] === 10 && c[1] - c[0] === 10) {
                    d = 1;
                }
            }
            if (d !== 1) {
                b = 0;
            }
        } else {
            b = 0;
        }
        if (b === 1) {
            if (menzen === 1) {
                yaku[0].push("三色同順");
                yaku[1].push(2);
            } else {
                yaku[0].push("三色同順");
                yaku[1].push(1);
            }
        }
        aa = [];
        b = 1;
        for (var i = 0; i < 4; i++) {
            if (property2[i] === 0) {
                aa.push(mentsu[i][0]);
            }
        }
        aa.sort();
        if (aa.length === 3) {
            if (aa[2] - aa[1] !== 10 || aa[1] - aa[0] !== 10) {
                b = 0;
            }
        } else if (aa.length === 4) {
            var d = 0;
            for (var i = 0; i < 4; i++) {
                var c = aa.slice();
                c.splice(i, 1);
                if (c[2] - c[1] === 10 && c[1] - c[0] === 10) {
                    d = 1;
                }
            }
            if (d !== 1) {
                b = 0;
            }
        } else {
            b = 0;
        }
        if (b === 1) {
            yaku[0].push("三色同刻");
            yaku[1].push(2);
        }
        aa = [];
        b = 1;
        for (var i = 0; i < 4; i++) {
            if (property2[i] === 1) {
                aa.push(mentsu[i][0]);
            }
        }
        aa.sort();
        if (aa.length === 3) {
            if (aa[2] - aa[1] !== 3 || aa[1] - aa[0] !== 3) {
                b = 0;
            }
            if (Math.floor(aa[0] / 10) !== Math.floor(aa[1] / 10)) {
                b = 0;
            } else if (Math.floor(aa[1] / 10) !== Math.floor(aa[2] / 10)) {
                b = 0;
            }
        } else if (aa.length === 4) {
            if (Math.floor(aa[0] / 10) !== Math.floor(aa[1] / 10) && aa[1] % 10 === 1) {
                if (Math.floor(aa[1] / 10) !== Math.floor(aa[2] / 10) || Math.floor(aa[2] / 10) !== Math.floor(aa[3] / 10)) {
                    b = 0;
                }
                if (aa[2] % 10 !== 4 || aa[2] % 10 !== 7) {
                    b = 0;
                }
            } else if (Math.floor(aa[2] / 10) !== Math.floor(aa[3] / 10) && aa[2] % 10 === 7) {
                if (Math.floor(aa[0] / 10) !== Math.floor(aa[1] / 10) || Math.floor(aa[1] / 10) !== Math.floor(aa[2] / 10)) {
                    b = 0;
                }
                if (aa[1] % 10 !== 4 || aa[0] % 10 !== 1) {
                    b = 0;
                }
            } else {
                for (i = 0; i < 3; i++) {
                    if (Math.floor(aa[i] / 10) !== Math.floor(aa[i + 1] / 10)) {
                        b = 0;
                    }
                }
                if (b === 1) {
                    var d = 0;
                    for (i = 0; i < 4; i++) {
                        if (aa[i] % 10 == 3 * d + 1) {
                            d += 1;
                        }
                    }
                    if (d !== 3) {
                        b = 0;
                    }
                }
            }
        } else {
            b = 0;
        }
        if (b === 1) {
            if (menzen === 1) {
                yaku[0].push("一気通貫");
                yaku[1].push(2);
            } else {
                yaku[0].push("一気通貫");
                yaku[1].push(1);
            }
        }
        a = 2;
        var b = 0;
        if (Math.floor(head[0] / 10) !== 4) {
            b = Math.floor(head[0] / 10);
        } else {
            a = 1;
        }
        for (var i = 0; i < 4; i++) {
            if (Math.floor(mentsu[i][0] / 10) !== 4) {
                if (b === 0) {
                    b = Math.floor(mentsu[i][0] / 10);
                } else if (b !== Math.floor(mentsu[i][0] / 10)) {
                    a = 0;
                }
            } else {
                if (a !== 0) {
                    a == 1;
                }
            }
        }
        if (a === 2) {
            if (menzen === 1) {
                yaku[0].push("清一色");
                yaku[1].push(6);
            } else {
                yaku[0].push("清一色");
                yaku[1].push(5);
            }
        }
        if (a === 1) {
            if (menzen === 1) {
                yaku[0].push("混一色");
                yaku[1].push(3);
            } else {
                yaku[0].push("混一色");
                yaku[1].push(2);
            }
        }
        if (Math.max.apply(null, property2) === 0) {
            yaku[0].push("対々和");
            yaku[1].push(2);
        }
        if (menzen === 1) {
            var aa = [];
            var b = 2;
            var d = 0;
            for (var i = 0; i < 4; i++) {
                if (property2[i] === 1) {
                    aa.push(mentsu[i][0]);
                }
            }
            if (aa.length === 4) {
                if (aa[0] !== aa[1] || aa[2] !== aa[3]) {
                    b = 1;
                    for (var i = 0; i < 3; i++) {
                        if (aa[i] === aa[i + 1]) {
                            d = 1;
                        }
                    }
                    if (d !== 1) {
                        b = 0;
                    }
                }
            } else if (aa.length === 3) {
                b = 1;
                if (aa[0] !== aa[1] && aa[1] !== aa[2]) {
                    b = 0;
                }
            } else if (aa.length === 2) {
                b = 1;
                if (aa[0] !== aa[1]) {
                    b = 0;
                }
            } else {
                b = 0;
            }
            if (b === 2) {
                yaku[0].push("二盃口");
                yaku[1].push(2);
            } else if (b === 1) {
                yaku[0].push("一盃口");
                yaku[1].push(1);
            }
        }
        var chantachecker = 0;
        a = 2;
        if (Math.floor(head[0] / 10) === 4) {
            a = 1;
        } else {
            if (head[0] % 10 !== 1 && head[0] % 10 !== 9) {
                a = 0;
            }
        }
        for (var i = 0; i < 4; i++) {
            if (property2[i] === 1) {
                if (mentsu[i][0] % 10 !== 1 && mentsu[i][0] % 10 !== 7) {
                    a = 0;
                }
            } else {
                if (Math.floor(mentsu[i][0] / 10) === 4) {
                    if (a !== 0) {
                        a = 1;
                    }
                } else {
                    if (mentsu[i][0] % 10 !== 1 && mentsu[i][0] % 10 !== 9) {
                        a = 0;
                    }
                }
            }
        }
        if (a === 2) {
            chantachecker = 1
            if (menzen === 1) {
                yaku[0].push("純全帯么九");
                yaku[1].push(3);
            } else {
                yaku[0].push("純全帯么九");
                yaku[1].push(2);
            }
        }
        if (a === 1) {
            chantachecker = 1
            if (menzen === 1) {
                yaku[0].push("混全帯么九");
                yaku[1].push(2);
            } else {
                yaku[0].push("混全帯么九");
                yaku[1].push(1);
            }
        }
        var aa = [];
        var a = 0;
        for (var i = 0; i < 4; i++) {
            if (prop[i] === 0 && property2[i] === 0) {
                aa.push(mentsu[i][0]);
                a += 1;
            }
        }
        if (a === 4) {
            yaku[0].push("三暗刻");
            yaku[1].push(2);
        }
        if (a === 3) {
            if (agarikata === 1 || !aa.includes(agari)) {
                yaku[0].push("三暗刻");
                yaku[1].push(2);
            }
        }
        if (head[0] > 44) {
            a = 0;
            for (var i = 0; i < 4; i++) {
                if (mentsu[i][0] > 44) {
                    a += 1;
                }
            }
            if (a === 2) {
                yaku[0].push("小三元");
                yaku[1].push(2);
            }
        }
        a = 1;
        if (Math.floor(head[0] / 10) !== 4 || head[0] % 10 !== 1 || head[0] % 10 !== 9) {
            a = 0;
        }
        for (var i = 0; i < 4; i++) {
            if (property2[i] !== 0 || property3[i] === 0) {
                a = 0;
            }
        }
        if (a === 1 && chantachecker == 0) {
            yaku[0].push("混老頭");
            yaku[1].push(2);
        }
        a = 0;
        for (var i = 0; i < 4; i++) {
            if (property1[i] === 4) {
                a += 1;
            }
        }
        if (a === 3) {
            yaku[0].push("三槓子");
            yaku[1].push(2);
        }
        if (yaku[0].length === 0) {
            yaku[0].push("役なし");
            yaku[1].push(0);
        } else {
            a = 0;
            var b = 0;
            var d = 0;
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < property1[i]; j++) {
                    for (var k = 0; k < doora.length; k++) {
                        if (doora[k] === parseInt(mentsu[i][j])) {
                            a += 1;
                        }
                        if (uradoora[k] === parseInt(mentsu[i][j])) {
                            b += 1;
                        }
                    }
                    if (mentsu[i][j] % 1 === 0.5) {
                        d += 1;
                    }
                }
            }
            for (var i = 0; i < 2; i++) {
                for (var k = 0; k < doora.length; k++) {
                    if (doora[k] === parseInt(head[i])) {
                        a += 1;
                    }
                    if (uradoora[k] === parseInt(head[i])) {
                        b += 1;
                    }
                }
                if (head[i] % 1 === 0.5) {
                    d += 1;
                }
            }
            if (a !== 0) {
                yaku[0].push("ドラ" + a);
                yaku[1].push(a);
            }
            if (b !== 0 && menzen === 1) {
                yaku[0].push("裏ドラ" + b);
                yaku[1].push(b);
            }
            if (d !== 0) {
                yaku[0].push("赤ドラ" + d);
                yaku[1].push(d);
            }
            if (peinuki !== 0) {
                yaku[0].push("北抜き" + peinuki);
                yaku[1].push(peinuki);
            }
        }
        yaku[2].push(yaku[1].reduce(function (a, b) { return a + b; }, 0));
    }
    console.log(property1)
    return yaku;
}

function Tokushuyaku(teha, agari, dor, urador, jyunme, reach, agarikata, tyankan, fanpai, gamemode, peinuki, ippatsu) {
    let menzen = 0
    const tehai = teha.map(Number);
    agari = parseFloat(agari);
    const dora = dor.map(Number);
    const uradora = urador.map(Number);
    jyunme = parseInt(jyunme);
    reach = parseInt(reach);
    agarikata = parseInt(agarikata);
    tyankan = parseInt(tyankan);
    fanpai = parseInt(fanpai);
    gamemode = parseInt(gamemode);
    peinuki = parseInt(peinuki);
    var ippatsu = Number(ippatsu);
    const doora = [];
    const uradoora = [];

    for (let i = 0; i < dora.length; i++) {
        if (Math.floor(dora[i] / 10) === 4) {
            if (dora[i] === 44) {
                doora.push(41);
            } else if (dora[i] === 47) {
                doora.push(45);
            } else {
                doora.push(dora[i] + 1);
            }
        } else if (dora[i] % 10 === 9) {
            doora.push(dora[i] - 8);
        } else {
            doora.push(dora[i] + 1);
        }
    }

    for (let i = 0; i < uradora.length; i++) {
        if (Math.floor(uradora[i] / 10) === 4) {
            if (uradora[i] === 44) {
                uradoora.push(41);
            } else if (uradora[i] === 47) {
                uradoora.push(45);
            } else {
                uradoora.push(uradora[i] + 1);
            }
        } else if (uradora[i] % 10 === 9) {
            uradoora.push(uradora[i] - 8);
        } else {
            uradoora.push(uradora[i] + 1);
        }
    }

    const jifu = ((fanpai[4] - 1) * fanpai[1] + gamemode + 1) % fanpai[4];
    const yaku = [[], [], []];
    const tehai2 = [];
    let a = 0;
    let b = 0;
    tehai.sort((a, b) => a - b);

    for (let i = 0; i < tehai.length; i++) {
        if (a === parseInt(tehai[i])) {
            b += 1;
        } else {
            a = parseInt(tehai[i]);
            if (b !== 0) {
                tehai2.push(b);
            }
            tehai2.push(a);
            b = 1;
        }
    }
    tehai2.push(b);

    if (tehai2.length === 26) { // 国士無双
        a = 1;
        b = 0;
        for (let i = 0; i < 13; i++) {
            if (tehai2[2 * i] % 10 !== 1 && tehai2[2 * i] % 10 !== 9 && Math.floor(tehai2[2 * i] / 10) !== 4) {
                a = 0;
            }
            if (tehai2[2 * i + 1] === 2) {
                b = tehai2[2 * i];
            }
        }
        if (a === 1) {
            if (jyunme === 2) {
                if (jifu === 0) {
                    yaku[0].push("天和");
                    yaku[1].push(13);
                } else {
                    yaku[0].push("地和");
                    yaku[1].push(13);
                }
            }
            if (b === agari) {
                yaku[0].push("国士無双十三面待ち");
                yaku[1].push(26);
            } else {
                yaku[0].push("国士無双");
                yaku[1].push(13);
            }
        }
    }

    if (tehai2.length === 18) { // ちゅーれん
        a = 1;
        b = Math.floor(tehai2[0] / 10);
        let c = 0;
        for (let i = 0; i < 9; i++) {
            if (tehai2[2 * i] !== 10 * b + i + 1) {
                a = 0;
            }
            if (i === 0 || i === 8) {
                if (tehai2[2 * i + 1] === 4) {
                    c = tehai2[2 * i];
                } else if (tehai2[2 * i + 1] !== 3) {
                    a = 0;
                }
            } else {
                if (tehai2[2 * i + 1] === 2) {
                    c = tehai2[2 * i];
                } else if (tehai2[2 * i + 1] !== 1) {
                    a = 0;
                }
            }
        }
        if (a === 1) {
            if (jyunme === 2) {
                if (jifu === 0) {
                    yaku[0].push("天和");
                    yaku[1].push(13);
                } else {
                    yaku[0].push("地和");
                    yaku[1].push(13);
                }
            }
            if (c === agari) {
                yaku[0].push("純正九蓮宝燈");
                yaku[1].push(26);
            } else {
                yaku[0].push("九蓮宝燈");
                yaku[1].push(13);
            }
        }
    }

    if (tehai2.length === 14) { // 七対子
        a = 1;
        for (let i = 0; i < 7; i++) {
            if (tehai2[2 * i + 1] !== 2) {
                a = 0;
            }
        }
        if (a === 1) {
            let d = 0;
            if (jyunme === 2) {
                d = 1;
                if (jifu === 0) {
                    yaku[0].push("天和");
                    yaku[1].push(13);
                } else {
                    yaku[0].push("地和");
                    yaku[1].push(13);
                }
            }
            if (tehai2[0] > 40 && tehai2[12] < 48) {
                d = 1;
                yaku[0].push("第七星");
                yaku[1].push(13);
                yaku[0].push("字一色");
                yaku[1].push(13);
            }
            if (d === 0) {
                yaku[0].push("七対子");
                yaku[1].push(2);
                if (reach === 2) { // 立直
                    yaku[0].push("ダブル立直");
                    yaku[1].push(2);
                } else if (reach === 1) {
                    yaku[0].push("立直");
                    yaku[1].push(1);
                }
                if (menzen === 1 && agarikata === 1) { // ツモ
                    yaku[0].push("門前清自摸和");
                    yaku[1].push(1);
                }
                if (jyunme === 0) { // 水の底
                    if (agarikata === 1) {
                        yaku[0].push("海底摸月");
                        yaku[1].push(1);
                    } else {
                        yaku[0].push("河底撈魚");
                        yaku[1].push(1);
                    }
                }
                if (tyankan === 2) { // 嶺上開花
                    yaku[0].push("嶺上開花");
                    yaku[1].push(1);
                }
                if (ippatsu === 1) { // 一発
                    yaku[0].push("一発");
                }
                a = 1; // タンヤオ
                b = 1; // 混老頭
                for (let i = 0; i < 7; i++) {
                    if (Math.floor(tehai2[2 * i] / 10) === 4 || tehai2[2 * i] % 10 === 1 || tehai2[2 * i] % 10 === 9) {
                        a = 0;
                    } else {
                        b = 0;
                    }
                }
                if (a === 1) {
                    yaku[0].push("断么九");
                    yaku[1].push(1);
                } else if (b === 1) {
                    yaku[0].push("混老頭");
                    yaku[1].push(2);
                }
                a = 2; // 清一色
                b = 0;
                for (let i = 0; i < 7; i++) {
                    if (Math.floor(tehai2[2 * i] / 10) === 4) {
                        if (a !== 0) {
                            a = 1;
                        }
                    } else if (b === 0) {
                        b = Math.floor(tehai2[2 * i] / 10);
                    } else if (Math.floor(tehai2[2 * i] / 10) !== b) {
                        a = 0;
                    }
                }
                if (a === 2) {
                    yaku[0].push("清一色");
                    yaku[1].push(6);
                } else if (a === 1) {
                    yaku[0].push("混一色");
                    yaku[1].push(3);
                }
                if (yaku[0].length === 0) {
                    yaku[0].push("役なし");
                    yaku[1].push(0);
                } else {
                    a = 0; // ドラ
                    b = 0; // 裏ドラ
                    c = 0; // 赤ドラ
                    for (let i = 0; i < 14; i++) {
                        for (let j = 0; j < doora.length; j++) {
                            if (doora.includes(parseInt(tehai[i]))) {
                                a += 1;
                            }
                            if (uradoora.includes(parseInt(tehai[i]))) {
                                b += 1;
                            }
                        }
                        if (tehai[i] % 1 === 0.5) {
                            c += 1;
                        }
                    }
                    if (a !== 0) {
                        yaku[0].push(`ドラ${a}`);
                        yaku[1].push(a);
                    }
                    if (b !== 0 && reach !== 0) {
                        yaku[0].push(`裏ドラ${b}`);
                        yaku[1].push(b);
                    }
                    if (c !== 0) {
                        yaku[0].push(`赤ドラ${c}`);
                        yaku[1].push(c);
                    }
                    if (peinuki !== 0) {
                        yaku[0].push(`北抜き`);
                        yaku[1].push(peinuki);
                    }
                }
            }
        }
    }
    yaku[2].push(yaku[1].reduce(function (a, b) { return a + b; }, 0));
    return yaku;
}
