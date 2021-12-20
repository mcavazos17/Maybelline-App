import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
        await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        .then(res => res.json())
  )
}
