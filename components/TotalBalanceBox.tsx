import { formatAmount } from "@/lib/utils";
import AnimateCounterUp from "./AnimateCounterUp";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">{/* DoughnutChart */}</div>

      <div className="flex flex-col gap-6">
        <h1 className="header-2">Bank Accounts : {totalBanks}</h1>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <p className="total-balance-amount w-full flex-center gap-2">
            {/* {formatAmount(totalCurrentBalance)} */}
            <AnimateCounterUp amount={totalCurrentBalance} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
