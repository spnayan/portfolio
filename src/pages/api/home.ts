import type { NextApiRequest, NextApiResponse } from 'next'

import data from '../../data/data.json'

async function GET(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ response: data.home })
}
export default GET
