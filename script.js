document.addEventListener("DOMContentLoaded", function () {

    const analyzeBtn = document.getElementById("analyzeBtn");

    analyzeBtn.addEventListener("click", function () {

        const timing = performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;

        const images = document.images.length;
        const scripts = document.scripts.length;
        const styles = document.querySelectorAll("link[rel='stylesheet']").length;

        let pageSize = 0;
        performance.getEntriesByType("resource").forEach(r => {
            pageSize += r.encodedBodySize || 0;
        });

        document.getElementById("loadTime").textContent = loadTime;
        document.getElementById("imageCount").textContent = images;
        document.getElementById("scriptCount").textContent = scripts;
        document.getElementById("styleCount").textContent = styles;
        document.getElementById("pageSize").textContent =
            Math.round(pageSize / 1024);

        document.getElementById("results").classList.remove("hidden");
    });
});
