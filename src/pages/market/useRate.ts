import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RatePage, RateUI, Rate, Filter } from '../../types'
import { format, percent } from '../../utils'
import useFCD from '../../api/useFCD'

export default (denoms: string[]): RatePage => {
  const { t } = useTranslation()

  /* filter */
  const [denom, setDenom] = useState(denoms[0])
  const filter: { denom: Filter } = {
    denom: {
      value: denom,
      set: setDenom,
      options: denoms.map(denom => ({
        value: denom,
        children: format.denom(denom)
      }))
    }
  }

  /* api */
  const url = `/v1/market/swaprate/${denom}`
  const response = useFCD<Rate[]>({ url }, !!denom)

  /* render */
  const message = t('Page:Market:Chart is not available')
  const render = (list: Rate[]): RateUI =>
    list.length
      ? {
          list: list.map(({ swaprate, denom, ...variation }) => ({
            variation: {
              value: format.decimal(variation.oneDayVariation),
              percent: percent(variation.oneDayVariationRate)
            },
            display: {
              value: format.decimal(swaprate),
              unit: format.denom(denom)
            }
          }))
        }
      : { message }

  return Object.assign(
    { title: t('Page:Market:Terra exchange rate'), filter },
    denom ? { unit: format.denom(denom) } : { message },
    response,
    response.data && { ui: render(response.data) }
  )
}
