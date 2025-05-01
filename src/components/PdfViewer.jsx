
const PdfViewer = ({ pdf }) => {

    const [pdfUrl, setPdfUrl] = useState([]);

    return (
        <iframe src={pdfUrl} width="100%" height="600px"></iframe>
    );

}

export default PdfViewer;