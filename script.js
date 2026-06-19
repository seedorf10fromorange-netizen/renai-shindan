/* ========================================================
   定数設定（ここでリンクや文言を管理します）
======================================================== */
const CONFIG = {
    // A8.net等のアフィリエイトリンク
    linkBrillante: 'https://px.a8.net/svt/ejp?a8mat=4B5TCD+3F8SJM+5SGG+5YJRM', 
    linkCoconala: 'https://px.a8.net/svt/ejp?a8mat=4B5TCD+3C9MIQ+2PEO+1BPGPE',   
    shareText: '私の恋愛こじらせ沼タイプは…',
    shareHashtag: '恋愛こじらせ沼脱出診断',
    shareUrl: window.location.href
};

// 質問と選択肢
const QUESTIONS = [
    {
        q: "夜、ひとりで部屋にいるとき一番近い感情は？",
        options: [
            { text: "急に不安になって誰かと連絡を取りたくなる", types: ["type1", "type4"] },
            { text: "元カレのSNSをつい見に行ってしまう", types: ["type2"] },
            { text: "占いや性格診断をネットで探しちゃう", types: ["type3"] },
            { text: "動画を見ながらとにかく何も考えないようにする", types: ["type5"] }
        ]
    },
    {
        q: "友達に恋愛相談をしたとき、よく思うことは？",
        options: [
            { text: "「正論じゃなくて、ただ共感してほしいのに…」", types: ["type4", "type1"] },
            { text: "「私の本当の気持ち、わかってもらえてないな」", types: ["type3"] },
            { text: "「何度同じ相談しても呆れられそうで申し訳ない」", types: ["type2"] },
            { text: "友達にはお金もかからないし別に不満はない", types: ["type5"] }
        ]
    },
    {
        q: "「復縁」についてどう思う？",
        options: [
            { text: "今でもあの人以上の人はいないと思う", types: ["type2"] },
            { text: "新しい恋もしたいけど、やっぱり未練がある", types: ["type2", "type3"] },
            { text: "執着はしてないけど、たまに寂しくなる", types: ["type1"] },
            { text: "基本は次へ行く派。過去には戻らない", types: ["type5", "type4"] }
        ]
    },
    {
        q: "何かを決断するとき、あなたはどうする？",
        options: [
            { text: "とにかく色んな人の意見を聞きまくる", types: ["type3"] },
            { text: "誰かに「それでいいよ」と背中を押してほしい", types: ["type1", "type4"] },
            { text: "過去の失敗を思い出して、なかなか決められない", types: ["type2"] },
            { text: "口コミや評判、コスパを徹底的に調べる", types: ["type5"] }
        ]
    },
    {
        q: "「占い」に一番求めるものは何ですか？",
        options: [
            { text: "自分の辛い気持ちに寄り添って、話を聞いてほしい", types: ["type4"] },
            { text: "不安な時に、今すぐ不安を和らげてほしい", types: ["type1"] },
            { text: "本当に当たる先生の、確かな答えがほしい", types: ["type3"] },
            { text: "お金はあまりかけたくない。無料や安いのがいい", types: ["type5"] }
        ]
    },
    {
        q: "今、一番欲しい言葉は？",
        options: [
            { text: "「いつでも味方だよ、大丈夫」", types: ["type1", "type4"] },
            { text: "「あの人も、あなたのことを想ってるよ」", types: ["type2"] },
            { text: "「あなたの未来はこうなるよ、だからこう行動して」", types: ["type3"] },
            { text: "「お得に悩みを解決できる方法があるよ」", types: ["type5"] }
        ]
    },
    {
        q: "悩み事で頭がいっぱいのとき、文字にする？話す？",
        options: [
            { text: "LINEみたいに文字を打ちながら整理したい", types: ["type1", "type2"] },
            { text: "誰かの声を聞いて安心したいから通話がいい", types: ["type3"] },
            { text: "文字でも通話でも、とにかく全部吐き出したい", types: ["type4"] },
            { text: "無料ならどっちでもいい", types: ["type5"] }
        ]
    },
    {
        q: "新しいサービスを試す決め手になるのは？",
        options: [
            { text: "登録が簡単で、今すぐ使える手軽さ", types: ["type1", "type2"] },
            { text: "有名な会社が運営していて、口コミが多いこと", types: ["type3"] },
            { text: "占い以外のカテゴリ（悩み相談など）もあること", types: ["type4"] },
            { text: "初回無料や割引などの特典がお得なこと", types: ["type5"] }
        ]
    }
];

