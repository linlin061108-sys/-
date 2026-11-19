document.addEventListener("DOMContentLoaded", () => {
    const bootScreen = document.getElementById("boot-screen");
    const irisScanner = document.querySelector(".iris-scanner");
    const bootSubText = document.getElementById("boot-sub-text");
    const bootMainText = document.getElementById("boot-main-text");
    const bootProgressBar = document.getElementById("boot-progress-bar");
    const skipBootBtn = document.getElementById("skip-boot-btn");

    function closeBootScreen() {
        if (!bootScreen) return;
        bootScreen.classList.add("fade-out");
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

        if (skipBootBtn) {
            skipBootBtn.addEventListener("click", closeBootScreen);
        }
    }

    const navButtons = document.querySelectorAll(".nav-btn");
    const pages = document.querySelectorAll(".page-section");
    const jumpButtons = document.querySelectorAll("[data-jump]");

    function activatePage(targetId) {
        pages.forEach(page => page.classList.remove("active"));
        navButtons.forEach(btn => {
            btn.classList.remove("active");
            if (btn.getAttribute("data-target") === targetId) {
                btn.classList.add("active");
                btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            }
        });

        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            targetPage.classList.add("active");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            activatePage(btn.getAttribute("data-target"));
        });
    });

    jumpButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            activatePage(btn.getAttribute("data-jump"));
        });
    });

    const sendBtn = document.getElementById("send-chat-btn");
    const chatInput = document.getElementById("chat-input");
    const senderSelect = document.getElementById("sender-select");
    const chatBox = document.getElementById("chat-box");

    if (sendBtn && chatInput && chatBox) {
        function sendMessage() {
            const text = chatInput.value.trim();
            if (!text) return;

            const sender = senderSelect.value;
            const msgDiv = document.createElement("div");
            msgDiv.className = "chat-msg";

            if (sender === "系統公告") {
                msgDiv.classList.add("sys-msg");
                msgDiv.innerHTML = `<span class="chat-time">[系統009公告]</span> ${text}`;
            } else {
                msgDiv.innerHTML = `
                    <span class="chat-badge">核心</span>
                    <span class="chat-name">${sender}：</span>${text}
                `;
            }

            chatBox.appendChild(msgDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
            chatInput.value = "";
        }

        sendBtn.addEventListener("click", sendMessage);
        chatInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") sendMessage();
        });
    }
});
