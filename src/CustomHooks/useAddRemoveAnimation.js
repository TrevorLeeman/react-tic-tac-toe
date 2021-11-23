export const useAddRemoveAnimation = (myRef, className) => {
	// We create a Promise and return it
	new Promise((resolve, reject) => {
		myRef.classList.add(`${className}`);

		// When the animation ends, we clean the classes and resolve the Promise
		const handleAnimationEnd = (event) => {
			event.stopPropagation();
			myRef.classList.remove(`${className}`);
			resolve('Animation ended');
		};

		myRef.addEventListener('animationend', handleAnimationEnd, { once: true });
	});
};
