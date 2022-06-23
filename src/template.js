function emailModel (content = []) {
    return `
        <!DOCTYPE html>
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="x-apple-disable-message-reformatting">
                <title></title>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700|Lato:300,400,700"  rel="stylesheet">

                <style>
                    html,
                    body {
                        margin: 0 auto !important;
                        padding: 0 !important;
                        height: 100% !important;
                        width: 100% !important;
                        background: #f1f1f1;
                    }

                    * {
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                    }

                    div[style*="margin: 16px 0"] {
                        margin: 0 !important;
                    }

                    table,
                    td {
                        mso-table-lspace: 0pt !important;
                        mso-table-rspace: 0pt !important;
                    }

                    table {
                        border-spacing: 0 !important;
                        border-collapse: collapse !important;
                        table-layout: fixed !important;
                        margin: 0 auto !important;
                    }

                    img {
                        -ms-interpolation-mode: bicubic;
                    }

                    a {
                        text-decoration: none;
                    }

                    *[x-apple-data-detectors],
                    .unstyle-auto-detected-links *,
                    .aBn {
                        border-bottom: 0 !important;
                        cursor: default !important;
                        color: inherit !important;
                        text-decoration: none !important;
                        font-size: inherit !important;
                        font-family: inherit !important;
                        font-weight: inherit !important;
                        line-height: inherit !important;
                    }

                    .a6S {
                        display: none !important;
                        opacity: 0.01 !important;
                    }

                    .im {
                        color: inherit !important;
                    }

                    img.g-img+div {
                        display: none !important;
                    }

                    @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                        u~div .email-container {
                            min-width: 320px !important;
                        }
                    }

                    @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                        u~div .email-container {
                            min-width: 375px !important;
                        }
                    }

                    @media only screen and (min-device-width: 414px) {
                        u~div .email-container {
                            min-width: 414px !important;
                        }
                    }
                </style>

                <style>
                    .primary {
                        background: #448ef6;
                    }

                    .bg_white {
                        background: #ffffff;
                    }

                    .bg_light {
                        background: #fafafa;
                    }

                    .bg_black {
                        background: #000000;
                    }

                    .bg_dark {
                        background: rgba(0, 0, 0, .8);
                    }

                    .email-section {
                        padding: 2.5em;
                    }

                    .btn {
                        padding: 5px 15px;
                        display: inline-block;
                    }

                    .btn.btn-primary {
                        border-radius: 30px;
                        background: #448ef6;
                        color: #ffffff;
                    }

                    .btn.btn-white {
                        border-radius: 30px;
                        background: #ffffff;
                        color: #000000;
                    }

                    .btn.btn-white-outline {
                        border-radius: 30px;
                        background: transparent;
                        border: 1px solid #fff;
                        color: #fff;
                    }

                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6 {
                        font-family: sans-serif;
                        color: #000000;
                        margin-top: 0;
                        font-weight: 400;
                    }

                    body {
                        font-family: sans-serif;
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 1.8;
                    }

                    a {
                        color: #448ef6;
                    }

                    .logo {
                        margin: 0;
                        display: inline-block;
                        position: absolute;
                        top: 10px;
                        left: 0;
                        right: 0;
                        margin-bottom: 0;
                    }

                    .logo a {
                        color: #fff;
                        font-size: 24px;
                        font-weight: 700;
                        text-transform: uppercase;
                        font-family: 'Josefin Sans', sans-serif;
                        display: inline-block;
                        border: 2px solid #fff;
                        line-height: 1.3;
                        padding: 10px 15px 4px 15px;
                        margin: 0;
                    }

                    .logo h1 a span {
                        line-height: 1;
                    }

                    .navigation {
                        padding: 0;
                    }

                    .navigation li {
                        list-style: none;
                        display: inline-block;
                        ;
                        margin-left: 5px;
                        font-size: 13px;
                        font-weight: 500;
                    }

                    .navigation li a {
                        color: rgba(0, 0, 0, .4);
                    }

                    .hero {
                        position: relative;
                        z-index: 0;
                    }

                    .hero .overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        content: '';
                        width: 100%;
                        background: #000000;
                        z-index: -1;
                        opacity: .3;
                    }

                    .hero .text {
                        color: rgba(255, 255, 255, .9);
                    }

                    .hero .text h2 {
                        color: #fff;
                        font-size: 40px;
                        margin-bottom: 0;
                        font-weight: 600;
                        line-height: 1;
                        text-transform: uppercase;
                    }

                    .hero .text h2 span {
                        font-weight: 600;
                        color: #448ef6;
                    }

                    .heading-section h2 {
                        color: #000000;
                        font-size: 15px;
                        margin-top: 0;
                        line-height: 1.5;
                        font-weight: 700;
                        text-transform: uppercase;
                    }

                    .heading-section .subheading {
                        margin-bottom: 20px !important;
                        display: inline-block;
                        font-size: 13px;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        color: rgba(0, 0, 0, .4);
                        position: relative;
                    }

                    .heading-section .subheading::after {
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: -10px;
                        content: '';
                        width: 100%;
                        height: 2px;
                        background: #448ef6;
                        margin: 0 auto;
                    }

                    .heading-section-white {
                        color: rgba(255, 255, 255, .8);
                    }

                    .heading-section-white h2 {
                        line-height: 1;
                        padding-bottom: 0;
                    }

                    .heading-section-white h2 {
                        color: #ffffff;
                    }

                    .heading-section-white .subheading {
                        margin-bottom: 0;
                        display: inline-block;
                        font-size: 13px;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        color: rgba(255, 255, 255, .4);
                    }


                    .blog-entry {
                        border: 1px solid red;
                        padding-bottom: 30px !important !important;
                    }

                    .text-blog .meta {
                        text-transform: uppercase;
                        text-decoration: underline;
                        font-style: italic;
                        font-size: 10px;
                        margin-bottom: 0;
                    }

                    .footer {
                        color: rgba(255, 255, 255, .5);

                    }

                    .footer .heading {
                        color: #ffffff;
                        font-size: 20px;
                    }

                    .footer ul {
                        margin: 0;
                        padding: 0;
                    }

                    .footer ul li {
                        list-style: none;
                        margin-bottom: 10px;
                    }

                    .footer ul li a {
                        color: rgba(255, 255, 255, 1);
                    }


                    @media screen and (max-width: 500px) {}
                </style>
            </head>

            <body width="100%"
                style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
                <center style="width: 100%; background-color: #f1f1f1;  margin-top: 30px;">
                    <div
                        style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
                        &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                    </div>
                    <div style="max-width: 800px; margin: 0 auto;" class="email-container">
                        <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                            style="margin: auto;">
                            <tr>
                                <td valign="middle" class="bg_white">
                                    <div class="overlay"></div>
                                    <table>
                                        <tr>
                                            <td>
                                                <div class="text" style="padding: 0 4em; text-align: center;">
                                                    <img src="${logo}" alt="e-dip client logo" style="margin: 10px;">
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td valign="middle" class="bg_white">
                                    <hr style="height:0.25px;border-width:0;color:#c1c1c1;background-color:#c1c1c1;">
                                </td>
                            </tr>
                            <tr>
                                <td class="bg_white email-section">
                                    <div class="heading-section" style="text-align: center; padding: 0 20px;">
                                        <h2 style="border: 1px solid gray; background-color: #f1f1f1;">${number} Nouvelles notices ajoutées</h2>
                                    </div>
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><div>
                                        ${Data}
                                        <div>
                                        <tr>
                                            <td valign="middle" class="bg_white">
                                                <hr style="height:0.25px;border-width:0;color:#c1c1c1;background-color:#c1c1c1">
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="bg_white">
                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                        <tr>
                                            <td class="text-blog" style="text-align: center; padding: 2em 2.5em">
                                                <p><a href="${url}" class="btn btn-primary">Voir toutes les nouveautées</a></p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                            style="margin: auto;">
                            <tr>
                                <td valign="middle" class="bg_black footer email-section">
                                    <table>
                                        <tr>
                                            <td valign="top" width="33.333%">
                                                <table role="presentation" cellspacing="0" cellpadding="0" border="0"
                                                    width="100%">
                                                    <tr>
                                                        <td style="text-align: left; padding-right: 10px;">
                                                            <p>&copy; 2022 . All Rights Reserved</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td valign="top" width="33.333%">
                                                <table role="presentation" cellspacing="0" cellpadding="0" border="0"
                                                    width="100%">
                                                    <tr>
                                                        <td style="text-align: right; padding-left: 5px; padding-right: 5px;">
                                                            <p><a href="https://www.google.ci/" style="color: rgba(255,255,255,.4);">Se désabonner</a>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>

                    </div>
                </center>
            </body>
        </html>
    `
    }