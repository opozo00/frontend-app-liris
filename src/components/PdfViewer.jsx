
const PdfViewer = ({ pdf }) => {

    return (
        <iframe src={pdf} width="100%" height="600px"></iframe>
    );

}

export default PdfViewer;