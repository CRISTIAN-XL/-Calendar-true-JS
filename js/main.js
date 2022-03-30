const gridHtml = document.querySelector('.calendar-grid')

const grid = [
	['Mo','Tu','We','Th','Fr','Sa','Su'],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
];

const d = new Date;
const year = d.getFullYear();
const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December'];
const month = d.getMonth();
const day = d.getDate();

const firstMonth = (new Date(year,month, 1)).getDay();
const lastDay = new Date(year, month + 1, 0);

const renderCalendar = () => {
	document.querySelector('.calendar-main').innerText += ` ${year} ${allMonths[month]}`;
	
	let out = '';
	let l = 1;
	let h = 1;

	for(let i = 0; i< grid.length; i++) {

		for(let k = 0; k < grid[i].length; k++) {

			if(l <= lastDay.getDate()) {
				if(grid[i][k] != 0) {
					out += `<div class="grid-item black">${grid[i][k]}</div>`
				} else if(h != firstMonth){
					out += `<div class="grid-item"></div>`;
					h++;
				} else if(l === day) {
					out += `<div class="grid-item green">${l}</div>`;
					l++;
				} else {
					out += `<div class="grid-item">${l}</div>`;
					l++;
				}
			} else {
				out += `<div class="grid-item"></div>`;
			}

		}

	}

	gridHtml.innerHTML = out
}

renderCalendar()