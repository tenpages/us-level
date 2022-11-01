const 本地存储 = localStorage;
const 视窗 = window;
const 文档 = document;
const 如何做爱元素 = document.documentElement;
const 头元素 = 文档.head;
const 新建元素 = 名 => 文档.createElement(名);
const 新建图 = _=> new Image();
const 添加事件监控 = (元素,事件,回调) => 元素[`on${事件}`] = 回调;// 元素.addEventListener(事件,回调);
const 获取元素方位 = 元素 => 元素.getBoundingClientRect();
const messages = {
    English: {
        message: {
            data_level_5: 'Lived Here',
            data_level_4: 'Stayed Here',
            data_level_3: 'Visited Here',
            data_level_2: 'Stopped Here',
            data_level_1: 'Passed Here',
            data_level_0_alt: 'Want to be Here',
            data_level_0: 'Never Been Here',
            pt: 'pt | pts',
        },
        country_name: {
            Maryland: 'Maryland',
            Ohio: 'Ohio',
            California: 'California',
            Utah: 'Utah',
            Idaho: 'Idaho',
            South_Dakota: 'South Dakota',
            Nebraska: 'Nebraska',
            Oklahoma: 'Oklahoma',
            Missouri: 'Missouri',
            Illinois: 'Illinois',
            Maine: 'Maine',
            New_Hampshire: 'New Hampshire',
            Vermont: 'Vermont',
            Massachusettes: 'Massachusetts',
            Connecticut: 'Connecticut',
            New_York: 'New York',
            Rhode_Island: 'Rhode Island',
            Pennsylvania: 'Pennsylvania',
            New_Jersy: 'New Jersey',
            Delaware: 'Delaware',
            Virginia: 'Virginia',
            DC: 'Washington DC',
            West_Virginia: 'West Virginia',
            Kentucky: 'Kentucky',
            North_Carolina: 'North Carolina',
            Tennessee: 'Tennessee',
            South_Carolina: 'South Carolina',
            Georgia: 'Georgia',
            Alabama: 'Alabama',
            Indiana: 'Indiana',
            Wisconsin: 'Wisconsin',
            Louisiana: 'Louisiana',
            Arkansas: 'Arkansas',
            Mississippi: 'Mississippi',
            Iowa: 'Iowa',
            Minnesota: 'Minnesota',
            Kansas: 'Kansas',
            North_Dakota: 'North Dakota',
            Colorado: 'Colorado',
            Wyoming: 'Wyoming',
            Montana: 'Montana',
            Arizona: 'Arizona',
            Oregon: 'Oregon',
            Washington: 'Washington',
            Texas: 'Texas',
            New_Mexico: 'New Mexico',
            Michigan: 'Michigan',
            Florida: 'Florida',
            Alaska: 'Alaska',
            Hawaii: 'Hawaii',
            Puerto_Rico: 'Puerto Rico',
            Guam: 'Guam',
            Northern_Mariana_Islands: 'Northern Mariana Islands',
            American_Samoa: 'American Samoa',
            Nevada: 'Nevada',
            US_Virgin_Islands: 'US Virgin Islands',
        }
    },
    简体中文: {
        message: {
            data_level_5: '居住过',
            data_level_4: '住宿过',
            data_level_3: '游玩过',
            data_level_2: '中转过',
            data_level_1: '路过',
            data_level_0_alt: '想要去',
            data_level_0: '没去过',
            pt: '分',
        },
        country_name: {
            Maryland: '马里兰',
            Ohio: '俄亥俄',
            California: '加利福尼亚',
            Utah: '犹他',
            Idaho: '爱达荷',
            South_Dakota: '南达科他',
            Nebraska: '内布拉斯加',
            Oklahoma: '俄克拉荷马',
            Missouri: '密苏里',
            Illinois: '伊利诺伊',
            Maine: '缅因',
            New_Hampshire: '新罕布什尔',
            Vermont: '佛蒙特',
            Massachusettes: '马萨诸塞',
            Connecticut: '康涅狄格',
            New_York: '纽约',
            Rhode_Island: '罗德岛',
            Pennsylvania: '宾夕法尼亚',
            New_Jersy: '新泽西',
            Delaware: '特拉华',
            Virginia: '弗吉尼亚',
            DC: '华盛顿特区',
            West_Virginia: '西弗吉尼亚',
            Kentucky: '肯塔基',
            North_Carolina: '北卡罗莱纳',
            Tennessee: '田纳西',
            South_Carolina: '南卡罗莱纳',
            Georgia: '乔治亚',
            Alabama: '阿拉巴马',
            Indiana: '印第安纳',
            Wisconsin: '威斯康辛',
            Louisiana: '路易斯安那',
            Arkansas: '阿肯色',
            Mississippi: '密西西比',
            Iowa: '爱荷华',
            Minnesota: '明尼苏达',
            Kansas: '堪萨斯',
            North_Dakota: '北达科他',
            Colorado: '科罗拉多',
            Wyoming: '怀俄明',
            Montana: '蒙大拿',
            Arizona: '亚利桑那',
            Oregon: '俄勒冈',
            Washington: '华盛顿',
            Texas: '得克萨斯',
            New_Mexico: '新墨西哥',
            Michigan: '密歇根',
            Florida: '佛罗里达',
            Alaska: '阿拉斯加',
            Hawaii: '夏威夷',
            Puerto_Rico: '波多黎各',
            Guam: '关岛',
            Northern_Mariana_Islands: '北马里亚纳群岛',
            American_Samoa: '美属萨摩亚',
            Nevada: '内华达',
            US_Virgin_Islands: '美属维京群岛',
        }
    },
    繁體中文: {
        message: {
            data_level_5: '居住過',
            data_level_4: '住宿過',
            data_level_3: '遊玩過',
            data_level_2: '中轉過',
            data_level_1: '路過',
            data_level_0_alt: '想要去',
            data_level_0: '沒去過',
            pt: '分',
        },
        country_name: {
            Maryland: '馬里蘭',
            Ohio: '俄亥俄',
            California: '加利福尼亞',
            Utah: '猶他',
            Idaho: '愛達荷',
            South_Dakota: '南達科他',
            Nebraska: '内布拉斯加',
            Oklahoma: '奧克拉荷馬',
            Missouri: '密蘇里',
            Illinois: '伊利諾伊',
            Maine: '緬因',
            New_Hampshire: '新罕布夏',
            Vermont: '佛蒙特',
            Massachusettes: '麻薩諸塞',
            Connecticut: '康乃狄克',
            New_York: '紐約',
            Rhode_Island: '羅德島',
            Pennsylvania: '賓夕法尼亞',
            New_Jersy: '紐澤西',
            Delaware: '德拉瓦',
            Virginia: '維吉尼亞',
            DC: '華盛頓哥倫比亞特區',
            West_Virginia: '西維吉尼亞',
            Kentucky: '肯塔基',
            North_Carolina: '北卡羅來納',
            Tennessee: '田納西',
            South_Carolina: '南卡羅來納',
            Georgia: '喬治亞',
            Alabama: '阿拉巴馬',
            Indiana: '印第安納',
            Wisconsin: '威斯康辛',
            Louisiana: '路易斯安那',
            Arkansas: '阿肯色',
            Mississippi: '密西西比',
            Iowa: '愛荷華',
            Minnesota: '明尼蘇達',
            Kansas: '堪薩斯',
            North_Dakota: '北達科他',
            Colorado: '科羅拉多',
            Wyoming: '懷俄明',
            Montana: '蒙大拿',
            Arizona: '亞利桑那',
            Oregon: '奧勒岡',
            Washington: '華盛頓',
            Texas: '德克薩斯',
            New_Mexico: '新墨西哥',
            Michigan: '密西根',
            Florida: '佛羅里達',
            Alaska: '阿拉斯加',
            Hawaii: '夏威夷',
            Puerto_Rico: '波多黎各',
            Guam: '關島',
            Northern_Mariana_Islands: '北馬利安納群島',
            American_Samoa: '美屬薩摩亞',
            Nevada: '内華達',
            US_Virgin_Islands: '美屬維京群島',
        }
    },
    日本語: {
        message: {
            data_level_5: '住居',
            data_level_4: '宿泊',
            data_level_3: '訪問',
            data_level_2: '接地',
            data_level_1: '通過',
            data_level_0_alt: '行きたい',
            data_level_0: '未踏',
            pt: '分',
        },
        country_name: {
            Maryland: 'メリーランド',
            Ohio: 'オハイオ',
            California: 'カリフォルニア',
            Utah: 'ユタ',
            Idaho: 'アイダホ',
            South_Dakota: 'サウスダコタ',
            Nebraska: 'ネブラスカ',
            Oklahoma: 'オクラホマ',
            Missouri: 'ミズーリ',
            Illinois: 'イリノイ',
            Maine: 'メイン',
            New_Hampshire: 'ニューハンプシャー',
            Vermont: 'バーモント',
            Massachusettes: 'マサチューセッツ',
            Connecticut: 'コネチカット',
            New_York: 'ニューヨーク',
            Rhode_Island: 'ロードアイランド',
            Pennsylvania: 'ペンシルベニア',
            New_Jersy: 'ニュージャージー',
            Delaware: 'デラウェア',
            Virginia: 'バージニア',
            DC: 'ワシントンD.C.',
            West_Virginia: 'ウェストバージ',
            Kentucky: 'ケンタッキー',
            North_Carolina: 'ノースカロライナ',
            Tennessee: 'テネシー',
            South_Carolina: 'サウスカロライナ',
            Georgia: 'ジョージア',
            Alabama: 'アラバマ',
            Indiana: 'インディアナ',
            Wisconsin: 'ウィスコンシン',
            Louisiana: 'ルイジアナ',
            Arkansas: 'アーカンソー',
            Mississippi: 'ミシシッピ',
            Iowa: 'アイオワ',
            Minnesota: 'ミネソタ',
            Kansas: 'カンザス',
            North_Dakota: 'ノースダコタ',
            Colorado: 'コロラド',
            Wyoming: 'ワイオミング',
            Montana: 'モンタナ',
            Arizona: 'アリゾナ',
            Oregon: 'オレゴン',
            Washington: 'ワシントン',
            Texas: 'テキサス',
            New_Mexico: 'ニューメキシコ',
            Michigan: 'ミシガン',
            Florida: 'フロリダ',
            Alaska: 'アラスカ',
            Hawaii: 'ハワイ',
            Puerto_Rico: 'プエルトリコ',
            Guam: 'グアム',
            Northern_Mariana_Islands: '北マリアナ諸島',
            American_Samoa: '米領サモア',
            Nevada: 'ネバダ',
            US_Virgin_Islands: '米領ヴァージン諸島',
        }
    },
    French: {
        message: {
            data_level_5: "Déjà habité",
            data_level_4: "Déjà séjourné",
            data_level_3: "Déjà visité",
            data_level_2: "Déjà fait un arrêt",
            data_level_1: "Déjà passé·e",
            data_level_0_alt: "Dans mes projets",
            data_level_0: "Jamais visité",
            pt: 'pt | pts',
        },
        country_name: {
            Maryland: 'Maryland',
            Ohio: 'Ohio',
            California: 'Californie',
            Utah: 'Utah',
            Idaho: 'Idaho',
            South_Dakota: 'Dakota du Sud',
            Nebraska: 'Nebraska',
            Oklahoma: 'Oklahoma',
            Missouri: 'Missouri',
            Illinois: 'Illinois',
            Maine: 'Maine',
            New_Hampshire: 'New Hampshire',
            Vermont: 'Vermont',
            Massachusettes: 'Massachusetts',
            Connecticut: 'Connecticut',
            New_York: 'New York',
            Rhode_Island: 'Rhode Island',
            Pennsylvania: 'Pennsylvanie',
            New_Jersy: 'New Jersey',
            Delaware: 'Delaware',
            Virginia: 'Virginie',
            DC: 'Washington DC',
            West_Virginia: "Virginie de l'Ouest",
            Kentucky: 'Kentucky',
            North_Carolina: 'Caroline du Nord',
            Tennessee: 'Tennessee',
            South_Carolina: 'Caroline du Sud',
            Georgia: 'Georgie',
            Alabama: 'Alabama',
            Indiana: 'Indiana',
            Wisconsin: 'Wisconsin',
            Louisiana: 'Louisiane',
            Arkansas: 'Arkansas',
            Mississippi: 'Mississippi',
            Iowa: 'Iowa',
            Minnesota: 'Minnesota',
            Kansas: 'Kansas',
            North_Dakota: 'Dakota du Nord',
            Colorado: 'Colorado',
            Wyoming: 'Wyoming',
            Montana: 'Montana',
            Arizona: 'Arizona',
            Oregon: 'Oregon',
            Washington: 'Washington',
            Texas: 'Texas',
            New_Mexico: 'Nouveau Mexique',
            Michigan: 'Michigan',
            Florida: 'Floride',
            Alaska: 'Alaska',
            Hawaii: 'Hawaii',
            Puerto_Rico: 'Porto Rico',
            Guam: 'Guam',
            Northern_Mariana_Islands: 'Îles Mariannes du Nord',
            American_Samoa: 'Samoa américaines',
            Nevada: 'Nevada',
            US_Virgin_Islands: 'Îles Vierges des États-Unis',
        }
    },
    Español: {
        message: {
            data_level_5: 'Vivido aquí',
            data_level_4: 'Quedado aquí',
            data_level_3: 'Visitado aquí',
            data_level_2: 'Parado aquí',
            data_level_1: 'Pasé por aquí',
            data_level_0_alt: 'Quiero ir',
            data_level_0: 'Nunca he estado',
            pt: 'pt | pts',
        },
        country_name: {
            Maryland: 'Maryland',
            Ohio: 'Ohio',
            California: 'California',
            Utah: 'Utah',
            Idaho: 'Idaho',
            South_Dakota: 'Dakota del Sur',
            Nebraska: 'Nebraska',
            Oklahoma: 'Oklahoma',
            Missouri: 'Missouri',
            Illinois: 'Illinois',
            Maine: 'Maine',
            New_Hampshire: 'Nuevo Hampshire',
            Vermont: 'Vermont',
            Massachusettes: 'Massachusetts',
            Connecticut: 'Connecticut',
            New_York: 'Nueva York',
            Rhode_Island: 'Rhode Island',
            Pennsylvania: 'Pennsylvania',
            New_Jersy: 'Nueva Jersey',
            Delaware: 'Delaware',
            Virginia: 'Virginia',
            DC: 'Washington DC',
            West_Virginia: 'Virginia Occidental',
            Kentucky: 'Kentucky',
            North_Carolina: 'Carolina del Norte',
            Tennessee: 'Tennessee',
            South_Carolina: 'Carolina del Sur',
            Georgia: 'Georgia',
            Alabama: 'Alabama',
            Indiana: 'Indiana',
            Wisconsin: 'Wisconsin',
            Louisiana: 'Louisiana',
            Arkansas: 'Arkansas',
            Mississippi: 'Mississippi',
            Iowa: 'Iowa',
            Minnesota: 'Minnesota',
            Kansas: 'Kansas',
            North_Dakota: 'Dakota del Norte',
            Colorado: 'Colorado',
            Wyoming: 'Wyoming',
            Montana: 'Montana',
            Arizona: 'Arizona',
            Oregon: 'Oregón',
            Washington: 'Washington',
            Texas: 'Texas',
            New_Mexico: 'Nuevo Mexico',
            Michigan: 'Michigan',
            Florida: 'Florida',
            Alaska: 'Alaska',
            Hawaii: 'Hawaii',
            Puerto_Rico: 'Puerto Rico',
            Guam: 'Guam',
            Northern_Mariana_Islands: 'Islas Marianas del Norte',
            American_Samoa: 'Samoa Americana',
            Nevada: 'Nevada',
            US_Virgin_Islands: 'Islas Virgenes de los Estados Unidos',
        }
    },
    Danish: {
        message: {
            data_level_5: 'Boede her',
            data_level_4: 'Overnattet her',
            data_level_3: 'Besøgte her',
            data_level_2: 'Stoppede her',
            data_level_1: 'Passerede her',
            data_level_0_alt: 'Ville gerne bo her',
            data_level_0: 'Har ikke været her',
            pt: 'pnt | pnt',
        },
        country_name: {
            Maryland: 'Maryland',
            Ohio: 'Ohio',
            California: 'Californien',
            Utah: 'Utah',
            Idaho: 'Idaho',
            South_Dakota: 'South Dakota',
            Nebraska: 'Nebraska',
            Oklahoma: 'Oklahoma',
            Missouri: 'Missouri',
            Illinois: 'Illinois',
            Maine: 'Maine',
            New_Hampshire: 'New Hampshire',
            Vermont: 'Vermont',
            Massachusettes: 'Massachusetts',
            Connecticut: 'Connecticut',
            New_York: 'New York',
            Rhode_Island: 'Rhode Island',
            Pennsylvania: 'Pennsylvania',
            New_Jersy: 'New Jersey',
            Delaware: 'Delaware',
            Virginia: 'Virginia',
            DC: 'Washington DC',
            West_Virginia: 'West Virginia',
            Kentucky: 'Kentucky',
            North_Carolina: 'North Carolina',
            Tennessee: 'Tennessee',
            South_Carolina: 'South Carolina',
            Georgia: 'Georgia',
            Alabama: 'Alabama',
            Indiana: 'Indiana',
            Wisconsin: 'Wisconsin',
            Louisiana: 'Louisiana',
            Arkansas: 'Arkansas',
            Mississippi: 'Mississippi',
            Iowa: 'Iowa',
            Minnesota: 'Minnesota',
            Kansas: 'Kansas',
            North_Dakota: 'North Dakota',
            Colorado: 'Colorado',
            Wyoming: 'Wyoming',
            Montana: 'Montana',
            Arizona: 'Arizona',
            Oregon: 'Oregon',
            Washington: 'Washington',
            Texas: 'Texas',
            New_Mexico: 'New Mexico',
            Michigan: 'Michigan',
            Florida: 'Florida',
            Alaska: 'Alaska',
            Hawaii: 'Hawaii',
            Puerto_Rico: 'Puerto Rico',
            Guam: 'Guam',
            Northern_Mariana_Islands: 'Nordmarianerne',
            American_Samoa: 'Amerikansk Samoa',
            Nevada: 'Nevada',
            US_Virgin_Islands: 'Amerikanske Jomfruøer',
        }
    },
    עברית: {
        message: {
            data_level_5: 'גרת פו',
            data_level_4: 'נשאר',
            data_level_3: 'ביקר',
            data_level_2: 'עצר',
            data_level_1: 'עברה את הארץ',
            data_level_0_alt: 'רוצה לבקר',
            data_level_0: 'מעולם לא הייתי',
            pt: 'יח',
        },
        country_name: {
            Maryland: 'מרילנד',
            Ohio: 'אוהיו',
            California: 'קליפורניה',
            Utah: 'יוטה',
            Idaho: 'איידהו',
            South_Dakota: 'דקוטה הדרומית',
            Nebraska: 'נברסקה',
            Oklahoma: 'אוקלהומה',
            Missouri: 'מיזורי',
            Illinois: 'אילינוי',
            Maine: 'מיין',
            New_Hampshire: 'ניו המפשייר',
            Vermont: 'ורמונט',
            Massachusettes: "מסצ'וסטס",
            Connecticut: 'קונטיקט',
            New_York: 'ניו יורק',
            Rhode_Island: 'רוד איילנד',
            Pennsylvania: 'פנסילבניה',
            New_Jersy: "ניו ג'רזי",
            Delaware: 'דלאוור',
            Virginia: "וירג'יניה",
            DC: 'וושינגטון די. סי.',
            West_Virginia: "וירג'יניה המערבית",
            Kentucky: 'קנטקי',
            North_Carolina: 'קרוליינה הצפונית',
            Tennessee: 'טנסי',
            South_Carolina: 'קרוליינה הדרומית',
            Georgia: "ג'ורג'יה",
            Alabama: 'אלבמה',
            Indiana: 'אינדיאנה',
            Wisconsin: 'ויסקונסין',
            Louisiana: 'לואיזיאנה',
            Arkansas: 'ארקנסו',
            Mississippi: 'מיסיסיפי',
            Iowa: 'איווה',
            Minnesota: 'מינסוטה',
            Kansas: 'קנזס',
            North_Dakota: 'דקוטה הצפונית',
            Colorado: 'קולורדו',
            Wyoming: 'ויומינג',
            Montana: 'מונטנה',
            Arizona: 'אריזונה',
            Oregon: 'אורגון',
            Washington: 'וושינגטון',
            Texas: 'טקסס',
            New_Mexico: 'ניו מקסיקו',
            Michigan: 'מישיגן',
            Florida: 'פלורידה',
            Alaska: 'אלסקה',
            Hawaii: 'הוואי',
            Puerto_Rico: 'פוארטו ריקו',
            Guam: 'גואם',
            Northern_Mariana_Islands: 'איי מריאנה הצפוניים',
            American_Samoa: 'סמואה האמריקנית',
            Nevada: 'נבדה',
            US_Virgin_Islands: 'איי הבתולה של ארצות הברית',
        }
    }
}
const i18n = VueI18n.createI18n({
    locale: 'English',
    fallbackLocale: 'English',
    messages,
})
const app1 = Vue.createApp().use(i18n).mount("#Layer_4")
const app2 = Vue.createApp().use(i18n).mount("#设置等级")
const app3 = Vue.createApp().use(i18n).mount("#Texts")

