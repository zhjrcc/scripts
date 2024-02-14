function a(){console.log('click 1')}
function b(){console.log('click 1')}
let title = document.querySelector('#title')
title.addEventListener('click', a)
title.addEventListener('click', b)
