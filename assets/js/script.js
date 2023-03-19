var card = document.querySelectorAll('.card');
var cardName = document.querySelectorAll('.card-name');

var bgImg = ['assets/images/bengal.jpg', 'assets/images/kutubminar.jpg', 'assets/images/tajmahal.jpg', 'assets/images/headphone.jpg', 'assets/images/nature.jpg'];
var bgSize = 'cover';

for (var i = 0; i < card.length; i++) {
	card[i].style.background = 'url(' + bgImg[i] + ') no-repeat center';
	card[i].style.backgroundSize = bgSize;
}

card[0].classList.add('flex-grow');
cardName[0].classList.add('opacity');

card.forEach(function (element, index) {
	element.addEventListener('click', function () {
		for (var i = 0; i < card.length; i++) {
			card[i].classList.remove('flex-grow');
		}
		element.classList.add('flex-grow');

		for (var j = 0; j < cardName.length; j++) {
			cardName[j].classList.remove('opacity');
			if (j === index) {
				cardName[j].classList.add('opacity');
			}
		}
	})
})