const 颜色 = ['#F9CDC7', '#C5F9CB', '#CDE8F4', '#FDE8C4', '#D0DCD7', '#E1CEF5', '#D6D6D6'];
const 颜色_randomizer = Math.floor(Math.random() * 7);
如何做爱元素.style.backgroundColor = 颜色[颜色_randomizer]
添加事件监控(如何做爱元素,'click',e=>{
    if (e.target == 文档.body) {
        const 颜色a = Math.floor(Math.random() * 50) + 176;
        const 颜色b = Math.floor(Math.random() * 50) + 176;
        const 颜色c = Math.floor(Math.random() * 50) + 176;
        如何做爱元素.style.backgroundColor = '#' + 颜色a.toString(16) + 颜色b.toString(16) + 颜色c.toString(16)
    }
})

const 设置等级标题 = 设置等级.children[0];

const 全关闭 = _=>{
    设置等级样式.display = '';
    设置语言样式.display = '';
};
const 数据 = {};
const 获取所有省元素们 = _=>[...地区.children];
const 获取所有省等级们 = _=>获取所有省元素们().map(el=>+el.getAttribute('level')||0);
const 本地存储等级们钥匙 = 'us-levels';
const 保存等级们 = _=>{
    let 本地存储value = ""
    for (const 省元素 of 获取所有省元素们()) {
        if (省元素.getAttribute('alt') == "true") {
            本地存储value += '-'
        }
        else 本地存储value += 省元素.getAttribute('level')||0
    }
    本地存储.setItem(本地存储等级们钥匙,本地存储value);
};
const 省等级们正则 = /^[\d|-]{56}$/;
const 获取等级们并生效 = _=>{
    const 等级们字串 = 本地存储.getItem(本地存储等级们钥匙);
    if(!省等级们正则.test(等级们字串)) return;
    const 等级们 = 等级们字串.split('');
    获取所有省元素们().forEach((元素,下标)=>{
        元素.setAttribute('level',等级们[下标]=='-'?'0':等级们[下标])
        if (等级们[下标]=='-') 元素.setAttribute('alt', true);
    })
};
const 图形 = 文档.querySelector('svg');
const 设置等级样式 = 设置等级.style;
const 最小间距 = 6;
添加事件监控(图形,'click', e=>{
    e.stopPropagation();
    
    const { target: 省元素 } = e;
    const 省元素方位 = 获取元素方位(省元素);
    const { id } = 省元素;
    数据.省元素 = 省元素;
    数据.id = id;

    设置等级标题.innerHTML = messages[Lang.textContent].country_name[id];
    设置等级样式.display = 'block';
    const 设置等级元素方位 = 获取元素方位(设置等级);
    
    let 左 = Math.round(省元素方位.left + 省元素方位.width/2 - 设置等级元素方位.width/2);
    左 = Math.min(
        左,
        document.body.offsetWidth - 设置等级元素方位.width - 最小间距
    );
    左 = Math.max(
        左,
        最小间距
    );

    let 上 = Math.round(省元素方位.top + 省元素方位.height/2 - 设置等级元素方位.height/2);
    上 = Math.min(
        上,
        document.body.offsetHeight - 设置等级元素方位.height - 最小间距
    );
    上 = Math.max(
        上,
        最小间距
    );

    设置等级样式.left = 左 + 'px';
    设置等级样式.top = 上 + 'px';
});
添加事件监控(文档,'click',全关闭);
const 计分 = _=>{
    const 分 = 获取所有省等级们().reduce((全, 当前) => {
        return +全 + 当前;
      }, 0);
    Total.innerHTML = `US Level ${分}`;
    webtitle.innerHTML = `US Level ${分}`;
}
添加事件监控(设置等级,'click',e=>{
    e.stopPropagation();
    const 等级 = e.target.getAttribute('data-level');
    if(!等级) return false;
    数据.省元素.setAttribute('level',等级);
    const alt = e.target.hasAttribute('alt');
    if (alt) 数据.省元素.setAttribute('alt',true)
    else 数据.省元素.setAttribute('alt',false);
    全关闭();
    计分();
    保存等级们();
})
添加事件监控(Reset,'click',e=>{
    获取所有省元素们().forEach((元素,下标)=>{
        元素.setAttribute('level','0')
        元素.setAttribute('alt', false);
        if (元素.nodeName == 'g') {
            for (const child of 元素.children) {
                child.setAttribute('level','0');
                child.setAttribute('alt', false);
            }
        }
    })
    全关闭();
    计分();
    保存等级们();
})

