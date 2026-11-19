document.addEventListener("DOMContentLoaded", () => {
    /* 1. 虹膜掃描啟動動畫 */
    const bootScreen = document.getElementById("boot-screen");
    const irisScanner = document.querySelector(".iris-scanner");
    const bootSubText = document.getElementById("boot-sub-text");
    const bootMainText = document.getElementById("boot-main-text");
    const bootProgressBar = document.getElementById("boot-progress-bar");
    const skipBootBtn = document.getElementById("skip-boot-btn");

    function closeBootScreen() {
        if (bootScreen) bootScreen.classList.add("fade-out");
    }

    if (bootScreen) {
        setTimeout(() => {
            if (bootProgressBar) bootProgressBar.style.width = "45%";
            if (bootSubText) bootSubText.textContent = "比對高維位面生存者權限...";
        }, 350);
        setTimeout(() => {
            if (bootProgressBar) bootProgressBar.style.width = "85%";
            if (bootSubText) bootSubText.textContent = "虹膜特徵吻合 // 權限等級：核心觀測者";
        }, 1300);
        setTimeout(() => {
            if (bootProgressBar) bootProgressBar.style.width = "100%";
            if (irisScanner) irisScanner.classList.add("verified");
            if (bootSubText) bootSubText.textContent = "LINK ESTABLISHED // 連線成功";
            if (bootMainText) bootMainText.textContent = "「位面系統009為您服務」";
        }, 2100);
        setTimeout(closeBootScreen, 3600);
        if (skipBootBtn) skipBootBtn.addEventListener("click", closeBootScreen);
    }

    /* 2. 渲染上下雙列監測區（心電圖 + 腦波與招魔波動） */
    const bioMount = document.getElementById("biometric-mount");
    if (bioMount) {
        const gridLines = `
            <line x1="0" y1="22" x2="600" y2="22" />
            <line x1="0" y1="45" x2="600" y2="45" />
            <line x1="0" y1="68" x2="600" y2="68" />
            <line x1="150" y1="0" x2="150" y2="90" />
            <line x1="300" y1="0" x2="300" y2="90" />
            <line x1="450" y1="0" x2="450" y2="90" />
        `;
        const ecgPath = "M0,45 L70,45 L82,36 L92,45 L110,45 L118,16 L128,78 L138,10 L148,60 L156,45 L180,45 L195,33 L210,45 L290,45 L302,36 L312,45 L330,45 L338,16 L348,78 L358,10 L368,60 L376,45 L400,45 L415,33 L430,45 L510,45 L522,36 L532,45 L550,45 L558,16 L568,78 L578,10 L588,60 L600,45";
        const brainMain = "M0,45 C10,18 20,72 30,45 C40,22 50,68 60,45 C70,30 80,60 90,45 C100,8 110,82 120,45 C130,14 140,76 150,45 C160,28 170,62 180,45 C190,18 200,72 210,45 C220,25 230,65 240,45 C250,10 260,80 270,45 C280,20 290,70 300,45 C310,30 320,60 330,45 C340,12 350,78 360,45 C370,22 380,68 390,45 C400,28 410,62 420,45 C430,10 440,80 450,45 C460,20 470,70 480,45 C490,30 500,60 510,45 C520,14 530,76 540,45 C550,24 560,66 570,45 C580,18 590,72 600,45";
        const brainSub = "M0,45 Q15,25 30,45 T60,45 T90,45 Q105,12 120,45 T150,45 T180,45 Q195,78 210,45 T240,45 T270,45 Q285,15 300,45 T330,45 T360,45 Q375,75 390,45 T420,45 T450,45 Q465,12 480,45 T510,45 T540,45 Q555,78 570,45 T600,45";

        bioMount.innerHTML = `
            <div class="bio-glass-box liquid-glass">
                <div class="bio-top-info">
                    <span class="bio-label gold">● CARDIAC PULSE // 宿主靈魂心電監測</span>
                    <span class="bio-stat">HEART RATE: <strong>76 BPM</strong> ｜ SYNC: <strong>98.4%</strong></span>
                </div>
                <div class="wave-monitor">
                    <svg viewBox="0 0 600 90" preserveAspectRatio="none" class="wave-svg">
                        <g stroke="rgba(230, 194, 122, 0.14)" stroke-width="1">${gridLines}</g>
                        <path class="ecg-wave-glow" fill="none" d="${ecgPath}" />
                        <path class="ecg-wave-line" fill="none" d="${ecgPath}" />
                    </svg>
                </div>
            </div>
            <div class="bio-glass-box liquid-glass">
                <div class="bio-top-info">
                    <span class="bio-label crimson">▲ NEURAL & LURE WAVE // 腦波振幅與招魔波動</span>
                    <span class="bio-stat alert">招魔波動：<strong>HIGH (高危誘餌)</strong> ｜ 精神屏障：<strong>穩定</strong></span>
                </div>
                <div class="wave-monitor">
                    <svg viewBox="0 0 600 90" preserveAspectRatio="none" class="wave-svg">
                        <g stroke="rgba(248, 113, 113, 0.14)" stroke-width="1">${gridLines}</g>
                        <path class="brain-wave-secondary" fill="none" d="${brainSub}" />
                        <path class="brain-wave-primary" fill="none" d="${brainMain}" />
                    </svg>
                </div>
                <div class="bio-bottom-meta">
                    <span>SUBJECTS: 魚期灩 [洗洗睡] / 莫鬱 [一醉解千愁]</span>
                    <span>BRAINWAVE: GAMMA-42Hz // 清醒觀測</span>
                </div>
            </div>
        `;
    }

    /* 3. 六大幾何選單與分頁資料庫 */
    const menuItems = [
        {
            id: "page-01",
            encrypted: true,
            num: "01 // CLASSIFIED",
            title: "加密檔案",
            sub: "位面崩塌與神明法則",
            svg: `<polygon points="30,4 56,30 30,56 4,30" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="30" cy="30" r="14" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><rect x="24" y="27" width="12" height="10" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M26,27 V23 A4,4 0 0,1 34,23 V27" fill="none" stroke="currentColor" stroke-width="1.4"/>`
        },
        {
            id: "page-02",
            encrypted: false,
            num: "02 // SUBJECTS",
            title: "雙主角檔案",
            sub: "高危誘餌組三重身份",
            svg: `<circle cx="24" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="36" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="30" y1="8" x2="30" y2="52" stroke="currentColor" stroke-width="0.9" stroke-dasharray="2 3"/>`
        },
        {
            id: "page-03",
            encrypted: false,
            num: "03 // GLOBAL_CHAT",
            title: "系統聊天公屏",
            sub: "全服情報與吃瓜頻道",
            svg: `<circle cx="30" cy="30" r="22" fill="none" stroke="currentColor" stroke-width="1.2"/><ellipse cx="30" cy="30" rx="22" ry="9" fill="none" stroke="currentColor" stroke-width="1"/><ellipse cx="30" cy="30" rx="9" ry="22" fill="none" stroke="currentColor" stroke-width="1"/>`
        },
        {
            id: "page-04",
            encrypted: false,
            num: "04 // ENTITIES",
            title: "異界怪物圖鑑",
            sub: "墮體與逸怪威脅分級",
            svg: `<polygon points="30,6 54,48 6,48" fill="none" stroke="currentColor" stroke-width="1.2"/><polygon points="30,54 54,12 6,12" fill="none" stroke="currentColor" stroke-width="0.9" opacity="0.7"/><circle cx="30" cy="30" r="4" fill="currentColor"/>`
        },
        {
            id: "page-05",
            encrypted: false,
            num: "05 // CHOSEN_ONE",
            title: "天道之子名單",
            sub: "氣運寵兒重點規避區",
            svg: `<circle cx="30" cy="30" r="18" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="30" y1="2" x2="30" y2="58" stroke="currentColor" stroke-width="1"/><line x1="2" y1="30" x2="58" y2="30" stroke="currentColor" stroke-width="1"/><circle cx="30" cy="30" r="6" fill="none" stroke="currentColor" stroke-width="1.4"/>`
        },
        {
            id: "page-06",
            encrypted: false,
            num: "06 // ARCHIVE",
            title: "副本與道具庫",
            sub: "已探索副本與異常遺物",
            svg: `<polygon points="30,5 52,17.5 52,42.5 30,55 8,42.5 8,17.5" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="30" y1="5" x2="30" y2="55" stroke="currentColor" stroke-width="0.9" opacity="0.65"/><line x1="8" y1="17.5" x2="52" y2="42.5" stroke="currentColor" stroke-width="0.9" opacity="0.65"/><line x1="52" y1="17.5" x2="8" y2="42.5" stroke="currentColor" stroke-width="0.9" opacity="0.65"/>`
        }
    ];
    const pageTemplates = {
        "page-01": [
            '<div class="section-header"><h2>01 // 【加密檔案】世界觀與神明系統法則</h2><span class="silver-code">CLEARANCE: TOP_SECRET</span></div>',
            '<div class="grid-2">',
            '<div class="card liquid-glass"><span class="card-tag">高維神明權柄 // 絕密</span><h3>末世成因：位面崩塌與融合</h3><p>鄰近的高維度位面發生未知崩塌，該位面的神明為了延續自身存在，強行鎖定並試圖與我們的世界融合、重建秩序。</p><div class="editable-note"><strong>[系統補充紀錄]</strong><ul class="stat-list"><li>神明無法直接降臨完整本體，必須透過空間裂縫與副本逐步同化現實法則。</li><li>現實世界每天都有部分區域被永久「異化」。</li></ul></div></div>',
            '<div class="card liquid-glass"><span class="card-tag">神明的精神規訓 // 絕密</span><h3>偽裝機制：「覺醒系統」與公屏</h3><p>神明讀取人類集體潛意識，捏造出遊戲化的「系統面板、天賦、副本與世界聊天公屏」，讓人類在熟悉的規則中互相競爭、交換情報，在不知不覺中遵從神明制定的生存法則。</p><div class="editable-note"><strong>[公屏社交法則]</strong><ul class="stat-list"><li>每位覺醒者皆可自訂「系統暱稱」在公屏發言，隱藏真實身份。</li><li>進入多人副本時則會啟用「組隊代號」，防止現實仇家追殺。</li></ul></div></div>',
            '</div>',
            '<div class="card liquid-glass"><h3>關聯檔案快速跳轉</h3><p>已建檔核心生存者：<strong>魚期灩</strong>（公屏：洗洗睡／代號：魚靈）與 <strong>莫鬱</strong>（公屏：一醉解千愁／代號：西卒公羽）。</p><div class="btn-group"><button class="action-btn" data-jump="page-02">調閱雙主角三重身份檔案 →</button><button class="action-btn" data-jump="page-03">進入系統世界聊天公屏 →</button></div></div>'
        ].join(""),
        "page-02": [
            '<div class="section-header"><h2>02 // 雙主角檔案（非主角團視角）</h2><span class="silver-code">FILE_ID: 002-SUBJECTS</span></div>',
            '<div class="card liquid-glass"><span class="card-tag">異常體質警告：高危誘餌</span><h3>共同特殊體質：【高危招魔體質（名稱可自訂）】</h3><p>在「逸怪」與「墮體」的感知中如同黑夜裡的燈塔，仇恨值永遠優先鎖定兩人。兩人平日習慣在系統公屏潛水吃瓜，進副本則換上馬甲低調刷寶，絕不與「天道之子」正面搶風頭。</p></div>',
            '<div class="grid-2">',
            '<div class="card liquid-glass"><span class="card-tag">SUBJECT 01 // 核心角色 A</span><h3>本名：魚期灩</h3><ul class="stat-list"><li><span class="stat-label">公屏暱稱：</span><strong>洗洗睡</strong>（系統聊天頻道常用 ID）</li><li><span class="stat-label">副本代號：</span><strong>魚靈</strong>（多人副本組隊專用馬甲）</li><li><span class="stat-label">初始天賦：</span>[待填寫，建議：隱匿、空間感知、水霧或控制類]</li><li><span class="stat-label">性格關鍵字：</span>[待填寫，例如：表面鹹魚想躺平、實則直覺敏銳]</li><li><span class="stat-label">生存準則：</span>天塌下來有天道之子頂著，咱們刷完副本就洗洗睡</li></ul></div>',
            '<div class="card liquid-glass"><span class="card-tag">SUBJECT 02 // 核心角色 B</span><h3>本名：莫鬱</h3><ul class="stat-list"><li><span class="stat-label">公屏暱稱：</span><strong>一醉解千愁</strong>（系統聊天頻道常用 ID）</li><li><span class="stat-label">副本代號：</span><strong>西卒公羽</strong>（拆字暗號馬甲，組隊專用）</li><li><span class="stat-label">初始天賦：</span>[待填寫，建議：高爆發輸出、刃氣、或狀態轉化類]</li><li><span class="stat-label">性格關鍵字：</span>[待填寫，例如：沉靜內斂、護短、關鍵時刻極果斷]</li><li><span class="stat-label">生存準則：</span>在神明捏造的規則裡清醒地活著，順便清理送上門的怪</li></ul></div>',
            '</div>'
        ].join(""),
        "page-03": [
            '<div class="section-header"><h2>03 // 系統世界聊天公屏（情報與吃瓜頻道）</h2><span class="silver-code">CHANNEL: GLOBAL_01</span></div>',
            '<div class="card liquid-glass"><h3>系統公屏規則說明</h3><p>神明系統仿照人類網路聊天室建立的全球頻道。覺醒者可透過意念在公屏發布情報、交易物資或打探「天道之子」的動向。公屏僅顯示自訂暱稱，無法直接追蹤現實座標。</p>',
            '<div id="chat-box" class="chat-window">',
            '<div class="chat-msg sys-msg"><span class="chat-time">[系統009公告]</span> 警告：東區空間裂縫擴大，三隻【逸怪】已逃逸至現實街區，請附近覺醒者注意規避。</div>',
            '<div class="chat-msg"><span class="chat-badge">路人甲</span><span class="chat-name">不想進副本：</span>救命！東區這邊怪物怎麼全往同一條巷子衝過去了？那邊有什麼絕世寶物嗎？</div>',
            '<div class="chat-msg"><span class="chat-badge">氣運波動</span><span class="chat-name">天道之子（匿名小號）：</span>我們小隊正在前往清理，無關人員請勿靠近。</div>',
            '<div class="chat-msg"><span class="chat-badge">核心</span><span class="chat-name">洗洗睡：</span>謝邀，人在巷口，剛把怪甩掉，大佬們請慢用，我先撤了。</div>',
            '<div class="chat-msg"><span class="chat-badge">核心</span><span class="chat-name">一醉解千愁：</span>東區物資已清點完畢，順便收購一批抗精神污染藥劑，私聊報價。</div>',
            '</div>',
            '<div class="chat-controls"><select id="sender-select"><option value="洗洗睡">發言暱稱：洗洗睡</option><option value="一醉解千愁">發言暱稱：一醉解千愁</option><option value="系統公告">發言身份：系統009全服公告</option></select><input type="text" id="chat-input" placeholder="輸入要發送到世界公屏的對話內容..."><button id="send-chat-btn" class="action-btn">發送至公屏</button></div>',
            '</div>'
        ].join(""),
        "page-04": [
            '<div class="section-header"><h2>04 // 異界生物威脅分級圖鑑</h2><span class="silver-code">FILE_ID: 004-ENTITIES</span></div>',
            '<div class="grid-2">',
            '<div class="card liquid-glass"><span class="card-tag">威脅度：低～中｜副本內部</span><h3>墮體（副本嘍囉）</h3><p>構成副本基礎生態的底層造物，通常成群結隊出現，沒有高階自我意識，完全遵從副本狩獵本能。</p><ul class="stat-list"><li><span class="stat-label">出沒區域：</span>各類副本內圍與外圍</li><li><span class="stat-label">系統掉落：</span>基礎生存物資、低階強化結晶</li></ul></div>',
            '<div class="card liquid-glass"><span class="card-tag">威脅度：中～高｜現實世界</span><h3>逸怪（逃逸異種）</h3><p>透過空間裂縫滲透進現實世界的異常個體，會主動獵食人類以加速所在區域的「位面異化」，對高危招魔體質極度敏感。</p><ul class="stat-list"><li><span class="stat-label">出沒區域：</span>現實世界裂縫周邊、廢棄街區</li><li><span class="stat-label">系統掉落：</span>稀有異化核心、系統積分懸賞</li></ul></div>',
            '</div>'
        ].join(""),
        "page-05": [
            '<div class="section-header"><h2>05 // 天道之子觀測名單</h2><span class="silver-code">FILE_ID: 005-CHOSEN</span></div>',
            '<div class="card liquid-glass"><span class="card-tag">氣運寵兒 // 重點規避對象</span><h3>觀測檔案：[待與共創夥伴填寫角色名]</h3><p>深受世界意識與神明系統眷顧的「主角團」成員，自帶高調光環與奇遇體質。一旦靠近他們，周圍的麻煩與劇情衝突會呈幾何級數上升。</p><div class="editable-note"><strong>[誘餌組應對策略]</strong>：保持安全距離，等他們把大型副本 Boss 打殘或吸引走主要火力後，再低調進場收割邊角料。</div></div>'
        ].join(""),
        "page-06": [
            '<div class="section-header"><h2>06 // 副本與道具庫</h2><span class="silver-code">FILE_ID: 006-ARCHIVE</span></div>',
            '<div class="grid-2">',
            '<div class="card liquid-glass"><span class="card-tag">已探索副本紀錄</span><h3>副本名稱：[待填寫副本名稱]</h3><ul class="stat-list"><li><span class="stat-label">危險等級：</span>[例如：B級｜精神污染型]</li><li><span class="stat-label">通關條件：</span>[待補充規則與核心機制]</li></ul></div>',
            '<div class="card liquid-glass"><span class="card-tag">核心道具／裝備</span><h3>道具名稱：[待填寫道具名稱]</h3><ul class="stat-list"><li><span class="stat-label">持有者：</span>魚期灩 / 莫鬱</li><li><span class="stat-label">特殊效果：</span>[待補充道具功能與副作用]</li></ul></div>',
            '</div>'
        ].join("")
    };

const geoMount = document.getElementById("geo-menu-mount");
const systemHub = document.getElementById("system-hub");
const detailWorkspace = document.getElementById("detail-workspace");
const subpageContent = document.getElementById("subpage-content");
const backToHubBtn = document.getElementById("back-to-hub-btn");
    if (geoMount) {
        geoMount.innerHTML = menuItems.map(item =>
            '<button class="geo-btn ' + (item.encrypted ? 'encrypted' : '') + '" data-open-page="' + item.id + '">' +
            '<div class="geo-icon"><svg viewBox="0 0 60 60">' + item.svg + '</svg></div>' +
            '<span class="geo-num">' + item.num + '</span>' +
            '<span class="geo-title">' + item.title + '</span>' +
            '<span class="geo-sub">' + item.sub + '</span>' +
            '</button>'
        ).join("");
    }
    function bindChatEvents() {
        const sendBtn = document.getElementById("send-chat-btn");
        const chatInput = document.getElementById("chat-input");
        const senderSelect = document.getElementById("sender-select");
        const chatBox = document.getElementById("chat-box");
        if (!sendBtn || !chatInput || !chatBox) return;

        function sendMessage() {
            const text = chatInput.value.trim();
            if (!text) return;
            const sender = senderSelect.value;
            const msgDiv = document.createElement("div");
            msgDiv.className = "chat-msg";
            if (sender === "系統公告") {
                msgDiv.classList.add("sys-msg");
                msgDiv.innerHTML = '<span class="chat-time">[系統009公告]</span> ' + text;
            } else {
                msgDiv.innerHTML = '<span class="chat-badge">核心</span><span class="chat-name">' + sender + '：</span>' + text;
            }
            chatBox.appendChild(msgDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
            chatInput.value = "";
        }

        sendBtn.addEventListener("click", sendMessage);
        chatInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") sendMessage();
        });
    }

    function openPage(pageId) {
        if (systemHub) systemHub.classList.add("hidden");
        if (detailWorkspace) detailWorkspace.classList.remove("hidden");
        if (subpageContent && pageTemplates[pageId]) {
            subpageContent.innerHTML = '<section class="page-section active">' + pageTemplates[pageId] + '</section>';
            subpageContent.querySelectorAll("[data-jump]").forEach(function(btn) {
                btn.addEventListener("click", function() {
                    openPage(btn.getAttribute("data-jump"));
                });
            });
            if (pageId === "page-03") bindChatEvents();
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    document.querySelectorAll("[data-open-page]").forEach(function(btn) {
        btn.addEventListener("click", function() {
            openPage(btn.getAttribute("data-open-page"));
        });
    });

    if (backToHubBtn) {
        backToHubBtn.addEventListener("click", function() {
            if (detailWorkspace) detailWorkspace.classList.add("hidden");
            if (systemHub) systemHub.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
