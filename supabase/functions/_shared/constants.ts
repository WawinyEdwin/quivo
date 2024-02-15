import { corsHeaders } from "./cors.ts";

export const jsonHeaders = {
  "Content-Type": "application/json",
};

export const UnauthorizedResponse = {
  headers: {
    ...jsonHeaders,
    ...corsHeaders,
  },
  status: 401,
};

export const BadRequestResponse = {
  headers: {
    ...jsonHeaders,
    ...corsHeaders,
  },
  status: 400,
};

export const mailProvider = "mailgun";

export const quivoAddress = "invites@mail.quivo.it";

export const unindustriaConfig = {
  email: "comunicazioni@mail.eventiunindustria.it",
  template: `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<title>Coupon Ingresso Assemblea Generale Unindustria 2024</title>
<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--<![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style type="text/css">
#outlook a{padding:0;}body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}table,td{border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;}img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;}p{display:block;margin:0;}
</style>
<!--[if mso]> <noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<![endif]-->
<!--[if lte mso 11]>
<style type="text/css">
.ogf{width:100% !important;}
</style>
<![endif]-->
<!--[if !mso]><!-->
<link href="https://fonts.googleapis.com/css?family=Inter:700,400" rel="stylesheet" type="text/css">
<style type="text/css">

</style>
<!--<![endif]-->
<style type="text/css">
@media only screen and (min-width:659px){.xc628{width:628px!important;max-width:628px;}.xc660{width:660px!important;max-width:660px;}.pc100{width:100%!important;max-width:100%;}.xc506{width:506px!important;max-width:506px;}.xc474{width:474px!important;max-width:474px;}.xc510{width:510px!important;max-width:510px;}}
</style>
<style media="screen and (min-width:659px)">.moz-text-html .xc628{width:628px!important;max-width:628px;}.moz-text-html .xc660{width:660px!important;max-width:660px;}.moz-text-html .pc100{width:100%!important;max-width:100%;}.moz-text-html .xc506{width:506px!important;max-width:506px;}.moz-text-html .xc474{width:474px!important;max-width:474px;}.moz-text-html .xc510{width:510px!important;max-width:510px;}
</style>
<style type="text/css">
@media only screen and (max-width:658px){table.fwm{width:100%!important;}td.fwm{width:auto!important;}}
</style>
<style type="text/css">
u+.emailify .gs{background:#000;mix-blend-mode:screen;display:inline-block;padding:0;margin:0;}u+.emailify .gd{background:#000;mix-blend-mode:difference;display:inline-block;padding:0;margin:0;}p{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;}u+.emailify a{color:inherit!important;text-decoration:none!important;}#MessageViewBody a{color:inherit!important;text-decoration:none!important;}
@media only screen and (max-width:659px){.emailify{height:100%!important;margin:0!important;padding:0!important;width:100%!important;}u+.emailify .glist{margin-left:1em!important;}td.ico.v>div.il>a.l.m,td.ico.v .mn-label{padding-right:0!important;padding-bottom:16px!important;}td.x{padding-left:0!important;padding-right:0!important;}.fwm img{max-width:100%!important;height:auto!important;}.aw img{width:auto!important;margin-left:auto!important;margin-right:auto!important;}.awl img{width:auto!important;margin-right:auto!important;}.awr img{width:auto!important;margin-left:auto!important;}.ah img{height:auto!important;}td.b.nw>table,td.b.nw a{width:auto!important;}td.stk{border:0!important;}td.u{height:auto!important;}br.sb{display:none!important;}.thd-1 .i-thumbnail{display:inline-block!important;height:auto!important;overflow:hidden!important;}.hd-1{display:block!important;height:auto!important;overflow:visible!important;}.hm-1{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;mso-hide:all!important;}.ht-1{display:table!important;height:auto!important;overflow:visible!important;}.hr-1{display:table-row!important;height:auto!important;overflow:visible!important;}.hc-1{display:table-cell!important;height:auto!important;overflow:visible!important;}div.r.pt-13>table>tbody>tr>td,div.r.pt-13>div>table>tbody>tr>td{padding-top:13px!important}div.r.pr-0>table>tbody>tr>td,div.r.pr-0>div>table>tbody>tr>td{padding-right:0px!important}div.r.pb-13>table>tbody>tr>td,div.r.pb-13>div>table>tbody>tr>td{padding-bottom:13px!important}div.r.pl-0>table>tbody>tr>td,div.r.pl-0>div>table>tbody>tr>td{padding-left:0px!important}td.i.w-153 img,td.i.w-153 td{width:153px!important}div.r.pt-0>table>tbody>tr>td,div.r.pt-0>div>table>tbody>tr>td{padding-top:0px!important}div.r.pr-33>table>tbody>tr>td,div.r.pr-33>div>table>tbody>tr>td{padding-right:33px!important}div.r.pb-33>table>tbody>tr>td,div.r.pb-33>div>table>tbody>tr>td{padding-bottom:33px!important}div.r.pl-33>table>tbody>tr>td,div.r.pl-33>div>table>tbody>tr>td{padding-left:33px!important}div.r.pr-23>table>tbody>tr>td,div.r.pr-23>div>table>tbody>tr>td{padding-right:23px!important}div.r.pb-0>table>tbody>tr>td,div.r.pb-0>div>table>tbody>tr>td{padding-bottom:0px!important}div.r.pl-23>table>tbody>tr>td,div.r.pl-23>div>table>tbody>tr>td{padding-left:23px!important}div.c.pt-5>table>tbody>tr>td{padding-top:5px!important}div.c.pr-7>table>tbody>tr>td{padding-right:7px!important}div.c.pb-5>table>tbody>tr>td{padding-bottom:5px!important}div.c.pl-7>table>tbody>tr>td{padding-left:7px!important}div.c.s-23>table>tbody>tr>td.m{padding-top:0!important;padding-right:0!important;padding-bottom:23px!important;padding-left:0!important;}div.c.s-23>table>tbody>tr>td>table>tbody>tr>td.m{padding-top:0!important;padding-right:0!important;padding-bottom:23px!important;padding-left:0!important;}td.i.w-63 img,td.i.w-63 td{width:63px!important}td.x.fs-23 span,td.x.fs-23>div,td.x.fs-23{font-size:23px!important}td.x.fs-15 span,td.x.fs-15>div,td.x.fs-15{font-size:15px!important}div.r.pr-16>table>tbody>tr>td,div.r.pr-16>div>table>tbody>tr>td{padding-right:16px!important}div.r.pl-16>table>tbody>tr>td,div.r.pl-16>div>table>tbody>tr>td{padding-left:16px!important}div.r.pr-50>table>tbody>tr>td,div.r.pr-50>div>table>tbody>tr>td{padding-right:50px!important}div.r.pl-50>table>tbody>tr>td,div.r.pl-50>div>table>tbody>tr>td{padding-left:50px!important}td.i.w-57 img,td.i.w-57 td{width:57px!important}}
@media screen yahoo{.hd-1,.ds-1{mso-hide:all!important;display:none!important;height:0!important;overflow:hidden!important;}}
@media (prefers-color-scheme:light) and (max-width:659px){.ds-1.hd-1{display:none!important;height:0!important;overflow:hidden!important;}}
@media (prefers-color-scheme:dark) and (max-width:659px){.ds-1.hd-1{display:block!important;height:auto!important;overflow:visible!important;}}
</style>
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<!--[if gte mso 9]>
<style>a:link,span.MsoHyperlink{mso-style-priority:99;color:inherit;text-decoration:none;}a:visited,span.MsoHyperlinkFollowed{mso-style-priority:99;color:inherit;text-decoration:none;}li{text-indent:-1em;}table,td,p,div,span,ul,ol,li,a{mso-hyphenate:none;}sup,sub{font-size:100% !important;}
</style>
<![endif]-->
</head>
<body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#f4f7fa;"><div class="bg" style="background-color:#f4f7fa;" lang="en">
<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pt-13-outlook pr-0-outlook pb-13-outlook pl-0-outlook -outlook" role="presentation" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r  pt-13 pr-0 pb-13 pl-0" style="background:#003e7e;background-color:#003e7e;margin:0px auto;max-width:660px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#003e7e;background-color:#003e7e;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:628px;">
<![endif]--><div class="xc628 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="i  ah w-153" style="font-size:0;padding:0;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;"><tbody><tr><td style="width:184px;"> <a href="https://www.un-industria.it/" target="_blank" title> <img alt src="https://e.hypermatic.com/07fa7a767fe3f88c46b9d5ac4b375469.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="184" height="auto"></a>
</td></tr></tbody></table>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pt-0-outlook pr-33-outlook pb-33-outlook pl-33-outlook -outlook" role="presentation" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r  pt-0 pr-33 pb-33 pl-33" style="background:#003e7e;background-color:#003e7e;margin:0px auto;max-width:660px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#003e7e;background-color:#003e7e;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:0px 0px 47px 0px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:660px;">
<![endif]--><div class="xc660 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="i  fw-1" style="font-size:0;padding:0;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;" class="fwm"><tbody><tr><td style="width:443px;" class="fwm"> <img alt src="https://e.hypermatic.com/e6dcb5936968168cdf580cd3b808f3b1.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="443" height="auto">
</td></tr></tbody></table>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-23-outlook pb-0-outlook pl-23-outlook -outlook" role="presentation" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r  pr-23 pb-0 pl-23" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:660px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:72px 77px 13px 77px;text-align:center;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:506px;">
<![endif]--><div class="pc100 ogf" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
<!--[if mso | IE]>
<table border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td style="vertical-align:top;width:506px;">
<![endif]--><div class="pc100 ogf c  pt-5 pr-7 pb-5 pl-7 s-23" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100.0000%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="background-color:#fffffe;border:none;vertical-align:top;padding:8px 8px 8px 8px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%"><tbody><tr><td align="center" class="i  ah w-63" style="font-size:0;padding:0;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;"><tbody><tr><td style="width:80px;"> <a href="https://www.un-industria.it/" target="_blank" title> <img alt src="https://e.hypermatic.com/f603cb7f800d3f6771988b92047e1dec.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="80" height="auto"></a>
</td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]--></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-23-outlook pl-23-outlook -outlook" role="presentation" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r  pr-23 pl-23" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:660px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:0px 77px 32px 77px;text-align:center;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook pt-5-outlook pr-7-outlook pb-5-outlook pl-7-outlook s-23-outlook -outlook" style="vertical-align:top;width:506px;">
<![endif]--><div class="xc506 ogf c  pt-5 pr-7 pb-5 pl-7 s-23" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="background-color:#fffffe;border:none;vertical-align:top;padding:8px 8px 8px 8px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%"><tbody><tr><td align="center" class="x  fs-23 m" style="font-size:0;padding-bottom:14px;word-break:break-word;"><div style="text-align:center;"><p style="Margin:0;text-align:center;mso-line-height-alt:30px;mso-ansi-font-size:26px;"><span style="font-size:25px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#060b39;line-height:120%;mso-line-height-alt:30px;mso-ansi-font-size:26px;">Registrazione&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:30px;mso-ansi-font-size:26px;"><span style="font-size:25px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#060b39;line-height:120%;mso-line-height-alt:30px;mso-ansi-font-size:26px;">completata con successo!</span></p></div>
</td></tr><tr><td align="center" class="x  fs-15" style="font-size:0;padding-bottom:0;word-break:break-word;"><div style="text-align:center;"><p style="Margin:0;text-align:center;mso-line-height-alt:18px;mso-ansi-font-size:16px;"><span style="font-size:15px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#383c61;line-height:120%;mso-line-height-alt:18px;mso-ansi-font-size:16px;">In allegato il biglietto di ingresso, che sar&agrave; indispensabile per accedere all'evento, quindi La preghiamo di conservarlo con cura.</span></p></div>
</td></tr></tbody></table>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" role="presentation" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:660px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:16px 93px 16px 93px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:474px;">
<![endif]--><div class="xc474 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="d" style="font-size:0;padding:0;word-break:break-word;"><p style="border-top:solid 1px #cccccc;font-size:1px;margin:0px auto;width:100%;"></p>
<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #cccccc;font-size:1px;margin:0px auto;width:474px;" role="presentation" width="474px"><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-23-outlook pl-23-outlook -outlook" role="presentation" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r  pr-23 pl-23" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:660px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:0px 77px 20px 77px;text-align:center;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook pt-5-outlook pr-7-outlook pb-5-outlook pl-7-outlook s-23-outlook -outlook" style="vertical-align:top;width:506px;">
<![endif]--><div class="xc506 ogf c  pt-5 pr-7 pb-5 pl-7 s-23" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="background-color:#fffffe;border:none;vertical-align:top;padding:8px 8px 8px 8px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%"><tbody><tr><td align="center" class="x  fs-23" style="font-size:0;word-break:break-word;"><div style="text-align:center;"><p style="Margin:0;text-align:center;mso-line-height-alt:30px;mso-ansi-font-size:26px;"><span style="font-size:25px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#060b39;line-height:120%;mso-line-height-alt:30px;mso-ansi-font-size:26px;">Assemblea Generale 2024</span></p></div>
</td></tr></tbody></table>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-23-outlook pl-23-outlook -outlook" role="presentation" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r  pr-23 pl-23" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:660px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:0px 77px 14px 77px;text-align:center;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook pt-5-outlook pr-7-outlook pb-5-outlook pl-7-outlook s-23-outlook -outlook" style="vertical-align:top;width:506px;">
<![endif]--><div class="xc506 ogf c  pt-5 pr-7 pb-5 pl-7 s-23" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="background-color:#fffffe;border:none;vertical-align:top;padding:8px 8px 8px 8px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%"><tbody><tr><td align="center" class="x  fs-15 m" style="font-size:0;padding-bottom:14px;word-break:break-word;"><div style="text-align:center;"><p style="Margin:0;text-align:center;mso-line-height-alt:18px;mso-ansi-font-size:16px;"><span style="font-size:15px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#383c61;line-height:120%;mso-line-height-alt:18px;mso-ansi-font-size:16px;">Roma Convention Center - La Nuvola<br class="sb"></span><span style="font-size:15px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#383c61;line-height:120%;mso-line-height-alt:18px;mso-ansi-font-size:16px;">Viale Asia, 25 - 00144 Roma</span></p></div>
</td></tr><tr><td align="center" class="x  fs-15" style="font-size:0;padding-bottom:0;word-break:break-word;"><div style="text-align:center;"><p style="Margin:0;text-align:center;mso-line-height-alt:18px;mso-ansi-font-size:16px;"><span style="font-size:15px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#383c61;line-height:120%;mso-line-height-alt:18px;mso-ansi-font-size:16px;">12 Marzo 2024 ore 10:00</span></p></div>
</td></tr></tbody></table>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-23-outlook pl-23-outlook -outlook" role="presentation" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r  pr-23 pl-23" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:660px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:0px 77px 75px 77px;text-align:center;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook pt-5-outlook pr-7-outlook pb-5-outlook pl-7-outlook s-23-outlook -outlook" style="vertical-align:top;width:506px;">
<![endif]--><div class="xc506 ogf c  pt-5 pr-7 pb-5 pl-7 s-23" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="background-color:#fffffe;border:none;vertical-align:top;padding:8px 8px 8px 8px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%"><tbody><tr><td align="center" class="x  fs-15" style="font-size:0;word-break:break-word;"><div style="text-align:center;"><p style="Margin:0;text-align:center;mso-line-height-alt:18px;mso-ansi-font-size:14px;"><span style="font-size:14px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#383c61;line-height:121%;mso-line-height-alt:18px;mso-ansi-font-size:14px;">Per motivi di sicurezza e per garantire il puntuale inizio dell'Assemblea, La invitiamo a procedere con l'accredito dalle ore 9:00 alle ore 9:45. L'ingresso in sala sar&agrave; consentito entro e non oltre le ore 10.00.</span></p></div>
</td></tr></tbody></table>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-50-outlook pl-50-outlook -outlook" role="presentation" style="width:660px;" width="660"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r  pr-50 pl-50" style="background:#f8f8f8;background-color:#f8f8f8;margin:0px auto;max-width:660px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f8f8f8;background-color:#f8f8f8;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:31px 75px 31px 75px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:510px;">
<![endif]--><div class="xc510 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="i  ah w-57 m" style="font-size:0;padding:0;padding-bottom:7px;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;"><tbody><tr><td style="width:54px;"> <a href="https://quivo.it" target="_blank" title> <img alt src="https://e.hypermatic.com/e2618a3692e252a34597cd396926610a.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="54" height="auto"></a>
</td></tr></tbody></table>
</td></tr><tr><td align="center" class="x" style="font-size:0;padding-bottom:0;word-break:break-word;"><div style="text-align:center;"><p style="Margin:0;text-align:center;mso-line-height-alt:14px;mso-ansi-font-size:12px;"><span style="font-size:11px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#aaaaaa;line-height:118%;mso-line-height-alt:14px;mso-ansi-font-size:12px;">Copyright &copy;2024 QUIVO. All rights reserved.</span></p></div>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]--></div>
</body>
</html>`,
};
