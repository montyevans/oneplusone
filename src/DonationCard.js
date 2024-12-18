import { useState } from "react";
import "./DonationCard.css";

const DonationCard = () => {
  const [selectedAmount, setSelectedAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState("");
  const [donationFrequency, setDonationFrequency] =
    useState("One-Time Donation");

  const predefinedAmounts = [10, 20, 30, 40];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^\d.]/g, "");
    setCustomAmount(value);
    setSelectedAmount("custom");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalDonationAmount =
      selectedAmount === "custom" ? customAmount : selectedAmount;

    let paymentLink;
    switch (donationFrequency) {
      case "Monthly Donation":
        paymentLink = "https://buy.stripe.com/YOUR_MONTHLY_LINK";
        break;
      case "Annual Donation":
        paymentLink = "https://buy.stripe.com/YOUR_ANNUAL_LINK";
        break;
      default:
        paymentLink = "https://buy.stripe.com/YOUR_ONETIME_LINK";
    }

    window.location.href = `${paymentLink}?amount=${finalDonationAmount}`;
  };

  return (
    <form onSubmit={handleSubmit} className="donationCard">
      {predefinedAmounts.map((amount) => (
        <div key={amount}>
          <input
            type="radio"
            id={`amount-${amount}`}
            name="donation-amount"
            checked={selectedAmount === amount}
            onChange={() => handleAmountSelect(amount)}
          />
          <label htmlFor={`amount-${amount}`} className="ml-2">
            ${amount.toFixed(2)}
          </label>
        </div>
      ))}

      <div>
        <input
          type="radio"
          id="custom-amount"
          name="donation-amount"
          checked={selectedAmount === "custom"}
          onChange={() => handleAmountSelect("custom")}
        />
        <label htmlFor="custom-amount">Custom Amount</label>
      </div>

      {/* Custom amount input */}
      {selectedAmount === "custom" && (
        <div className="customAmountInputContainer">
          <p>Please enter an amount</p>
          <input
            type="text"
            value={customAmount}
            onChange={handleCustomAmountChange}
            placeholder="Custom Amount"
            className="customAmountInput"
          />
        </div>
      )}

      <select
        value={donationFrequency}
        onChange={(e) => setDonationFrequency(e.target.value)}
        className="donationFrequencyDropdown"
      >
        <option>One-Time Donation</option>
        <option>Monthly Donation</option>
        <option>Annual Donation</option>
      </select>

      <button className="submitButton" type="submit">
        Donate
      </button>
    </form>
  );
};

export default DonationCard;
