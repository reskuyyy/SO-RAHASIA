export default async function handler(req, res) {

  const {
    storeId = 'N497',
    dateSo = '12-05-2026',
    typeSo = 'GRAND'
  } = req.query;

  const url =
    `https://app.alfastore.co.id/prd/api/rpt/laporan_so/prosentase_so?storeId=${storeId}&dateSo=${dateSo}&typeSo=${typeSo}`;

  try {

    const response = await fetch(url, {
      headers: {
        'accept': '*/*'
      }
    });

    const text = await response.text();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    res.status(200).send(text);

  } catch (err) {

    res.status(500).send({
      message: err.message,
      stack: err.stack
    });

  }

}
