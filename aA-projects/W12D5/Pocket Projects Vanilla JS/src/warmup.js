
const partyHeader = document.getElementById('party');
// debugger
export const htmlGenerator = (string, htmlElement) => {
    if (htmlElement.children.length > 0 ) {
        Array.from(htmlElement.children).forEach( (child) =>
        htmlElement.removeChild(child));
    }
    const p = document.createElement("p");
    p.innerHTML = string;
    htmlElement.appendChild(p);
    
};

htmlGenerator('Party Time.', partyHeader);
