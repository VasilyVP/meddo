import React from 'reac';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        greyElement: Palette['primary'];
    }
    interface PaletteOptions {
        greyElement: PaletteOptions['primary'];
    }
}