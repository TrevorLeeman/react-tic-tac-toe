export const useAddRemoveAnimation = (myRef, className) => {
	// We create a Promise and return it
	new Promise((resolve, reject) => {
		const node = document.querySelector(myRef);

		node.classList.add(`${className}`);

		// When the animation ends, we clean the classes and resolve the Promise
		function handleAnimationEnd(event) {
			event.stopPropagation();
			node.classList.remove(`${className}`);
			resolve('Animation ended');
		}

		node.addEventListener('animationend', handleAnimationEnd, { once: true });
	});
};
