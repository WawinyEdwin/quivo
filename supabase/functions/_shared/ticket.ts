import {
  PDFDocument,
  StandardFonts,
  rgb,
} from "https://cdn.skypack.dev/pdf-lib@^1.11.1";
import QRCode from "npm:qrcode";
import { ITicketData } from "./types.ts";

export const generate_ticket = async (
  ticketData: ITicketData
): Promise<Uint8Array> => {
  console.log(ticketData);
  const doc = await PDFDocument.create();
  const page = doc.addPage();
  page.PDFFont = "Inter-Regular";

  const unindustriaLogoBytes = await fetch(
    "https://frdznxvduztcsimohtsa.supabase.co/storage/v1/object/public/assets/Image.png"
  ).then((res) => res.arrayBuffer());
  const unindustriaLogoImage = await doc.embedPng(unindustriaLogoBytes);
  const unindustriaLogoDims = unindustriaLogoImage.scale(0.9);
  const unindustriaX = (page.getWidth() - unindustriaLogoDims.width) / 2;
  const unindustriaY = page.getHeight() - 100;

  page.drawRectangle({
    x: 0,
    y: unindustriaY - 10,
    width: page.getWidth(),
    height: page.getHeight(),
    color: rgb(8 / 255, 60 / 255, 124 / 255),
  });

  page.drawImage(unindustriaLogoImage, {
    x: unindustriaX,
    y: unindustriaY,
    width: unindustriaLogoDims.width,
    height: unindustriaLogoDims.height,
  });

  const eventLogoBytes = await fetch(
    "https://frdznxvduztcsimohtsa.supabase.co/storage/v1/object/public/assets/Logo%20Assemblea%202024%202.png"
  ).then((res) => res.arrayBuffer());
  const eventLogoImage = await doc.embedPng(eventLogoBytes);
  const eventLogoDims = eventLogoImage.scale(0.9);
  const eventLogoX = (page.getWidth() - eventLogoDims.width) / 2;
  const eventLogoY = 500;

  page.drawRectangle({
    x: 0, // Adjust position as needed
    y: eventLogoY - 10, // Adjust position as needed
    width: page.getWidth(), // Adjust size as needed
    height: eventLogoDims.height + 20, // Adjust size as needed
    color: rgb(8 / 255, 60 / 255, 124 / 255), // Use the desired blue color
  });

  page.drawImage(eventLogoImage, {
    x: eventLogoX,
    y: eventLogoY,
    width: eventLogoDims.width,
    height: eventLogoDims.height,
  });

  const qrCode = await QRCode.toBuffer(ticketData.ticket_id, {
    color: {
      dark: "#083c7c",
      light: "#ffffff",
    },
  });
  const qrImage = await doc.embedPng(qrCode);
  const qrDims = qrImage.scale(1.5);
  const qrXPos = (page.getWidth() - qrDims.width) / 2;
  const qrYPos = (page.getHeight() - qrDims.height) / 2;

  page.drawImage(qrImage, {
    x: qrXPos,
    y: qrYPos - 50,
    width: qrDims.width,
    height: qrDims.height,
    color: rgb(8 / 255, 60 / 255, 124 / 255),
  });

  const font = await doc.embedFont(StandardFonts.HelveticaBold);

  page.drawText(
    `${ticketData.contact.first_name} \n ${ticketData.contact.last_name} `,
    {
      x: qrXPos + 20,
      y: qrYPos - 90,
      size: 24,
      color: rgb(8 / 255, 60 / 255, 124 / 255),
      font: font,
    }
  );

  page.drawLine({
    start: { x: 0, y: 120 },
    end: { x: page.getWidth(), y: 120 },
    thickness: 0.2,
    color: rgb(128 / 255, 128 / 255, 128 / 255),
  });

  page.drawRectangle({
    x: 0,
    y: 0,
    width: page.getWidth(),
    height: 120,
    color: rgb(248 / 255, 248 / 255, 248 / 255),
    borderColor: rgb(0, 0, 0),
  });

  page.drawSquare({
    x: 20,
    y: 30,
    size: 50,
    color: rgb(200 / 255, 200 / 255, 200 / 255),
    borderRadius: 20,
  });

  const locationName = ticketData.event.location_name;
  const locationAddress = ticketData.event.location_address;

  page.drawText(locationName, {
    x: 80,
    y: 60,
    size: 14,
    font: font,
    color: rgb(8 / 255, 60 / 255, 124 / 255),
  });

  page.drawText(locationAddress, {
    x: 80,
    y: 40,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawSquare({
    x: 360,
    y: 30,
    size: 50,
    color: rgb(200 / 255, 200 / 255, 200 / 255),
    borderRadius: 20,
  });

  const dateText = new Date(
    ticketData.event.date_start as string
  ).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const timeText = new Date(
    ticketData.event.date_start as string
  ).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });

  page.drawText(dateText, {
    x: 420,
    y: 60,
    size: 16,
    font: font,
    color: rgb(8 / 255, 60 / 255, 124 / 255),
  });

  page.drawText(timeText, {
    x: 420,
    y: 40,
    size: 12,
  });
  const pdfBytes = await doc.save();
  return pdfBytes;
};
