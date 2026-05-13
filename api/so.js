export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://app.alfastore.co.id/prd/api/rpt/laporan_so/prosentase_so?storeId=N497&dateSo=12-05-2026&typeSo=GRAND'
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
