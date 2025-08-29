function putHyperlink(img, label, link, text) {
    return (
        `
        <div class="hyperlink-frame">
            <img class="hyperlink-image" src="${img}" />
            <span class="hyperlink-label">${label}:&nbsp</span>
            <a class="hyperlink" href="${link}">${text}</a>
        </div>
        `
    );
}

export default {putHyperlink};