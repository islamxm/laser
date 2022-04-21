import { benefitsSlider } from './modules/benefitsSlider.js';
import { cardFunc } from './modules/cardFunc.js';
import { cardSlider } from './modules/cardSlider.js';
import { dealersSlider } from './modules/dealersSlider.js';
import * as flsFuncs from './modules/functions.js';
import { heroSlider } from './modules/heroSlider.js';
import { mobmenu } from './modules/mobmenu.js';
import { smiSlider } from './modules/smiSlider.js';
import { videos } from './modules/videos.js';




document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();
    cardSlider();
    cardFunc();
    benefitsSlider();
    smiSlider();
    dealersSlider();
    heroSlider();
    videos();
    mobmenu();
});