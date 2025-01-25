/**
 * initializes the content of the page by retrieving components and loading their templates.
 */
function initPageContent() {
    const components = getComponents();
    loadTemplates(components);
}


/**
 * retrieves references to DOM elements that represent the components on the page.
 *
 * @returns {Object} an object containing references to the DOM elements for each component.
 */
function getComponents() {
    return {
        header: document.getElementById('header-content'),
        footer: document.getElementById('footer-content'),
        mobileMenu: document.getElementById('popup-menu'),
        settingsModal: document.getElementById('game-settings-modal'),
        infoModal: document.getElementById('info-guide-modal'),
        gameoverModal: document.getElementById('game-over-screen'),
        landscapeModal: document.getElementById('landscape-modal')
    };
}


/**
 * loads templates into the specified components by injecting HTML into the DOM elements.
 *
 * @param {Object} components - an object containing references to DOM elements for each component.
 * @param {HTMLElement} [components.header] - the header element of the page.
 * @param {HTMLElement} [components.footer] - the footer element of the page.
 * @param {HTMLElement} [components.mobileMenu] - the mobile menu element.
 * @param {HTMLElement} [components.settingsModal] - the settings modal element.
 * @param {HTMLElement} [components.infoModal] - the info guide modal element.
 * @param {HTMLElement} [components.gameoverModal] - the game-over screen element.
 * @param {HTMLElement} [components.landscapeModal] - the landscape mode modal element.
 */
function loadTemplates(components) {
    const TEMPLATES = {
        header: getHeaderTemplate,
        footer: getFooterTemplate,
        mobileMenu: getMobileMenuTemplate,
        settingsModal: getSettingsModalTemplate,
        infoModal: getInfoGuideModalTemplate,
        gameoverModal: getGameOverScreenTemplate,
        landscapeModal: getLandscapeModalTemplate
    };

    // iterate over each component and load the template if the component exists
    for (let key in TEMPLATES) {
        if (components[key]) {
            components[key].innerHTML = TEMPLATES[key]();
        }
    }
}