/**
 *
 * Fonts Collection
 * Randomly picked from Google Fonts
 * https://fonts.google.com/?sort=popularity
 * Actual best approach would be to use
 * Google fonts API and get all 900+ fonts
 *
 */

const fontCollection = [
  'Roboto', 
  'Open Sans',
  'Lato',
  'Montserrat',
  'Oswald',
  'Raleway',
  'PT Sans',
  'Ubuntu',
  'Mukta',
  'Nunito',
  'Rubik'
];

// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Font+Name">

/**
 *
 * Inject font stylesheet to head
 *
 */

const head = document.getElementsByTagName('head')[0];
const link = document.createElement('link');

link.id = 'font';
link.rel = 'stylesheet';

head.appendChild(link);

/**
 *
 * Create selector and populate with values
 *
 */


const header = document.getElementById('header');
const fontSelect = document.createElement('select');
fontSelect.id = 'font-select';

for( i = 0; i < fontCollection.length; i++) {
  let option = document.createElement('option');
  option.value = fontCollection[i].replace(' ', '+');
  option.textContent = fontCollection[i];
  fontSelect.appendChild(option);
}

header.appendChild(fontSelect);



/**
 *
 * Change font when user interacts with select
 *
 */

const testArea = document.getElementById('testing-area');
let fontsCount = 0;
const fontsLimit = 50; // to test that this works, set it to lower number
let usedFonts = [];

function changeFont(fontFam) { 
 
  // if font load limit exceeded, do not load anything and show alert
  if( fontsCount > fontsLimit) {
    alert('Limit of ' + fontsLimit + ' exceeded');
    return;
  }

  link.href = 'https://fonts.googleapis.com/css?family=' + fontFam;
  testArea.style.fontFamily = fontFam;
  
  // if font is not used, it is added to font count and used fonts arr
  if(!usedFonts.includes(fontFam)) {
    fontsCount++;
    usedFonts.push(fontFam);   
  }
}

// set first font loaded as the first in collection
changeFont(fontCollection[0]);

fontSelect.addEventListener('change', (e)=> {
  changeFont(e.target.value);
})



