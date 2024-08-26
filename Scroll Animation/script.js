const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top

        // Determine the direction for each box (alternate between left and right)
        if (index % 2 === 0) {
            box.classList.add('right')
        } else {
            box.classList.add('left')
        }

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
