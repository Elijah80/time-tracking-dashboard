const container = document.querySelector('.container')

fetch('./data.json')
	.then(response => response.json())
	.then(data => {
    const name = data[0].firstName + ' ' + data[0].lastName;
    const timeFrames = data
    .filter(item => item.timeframes)
    .map(item => Object.keys(item.timeframes))
    .slice(0, 1);

    createSidebar(name, timeFrames);
	})

function createElement(type, className) {
	const element = document.createElement(type)

	element.classList.add(className);

  return element;
}

function createSidebar(name, timeframes){
  const sideBar = createElement('div', 'sidebar');
  const profileSection = createElement('div', 'profile-section');
  const profileImage = createElement('img', 'profile-image');
  const header = createElement('p', 'header');
  const userName = createElement('p', 'name');
  const linkSection = createElement('div', 'link-section');
  const timeFrameLinks = createElement('ul', 'timeframe-links');

  profileImage.setAttribute('src', './images/self.png');

  header.textContent = 'Report for'
  userName.textContent = name;

  profileSection.appendChild(profileImage);
  profileSection.appendChild(header);
  profileSection.appendChild(userName);

  timeframes[0].forEach(item => {
    const linkItem = createElement('li', 'link-item');
    const linkText = createElement('span', 'link-text');

    linkText.textContent = item;

    linkItem.appendChild(linkText);

    timeFrameLinks.appendChild(linkItem);
  })

  linkSection.appendChild(timeFrameLinks);

  sideBar.appendChild(profileSection);
  sideBar.appendChild(linkSection);

  container.appendChild(sideBar);
}
