const tooltipEl = document.querySelector('.tooltip');

document.addEventListener('click', function(event) {
	event.preventDefault();
	let target = event.target;


	if (target.classList.contains('has-tooltip')) {
		const text = target.title;
        
        if (tooltipEl.textContent === text && tooltipEl.classList.contains('tooltip_active')) {
            tooltipEl.classList.toggle('tooltip_active');
            return;
        }

        const position = {
            top: `left: ${target.offsetLeft +'px'}; top: ${target.offsetTop -30 +'px'}`,
            left: `left: ${target.offsetLeft - text.length * 8 +'px'}; top: ${target.offsetTop +'px'}`,
            right: `left: ${target.offsetLeft + target.offsetWidth +'px'}; top: ${target.offsetTop +'px'}`,
            bottom: `left: ${target.offsetLeft +'px'}; top: ${target.offsetTop +20 +'px'}`,
        }
		
        tooltipEl.textContent = text;
        tooltipEl.style = position[tooltipEl.dataset.position];
        tooltipEl.classList.add('tooltip_active');

	}


})