// 結果タイプ別のデータ（画像パスを追加）
const RESULTS = {
    type1: {
        title: "深夜のモヤモヤ爆発タイプ",
        image: "images/type1.jpg",
        empathy: "夜になると急に不安に襲われたり、ネガティブな想像ばかりして一人で泣きたくなることはありませんか？あなたは感受性が強く、我慢しすぎる傾向があります。",
        solution: "我慢せずに、不安になったその瞬間に「誰かと繋がっている安心感」を得ることが大切。気持ちを外に出すだけで、心は驚くほど軽くなります。",
        recommendation: "チャット占い【ブリランテ】",
        reason: "ブリランテは24時間いつでもLINE感覚で相談可能。深夜にモヤモヤが爆発しそうなとき、スマホひとつでサクッとプロに頼れる手軽さがあなたにぴったりです。",
        ctaText: "今すぐLINEで相談してみる",
        ctaLink: CONFIG.linkBrillante
    },
    type2: {
        title: "過去引きずり（復縁）タイプ",
        image: "images/type2.jpg",
        empathy: "「あの時こうしていれば…」と過去の恋愛を何度も反芻していませんか？あなたは一途で情が深い分、一度好きになった人を忘れるのに時間がかかるタイプです。",
        solution: "同じ悩みをぐるぐる考えてしまうなら、客観的な第三者の視点を取り入れること。そして、もらったアドバイスを「お守り」として見返すことが心の安定に繋がります。",
        recommendation: "チャット占い【ブリランテ】",
        reason: "ブリランテはチャットの履歴がずっと残ります。復縁や複雑な恋愛相談に強い先生が多く、不安になったらいつでも占い師からの温かい言葉を見返せるのが最大の魅力です。",
        ctaText: "復縁の可能性を相談してみる",
        ctaLink: CONFIG.linkBrillante
    },
    type3: {
        title: "占い・相談ジプシータイプ",
        image: "images/type3.jpg",
        empathy: "友達に相談しても、ネットの無料占いをやっても「なんだか腑に落ちない」と感じていませんか？あなたは納得感を重視し、本当に信頼できる答えを探し求めています。",
        solution: "妥協せず、実績や口コミをしっかり確認して「この人なら信頼できる」と思えるプロの占い師に一度だけしっかり鑑定してもらうのが解決の近道です。",
        recommendation: "ココナラ占い",
        reason: "ココナラは圧倒的な在籍数と口コミ数を誇ります。実際に利用した人の生の声を見て、自分と相性の良さそうな先生を比較・厳選できるため、ジプシー状態から抜け出せます。",
        ctaText: "口コミで人気の先生を探す",
        ctaLink: CONFIG.linkCoconala
    },
    type4: {
        title: "とにかく話を聞いてほしいタイプ",
        image: "images/type4.jpg",
        empathy: "「正論やアドバイスが欲しいわけじゃない。ただ、私のこの辛い気持ちを受け止めてほしい…」そう思っていませんか？あなたは今、心が少しお疲れ気味のようです。",
        solution: "未来を占ってもらう前に、まずは心のデトックスが必要です。あなたの想いを否定せずにすべて聞いてくれる「傾聴のプロ」を頼ってみてください。",
        recommendation: "ココナラ 悩み相談・話し相手",
        reason: "ココナラには占いだけでなく「悩み相談・愚痴聞き」の専用カテゴリがあります。占い師ではなく心理カウンセラーや聞き上手のプロに、ただただ話を聞いてもらうことができます。",
        ctaText: "心のデトックスを体験する",
        ctaLink: CONFIG.linkCoconala
    },
    type5: {
        title: "慎重派コスパ重視タイプ",
        image: "images/type5.jpg",
        empathy: "悩みはあるけれど「怪しいサイトは嫌だ」「高いお金を払って失敗したくない」と警戒していませんか？あなたはとても現実的で賢いタイプです。",
        solution: "その警戒心は正しいです。まずは上場企業が運営している安心・安全なプラットフォームで、初回特典やお得なクーポンを使って「お試し体験」をするのがベストです。",
        recommendation: "ココナラ占い ＆ お悩み相談",
        reason: "ココナラはTVCMでもおなじみの上場企業運営。決済もココナラが仲介するため安心です。さらに業界最安値水準の手頃な価格帯のサービスが多く、コスパ最強です。",
        ctaText: "お得な初回特典をチェック",
        ctaLink: CONFIG.linkCoconala
    }
};

/* ========================================================
   システムロジック
======================================================== */
let currentQuestionIndex = 0;
let scores = { type1: 0, type2: 0, type3: 0, type4: 0, type5: 0 };
let history = []; 

