

const Download = () => {
    const link = document.createElement("a");
    link.href = "https://www.dropbox.com/scl/fi/gjjssf2za6gcwvqztdxq4/OSENI-WASIU-ADEBAYO.pdf?rlkey=x555dcrb4ydnw33v24n0ftpl8&st=3yy7y4ix&dl=1"; // Note the change from dl=0 to dl=1
    // link.href = "https://www.dropbox.com/scl/fi/dfwwp72657jr9p98nippm/OSENI-WASIU-ADEBAYO.docx?rlkey=jvxmz23q44nqbma0fmftjinjv&st=dno1k44a&dl=1"
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default Download;
