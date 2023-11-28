const nodemailer=require('nodemailer')
require('dotenv').config()
const mail=async (email,name,uid)=>{
    try{
      var transporter = nodemailer.createTransport({
        secure: true, 
        service:'gmail',
        auth: {
        user: process.env.AUTH_EMAIL, 
        pass: process.env.AUTH_PASS, 
        authentication:'plain'
        },
         tls : {
        rejectUnauthorized:false
         }
      });
      const data={
        from: '"Team Conatus" <teamconatus@gmail.com>',  
        to:email,
        subject: "Congratulations! You're Successfully Registered",  
        html: `<head>
        <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="x-apple-disable-message-reformatting">
          <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
          <title></title>
          
            <style type="text/css">
              @media only screen and (min-width: 620px) {
          .u-row {
            width: 600px !important;
          }
          .u-row .u-col {
            vertical-align: top;
          }
        
          .u-row .u-col-50 {
            width: 300px !important;
          }
        
          .u-row .u-col-100 {
            width: 600px !important;
          }
        
        }
        
        @media (max-width: 620px) {
          .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
          }
          .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
          }
          .u-row {
            width: 100% !important;
          }
          .u-col {
            width: 100% !important;
          }
          .u-col > div {
            margin: 0 auto;
          }
          .no-stack .u-col {
            min-width: 0 !important;
            display: table-cell !important;
          }
        
          .no-stack .u-col-50 {
            width: 50% !important;
          }
        
        }
        body {
          margin: 0;
          padding: 0;
        }
        
        table,
        tr,
        td {
          vertical-align: top;
          border-collapse: collapse;
        }
        
        p {
          margin: 0;
        }
        
        .ie-container table,
        .mso-container table {
          table-layout: fixed;
        }
        
        * {
          line-height: inherit;
        }
        
        a[x-apple-data-detectors='true'] {
          color: inherit !important;
          text-decoration: none !important;
        }
        
        @media (max-width: 480px) {
          .hide-mobile {
            max-height: 0px;
            overflow: hidden;
            display: none !important;
          }
        }
        
        table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_11 .v-src-width { width: auto !important; } #u_content_image_11 .v-src-max-width { max-width: 26% !important; } #u_content_image_10 .v-src-width { width: auto !important; } #u_content_image_10 .v-src-max-width { max-width: 40% !important; } #u_content_heading_4 .v-font-size { font-size: 40px !important; } #u_content_heading_4 .v-line-height { line-height: 120% !important; } #u_content_heading_1 .v-font-size { font-size: 20px !important; } #u_content_heading_2 .v-font-size { font-size: 27px !important; } #u_content_heading_2 .v-line-height { line-height: 120% !important; } #u_content_button_3 .v-size-width { width: 68% !important; } #u_content_text_2 .v-font-size { font-size: 14px !important; } #u_content_text_2 .v-text-align { text-align: left !important; } #u_content_text_2 .v-line-height { line-height: 130% !important; } #u_content_button_2 .v-size-width { width: 72% !important; } #u_content_text_3 .v-container-padding-padding { padding: 60px 15px 20px !important; } #u_content_menu_1 .v-padding { padding: 5px 10px !important; } #u_content_text_4 .v-container-padding-padding { padding: 20px 15px 10px !important; } }
            </style>
          
          
        
        <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
        
        </head>
        
        <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
          <!--[if IE]><div class="ie-container"><![endif]-->
          <!--[if mso]><div class="mso-container"><![endif]-->
          <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
          <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
            
          
          
        <div class="u-row-container" style="padding: 0px;background-color: transparent">
          <div class="u-row no-stack" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
              
        <!--[if (mso)|(IE)]><td align="center" width="300" style="background-color: #020221;width: 300px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
          <div style="background-color: #020221;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
          <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
          
        <table id="u_content_image_11" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 10px 30px;font-family:arial,helvetica,sans-serif;" align="left">
                
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="left">
              
              <img align="left" border="0" src="cid:myImg6" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 15%;max-width: 39px;" width="39" class="v-src-width v-src-max-width"/>
              
            </td>
          </tr>
        </table>
        
              </td>
            </tr>
          </tbody>
        </table>
        
          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]><td align="center" width="300" style="background-color: #020221;width: 300px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
          <div style="background-color: #020221;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
          <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
          
        <table id="u_content_image_10" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 30px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
                
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="right">
              
              <img align="right" border="0" src="cid:myImg7" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 20%;max-width: 52px;" width="52" class="v-src-width v-src-max-width"/>
              
            </td>
          </tr>
        </table>
        
              </td>
            </tr>
          </tbody>
        </table>
        
          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
          </div>
          </div>
          
        
        
          
          
        <div class="u-row-container" style="padding: 0px;background-color: transparent">
          <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
              
        <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #020221;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
          <div style="background-color: #020221;height: 100%;width: 100% !important;">
          <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
          
        <table id="u_content_heading_4" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <!--[if mso]><table width="100%"><tr><td><![endif]-->
            <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-family: Epilogue; font-size: 46px; font-weight: 400;"><span><span><span style="line-height: 48px;"><span style="line-height: 48px;"><span style="line-height: 48px;">Techno Conclave</span></span></span></span></span></h1>
          <!--[if mso]></td></tr></table><![endif]-->
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table id="u_content_heading_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <!--[if mso]><table width="100%"><tr><td><![endif]-->
            <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-family: Epilogue; font-size: 22px; font-weight: 400;"><span><span>2023</span></span></h1>
          <!--[if mso]></td></tr></table><![endif]-->
        
              </td>
            </tr>
          </tbody>
        </table>
        
          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
          </div>
          </div>
          
        
        
          
          
        <div class="u-row-container" style="padding: 0px;background-color: transparent">
          <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
              
        <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
          <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
          <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
          
        <table id="u_content_heading_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <!--[if mso]><table width="100%"><tr><td><![endif]-->
            <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #000000; line-height: 140%; text-align: center; word-wrap: break-word; font-family: Epilogue; font-size: 40px; font-weight: 700;"><span>Registration ID</span></h1>
          <!--[if mso]></td></tr></table><![endif]-->
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
            <p style="line-height: 140%;">Kindly use this ID for RSVP and for any future correspondence or inquiries related to your registration.</p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
          </div>
          </div>
          
        
        
          
          
            <!--[if gte mso 9]>
              <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;min-width: 320px;max-width: 600px;">
                <tr>
                  <td background="https://cdn.templates.unlayer.com/assets/1695808724401-Rectangle%202%20copy%202.png" valign="top" width="100%">
              <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
                <v:fill type="frame" src="https://cdn.templates.unlayer.com/assets/1695808724401-Rectangle%202%20copy%202.png" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
              <![endif]-->
          
        <div class="u-row-container" style="padding: 36px 0px;background-image: url('cid:myImg8');background-repeat: no-repeat;background-position: center center;background-color: transparent">
          <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 36px 0px;background-image: url('images/image-8.png');background-repeat: no-repeat;background-position: center center;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
              
        <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
          <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
          <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
          
        <table id="u_content_button_3" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
        <div class="v-text-align" align="center">
          <!--[if mso]><table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" bgcolor="#020221" style="padding:10px 20px;" valign="top"><![endif]-->
            <a href="" target="_blank" class="v-button v-size-width v-font-size" style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #020221; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:45%; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 21px;">
              <span class="v-line-height v-padding" style="display:block;padding:10px 20px;line-height:120%;"><span style="line-height: 25.2px;">${uid}</span></span>
            </a>
            <!--[if mso]></td></tr></table><![endif]-->
        </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
          </div>
          </div>
          
            <!--[if gte mso 9]>
              </v:textbox></v:rect>
            </td>
            </tr>
            </table>
            <![endif]-->
            
        
        
          
          
        <div class="u-row-container" style="padding: 0px;background-color: transparent">
          <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
              
        <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
          <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
          <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
          
        <table id="u_content_text_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 30px 0px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
            <p style="line-height: 140%;"><strong>Dear ${name} ,</strong></p>
        <p style="line-height: 140%;"> </p>
        <p style="line-height: 140%; margin: 0px; color: #000000; text-align: left; white-space: normal; background-color: #ffffff;">Thank you for registering for Techno Conclave! Your registration details have been successfully received.</p>
        <p style="line-height: 140%; margin: 0px; color: #000000; text-align: left; white-space: normal; background-color: #ffffff;"><br style="line-height: inherit;" />To complete the registration process, you have to submit the <strong>Registration fee of Rs 100/-</strong> to get an exclusive pass to the event.</p>
        <p style="line-height: 140%; margin: 0px; color: #000000; text-align: left; white-space: normal; background-color: #ffffff;"> </p>
        <p style="line-height: 140%; margin: 0px; color: #000000; text-align: left; white-space: normal; background-color: #ffffff;"><span style="line-height: 19.6px;">Click on the button below to complete the registration:</span></p>
        <p style="line-height: 140%;"> </p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table id="u_content_button_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 30px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
        <div class="v-text-align" align="center">
          <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://docs.google.com/forms/d/e/1FAIpQLSeakucCRu_-XmflU-wHVaqHw1N2vCnfir-NfP67tmbQZrCivA/viewform?usp=sf_link" style="height:45px; v-text-anchor:middle; width:224px;" arcsize="66.5%"  strokecolor="#000000" strokeweight="1px" fillcolor="#020221"><w:anchorlock/><center style="color:#ffffff;"><![endif]-->
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeakucCRu_-XmflU-wHVaqHw1N2vCnfir-NfP67tmbQZrCivA/viewform?usp=sf_link" target="_blank" class="v-button v-size-width v-font-size" style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #ffffff; background-color: #020221; border-radius: 30px;-webkit-border-radius: 30px; -moz-border-radius: 30px; width:39%; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #000000; border-top-style: solid; border-top-width: 1px; border-left-color: #000000; border-left-style: solid; border-left-width: 1px; border-right-color: #000000; border-right-style: solid; border-right-width: 1px; border-bottom-color: #000000; border-bottom-style: solid; border-bottom-width: 1px;font-size: 21px;">
              <span class="v-line-height v-padding" style="display:block;padding:10px 20px;line-height:120%;"><span style="line-height: 25.2px;">Pay Here</span></span>
            </a>
            <!--[if mso]></center></v:roundrect><![endif]-->
        </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
          </div>
          </div>
          
        
        
          
          
        <div class="u-row-container" style="padding: 0px;background-color: transparent">
          <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
              
        <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
          <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
          <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
          
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 30px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
            <p style="line-height: 140%;">After completing your payment, you will receive a confirmation mail by the end of the day.</p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
          </div>
          </div>
          
        
        
          
          
        <div class="u-row-container" style="padding: 5px 0px 0px;background-color: transparent">
          <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 5px 0px 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
              
        <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
          <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
          <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
          
        <table id="u_content_text_3" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:60px 50px 20px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; color: #000000; line-height: 140%; text-align: left; word-wrap: break-word;">
            <p style="line-height: 140%; margin: 0px; color: #000000; font-family: arial, helvetica, sans-serif; font-size: 14px; text-align: -webkit-left; white-space: normal; background-color: #ffffff;"><strong style="line-height: inherit;">Note :</strong></p>
        <ul>
        <li style="line-height: 19.6px;"><strong style="line-height: inherit;">In case of Online Payment, payment must be done within 2 hours of submitting your registration details. Otherwise, your entry will not be acknowledged.</strong></li>
        </ul>
        <br style="line-height: inherit;" />
        <ul style="line-height: inherit; color: #000000; font-family: arial, helvetica, sans-serif; font-size: 14px; text-align: -webkit-left; white-space: normal; background-color: #ffffff; list-style-type: square;">
        <li style="line-height: 19.6px;"><strong style="line-height: inherit;">For Offline Payments, please visit our help desks at CSIT Block/BB Block during college hours, or head to CSE Lab 4 (4th Floor, CSIT Block) after 4 pm.</strong></li>
        </ul>
        <p style="line-height: 140%;"> </p>
        <p style="line-height: 140%;"> </p>
        <p style="font-size: 14px; line-height: 140%;"><strong>Perks of participation: </strong></p>
        <ol>
        <li style="line-height: 19.6px;">Certification will be given to each participant. (5-day presence is mandatory).</li>
        <li style="line-height: 19.6px;">Refreshments and lunch will be provided during the sessions.</li>
        <li style="line-height: 19.6px;">Exciting prizes will be unveiled during the event.</li>
        <li style="line-height: 19.6px;">Wildcard entries for 1st-year students in the recruitment round of Team Conatus. </li>
        <li style="line-height: 19.6px;">A chance for the active listeners, to have photographs with the speakers.</li>
        </ol>
        <p style="line-height: 140%;"><strong>Event Details:</strong></p>
        <ul style="list-style-type: square;">
        <li style="line-height: 19.6px;">Venue: CS/IT Seminar Hall (1st floor)</li>
        </ul>
        <p style="line-height: 140%;"><strong>Connect with Us:</strong></p>
        <ol>
        <li style="line-height: 19.6px;">Visit our website to check the event details: <a href="https://www.technoconclave.live/">https://www.technoconclave.live/</a></li>
        <li style="line-height: 19.6px;">Stay connected with us on Instagram Handle for event updates, follow us on Instagram - <a href="https://bit.ly/instagram_conatus">https://bit.ly/instagram_conatus</a></li>
        </ol>
        <p style="line-height: 140%;"><strong>Contact Information:</strong></p>
        <ul style="list-style-type: square;">
        <li style="line-height: 19.6px;">If you have any questions or concerns leading up to the event, feel free to reach out to our dedicated event support team at 6393119695, 9410020324.</li>
        <li style="line-height: 19.6px;">You may reach us at our help desk (CS/IT Block, BB Block) and after 4 pm, CSE lab 4 (4th floor CS/IT Block). </li>
        </ul>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #000000;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <tbody>
              <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                  <span>&#160;</span>
                </td>
              </tr>
            </tbody>
          </table>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table id="u_content_menu_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
        <div class="menu" style="text-align:center">
        <!--[if (mso)|(IE)]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center"><tr><![endif]-->
        
          <!--[if (mso)|(IE)]><td style="padding:5px 24px"><![endif]-->
          
          <span style="padding:5px 24px;display:inline-block;color:#000000;font-family:'Open Sans',sans-serif;font-size:15px;" class="v-padding v-font-size">
            Learn
          </span>
          
          <!--[if (mso)|(IE)]></td><![endif]-->
          
            <!--[if (mso)|(IE)]><td style="padding:5px 24px"><![endif]-->
            <span style="padding:5px 24px;display:inline-block;color:#000000;font-family:'Open Sans',sans-serif;font-size:15px;" class="v-padding v-font-size hide-mobile">
              |
            </span>
            <!--[if (mso)|(IE)]></td><![endif]-->
          
        
          <!--[if (mso)|(IE)]><td style="padding:5px 24px"><![endif]-->
          
          <span style="padding:5px 24px;display:inline-block;color:#000000;font-family:'Open Sans',sans-serif;font-size:15px;" class="v-padding v-font-size">
            Improvise
          </span>
          
          <!--[if (mso)|(IE)]></td><![endif]-->
          
            <!--[if (mso)|(IE)]><td style="padding:5px 24px"><![endif]-->
            <span style="padding:5px 24px;display:inline-block;color:#000000;font-family:'Open Sans',sans-serif;font-size:15px;" class="v-padding v-font-size hide-mobile">
              |
            </span>
            <!--[if (mso)|(IE)]></td><![endif]-->
          
        
          <!--[if (mso)|(IE)]><td style="padding:5px 24px"><![endif]-->
          
          <span style="padding:5px 24px;display:inline-block;color:#000000;font-family:'Open Sans',sans-serif;font-size:15px;" class="v-padding v-font-size">
            Grow
          </span>
          
          <!--[if (mso)|(IE)]></td><![endif]-->
          
        
        <!--[if (mso)|(IE)]></tr></table><![endif]-->
        </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 0px 10px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #000000;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <tbody>
              <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                  <span>&#160;</span>
                </td>
              </tr>
            </tbody>
          </table>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table id="u_content_text_4" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 50px 10px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; color: #000000; line-height: 140%; text-align: center; word-wrap: break-word;">
            <p style="line-height: 140%; text-align: left;">Thank you for being a part of this exciting event! We look forward to providing you with an enriching experience.</p>
        <p style="line-height: 140%; text-align: left;"> </p>
        <p style="line-height: 140%; text-align: left;">Best regards<strong>,</strong></p>
        <p style="line-height: 140%; text-align: left;"><strong>Team Conatus</strong></p>
        <p style="line-height: 140%; text-align: left;"><strong>Learn.Improvise.Grow</strong></p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 60px;font-family:arial,helvetica,sans-serif;" align="left">
                
        <div align="center">
          <div style="display: table; max-width:234px;">
          <!--[if (mso)|(IE)]><table width="234" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:234px;"><tr><![endif]-->
          
            
            <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
              <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                <a href="https://www.technoconclave.live/" title="GooglePlus" target="_blank">
                  <img src="cid:myImg5" alt="GooglePlus" title="GooglePlus" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                </a>
              </td></tr>
            </tbody></table>
            <!--[if (mso)|(IE)]></td><![endif]-->
            
            <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
              <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                <a href="https://www.facebook.com/conatus.akg/" title="Facebook" target="_blank">
                  <img src="cid:myImg1" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                </a>
              </td></tr>
            </tbody></table>
            <!--[if (mso)|(IE)]></td><![endif]-->
            
            <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
              <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                <a href="https://www.linkedin.com/company/team-conatus/" title="LinkedIn" target="_blank">
                  <img src="cid:myImg4" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                </a>
              </td></tr>
            </tbody></table>
            <!--[if (mso)|(IE)]></td><![endif]-->
            
            <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
              <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                <a href="https://www.instagram.com/conatus.akg/" title="Instagram" target="_blank">
                  <img src="cid:myImg3" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                </a>
              </td></tr>
            </tbody></table>
            <!--[if (mso)|(IE)]></td><![endif]-->
            
            <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
              <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                <a href="https://twitter.com/conatus_akg" title="X" target="_blank">
                  <img src="cid:myImg2" alt="X" title="X" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                </a>
              </td></tr>
            </tbody></table>
            <!--[if (mso)|(IE)]></td><![endif]-->
            
            
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
          </div>
          </div>
          
        
        
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
          </tr>
          </tbody>
          </table>
          <!--[if mso]></div><![endif]-->
          <!--[if IE]></div><![endif]-->
        </body>`,
        attachments: [{
          filename: 'image-8.png',
          path: './nodemailer/images/image-8.png',
          cid: 'myImg1'
        },
        {
          filename: 'image-4.png',
          path: './nodemailer/images/image-4.png',
          cid: 'myImg2'
        },
        {
          filename: 'image-2.png',
          path: './nodemailer/images/image-2.png',
          cid: 'myImg3'
        },
        {
          filename: 'image-3.png',
          path: './nodemailer/images/image-3.png',
          cid: 'myImg4'
        },
        {
          filename: 'image-7.png',
          path: './nodemailer/images/image-7.png',
          cid: 'myImg5'
        },
        {
          filename: 'image-1.png',
          path: './nodemailer/images/image-8.png',
          cid: 'myImg6'
        },
        {
          filename: 'image-6.png',
          path: './nodemailer/images/image-6.png',
          cid: 'myImg7'
        },
        {
          filename: 'image-5.png',
          path: './nodemailer/images/image-5.png',
          cid: 'myImg8'
        }]         
       }

       transporter.sendMail(data,async(error,info)=>{
        if(error){
            throw new error;
        }
            console.log("email sent",info.messageId);
            
       });
    }
    catch(err){
      console.log(err);
    }
}
// const image=require('../nodemailer/images')

module.exports=mail;