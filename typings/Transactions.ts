type TransactionsData = {
  mainTitle: string;
  description: string;
  badgeTexts: string[];
  showTransactionscard: boolean;
};

export default TransactionsData;

const TransactionsMock: TransactionsData = {
  mainTitle: "",
  description: "",
  badgeTexts: [],
  showTransactionscard: false,
};

export { TransactionsMock };
