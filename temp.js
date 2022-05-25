function emailModel (content = {}) {
    return `
    !DOCTYPE html
	PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
	<title>E-DIP - Email Template</title>
	<style type="text/css">
		@import url(https://fonts.googleapis.com/css?family=Montserrat:700);
		@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500);

		.ReadMsgBody {
			width: 100%;
			background-color: #ffffff;
		}

		.ExternalClass {
			width: 100%;
			background-color: #ffffff;
		}

		.ExternalClass,
		.ExternalClass p,
		.ExternalClass span,
		.ExternalClass font,
		.ExternalClass td,
		.ExternalClass div {
			line-height: 100%;
		}

		html {
			width: 100%;
		}

		body {
			-webkit-text-size-adjust: none;
			-ms-text-size-adjust: none;
			margin: 0;
			padding: 0;
		}

		table {
			border-spacing: 0;
			border-collapse: collapse;
		}

		table td {
			border-collapse: collapse;
		}

		.yshortcuts a {
			border-bottom: none !important;
		}

		img {
			display: block !important;
		}

		a {
			text-decoration: none;
			color: #ff2f56;
		}

		@media only screen and (max-width: 640px) {
			body {
				width: auto !important;
			}

			table[class="table-main"] {
				width: 450px !important;
			}

			table[class="table-container"] {
				width: 90% !important;
			}

			table[class="container2-2"] {
				width: 47% !important;
				text-align: left !important;
			}

			table[class="full-width"] {
				width: 100% !important;
				text-align: center !important;
			}

			img[class="img-full"] {
				width: 100% !important;
				height: auto !important;
			}
		}

		@media only screen and (max-width: 479px) {
			body {
				width: auto !important;
			}

			table[class="table-main"] {
				width: 290px !important;
			}

			table[class="table-container"] {
				width: 82% !important;
			}

			table[class="container2-2"] {
				width: 100% !important;
				text-align: left !important;
			}

			table[class="full-width"] {
				width: 100% !important;
				text-align: center !important;
			}

			img[class="img-full"] {
				width: 100% !important;
			}
		}
	</style>

</head>

<body marginwidth="0" marginheight="0"
	style="margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0; width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;"
	offset="0" topmargin="0" leftmargin="0">

	<!-- SEPERATOR ARTICLE FULL WIDTH SECTION -->
	<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0">
		<tr>
			<!-- Background -->
			<td align="center" bgcolor="#f5f5f5">
				<table class="table-main" width="600" border="0" cellpadding="0" cellspacing="0">

					<tr>
						<td height="70" style="font-size: 1px; line-height: 70px;">&nbsp;</td>
					</tr>

					<tr>
						<td align="center"
							style="font-family: 'Rubik', Avenir, sans-serif; font-size: 32px; font-weight: 500; color: #333333; line-height: 36px;">
							${content.name}
						</td>
					</tr>

					<!-- Underline -->
					<tr>
						<td align="center">
							<table width="85" border="0" cellpadding="0" cellspacing="0">
								<!-- Edit Underline -->
								<tr>
									<td height="25" style="border-bottom: 1px solid #dbdbdb;"></td>
								</tr>
							</table>
						</td>
					</tr>
					<!-- End Underline -->

					<tr>
						<td height="25" style="font-size: 1px; line-height: 25px;">&nbsp;</td>
					</tr>

					<tr>
						<td align="center"
							style="font-family: 'Rubik', Avenir, sans-serif; font-size: 15px; font-weight: 300; color: #8f96a1; letter-spacing: 1px; line-height: 24px;">
							${content.source}
						</td>
					</tr>

					<tr>
						<td height="30" style="font-size: 1px; line-height: 30px;">&nbsp;</td>
					</tr>

					<tr>
						<td align="center">
							<img class="img-full" src="cid:${content.cid.img1}" alt="img" width="600" height="250">
						</td>
					</tr>

					<tr>
						<td height="30" style="font-size: 1px; line-height: 30px;">&nbsp;</td>
					</tr>

					<tr>
						<td align="center">
							<table class="full-width" width="600" align="center" border="0" cellpadding="0"
								cellspacing="0" bgcolor="#ffffff"
								style="border-radius: 5px; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
								<tr>
									<td>
										<table class="table-container" width="550" align="center" border="0"
											cellpadding="0" cellspacing="0">

											<tr>
												<td height="15" style="font-size: 1px; line-height: 15px;">&nbsp;</td>
											</tr>

											<tr>
												<td align="center"
													style="font-family: 'Rubik', Avenir, sans-serif; font-size: 18px; font-weight: 500; color: #333333; line-height: 36px;">
													${content.description}
												</td>
											</tr>

											<tr>
												<td height="15" style="font-size: 1px; line-height: 15px;">&nbsp;</td>
											</tr>

										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>

					<tr>
						<td height="75" style="font-size: 1px; line-height: 75px;">&nbsp;</td>
					</tr>

				</table>
			</td>
		</tr>
	</table>
	<!-- END SEPERATOR ARTICLE FULL WIDTH SECTION -->

	<!-- FOOTER SECTION -->
	<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0">
		<tr>
			<!-- Background -->
			<td align="center" bgcolor="#f5f5f5">
				<table class="table-main" width="600" border="0" cellpadding="0" cellspacing="0">

					<tr>
						<td height="50" style="font-size: 1px; line-height: 50px;">&nbsp;</td>
					</tr>

					<tr>
						<td>

							<table class="full-width" width="600" align="left" border="0" cellpadding="0"
								cellspacing="0" bgcolor="#ffffff"
								style="border-radius: 5px; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
								<tr>
									<td>
										<table class="table-container" width="545" align="center" border="0"
											cellpadding="0" cellspacing="0">

											<tr>
												<td height="25" style="font-size: 1px; line-height: 25px;">&nbsp;</td>
											</tr>

											<!-- LOGO -->
											<tr>
												<td align="center">
													<img src="cid:${content.cid.img2}" alt="logo" width="100" height="55">
												</td>
											</tr>

											<tr>
												<td height="10" style="font-size: 1px; line-height: 10px;">&nbsp;</td>
											</tr>

											<tr>
												<td align="center"
													style="font-family: 'Rubik', Avenir, sans-serif; font-size: 14px; font-weight: 400; color: #8f96a1; letter-spacing: 1px; line-height: 24px;">
													${content.remarques}
												</td>
											</tr>

											<tr>
												<td align="center"
													style="font-family: 'Rubik', Avenir, sans-serif; font-size: 14px; font-weight: 400; color: #8f96a1; letter-spacing: 1px; line-height: 24px;">
													<!-- YOU CAN -->
													<a href="${content.notice.url1}" style="text-decoration: none; color: #ff2f56;">SE
														DESABONNER</a>.
													<!-- HERE -->
												</td>
											</tr>

											<tr>
												<td height="25" style="font-size: 1px; line-height: 25	px;">&nbsp;</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>

					<tr>
						<td height="50" style="font-size: 1px; line-height: 50px;">&nbsp;</td>
					</tr>

				</table>
			</td>
		</tr>
	</table>
	<!-- END FOOTER SECTION -->

</body>

</html>
`
}