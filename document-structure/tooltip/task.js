document.addEventListener('click', function(event) {
	event.preventDefault();
	let target = event.target;

	if (target.classList.contains('has-tooltip')) {
		const text = target.title;


        const position = {
            top: `left: ${target.offsetLeft +'px'}; top: ${target.offsetTop -30 +'px'}`,
            left: `left: ${target.offsetLeft - text.length * 8 +'px'}; top: ${target.offsetTop +'px'}`,
            right: `left: ${target.offsetLeft + target.offsetWidth +'px'}; top: ${target.offsetTop +'px'}`,
            bottom: `left: ${target.offsetLeft +'px'}; top: ${target.offsetTop +20 +'px'}`,
        }

        document.querySelectorAll('.tooltip_active').forEach((elem) => {
            elem.classList.remove('tooltip_active');
        })
		target.insertAdjacentHTML('afterEnd', `<div class="tooltip"
        data-position="bottom"
        >
        ${text}
      </div>`);
        let tipPos = document.querySelector('.tooltip').dataset.position;

        console.log(tipPos);

        let tip = document.querySelector('.tooltip');
        tip.style = `${position[tipPos]}`;

        console.log(position[tipPos]);

        tip.classList.add('tooltip_active');

	}


})