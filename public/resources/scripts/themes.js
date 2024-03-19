let currentTheme = 'light';
const themes = {
    light: {
        'primary-color': '#BF0F0F',
        'header-border-color': 'rgba(136, 135, 135, 0.4)',
        'bg-primary': '#fff',
        'bg-secondary': '#F4F4F4',
        'bg-header': '#D9D9D9',
        'primary-text': '#474747',
        'secondary-text': '#303030',
        'nav-title': 'black'
    }, dark: {
        'primary-color': '#BF0F0F',
        'header-border-color': 'rgba(136, 135, 135, 0.4)',
        'bg-primary': '#484848',
        'bg-secondary': '#383838',
        'bg-header': '#313131',
        'primary-text': '#ffffff',
        'secondary-text': '#c4c4c4',
        'nav-title': 'white'
    }
}


/**
 * @param name {string}
 */
function setTheme(name) {
    if (themes[name] !== null) {
        const root = document.documentElement.style;

        const keys = Object.keys(themes[name]);
        for (const key of keys) {
            const value = themes[name][key];

            root.setProperty('--' + key, value);
        }

        currentTheme = name;
    } else {
        throw new Error("Invalid theme " + name);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById('theme-button');

    themeButton.addEventListener('click', () => {
        if (currentTheme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });
});