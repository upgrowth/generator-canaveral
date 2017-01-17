import { getTheme } from '@shoutem/ui'

// See http://shoutem.github.io/docs/ui-toolkit/theme/introduction 
// for an explanation of how shoutem theming works

// Import the default shoutem theme
let theme = getTheme();

// Override with custom app theme
Object.assign(theme, {
    "Landing": {
        "shoutem.ui.Screen": {        
            // Custom styles for components, including custom components
        }

        // Style for page component
    }
});
export default theme;