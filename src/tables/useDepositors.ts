import { useTranslation } from 'react-i18next'
import { DepositorsPage, DepositorsUI } from '../types'
import { DepositorsData } from '../types'
import { format, gt } from '../utils'
import useFinder from '../hooks/useFinder'
import useFCD from '../api/useFCD'
import { getVoter } from '../pages/governance/helpers'

export default (id: string, { page }: { page?: number }): DepositorsPage => {
  const { t } = useTranslation()
  const getLink = useFinder()

  /* api */
  const url = `/v1/gov/proposals/${id}/deposits`
  const params = { page: page ?? 1 }
  const response = useFCD<DepositorsData>({ url, params })

  /* render */
  const render = (data: DepositorsData): DepositorsUI => {
    const { totalCnt, page, limit, deposits } = data

    return Object.assign(
      {
        pagination: {
          totalCnt: Number(totalCnt),
          page: Number(page),
          limit: Number(limit)
        }
      },
      !deposits || !gt(totalCnt, 0)
        ? { card: { content: t('Page:Governance:No deposits yet') } }
        : {
            table: {
              headings: {
                depositor: t('Page:Governance:Depositor'),
                displays: t('Common:Tx:Amount'),
                hash: t('Common:Tx:Tx')
              },

              contents: deposits.map(({ txhash, deposit, depositor }) => ({
                depositor: getVoter(depositor, getLink),
                displays: deposit.map(coin => format.display(coin)),
                hash: {
                  link: getLink?.({ q: 'tx', v: txhash }) ?? '',
                  text: txhash
                }
              }))
            }
          }
    )
  }

  return Object.assign(
    { title: t('Page:Governance:Depositors') },
    response,
    response.data && { ui: render(response.data) }
  )
}
