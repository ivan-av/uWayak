import React, { useEffect, useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

const PdfViewerCard = () => {
  const [windowWidth, setWindowWith] = useState(0);

  // To do: Set a trigger that start the useEffect when the size of the windows change
  useEffect(() => {
    if (window.matchMedia("(min-width: 600px)").matches) {
      setWindowWith(410)
    } else {
      setWindowWith(200)
    }
  },[])

  const [numPages, setNumPages] = useState(null);
  // eslint-disable-next-line
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  // function changePage(offSet){
  //   setPageNumber(prevPageNumber => prevPageNumber + offSet);
  // }

  // function changePageBack(){
  //   changePage(-1)
  // }

  // function changePageNext(){
  //   changePage(+1)
  // }

  return (
    <div className="pdfviewer">
      {/* <div className="pdfview-container">
      <p>Page {pageNumber} of {numPages}</p>
        {pageNumber > 1 && 
        <button onClick={changePageBack}>Previous Page</button>
        }
        {
          pageNumber < numPages &&
          <button onClick={changePageNext}>Next Page</button>
        }
        <Document file='/ublanket.pdf' onLoadSuccess={onDocumentLoadSuccess}>
          <Page height='420' pageNumber={pageNumber} />
        </Document>
      </div> */}

      <div className='pdfview-container'>
        <div className='pdfview-scheme'>
          <Document file='ublanket.pdf' onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(
              new Array(numPages),
              (el, index) => (
                <Page height={windowWidth} className='pdfview-page'
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                />
              )
            )}
          </Document>
        </div>
      </div>

    </div>
  );
}

export default PdfViewerCard
