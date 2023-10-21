
const Download = () => {
    const  link = document.createElement("a");
    link.href = "https://www.dropbox.com/scl/fi/h3nbq7e23dqvqq9uf7sd8/OSENI-WASIU-ADEBAYO.docx?rlkey=f6n47bdzttt3ax6vvuihkv4ac&dl=0"
    // link.href = "https://www.dropbox.com/scl/fi/mzqp8yez78bihxko8shwo/OSENI-WASIU-ADEBAYO.pdf?rlkey=jarma4k4ui526mgzsujy7z26p&dl=0";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
export default Download;