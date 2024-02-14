import { PDFDocument, rgb } from "https://cdn.skypack.dev/pdf-lib@^1.11.1";
import QRCode from "npm:qrcode";
import { ITicketData } from "./types.ts";

export const generate_ticket = async (
  ticketData: ITicketData
): Promise<Uint8Array> => {
  console.log(ticketData);
  const doc = await PDFDocument.create();
  const page = doc.addPage();
  const unindustriaLogoBytes = await fetch(
    "https://frdznxvduztcsimohtsa.supabase.co/storage/v1/object/public/assets/unindustria-logo-003E7E.png"
  ).then((res) => res.arrayBuffer());
  const unindustriaLogoImage = await doc.embedPng(unindustriaLogoBytes);
  const unindustriaLogoDims = unindustriaLogoImage.scale(0.8); // Scale the image
  const unindustriaX = (page.getWidth() - unindustriaLogoDims.width) / 2; // Calculate the centered position
  const unindustriaY = page.getHeight() - 100;
  page.drawImage(unindustriaLogoImage, {
    x: unindustriaX,
    y: unindustriaY,
    width: unindustriaLogoDims.width,
    height: unindustriaLogoDims.height,
  });
  page.drawLine({
    start: { x: 0, y: unindustriaY - 10 },
    end: { x: page.getWidth(), y: unindustriaY - 10 },
    thickness: 0.5,
    color: rgb(0, 0, 0),
  });
  const eventLogoBytes = await fetch(
    "https://frdznxvduztcsimohtsa.supabase.co/storage/v1/object/public/assets/Logo%20Assemblea%202024%201.png"
  ).then((res) => res.arrayBuffer());
  const eventLogoImage = await doc.embedPng(eventLogoBytes);
  const eventLogoDims = eventLogoImage.scale(1);
  const eventLogoX = (page.getWidth() - eventLogoDims.width) / 2; 
  const eventLogoY = 500;
  page.drawImage(eventLogoImage, {
    x: eventLogoX,
    y: eventLogoY,
    width: eventLogoDims.width,
    height: eventLogoDims.height,
  });
  const qrCode = await QRCode.toBuffer(ticketData.ticket_id);
  const qrImage = await doc.embedPng(qrCode);
  const qrXPos = (page.getWidth() - qrImage.width) / 2;
  const qrYPos = (page.getHeight() - qrImage.height) / 2;
  page.drawImage(qrImage, {
    x: qrXPos,
    y: qrYPos,
    width: qrImage.width,
    height: qrImage.height,
  });
  page.drawLine({
    start: { x: 0, y: 120 },
    end: { x: page.getWidth(), y: 120 },
    thickness: 0.3,
    color: rgb(0, 0, 0),
  });
  page.drawText(`${ticketData.contact.first_name} \n ${ticketData.contact.last_name} `, {
    x: qrXPos + 20,
    y: qrYPos - 30,
    size: 16,
    color: rgb(0, 0, 0),
    // textAlign: "center",
  });
  page.drawText(`${ticketData.event.name}`, {
    x: 30,
    y: 80,
    size: 14,
    color: rgb(0, 0, 0),
  });
  page.drawText(
    `${ticketData.event.location_name} \n ${ticketData.event.location_address}`,
    {
      x: 50,
      y: 50,
      size: 12,
      color: rgb(0, 0, 0),
    }
  );
  page.drawText(new Date(`${ticketData.event.date_start}`).toLocaleString(), {
    x: 350,
    y: 50,
    size: 12,
    color: rgb(0, 0, 0),
  });
  const pdfBytes = await doc.save();
  return pdfBytes;
};
