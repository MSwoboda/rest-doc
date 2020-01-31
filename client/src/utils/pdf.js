// import { PDFDocument } from 'pdf-lib'
import 'whatwg-fetch';

import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import download from 'downloadjs';



export default async function createPDF(type, data) {
    const getDateString = (delim) => {

        if (!delim) {
            delim = "/"
        }
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = mm + delim + dd + delim + yyyy;
        return today;
    }
    if (!type) {
        type = 'w9'
    }
    const url = '/forms/' + type + '.pdf';

    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(existingPdfBytes)

    let pngImage={};
    try {
         pngImage = await pdfDoc.embedPng(data.signature)

    } catch (error) {
        let replacement_sig = "data:image/png;base64,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"
         pngImage = await pdfDoc.embedPng(replacement_sig)

    }

    const pngDims = pngImage.scale(0.4)

    const pages = pdfDoc.getPages()
    const firstPage = pages[0]


    const { width, height } = firstPage.getSize()


    switch (type) {
        case 'w2':
            firstPage.drawText(data.ssn, {
                x: 160,
                y: 735,
                size: 15,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.empEIN, {
                x: 50,
                y: 712,
                size: 15,
                color: rgb(0, 0, 0),
            })



            firstPage.drawText(data.empName, {
                x: 50,
                y: 688,
                size: 15,
                color: rgb(0, 0, 0),
            })


            firstPage.drawText(data.empBillStreet, {
                x: 50,
                y: 673,
                size: 15,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.empBillCity + ", " + data.empBillState, {
                x: 50,
                y: 658,
                size: 15,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.empBillZip, {
                x: 50,
                y: 643,
                size: 15,
                color: rgb(0, 0, 0),
            })
            //

            firstPage.drawText(data.firstName, {
                x: 50,
                y: 590,
                size: 15,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.lastName, {
                x: 175,
                y: 590,
                size: 15,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.billStreet, {
                x: 50,
                y: 570,
                size: 15,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.billCity + ", " + data.billState, {
                x: 50,
                y: 550,
                size: 15,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.billZip, {
                x: 50,
                y: 530,
                size: 15,
                color: rgb(0, 0, 0),
            })

            break;
        case 'w4':

            firstPage.drawText(data.firstName, {
                x: 100,
                y: 687,
                size: 15,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.lastName, {
                x: 280,
                y: 687,
                size: 15,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.ssn, {
                x: 480,
                y: 687,
                size: 15,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.billStreet, {
                x: 100,
                y: 664,
                size: 15,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.billCity + ", " + data.billState + ", " + data.billZip, {
                x: 100,
                y: 640,
                size: 15,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(getDateString("/"), {
                x: 480,
                y: 140,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawImage(pngImage, {
                x: 120,
                y: 140,
                width: pngDims.width,
                height: pngDims.height,
            })


            break;
        case 'w7':


            firstPage.drawText(data.firstName, {
                x: 120,
                y: 495,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.lastName, {
                x: 420,
                y: 495,
                size: 12,
                color: rgb(0, 0, 0),
            })


            firstPage.drawText(data.billStreet + ", Apt " + data.billApt, {
                x: 120,
                y: 450,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.billCity + ", " + data.billState + ", " + data.billZip, {
                x: 120,
                y: 425,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.shipStreet + ", Apt " + data.shipApt, {
                x: 120,
                y: 400,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.shipCity + ", " + data.shipState + ", " + data.shipZip, {
                x: 120,
                y: 378,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText("05   11   1990   " + "        " + data.passportTwoState, {
                x: 130,
                y: 350,
                size: 12,
                color: rgb(0, 0, 0),
            })



            firstPage.drawText(data.passportState + ", " + data.passportTwoState, {
                x: 130,
                y: 327,
                size: 12,
                color: rgb(0, 0, 0),
            })


            firstPage.drawText(data.phone, {
                x: 450,
                y: 125,
                size: 12,
                color: rgb(0, 0, 0),
            })


            firstPage.drawText(getDateString("    "), {
                x: 350,
                y: 125,
                size: 12,
                color: rgb(0, 0, 0),
            })



            firstPage.drawImage(pngImage, {
                x: 140,
                y: 120,
                width: pngDims.width,
                height: pngDims.height,
            })


            break;
        case 'w9':

            firstPage.drawText(data.firstName + " " + data.lastName, {
                x: 70,
                y: 690,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.billStreet, {
                x: 70,
                y: 533,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.billCity + ", " + data.billState + ", " + data.billZip, {
                x: 70,
                y: 508,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.ssn[0] + " " + data.ssn[1] + " " + data.ssn[2] + "    " + data.ssn[4] + " " + data.ssn[5] + "    " + data.ssn[7] + " " + data.ssn[8] + " " + data.ssn[9] + " " + data.ssn[10], {
                x: 420,
                y: 435,
                size: 17,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(getDateString("/"), {
                x: 420,
                y: 235,
                size: 17,
                color: rgb(0, 0, 0),
            })

            break;
        case 'llcpa':


            firstPage.drawText(data.email, {
                x: 168,
                y: 620,
                size: 10,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.empName, {
                x: 300,
                y: 510,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.billStreet + ",    " + data.billCity + ",     " + data.billState + ",    " + data.billZip, {
                x: 70,
                y: 425,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.firstName + "  " + data.lastName, {
                x: 70,
                y: 295,
                size: 12,
                color: rgb(0, 0, 0),
            })

            break;
        case 'llcnj':


            firstPage.drawText(data.empName, {
                x: 300,
                y: 510,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.billStreet + ",    " + data.billCity + ",     " + data.billState + ",    " + data.billZip, {
                x: 70,
                y: 425,
                size: 12,
                color: rgb(0, 0, 0),
            })



            break;
        case 'llcde':

            firstPage.drawText(data.empName + " LLC", {
                x: 370,
                y: 590,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.billStreet, {
                x: 150,
                y: 512,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.billCity + "                                                     " + data.billZip, {
                x: 160,
                y: 497,
                size: 12,
                color: rgb(0, 0, 0),
            })


            firstPage.drawText(data.firstName + "  " + data.lastName, {
                x: 320,
                y: 320,
                size: 12,
                color: rgb(0, 0, 0),
            })


            firstPage.drawImage(pngImage, {


                x: 360,
                y: 375,
                width: pngDims.width,
                height: pngDims.height,
            })

            break;
        case 'dl31':

            break;
        case 'dl180':

            break;
        case '1099c':

            break;

        case '1099msc':

            break;
        default:
            break;
    }



    const pdfBytes = await pdfDoc.save()





    download(pdfBytes, data.firstName[0].toLocaleLowerCase() + data.lastName.toLocaleLowerCase() + "_" + type + ".pdf", "application/pdf");





}

