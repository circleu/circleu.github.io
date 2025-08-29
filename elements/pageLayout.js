function putPageHeader(title, createTime, editTime) {
    return (
        `
        <h1 id="main-title">${title}</h1>
        <hr class="main-divider">
        <p class="access-time">생성 시각: ${createTime}</p>
        <p class="access-time">수정 시각: ${editTime}</p>
        <div class="line-divider"></div>
        `
    );
}
function putPageFooter() {
    return (
        `
        <div class="line-divider"></div>
        <hr class="main-divider">
        `
    );
}
function putCategoryHeader(category) {
    return (
        `
        <h1 id="category-name">${category}</h1><h3 id="category-text">&nbsp;관련 글</h3>
        <hr class="main-divider">
        <div class="line-divider"></div>
        `
    );
}
function putCategoryPageFrame(dir, page) {
    return (
        `
        <a class="category-page-frame" href="${dir}">
            <div>
                ${page}
            </div>
        </a>
        `
    );
}
function putCategoryPage(title, createTime, editTime) {
    return (
        `
        <h2 class="category-page-title">${title}</h2>
        <p class="category-page-access-time">생성 시각: ${createTime}</p>
        <p class="category-page-access-time">수정 시각: ${editTime}</p>
        `
    );
}

export default {putPageHeader, putPageFooter, putCategoryHeader, putCategoryPageFrame, putCategoryPage};