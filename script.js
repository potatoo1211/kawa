//splitHandPais(手牌の配列, 字牌の文字(設定しない場合"4"), コンソールに結果を表示するかどうか(設定しない場合表示しない) )
//返り値は配列 [何種類目の分け方か][面子または雀頭の番号][面子または雀頭の何枚目か]
function splitHandPais(pai, zihai = "4", print = false) {
    pai.sort()
    const head = []
    const pattern1 = []
    const pattern2 = []
    const pattern3 = []
    const pattern4 = []
    const patternAll = []
    const patternList = []
    if (pai.length % 3 != 2) {
        return patternList
    }
    if (pai.length >= 2) {
        for (let i = 0; i < pai.length - 1; i++) {
            if (pai[i][0] == pai[i + 1][0] && pai[i][1] == pai[i + 1][1]) {
                // try {
                //     if (pai[i][1] == pai[i - 1][1]) {
                //         continue
                //     }
                // } catch (e) {

                // }
                head.push([[pai[i], pai[i + 1]], [i, i + 1]])
            }
        }
        if (pai.length == 2) {
            for (let i = 0; i < head.length; i++) {
                let pattern = [head[i][0].join(",")].join("/")
                if (!patternAll.includes(pattern)) {
                    patternAll.push(pattern)
                }
            }
        }
    }

    if (pai.length >= 5) {
        for (let h = 0; h < head.length; h++) {
            let p = [...pai]
            p.splice(head[h][1][1], 1)
            p.splice(head[h][1][0], 1)
            const p2 = []
            let max = pai.length - 2
            for (let i = 0; i < 1; i++) {
                for (let i2 = i + 1; i2 < max - 1 && p[i2][1] - 2 < p[i][1]; i2++) {
                    for (let i3 = i2 + 1; i3 < max; i3++) {
                        if (p[i][0] == p[i2][0] && p[i2][0] == p[i3][0]) {
                            if (zihai == p[i][0]) {
                                if (p[i][1] == p[i2][1] && p[i2][1] == p[i3][1]) {
                                    p2.push([[p[i], p[i2], p[i3]], [i, i2, i3]])
                                }
                            } else {
                                if ((p[i][1] == p[i2][1] - 1 && p[i2][1] == p[i3][1] - 1) || (p[i][1] == p[i2][1] && p[i2][1] == p[i3][1])) {
                                    p2.push([[p[i], p[i2], p[i3]], [i, i2, i3]])
                                }
                            }
                        }
                    }
                }
            }
            pattern1.push(p2)
        }
        if (pai.length == 5) {
            for (let i = 0; i < head.length; i++) {
                try {
                    pattern1[i][0]
                } catch (e) {
                    continue
                }
                for (let i2 = 0; i2 < pattern1[i].length; i2++) {
                    let pattern = [head[i][0].join(","), pattern1[i][i2][0].join(",")].join("/")
                    if (!patternAll.includes(pattern)) {
                        patternAll.push(pattern)
                    }
                }
            }
        }
    }

    if (pai.length >= 8) {
        for (let h = 0; h < head.length; h++) {
            let p_back = [...pai]
            p_back.splice(head[h][1][1], 1)
            p_back.splice(head[h][1][0], 1)
            pattern2.push([])
            for (let a = 0; a < pattern1[h].length; a++) {
                p = [...p_back]
                p.splice(pattern1[h][a][1][2], 1)
                p.splice(pattern1[h][a][1][1], 1)
                p.splice(pattern1[h][a][1][0], 1)
                const p2 = []
                let max = pai.length - 5
                for (let i = 0; i < 1; i++) {
                    for (let i2 = i + 1; i2 < max - 1 && p[i2][1] - 2 < p[i][1]; i2++) {
                        for (let i3 = i2 + 1; i3 < max; i3++) {
                            if (p[i][0] == p[i2][0] && p[i2][0] == p[i3][0]) {
                                if (zihai == p[i][0]) {
                                    if (p[i][1] == p[i2][1] && p[i2][1] == p[i3][1]) {
                                        p2.push([[p[i], p[i2], p[i3]], [i, i2, i3]])
                                    }
                                } else {
                                    if ((p[i][1] == p[i2][1] - 1 && p[i2][1] == p[i3][1] - 1) || (p[i][1] == p[i2][1] && p[i2][1] == p[i3][1])) {
                                        p2.push([[p[i], p[i2], p[i3]], [i, i2, i3]])
                                    }
                                }
                            }
                        }
                    }
                }
                pattern2[h].push(p2)
            }
        }
        if (pai.length == 8) {
            for (let i = 0; i < head.length; i++) {
                try {
                    pattern2[i][0][0]
                } catch (e) {
                    continue
                }
                for (let i2 = 0; i2 < pattern1[i].length; i2++) {
                    for (let i3 = 0; i3 < pattern2[i][i2].length; i3++) {
                        let pattern = [head[i][0].join(","), pattern1[i][i2][0].join(","), pattern2[i][i2][i3][0].join(",")].join("/")
                        if (!patternAll.includes(pattern)) {
                            patternAll.push(pattern)
                        }
                    }
                }
            }
        }
    }

    console.log(head)
    console.log(pattern1)
    console.log(pattern2)
    console.log(pattern3)
    if (pai.length >= 11) {
        for (let h = 0; h < head.length; h++) {
            let p_back2 = [...pai]
            p_back2.splice(head[h][1][1], 1)
            p_back2.splice(head[h][1][0], 1)
            pattern3.push([])
            for (let a = 0; a < pattern1[h].length; a++) {
                let p_back = [...p_back2]
                p_back.splice(pattern1[h][a][1][2], 1)
                p_back.splice(pattern1[h][a][1][1], 1)
                p_back.splice(pattern1[h][a][1][0], 1)
                pattern3[h].push([])
                for (let b = 0; b < pattern2[h][a].length; b++) {
                    p = [...p_back]
                    p.splice(pattern2[h][a][b][1][2], 1)
                    p.splice(pattern2[h][a][b][1][1], 1)
                    p.splice(pattern2[h][a][b][1][0], 1)
                    const p2 = []
                    let max = pai.length - 8
                    for (let i = 0; i < 1; i++) {
                        for (let i2 = i + 1; i2 < max - 1 && p[i2][1] - 2 < p[i][1]; i2++) {
                            for (let i3 = i2 + 1; i3 < max; i3++) {
                                if (p[i][0] == p[i2][0] && p[i2][0] == p[i3][0]) {
                                    if (zihai == p[i][0]) {
                                        if (p[i][1] == p[i2][1] && p[i2][1] == p[i3][1]) {
                                            p2.push([[p[i], p[i2], p[i3]], [i, i2, i3]])
                                        }
                                    } else {
                                        if ((p[i][1] == p[i2][1] - 1 && p[i2][1] == p[i3][1] - 1) || (p[i][1] == p[i2][1] && p[i2][1] == p[i3][1])) {
                                            p2.push([[p[i], p[i2], p[i3]], [i, i2, i3]])
                                        }
                                    }
                                }
                            }
                        }
                    }
                    pattern3[h][a].push(p2)
                }
            }
        }
        if (pai.length == 11) {
            for (let i = 0; i < head.length; i++) {
                try {
                    pattern3[i][0][0][0]
                } catch (e) {
                    continue
                }
                for (let i2 = 0; i2 < pattern1[i].length; i2++) {
                    for (let i3 = 0; i3 < pattern2[i][i2].length; i3++) {
                        for (let i4 = 0; i4 < pattern3[i][i2][i3].length; i4++) {
                            let pattern = [head[i][0].join(","), pattern1[i][i2][0].join(","), pattern2[i][i2][i3][0].join(","), pattern3[i][i2][i3][i4][0].join(",")].join("/")
                            if (!patternAll.includes(pattern)) {
                                patternAll.push(pattern)
                            }
                        }
                    }
                }
            }
        }
    }

    if (pai.length >= 14) {
        for (let h = 0; h < head.length; h++) {
            let p_back3 = [...pai]
            p_back3.splice(head[h][1][1], 1)
            p_back3.splice(head[h][1][0], 1)
            pattern4.push([])
            for (let a = 0; a < pattern1[h].length; a++) {
                let p_back2 = [...p_back3]
                p_back2.splice(pattern1[h][a][1][2], 1)
                p_back2.splice(pattern1[h][a][1][1], 1)
                p_back2.splice(pattern1[h][a][1][0], 1)
                pattern4[h].push([])
                for (let b = 0; b < pattern2[h][a].length; b++) {
                    p_back = [...p_back2]
                    p_back.splice(pattern2[h][a][b][1][2], 1)
                    p_back.splice(pattern2[h][a][b][1][1], 1)
                    p_back.splice(pattern2[h][a][b][1][0], 1)
                    pattern4[h][a].push([])
                    for (let c = 0; c < pattern3[h][a][b].length; c++) {
                        p = [...p_back]
                        p.splice(pattern3[h][a][b][c][1][2], 1)
                        p.splice(pattern3[h][a][b][c][1][1], 1)
                        p.splice(pattern3[h][a][b][c][1][0], 1)
                        const p2 = []
                        let max = pai.length - 11
                        for (let i = 0; i < 1; i++) {
                            for (let i2 = i + 1; i2 < max - 1; i2++) {
                                for (let i3 = i2 + 1; i3 < max && p[i2][1] - 2 < p[i][1]; i3++) {
                                    if (p[i][0] == p[i2][0] && p[i2][0] == p[i3][0]) {
                                        if (zihai == p[i][0]) {
                                            if (p[i][1] == p[i2][1] && p[i2][1] == p[i3][1]) {
                                                p2.push([[p[i], p[i2], p[i3]], [i, i2, i3]])
                                            }
                                        } else {
                                            if ((p[i][1] == p[i2][1] - 1 && p[i2][1] == p[i3][1] - 1) || (p[i][1] == p[i2][1] && p[i2][1] == p[i3][1])) {
                                                p2.push([[p[i], p[i2], p[i3]], [i, i2, i3]])
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        pattern4[h][a][b].push(p2)
                    }
                }
            }
        }
    }

    for (let i = 0; i < head.length; i++) {
        try {
            pattern4[i][0][0][0][0]
        } catch (e) {
            continue
        }
        for (let i2 = 0; i2 < pattern1[i].length; i2++) {
            for (let i3 = 0; i3 < pattern2[i][i2].length; i3++) {
                for (let i4 = 0; i4 < pattern3[i][i2][i3].length; i4++) {
                    for (let i5 = 0; i5 < pattern4[i][i2][i3][i4].length; i5++) {
                        let pattern = [head[i][0].join(","), pattern1[i][i2][0].join(","), pattern2[i][i2][i3][0].join(","), pattern3[i][i2][i3][i4][0].join(","), pattern4[i][i2][i3][i4][i5][0].join(",")].join("/")
                        if (!patternAll.includes(pattern)) {
                            patternAll.push(pattern)
                        }
                    }
                }
            }
        }
    }

    if (print) {
        console.log("手牌:", pai.join(","))
        for (let i = 0; i < patternAll.length; i++) {
            console.log(patternAll[i])
        }
    }

    for (let i = 0; i < patternAll.length; i++) {
        const pattern = patternAll[i].split("/")
        const patterns = []
        for (let i2 = 0; i2 < (pai.length + 1) / 3; i2++) {
            let p = []
            for(let i3 = 0;i3< pattern[i2].split(",").length;i3++){
                p.push(String(pattern[i2].split(",")[i3]))
            }
            patterns.push(p)
            // prompt()
        }
        patternList.push(patterns)
    }
    return patternList
}
//使用例
const pai = ("11,11,12,12,12,12,13,13,13,13,14,14,14,14").split(",")
// console.log(splitHandPais(pai, "4", true)) //=>[ [["11","11"], ['12', '13', '14'] ...], [['44','44'],[41,42,43] ...] ...]

//pai = [[[雀頭], [面前面子], ...], [[鳴き面子], [鳴き面子], ...], [[暗槓], [暗槓], ...]]　 [[],[],[]] 鳴き面子および暗槓がない場合でも空の配列を入れておく
//hora = "tumo"/"ron" agari = あがり牌 zitya = 起家を0として数えた自家の番号
//gameData = [場(1→"東"/2→"南"...), 局, 本場, 供託] furo = 
//yaku = "titoi"/"pinfu" (設定しない場合無視される)
//返り値は符
function fukeisan(pai, hora, agari, zitya, gameData, yaku = false) {
    if (yaku == true) {
        // if (yaku == "titoi") {
        //     return 25
        // }
        // if (yaku == "pinfu") {
            if (hora == "tumo") {
                return 20
            } else {
                return 30
            }
        // }
    }
    let fu = 20
    if (hora == "ron" && pai[1].length == 0) {
        fu += 10
        console.log(fu)
    } else if (hora = "tumo") {
        fu += 2
        console.log(fu)
    }
    const kaze = ["41", "42", "43", "44"]
    if (pai[0][0][0] == "45" || pai[0][0][0] == "46" || pai[0][0][0] == "47" || pai[0][0][0] == kaze[gameData[0]]) {
        fu += 2
        console.log(fu)
    }
    if (pai[0][0][0] == kaze[(zitya - gameData[1] + 1 + gameData[4]) % gameData[4]]) {
        fu += 2
        console.log(fu)
    }
    let agariFu = false
    if (String(pai[0][0][0])[0] == agari[0] && String(pai[0][0][0])[1] == agari[1]) {
        agariFu = true
    }
    console.log(pai)
    for (let i = 1; i < pai[0].length; i++) {
        console.log(String(pai[0][i][0])[1] , String(pai[0][i][1])[1])
        if (String(pai[0][i][0])[1] == String(pai[0][i][1])[1]) {
            if (String(pai[0][i][0])[1] == "1" || String(pai[0][i][0])[1] == "9" || String(pai[0][i][0])[0] == "4") {
                fu += 8
                console.log(fu)
            } else {
                fu += 4
                console.log(fu)
            }
        } else {
            if (String(pai[0][i][1])[1] == agari[1] && String(pai[0][i][1])[0] == agari[0]) {
                agariFu = true
            } else if (String(pai[0][i][1])[0] == agari[0] && ((String(pai[0][i][0])[1] == "1" && agari[1] == "3") || (String(pai[0][i][0])[1] == "9" && agari[1] == "7"))) {
                agariFu = true
            }
        }
    }
    for (let i = 0; i < pai[1].length; i++) {
        if(pai[1][i].length == 4){
            if (String(pai[1][i][0])[1] == "1" || String(pai[1][i][0])[1] == "9" || String(pai[1][i][0])[0] == "4") {
                fu += 16
                console.log(fu)
            } else {
                fu += 8
                console.log(fu)
            }
        }else if (String(pai[1][i][0])[1] == String(pai[1][i][1])[1]) {
            if (pai[1][i][0][1] == "1" || pai[1][i][0][1] == "9" || pai[1][i][0][0] == "4") {
                fu += 4
                console.log(fu)
            } else {
                fu += 2
                console.log(fu)
            }
        }
    }
    for (let i = 0; i < pai[2].length; i++) {
        if(pai[2][i].length == 4){
            if (String(pai[2][i][0])[1] == "1" || String(pai[2][i][0])[1] == "9" || String(pai[2][i][0])[0] == "4") {
                fu += 32
                console.log(fu)
            } else {
                fu += 16
                console.log(fu)
            }
        }
    }
    if (agariFu) {
        fu += 2
        console.log(fu)
    }
    console.log("符(切り上げ前):",fu)
    if (fu % 10 == 0) {
        return fu
    } else {
        return fu - fu % 10 + 10
    }
}
const gameData = [0, 2, 0, 0, 3]
// console.log("符(切り上げ後):", fukeisan([splitHandPais(("11,11,12,13,14,22,22,22,41,41,41").split(","))[0], [["24", "24", "24"],["11","11","11","11"]],[]], "tumo", "13", 1, gameData))// 村上へ、ここをいじって試して 284行目に説明書がある

const fukeisanList = [
    { 30: [1000, 300, 500, 1500], 40: [1300, 400, 700, 2000], 50: [1600, 400, 800, 2400], 60: [2000, 500, 1000, 2900], 70: [2300, 600, 1200, 3400], 80: [2600, 700, 1300, 3900], 90: [2900, 800, 1500, 4400], 100: [3200, 800, 1600, 4800], 110: [3600, 1100, 1900, 5300] },
    { 20: [1300, 400, 700, 2000], 25: [1600, 400, 800, 2400], 30: [2000, 500, 1000, 2900], 40: [2600, 700, 1300, 3900], 50: [3200, 800, 1600, 4800], 60: [3900, 1000, 2000, 5800], 70: [4500, 1200, 2300, 6800], 80: [5200, 1300, 2600, 7700], 90: [5800, 1500, 2900, 8700], 100: [6400, 1600, 3200, 9600], 110: [7100, 1800, 3600, 10600] },
    { 20: [2600, 700, 1300, 3900], 25: [3200, 800, 1600, 4800], 30: [3900, 1000, 2000, 5800], 40: [5200, 1300, 2600, 7700], 50: [6400, 1600, 3200, 9600], 60: [7700, 2000, 3900, 11600], 70: [8000, 2000, 4000, 12000], 80: [8000, 2000, 4000, 12000], 90: [8000, 2000, 4000, 12000], 100: [8000, 2000, 4000, 12000], 110: [8000, 2000, 4000, 12000] },
    { 20: [5200, 1300, 2600, 7700], 25: [6400, 1600, 3200, 9600], 30: [7700, 2000, 3900, 11600], 40: [8000, 2000, 4000, 12000], 50: [8000, 2000, 4000, 12000], 60: [8000, 2000, 4000, 12000], 70: [8000, 2000, 4000, 12000], 80: [8000, 2000, 4000, 12000], 90: [8000, 2000, 4000, 12000], 100: [8000, 2000, 4000, 12000], 110: [8000, 2000, 4000, 12000] }
]
function point(han, fu, hora, zitya, gameData) {
    let points
    if (han <= 4) {
        points = fukeisanList[han - 1][fu]//player
    } else if (han < 6) {
        points = [8000, 2000, 4000, 12000]
    } else if (han < 8) {
        points = [12000, 3000, 6000, 18000]
    } else if (han < 11) {
        points = [16000, 4000, 8000, 24000]
    } else if (han < 13) {
        points = [24000, 6000, 12000, 36000]
    } else {
        points = [32000 * ((han - (han % 13)) / 13), 8000 * ((han - (han % 13)) / 13), 16000 * ((han - (han % 13)) / 13), 48000 * ((han - (han % 13)) / 13)]
    }
    if(hora=="tumo"){
        if((zitya - gameData[1] + 1 + gameData[4]) % gameData[4]==0){
            return [points[2]]
        }else{
            return points.slice(1,3)
        }
    }else if(hora == "ron"){
        if((zitya - gameData[1] + 1 + gameData[4]) % gameData[4]==0){
            return [points[3]]
        }else{
            return [points[0]]
        }
    }
}
// console.log(point(3, 40))

function arrayShuffle(array) { //配列をシャッフル
    for (let i = (array.length - 1); 0 < i; i--) {

        // 0〜(i+1)の範囲で値を取得
        let r = Math.floor(Math.random() * (i + 1));

        // 要素の並び替えを実行
        let tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
    }
    return array;
}
function generateMountain(playMode, aka = [1, 1, 1]) { //playMode: 3/4, aka: [赤5mの枚数, 赤5pの枚数, 赤5sの枚数] 設定しない場合それぞれ1枚ずつ
    if (playMode == 4) {
        let manzu = "11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,"
        let pinzu = "21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,"
        let sozu = "31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,"
        let zihai = "41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47"
        let akas = ""
        for (let i = 0; i < 3; i++) {
            for (let i2 = 0; i2 < 4; i2++) {
                if (i2 < aka[i]) {
                    akas += "," + String(i + 1) + "5.5"
                } else {
                    akas += "," + String(i + 1) + "5"
                }
            }
        }
        return yama = arrayShuffle((manzu + pinzu + sozu + zihai + akas).split(","))
    } else if (playMode == 3) {
        let manzu = "11,11,11,11,19,19,19,19,"
        let pinzu = "21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,"
        let sozu = "31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,"
        let zihai = "41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47"
        let akas = ""
        for (let i = 1; i < 3; i++) {
            for (let i2 = 0; i2 < 4; i2++) {
                if (i2 < aka[i]) {
                    akas += "," + String(i + 1) + "5.5"
                } else {
                    akas += "," + String(i + 1) + "5"
                }
            }
        }
        return yama = arrayShuffle((manzu + pinzu + sozu + zihai + akas).split(","))
    }
}
// console.log(generateMountain(4))


function totalHoraSistem(pai,furo,ankan,agari,dora,uradora,zyunme,reach,hora,tyankan,zitya,gameData,penuki,ippatu=0){
    pai.sort()
    const paiPatternds = splitHandPais(pai,"4",true)
    console.log(paiPatternds)
    const agarikata = {"tumo":1,"ron":0}
    let hanMax = 0
    let maxHanPattern = []
    const property = []
    for(let i = 0;i<4;i++){
        if(i<4-furo.length){
            property.push(0)
        }else{
            property.push(1)
        }
    }
    for(let i = 0;i<paiPatternds.length;i++){
        let hanCount = 0
        const allPai = paiPatternds[i].slice(1)
        for(let i = 0;i<ankan.length;i++){
            allPai.push(ankan[i])
        }
        for(let i = 0;i<furo.length;i++){
            allPai.push(furo[i])
        }
        console.log("yakuhansu引数:",paiPatternds[i][0],allPai,property,agari,dora,uradora,zyunme,reach,agarikata[hora],tyankan,gameData,zitya,penuki)
        let han = Yakuhansu(paiPatternds[i][0],allPai,property,agari,dora,uradora,zyunme,reach,agarikata[hora],tyankan,gameData,zitya,penuki,ippatu)
        console.log("yakuhansu結果:",han)
        han.push(i)
        for(let i2 = 0;i2<han[1].length;i2++){
            hanCount += Number(han[1][i2])
        }
        if(hanCount>=hanMax){
            maxHanPattern.push(han)
            if(hanCount>hanMax){
                hanMax = hanCount
                maxHanPattern = [han]
            }
        }
    }

    let fuMax = 0
    let maxFuIndex = 0
    for(let i = 0;i < maxHanPattern.length;i++){
        console.log([paiPatternds[maxHanPattern[i][3]],furo,ankan],hora,agari,zitya,gameData,maxHanPattern[i][0].includes("平和"))
        let fu = fukeisan([paiPatternds[maxHanPattern[i][3]],furo,ankan],hora,agari,zitya,gameData,maxHanPattern[i][0].includes("平和"))
        if(fu>fuMax){
            fuMax = fu
            maxFuIndex = i
        }
    }

    if(pai.length == 14){
        console.log("Tokushuyaku引数:",pai,agari,dora,uradora,zyunme,reach,agarikata[hora],tyankan,gameData,zitya,penuki,ippatu)
        const tokusyu = Tokushuyaku(pai,agari,dora,uradora,zyunme,reach,agarikata[hora],tyankan,gameData,zitya,penuki,ippatu)
        console.log("Tokusyuyaku結果:",tokusyu)
        if(tokusyu[0].length!=0 && hanMax<tokusyu[2][0]){
            hanMax = tokusyu[2][0]  
            fuMax = 25
            maxFuIndex = 0
            maxHanPattern = [tokusyu]
        }
    }

    let points
    try{
        points = point(hanMax,fuMax,hora,zitya,gameData)
    }catch(e){
        return false
    }

    return([hanMax,fuMax,points,maxHanPattern[maxFuIndex].slice(0,2)])
}
// console.log(totalHoraSistem(pai,[],[],"11",["11"],["11"],2,0,"tumo",0,0,gameData,2))

function id(id){
    return document.getElementById(id).value
}

function Click() {
    const bakaze = {"東":0,"南":1,"西":2,"北":3}
    const gameData = [Number(id("ba")),Number(id("kyoku")),Number(id("honba")),Number(id("kyotaku")),Number(id("ninzu"))]
    console.log("入力した局とか:",gameData)
    const pai = id("text").split(",")
    const furo = []
    const furoText = id("furoPai")
    for(let i = 0 ;i<furoText.split("/").length && furoText!="";i++){
        furo.push(furoText.split("/")[i].split(","))
    }
    const ankan = []
    const ankanText = id("ankan")
    for(let i = 0;i<ankanText.split("/").length && ankanText!="";i++){
        ankan.push(ankanText.split("/")[i].split(","))
    }
    console.log("入力した手牌とか:",pai,furo,ankan,id("agari"),id("dora").split(","),id("uradora").split(","),Number(id("zyunme")),Number(id("reach")),id("hora"),Number(id("tyankan")),Number(id("zitya")),gameData,Number(id("penuki")),Number(id("ippatu")))
    const result = totalHoraSistem(id("text").split(","),furo,ankan,id("agari"),id("dora").split(","),id("uradora").split(","),Number(id("zyunme")),Number(id("reach")),id("hora"),Number(id("tyankan")),Number(id("zitya")),gameData,Number(id("penuki")),Number(id("ippatu")))
    console.log("結果:",result)

    const stage = document.getElementById("stage")
    stage.innerHTML = ""
    for(let i = 0;i<pai.length;i++){
        let img = document.createElement("img")
        img.src = "pai/" + pai[i] + ".gif"
        if(i==pai.length-1){
            img.style.margin = "0 12px 0 0px"
        }
        stage.appendChild(img)
    }

    for(let i = 0;i<furoText.split(/[,/]/).length && furoText!="";i++){
        let img = document.createElement("img")
        img.src = "pai/" + furoText.split(/[,/]/)[i] + ".gif"
        if(i==furoText.split(/[,/]/).length-1){
            img.style.margin = "0 12px 0 0px"
        }
        stage.appendChild(img)
    }
    for(let i = 0;i<ankanText.split(/[,/]/).length && ankanText !="";i++){
        let img = document.createElement("img")
        img.src = "pai/" + ankanText.split(/[,/]/)[i] + ".gif"
        if(i==ankanText.split(/[,/]/).length-1){
            img.style.margin = "0 12px 0 0px"
        }
        stage.appendChild(img)
    }
    if(result == false){
        document.getElementById("yakuResult").textContent="和了不可"
    }

    let yakuText = ""
    for(let i = 0 ;i<result[3][0].length;i++){
        yakuText += result[3][0][i] +":"+ result[3][1][i] + ", "
    }
    document.getElementById("yakuResult").textContent = yakuText
    document.getElementById("hanResult").textContent = "ハン:"+result[0]+", 符:"+result[1]+", 点数:"+result[2].join("/")+" 点"
}
