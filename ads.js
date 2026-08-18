// ads.js - Merkezi Reklam ve Script Yönetimi
(function() {
    // 1. Google AdSense Ana Scripti
    var adsenseScript = document.createElement('script');
    adsenseScript.async = true;
    adsenseScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-SENIN_YAYINCI_KODUN"; // Kendi pub kodunu buraya yazacaksın
    adsenseScript.crossOrigin = "anonymous";
    document.head.appendChild(adsenseScript);

    // İLERİDE İSTERSEN: Buraya başka ortak scriptler (Google Analytics vs.) de ekleyebilirsin.
})();
