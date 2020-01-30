// import { PDFDocument } from 'pdf-lib'
import 'whatwg-fetch';

import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import download from 'downloadjs';



export default async function createPDF(type, data) {
    const getDateString = (delim) =>{

        if (!delim) {
            delim="/"
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
        var today = dd + delim + mm + delim+ yyyy;
        return today;
    }
    if (!type) {
        type = 'w9'
    }
    const url = '/forms/' + type + '.pdf';

    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(existingPdfBytes)

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

        
            firstPage.drawText(data.billStreet + ", Apt " +data.billApt, {
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

            firstPage.drawText(data.shipStreet + ", Apt " +data.shipApt, {
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

            firstPage.drawText("05   11   1990   " +"        "+ data.passportTwoState, {
                x: 130,
                y: 350,
                size: 12,
                color: rgb(0, 0, 0),
            })

        
            
            firstPage.drawText(data.passportState +", "+data.passportTwoState , {
                x: 130,
                y: 327,
                size: 12,
                color: rgb(0, 0, 0),
            })

         
            firstPage.drawText(data.phone , {
                x: 450,
                y: 125,
                size: 12,
                color: rgb(0, 0, 0),
            })


            firstPage.drawText( getDateString("    ") , {
                x: 350,
                y: 125,
                size: 12,
                color: rgb(0, 0, 0),
            })

           

            break;
        case 'w9':
           
            firstPage.drawText(data.firstName+ " "+data.lastName, {
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

            firstPage.drawText(data.ssn[0] +" "+ data.ssn[1]+" " + data.ssn[2] +"    "+ data.ssn[4]+" "+ data.ssn[5]+"    "+ data.ssn[7]+" "+ data.ssn[8]+" "+ data.ssn[9]+" "+ data.ssn[10], {
                x: 420,
                y: 435,
                size:17,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText( getDateString("/") , {
                x: 420,
                y: 235,
                size: 17,
                color: rgb(0, 0, 0),
            })

            break;
        case 'llcpa':


            firstPage.drawText( data.email , {
                x: 168,
                y: 620,
                size: 10,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.empName , {
                x:300,
                y: 510,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.billStreet+ ",    " +data.billCity + ",     " + data.billState + ",    " + data.billZip, {
                x: 70,
                y: 425,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.firstName + "  " + data.lastName , {
                x: 70,
                y: 295,
                size: 12,
                color: rgb(0, 0, 0),
            })

            break;
        case 'llcnj':
     

            firstPage.drawText(data.empName , {
                x:300,
                y: 510,
                size: 12,
                color: rgb(0, 0, 0),
            })

            firstPage.drawText(data.billStreet+ ",    " +data.billCity + ",     " + data.billState + ",    " + data.billZip, {
                x: 70,
                y: 425,
                size: 12,
                color: rgb(0, 0, 0),
            })



            break;
        case 'llcde':

            firstPage.drawText(data.empName + " LLC" , {
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
      

            firstPage.drawText(data.firstName +"  " +data.lastName, {
                x: 360,
                y: 375,
                size: 12,
                color: rgb(0, 0, 0),
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



    download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");





}

