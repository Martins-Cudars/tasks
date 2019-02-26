/* Select DOM elements */
const body = document.getElementById('body');
const div = document.querySelector('div');

/* Add control panel */
const controls = document.createElement('div');
controls.className = 'controls';


/* Create buttons to switch centering methods */

function createButton(id, label) {
  const button = document.createElement('button');
  button.className = 'btn';
  button.setAttribute('id', id);
  button.textContent = label;

  return button;
}

const buttons = [
  { id: 'flex', label: 'Method Flex'},
  { id: 'grid', label: 'Method Grid'},
  { id: 'margin', label: 'Method Margin'},
  { id: 'transform', label: 'Method Transform'}
];

for( let i = 0; i < buttons.length; i++) {
  const createdButton = createButton(buttons[i].id, buttons[i].label);
  controls.appendChild(createdButton);
}

body.appendChild(controls);

/* Add classes to body / div to achieve different centering methods */

function switchMethod(newClass) {
  body.className = 'body-' + newClass;
  div.className = 'div-' + newClass;
}

body.addEventListener('click', (e) => {
  if(e.target.className == 'btn') {
    const newId = e.target.id;
    switchMethod(newId);
  }
});