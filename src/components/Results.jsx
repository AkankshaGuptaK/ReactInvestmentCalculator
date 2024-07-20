import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  const initalInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  return (
    <>
      <table id="result">
        <thead>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </thead>
        <tbody>
          {resultsData.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initalInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
            return (
              <tr>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
