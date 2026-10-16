// Mise à jour automatique de l'année.
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Nettoyage des paramètres de suivi dans l'URL.
(() => {
    const url = new URL(window.location.href);

    for (const param of [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "utm_id",
        "utm_referrer"
    ]) {
        url.searchParams.delete(param);
    }

    const cleanUrl = url.pathname + url.search + url.hash;

    if (cleanUrl !== window.location.pathname
        + window.location.search
        + window.location.hash) {
        window.history.replaceState(
            null,
            document.title,
            cleanUrl
        );
    }
})();
