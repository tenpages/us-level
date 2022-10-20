const replaceSVG = text=>{
    text = text.replace(/ transform="matrix\(1 0 0 1 (\d+) (\d+)\)" class=".+"/,' x="$1" y="$2"')
    return text;
};

let fontAPI = `https://lab.magiconch.com/api/fontmin`;
const generateFontURL = (name,text)=>{
    text += '0';
    text = text.replace(/\s/g,'');
    text = Array.from(new Set(text)).sort().join('');

    if(!text) return requestAnimationFrame(onOver);

    const unicode = str2utf8(text).join();
    const fontURL = `${fontAPI}?name=${name}&unicode=${unicode}&type=woff`;

    return fontURL;
};

const getFontFromText = (name,text,onOver=_=>{})=>{
    const fontURL = generateFontURL(name,text);
    loadFont(name,fontURL,_=>{
        onOver(_)
        // style.innerHTML = `html {font-family: a123;}`;
    })
};

const loadFont = async (fontName,fontURL,callback) => {
	const fontFace = new FontFace(fontName, `url(${fontURL})`);
	fontFace.load().then(fontFace => {
		document.fonts.add(fontFace);
		callback(fontFace);
	}).catch(e=>{
        // console.log(e);
        callback();
    })
};
function str2utf8(str) {
    return str.split('').map(s=>s.charCodeAt(0))
}
function utf82str(str) {
    return String.fromCharCode.apply(null,Array.from(str))
};

const { readFileSync, writeFileSync } = require('fs');
const getTextFromHTMLFile = (filename)=>{
    let html = readFileSync(filename,'utf8');
    const texts = [];

    const addTextFromMatch = (all,text)=>{
        text = text.replace(/<.+?>/g,'');

        texts.push(text);
        return '';
    }
    html = html.replace(/<(?:path|rect) id="(.+?)"/g,addTextFromMatch);
    html = html.replace(/<text .+?>(.+?)<\/text>/g,addTextFromMatch);
    html = html.replace(/<a .+?>(.+?)<\/a>/g,addTextFromMatch);
    html = html.replace(/<h2 .+?>(.+?)<\/h2>/g,addTextFromMatch);
    html = html.replace(/<p>([\s\S]+?)<\/p>/g,addTextFromMatch);

    return texts.join('');
};

const defaultText = `1234567890:abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ居住住宿游玩中转路过没去过分英国爱尔兰比利时荷兰西班牙法国安道尔葡萄牙奥地利德国卢森堡瑞士斯洛文尼亚克罗地亚波斯尼亚和黑塞哥维纳丹麦挪威瑞典芬兰爱沙尼亚拉脱维亚乌克兰白俄罗斯立陶宛波兰捷克斯洛伐克匈牙利塞尔维亚黑山希腊北马其顿阿尔巴尼亚意大利保加利亚罗马尼亚摩尔多瓦列支敦士登土耳其塞浦路斯梵蒂冈圣马力诺冰岛俄罗斯格鲁吉亚阿塞拜疆亚美尼亚摩纳哥马耳他繁體中文居住過住宿過遊玩過中轉過路過沒去過分英國愛爾蘭比利時荷蘭西班牙法國安道爾葡萄牙奧地利德國盧森堡瑞士斯洛維尼亞克羅埃西亞波士尼亞與赫塞哥維納丹麥挪威瑞典芬蘭愛沙尼亞拉脫維亞烏克蘭白俄羅斯立陶宛波蘭捷克斯洛伐克匈牙利塞爾維亞蒙特内哥羅希臘北馬其頓阿爾巴尼亞義大利保加利亞羅馬尼亞摩爾多瓦列支敦斯登土耳其賽普勒斯梵蒂岡聖馬力諾冰島俄羅斯喬治亞亞塞拜然亞美尼亞摩納哥馬爾他日本語住居宿泊訪問接地通過未踏点イギリスアイルランドベルギーオランダスペインフランスアンドラポルトガルオーストリアドイツルクセンブルクスイススロベニアクロアチアボスニア・ヘルツェゴビナデンマークノルウェースウェーデンフィンランドエストニアラトビアウクライナベラルーシリトアニアポーランドチェコスロバキアハンガリーセルビアモンテネグロギリシャ北マケドニアアルバニアイタリアブルガリアルーマニアモルドバリヒテンシュタイントルコキプロスバチカンサンマリノアイスランドロシアジョージアアゼルバイジャンアルメニアモナコマルタ居住过住宿过游玩过中转过路过没去过分马里兰俄亥俄加利福尼亚犹他爱达荷南达科他内布拉斯加俄克拉荷马密苏里伊利诺伊缅因新罕布什尔佛蒙特马萨诸塞康涅狄格纽约罗德岛宾夕法尼亚新泽西特拉华弗吉尼亚华盛顿特区西弗吉尼亚肯塔基北卡罗莱纳田纳西南卡罗莱纳乔治亚阿拉巴马印第安纳威斯康辛路易斯安那阿肯色密西西比爱荷华明尼苏达堪萨斯北达科他科罗拉多怀俄明蒙大拿亚利桑那俄勒冈华盛顿得克萨斯新墨西哥密歇根佛罗里达阿拉斯加夏威夷波多黎各关岛北马里亚纳群岛美属萨摩亚内华达美属维京群岛繁體中文居住過住宿過遊玩過中轉過路過沒去過分馬里蘭俄亥俄加利福尼亞猶他愛達荷南達科他内布拉斯加奧克拉荷馬密蘇里伊利諾伊緬因新罕布夏佛蒙特麻薩諸塞康乃狄克紐約羅德島賓夕法尼亞紐澤西德拉瓦維吉尼亞華盛頓哥倫比亞特區西維吉尼亞肯塔基北卡羅來納田納西南卡羅來納喬治亞阿拉巴馬印第安納威斯康辛路易斯安那阿肯色密西西比愛荷華明尼蘇達堪薩斯北達科他科羅拉多懷俄明蒙大拿亞利桑那奧勒岡華盛頓德克薩斯新墨西哥密西根佛羅里達阿拉斯加夏威夷波多黎各關島北馬利安納群島美屬薩摩亞内華達美屬維京群島日本語住居宿泊訪問接地通過未踏分メリーランドオハイオカリフォルニアユタアイダホサウスダコタネブラスカオクラホマミズーリイリノイメインニューハンプシャーバーモントマサチューセッツコネチカットニューヨークロードアイランドペンシルベニアニュージャージーデラウェアバージニアワシントンウェストバージケンタッキーノースカロライナテネシーサウスカロライナジョージアアラバマインディアナウィスコンシンルイジアナアーカンソーミシシッピアイオワミネソタカンザスノースダコタコロラドワイオミングモンタナアリゾナオレゴンワシントンテキサスニューメキシコミシガンフロリダアラスカハワイプエルトリコグアム北マリアナ諸島米領サモアネバダ米領ヴァージン諸島`;
const text = defaultText + getTextFromHTMLFile('html/eu.html');
const fontURL = generateFontURL(`JiaLiDaYuanJF`,text);


console.log(text);
console.log(fontURL);

const axios = require('axios');


const downFontFile = async _=>{
    let r = await axios.get(fontURL,{
        responseType: 'arraybuffer'
    });
    console.log(r.data);
    writeFileSync('html/slice.woff',r.data,'binary');
};

downFontFile();