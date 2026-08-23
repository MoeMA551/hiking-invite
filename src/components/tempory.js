function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const data = sheet.getDataRange().getValues();
  const rows = data.slice(1); // skip header row
  const guests = rows.map(function (row, i) {
    return {
      id: String(i),
      name: row[0],
      email: row[1],
      message: row[2],
    };
  });
  return ContentService.createTextOutput(JSON.stringify(guests)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.name, data.email, data.message || ""]);
  return doGet(e);
}