const 语言 = 文档.querySelector('#Lang');
const 设置语言样式 = Set_Lang.style;
添加事件监控(语言,'click', e=>{
    全关闭()
    e.stopPropagation();

    设置语言样式.display = 'block';
    const 设置语言方位 = 获取元素方位(Set_Lang);
    const 按钮方位 = 获取元素方位(语言);
    const 当前语言 = Lang.textContent;
    for (const child of Set_Lang.children) {
        if ( child.getAttribute('lang') == 当前语言 ) {
            child.style.background = "#aaa";
        }
        else {
            child.style.background = "#fff";
        }
    }
    
    let 左 = Math.round(按钮方位.left + 按钮方位.width/2 - 设置语言方位.width/2);
    左 = Math.min(
        左,
        document.body.offsetWidth - 设置语言方位.width - 最小间距
    );
    左 = Math.max(
        左,
        最小间距
    );

    let 上 = Math.round(按钮方位.top - 设置语言方位.height - 最小间距);
    上 = Math.min(
        上,
        document.body.offsetHeight - 设置语言方位.height - 最小间距
    );
    上 = Math.max(
        上,
        最小间距
    );

    设置语言样式.left = 左 + 'px';
    设置语言样式.top = 上 + 'px';
});
const 更改语言 = (新语言)=>{
    i18n.global.locale = 新语言
}
添加事件监控(Set_Lang,'click',e=>{
    e.stopPropagation();
    const 语言 = e.target.getAttribute('lang');
    if(!语言) return false;
    Lang.textContent = 语言;
    全关闭();
    更改语言(语言);
})

