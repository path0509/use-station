import { Dictionary } from 'ramda'
import { API, Hash, ProposalItemData, DisplayCoin, VoteOption } from '..'
import { Pagination, TablePage, TableUI, Coin, Article } from '..'

export interface ProposalPage extends API<ProposalData> {
  ui?: ProposalUI
}

export interface ProposalUI {
  id: string
  status: string
  statusTranslation: string
  title: string
  meta: string
  proposer: VoterUI
  description: string
  details: Article[]
  deposit: DepositUI
  vote?: VoteUI
  tallying?: TallyingUI
}

export type VoterUI =
  | { address: string; moniker: string }
  | { address: string; link: string }

export interface DepositUI {
  title: string
  ratio: string
  completed?: string
  percent: string
  total: string
  contents: DepositContent[]
  depositing: boolean
}

export interface DepositContent {
  title: string
  content?: string
  displays?: DisplayCoin[]
}

export interface VoteUI {
  title: string
  list: VoteOption[]
  ratio: string
  total: { title: string; display: DisplayCoin }
  end: { title: string; date: string }
  voted: string[]
  voting: boolean
  count: Dictionary<number>
  progress?: VoteProgressBar
}

export interface VoteProgressBar {
  flag?: { percent: string; text: string }
  list: { percent: string; color: string }[]
}

export interface TallyingUI {
  title: string
  contents: Article[]
}

/* depositors */
export type DepositorsPage = TablePage<DepositorsData, DepositorsTable>
export type DepositorsUI = TableUI<DepositorsTable>

export interface DepositorsTable {
  headings: { depositor: string; displays: string; hash: string }
  contents: DepositorContent[]
}

export interface DepositorContent {
  depositor: VoterUI
  displays: DisplayCoin[]
  hash: Hash
}

/* Votes */
export type VotesPage = TablePage<VotesData, VotesTable>
export type VotesUI = TableUI<VotesTable>

export interface VotesTable {
  headings: { voter: string; answer: string; hash: string }
  contents: VoteContent[]
}

export interface VoteContent {
  voter: VoterUI
  answer: string
  hash: Hash
}

/* data */
export interface ProposalData extends ProposalItemData {
  content: ProposalDetail[]
  tallyingParameters?: TallyingParameters
}

export interface Voter {
  accountAddress: string
  operatorAddress: string
  moniker: string
}

export interface ProposalDetail {
  key: string
  value: string | object[]
}

export interface TallyingParameters {
  quorum: string
  threshold: string
  veto: string
}

/* data: depositors */
export interface DepositorsData extends Pagination {
  deposits: Depositor[]
}

export interface Depositor {
  txhash: string
  deposit: Coin[]
  depositor: Voter
}

/* data: votes */
export interface VotesData extends Pagination {
  votes: VoteItem[]
}

export interface VoteItem {
  txhash: string
  answer: string
  voter: Voter
}