// import { PDFDocument } from 'pdf-lib'
import 'whatwg-fetch';

import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import download from 'downloadjs';



export default async function createPDF(type, data) {

    if (!type) {
        type = 'w9'
    }
    const url = '/forms/' + type + '.pdf';

    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(existingPdfBytes)

    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { width, height } = firstPage.getSize()

    const pdfBytes = await pdfDoc.save()

    switch (type) {
        case 'w9':

            firstPage.drawText('This text was added with JavaScript!', {
                x: 5,
                y: height / 3 + 300,
                size: 50,
                color: rgb(0.95, 0.1, 0.1),
            })

            firstPage.drawText('This text was added with JavaScript!', {
                x: 5,
                y: height / 4 + 300,
                size: 50,
                color: rgb(0.95, 0.1, 0.1),
            })


            firstPage.drawText('This text was added with JavaScript!', {
                x: 5,
                y: height / 5 + 300,
                size: 50,
                color: rgb(0.95, 0.1, 0.1),
            })


            firstPage.drawText('This text was added with JavaScript!', {
                x: 5,
                y: height / 6 + 300,
                size: 50,
                color: rgb(0.95, 0.1, 0.1),
            })


            break;
        case 'w9':

            break;
        case 'w9':

            break;
        case 'w9':

            break;
        case 'w9':

            break;
        case 'w9':

            break;
        case 'w9':

            break;
        case 'w9':

            break;
        case 'w9':

            break;
        case 'w9':

            break;
        default:
            break;
    }






    download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");





}