获取等级们并生效();
计分();

const 读文件成地址 = (原始数据,回调)=>{
    const 读 = new FileReader();
    读.onload = e => 回调(e.target.result);
    读.readAsDataURL(原始数据);
};
const 获取字体数据地址 = (地址,回调)=>{
    fetch(地址).then(r => r.blob()).then(原始数据 => 读文件成地址(原始数据,回调));
};
const 获取字体样式 = (字体名,回调)=>{
    获取字体数据地址(`${字体名}.woff?v=9`,地址 => 回调(`@font-face {
        font-family: ${字体名};
        src: url(${地址});
    };`));
};
获取字体样式('slice',样式字串=>{
    图形.querySelector('style').innerHTML = 样式字串;
    const 样式元素 = 新建元素('style');
    样式元素.innerHTML = 样式字串;
    头元素.appendChild(样式元素);
    setTimeout(_=>如何做爱元素.removeAttribute('data-loading'),2e3);
});

const 宽 = 1150;
const 高 = 920;
const 比 = 2;

const 画板 = 新建元素('canvas');

画板.width = 宽 * 比;
画板.height = 宽 * 比;

const 上下文 = 画板.getContext('2d');

const 从文档文本新建图形文件 = 文档文本=>{
    const 原始数据 = new Blob([文档文本], {type: 'image/svg+xml'});
    return URL.createObjectURL(原始数据);
};
const 是社交媒体 = /weibo|qq/i.test(navigator.userAgent);
// alert(navigator.userAgent)
const 下载文件 = (链接,文件名,元素 = 新建元素('a'))=>{
    if(!是社交媒体){
        元素.download = 文件名;
    }
    元素.href = 链接;
    元素.click();
};
const 地址变图像元素 = (地址,回调)=>{
    const 图 = 新建图();
    添加事件监控(图,'load',_=>回调(图));
    图.src = 地址;
};
const 日志 = _=>(新建图()).src = `https://lab.magiconch.com/api/china-ex/log?levels=${获取所有省等级们().join('')}`;

const 保存图像 = _=>{
    const 文档文本 = `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${宽} ${高}" width="${宽}px" height="${高}px">${图形.innerHTML}</svg>`;
    const 数据地址 = 从文档文本新建图形文件(文档文本);
    地址变图像元素(数据地址,图=>{
        上下文.fillStyle = 如何做爱元素.style.backgroundColor; //'#b4b4ef';
        上下文.fillRect(
            0,0,
            宽 * 比,宽 * 比
        );
        上下文.drawImage(
            图,
            0,0,
            宽,高,
            0,(宽 - 高) * 比 / 2,
            宽 * 比, 高 * 比
        );
        画板.toBlob(元素数据=>{
            const 地址 = URL.createObjectURL(元素数据);
            下载文件(地址,`US Level 0.png`);

            输出图像.style.display = '';
            输出图像.querySelector('img').src = 地址;

        },'image/png');
    });
    日志();
};

添加事件监控(保存,'click',保存图像);

添加事件监控(输出图像.querySelector('a'),'click',_=>{
    输出图像.style.display = 'none'
});
