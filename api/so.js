export default async function handler(req, res) {

  try {

    const storeId =
      req.query.storeId || 'N497';

    const dateSo =
      req.query.dateSo || '12-05-2026';

    const typeSo =
      req.query.typeSo || 'GRAND';

    const url =
      `https://app.alfastore.co.id/prd/api/rpt/laporan_so/prosentase_so?storeId=${storeId}&dateSo=${dateSo}&typeSo=${typeSo}`;

    const response = await fetch(url);

    const text = await response.text();

    res.setHeader(
      'Access-Control-Allow-Origin',
      '*'
    );

    res.status(200).send(text);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

}
