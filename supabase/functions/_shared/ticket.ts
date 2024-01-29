import { PDFDocument } from "https://cdn.skypack.dev/pdf-lib@^1.11.1?dts";
import QRCode from "npm:qrcode";
import { ITicketData } from "./types.ts";

export const generate_ticket = async (
  ticketData: ITicketData
): Promise<Uint8Array | undefined> => {
  try {
    const doc = await PDFDocument.create();
    const page = doc.addPage();
    const qrCode = await QRCode.toBuffer(ticketData.ticket_id);
    const qrImage = await doc.embedPng(qrCode);
    const xPos = (page.getWidth() - qrImage.width) / 2;
    const yPos = (page.getHeight() - qrImage.height) / 2;
    page.drawImage(qrImage, {
      x: xPos,
      y: yPos,
      width: qrImage.width,
      height: qrImage.height,
    });
    const pdfBytes = await doc.save();
    return pdfBytes;
  } catch (error) {
    console.log(error);
  }
};
