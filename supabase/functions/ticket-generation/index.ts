import QRCode from "npm:qrcode";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { encodeBase64 } from "https://deno.land/std@0.212.0/encoding/base64.ts";
import { PDFDocument } from "https://cdn.skypack.dev/pdf-lib@^1.11.1?dts";

type Generation = "base64" | "download";

interface ITicketData {
  type: Generation;
  ticket_id: string;
  //other data required (name, surname )
}

const generate_ticket = async (
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

serve(async (req) => {
  const ticketData: ITicketData = await req.json();
  const ticket = await generate_ticket(ticketData);
  if (ticket) {
    const base64Ticket = encodeBase64(ticket);
    if (ticketData.type === "base64") {
      return new Response(JSON.stringify({ pdfBase64: base64Ticket }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    }
    if (ticketData.type === "download") {
      return new Response(ticket, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${ticketData.ticket_id}.pdf"`,
        },
        status: 200,
      });
    }
  }
  return new Response(JSON.stringify({ message: "Error Generating Ticket" }), {
    headers: { "Content-Type": "application/json" },
    status: 500,
  });
});
