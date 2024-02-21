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
  const doc = await PDFDocument.create();
  const page = doc.addPage();
  page.PDFFont = "Inter-Regular";

  const unindustriaLogoBytes = await fetch(
    "https://frdznxvduztcsimohtsa.supabase.co/storage/v1/object/public/assets/blue_header.png"
  ).then((res) => res.arrayBuffer());
  const unindustriaLogoImage = await doc.embedPng(unindustriaLogoBytes);

  page.drawImage(unindustriaLogoImage, {
    x: 0,
    y: page.getHeight() / 2,
    width: page.getWidth(),
    height: page.getHeight() / 2,
  });

  const qrCode = await QRCode.toBuffer(ticketData.ticket_id, {
    color: {
      dark: "#003E7E",
      light: "#ffffff",
    },
  });
  const qrImage = await doc.embedPng(qrCode);
  const qrDims = qrImage.scale(1.4);
  const qrXPos = (page.getWidth() - qrDims.width) / 2;
  const qrYPos = (page.getHeight() - qrDims.height) / 2;

  page.drawImage(qrImage, {
    x: qrXPos,
    y: (page.getHeight() / 2) - qrDims.height - 10,
    width: qrDims.width,
    height: qrDims.height,
    color: rgb(0 / 255, 62 / 255, 126 / 255),
  });

  const font = await doc.embedFont(StandardFonts.HelveticaBold);

  const firstName = ticketData.contact.first_name;
  const lastName = ticketData.contact.last_name?.toUpperCase();

  const firstNameWidth = font.widthOfTextAtSize(firstName, 24);
  const lastNameWidth = font.widthOfTextAtSize(lastName, 24);

  const firstNameXPos = qrXPos + (qrDims.width - firstNameWidth) / 2;
  const lastNameXPos = qrXPos + (qrDims.width - lastNameWidth) / 2;

  page.drawText(firstName, {
    x: firstNameXPos,
    y: qrYPos - 130,
    size: 24,
    font: font,
    color: rgb(0 / 255, 62 / 255, 126 / 255),
  });

  page.drawText(lastName, {
    x: lastNameXPos,
    y: qrYPos - 160,
    size: 24,
    font: font,
    color: rgb(0 / 255, 62 / 255, 126 / 255),
  });

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

  const addressBytes = await fetch(
    "https://frdznxvduztcsimohtsa.supabase.co/storage/v1/object/public/assets/address_icon@2x.png"
  ).then((res) => res.arrayBuffer());
  const addressImage = await doc.embedPng(addressBytes);

  page.drawImage(addressImage, {
    x: 20,
    y: 30,
    width: 50,
    height: 50,
    color: rgb(230 / 255, 230 / 255, 230 / 255),
  });

  const locationName = ticketData.event.location_name;
  const locationAddress = ticketData.event.location_address;

  page.drawText(locationName, {
    x: 80,
    y: 60,
    size: 14,
    font: font,
    color: rgb(0 / 255, 62 / 255, 126 / 255),
  });

  page.drawText(locationAddress, {
    x: 80,
    y: 40,
    size: 12,
    font: font,
    color: rgb(73 / 255, 73 / 255, 73 / 255),
  });

  const calendarBytes = await fetch(
    "https://frdznxvduztcsimohtsa.supabase.co/storage/v1/object/public/assets/calendar_icon@2x.png"
  ).then((res) => res.arrayBuffer());
  const calendarImage = await doc.embedPng(calendarBytes);
  page.drawImage(calendarImage, {
    x: 360,
    y: 30,
    width: 50,
    height: 50,
    color: rgb(230 / 255, 230 / 255, 230 / 255),
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

  const titleCaseDateText = toTitleCase(dateText);
  page.drawText(titleCaseDateText, {
    x: 420,
    y: 60,
    size: 16,
    font: font,
    color: rgb(0 / 255, 62 / 255, 126 / 255),
  });

  page.drawText(timeText, {
    x: 420,
    y: 40,
    size: 12,
    font: font,
    color: rgb(73 / 255, 73 / 255, 73 / 255),
  });
  const pdfBytes = await doc.save();
  return pdfBytes;
};


const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
};
