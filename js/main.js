// const handleClick = () => {
//     document.querySelectorAll('.button').forEach(button => {
//         button.addEventListener('click', (fn) => {
//             console.log(fn.target.innerText);
//         });
//     })
// };

const handleClick = () => {
    const elements = document.querySelectorAll('.button')
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function () {
            console.log(elements[i].textContent)
        });
    }
}