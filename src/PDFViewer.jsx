import React from 'react'
import { Document, Page } from 'react-pdf';
import pdfFile from './GurshanAulakhResume.pdf'
export default function PDFViewer() {
  return (
    <div>
      <Document file={pdfFile}></Document>
      {/* <Page pageNumber={1} /> */}
    </div>
  )
}