// DOM要素
const els = {
    startScreen: document.getElementById('start-screen'),
    questionScreen: document.getElementById('question-screen'),
    resultScreen: document.getElementById('result-screen'),
    startBtn: document.getElementById('start-btn'),
    backBtn: document.getElementById('back-btn'),
    restartBtn: document.getElementById('restart-btn'),
    copyUrlBtn: document.getElementById('copy-url-btn'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    currentQNum: document.getElementById('current-q-num'),
    progressBar: document.getElementById('progress-bar'),
    mainBgImg: document.getElementById('main-bg-img'),
    resultTypeImg: document.getElementById('result-type-img')
};

// 起動時の背景アニメーション
window.addEventListener('load', () => {
    setTimeout(() => {
        els.mainBgImg.classList.add('zoom');
    }, 100);
});

// 画面切り替え（スムーズフェード）
function showScreen(hideEl, showEl) {
    hideEl.classList.remove('active');
    hideEl.classList.add('hidden');
    setTimeout(() => {
        showEl.classList.remove('hidden');
        showEl.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 350); // cssのmotion-primaryに合わせる
}

// 質問の描画
function renderQuestion() {
    const qData = QUESTIONS[currentQuestionIndex];
    els.currentQNum.textContent = currentQuestionIndex + 1;
    els.questionText.textContent = qData.q;
    
    // プログレスバー更新
    const progress = ((currentQuestionIndex) / QUESTIONS.length) * 100;
    els.progressBar.style.width = `${progress}%`;

    // 選択肢の生成
    els.optionsContainer.innerHTML = '';
    qData.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        
        // わずかな遅延でフェードインさせることでリッチなUXに
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(10px)';
        btn.style.transition = 'all 350ms cubic-bezier(0.2, 0.8, 0.2, 1)';
        
        btn.onclick = () => handleAnswer(opt.types);
        els.optionsContainer.appendChild(btn);
        
        setTimeout(() => {
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 50 * index); // 順番にフワッと出る
    });

    els.backBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'block';
}

// 回答処理
function handleAnswer(types) {
    history.push(JSON.parse(JSON.stringify(scores)));
    types.forEach(type => { if (scores[type] !== undefined) scores[type] += 1; });
    currentQuestionIndex++;

    if (currentQuestionIndex < QUESTIONS.length) {
        // 次の質問へ
        els.optionsContainer.style.opacity = '0';
        els.questionText.style.opacity = '0';
        els.questionText.style.transform = 'translateY(-10px)';
        els.questionText.style.transition = 'all 200ms ease';
        
        setTimeout(() => {
            renderQuestion();
            els.optionsContainer.style.opacity = '1';
            els.questionText.style.opacity = '1';
            els.questionText.style.transform = 'translateY(0)';
        }, 250);
    } else {
        showResult();
    }
}

// 結果描画
function showResult() {
    let maxScore = -1;
    let finalType = 'type1';
    for (const [type, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            finalType = type;
        }
    }

    const resultData = RESULTS[finalType];

    // 背景画像を結果の画像に切り替え（没入感アップ）
    els.mainBgImg.src = resultData.image;
    els.resultTypeImg.src = resultData.image;

    document.getElementById('result-title').textContent = resultData.title;
    document.getElementById('result-empathy').textContent = resultData.empathy;
    document.getElementById('result-solution').textContent = resultData.solution;
    document.getElementById('result-recommendation').textContent = resultData.recommendation;
    document.getElementById('result-reason').textContent = resultData.reason;
    
    const ctaBtn = document.getElementById('cta-button');
    ctaBtn.textContent = resultData.ctaText + " ▶";
    ctaBtn.href = resultData.ctaLink;

    els.progressBar.style.width = '100%';
    showScreen(els.questionScreen, els.resultScreen);
}

// イベントリスナー
els.startBtn.addEventListener('click', () => {
    showScreen(els.startScreen, els.questionScreen);
    renderQuestion();
});

els.backBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        scores = history.pop();
        
        els.optionsContainer.style.opacity = '0';
        els.questionText.style.opacity = '0';
        setTimeout(() => {
            renderQuestion();
            els.optionsContainer.style.opacity = '1';
            els.questionText.style.opacity = '1';
        }, 200);
    }
});

els.restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    scores = { type1: 0, type2: 0, type3: 0, type4: 0, type5: 0 };
    history = [];
    els.mainBgImg.src = "images/main.jpg"; // 背景を元に戻す
    showScreen(els.resultScreen, els.startScreen);
});

// URLコピー
els.copyUrlBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(CONFIG.shareUrl).then(() => {
        const originalText = els.copyUrlBtn.textContent;
        els.copyUrlBtn.textContent = "✅ コピーしました！";
        setTimeout(() => {
            els.copyUrlBtn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        alert("URLのコピーに失敗しました。");
    });
});
