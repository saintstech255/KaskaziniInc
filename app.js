const coreData = {
    web: {
        badge: "ACTIVE DIVISION",
        title: "Web Engineering",
        desc: "Ultra-fast, glassmorphic, and SEO-ready websites built for modern Tanzanian businesses.",
        shape: "38% 62% 63% 37% / 41% 44% 56% 59%",
        borderColor: "rgba(34, 211, 238, 0.4)"
    },
    mobile: {
        badge: "MOBILE ECOSYSTEMS",
        title: "iOS & Android Apps",
        desc: "High-performance mobile applications crafted with fluid UI/UX and scalable cloud backends.",
        shape: "62% 38% 34% 66% / 57% 61% 39% 43%",
        borderColor: "rgba(59, 130, 246, 0.5)"
    },
    robotics: {
        badge: "FUTURE LABS // R&D",
        title: "Humanoid Robotics",
        desc: "Pioneering autonomous systems, AI hardware, and next-gen robotics engineering for tomorrow.",
        shape: "50% 50% 28% 72% / 34% 68% 32% 66%",
        borderColor: "rgba(249, 115, 22, 0.5)"
    }
};

// Kubadilisha umbo na taarifa za Tech Core
function switchCore(type) {
    const card = document.getElementById('morph-card');
    const badge = document.getElementById('core-badge');
    const title = document.getElementById('core-title');
    const desc = document.getElementById('core-desc');

    // Ondoa active class kwenye vitufe vyote
    document.querySelectorAll('.core-btn').forEach(btn => {
        btn.classList.remove('active', 'text-white');
        btn.classList.add('text-gray-400');
    });

    // Weka active class kwenye kitufe kilichobonyezwa
    const activeBtn = document.getElementById(`btn-${type}`);
    activeBtn.classList.add('active', 'text-white');
    activeBtn.classList.remove('text-gray-400');

    // Badilisha umbo (Morph) na maandishi
    const selected = coreData[type];
    card.style.borderRadius = selected.shape;
    card.style.borderColor = selected.borderColor;
    badge.textContent = selected.badge;
    title.textContent = selected.title;
    desc.textContent = selected.desc;
}

// Kufungua na Kufunga Fomu ya Kuagiza (Order Modal)
let currentPackage = "";

function openOrderModal(packageName) {
    currentPackage = packageName;
    document.getElementById('selected-package-name').textContent = packageName;
    const modal = document.getElementById('order-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeOrderModal() {
    const modal = document.getElementById('order-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Kutuma Oda Moja kwa Moja WhatsApp
function sendToWhatsApp() {
    const name = document.getElementById('client-name').value.trim() || "Prospective Client";
    const details = document.getElementById('client-details').value.trim() || "Website/App Development";
    
    const message = `Hello Kas-Kazini Inc.!%0A%0A*Name/Company:* ${encodeURIComponent(name)}%0A*Selected Package:* ${encodeURIComponent(currentPackage)}%0A*Project Details:* ${encodeURIComponent(details)}`;
    
    window.open(`https://wa.me/255741643130?text=${message}`, '_blank');
    closeOrderModal();
}
