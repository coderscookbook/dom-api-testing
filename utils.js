export function changeText() {
  const heading = document.getElementById('heading');
  heading.textContent = 'Text Changed!';
  heading.style.color = 'red';
}

export function toggleColor() {
  const heading = document.getElementById('heading');
  const currentColor = heading.style.color;
  const newColor = currentColor === 'blue' ? 'red' : 'blue';
  heading.style.color = newColor;
}

export function addParagraph(text) {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = text;
  document.body.appendChild(newParagraph);
}

export function removeHeading() {
  const heading = document.getElementById('heading');
  heading.remove();
}
