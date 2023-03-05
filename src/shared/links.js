import { PATH } from "./locations"

export const links = () => {
    const main = document.getElementById('main')
    const page1 = document.getElementById('page1')
    const page2 = document.getElementById('page2')
    const page3 = document.getElementById('page3')
    const page4 = document.getElementById('page4')

    main.onclick = () => window.location.href = PATH.main;
    page1.onclick = () => window.location.href = PATH.page1;
    page2.onclick = () => window.location.href = PATH.page2;
    page3.onclick = () => window.location.href = PATH.page3;
    page4.onclick = () => window.location.href = PATH.page4;
}