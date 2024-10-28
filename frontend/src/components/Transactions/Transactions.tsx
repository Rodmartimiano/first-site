import "./Transactions.css";
import transaction from "../../assets/transactions.svg";
import badge2 from "../../assets/badge2.svg";
import { useEffect, useState } from "react";
import TransactionsData, { TransactionsMock } from "@typings/Transactions";
import getConfig from "@envconfigs/EnvConfig";

async function getServerData(): Promise<TransactionsData> {
  const configs = getConfig();

  const serverReponse = await fetch(configs.apiUrl + "/transactions-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
    }),
  });

  const response = await serverReponse.json();

  return response as TransactionsData;
}

function Transactions() {
  const [TransactionsJsonData, settransactionsJsonData] =
    useState<TransactionsData>(TransactionsMock);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const serverData = await getServerData();

      settransactionsJsonData(serverData);

      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="Transactions">
        <div className="container">
          <div style={{ fontSize: 100 }}>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="Transactions">
      <div className="container">
        <div className="grid">
          <div className="title">
            <h1 className="header-medium">{TransactionsJsonData.mainTitle}</h1>
          </div>

          <div className="description">
            <h2>{TransactionsJsonData.description}</h2>
          </div>

          <div className="list">
            {TransactionsJsonData.badgeTexts.map((badgeText) => {
              return (
                <div key={badgeText} className="transactions-text-item">
                  <img src={badge2} alt="badge images" />
                  <span>{badgeText}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="Transactionscards">
        <img src={transaction} alt="Card images" />
      </div>
    </div>
  );
}

export default Transactions;
