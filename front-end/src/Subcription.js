import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Subcription() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: 9.99,
      features: ["1 Screen"],
      Link: "https://buy.stripe.com/test_28o16MeuH4nT5bO4gg",
    },
    {
      id: 2,
      name: "Premium Plan",
      price: 19.99,
      features: ["2 Screens"],
      Link: "https://buy.stripe.com/test_bIY2aQfyL8E96fScMN",
    },
    {
      id: 3,
      name: "Pro Plan",
      price: 29.99,
      features: ["4 Screens"],
      Link: "https://buy.stripe.com/test_00gcPucmz9IdcEgdQS",
    },
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div
      style={{
        background: "rgb(31, 30, 30)",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>Choose a Premium Plan</h1>
      <br />
      <br />
      <div
        className="plans"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan ${selectedPlan === plan ? "selected" : ""}`}
            onClick={() => handlePlanSelect(plan)}
            style={{
              border: "2px solid white",
              margin: "30px",
              padding: "20px",
              borderRadius: "30px",
              cursor: "pointer",
            }}
          >
            <h2>{plan.name}</h2>
            <p>${plan.price} / month</p>
            <p>{plan.features}</p>
          </div>
        ))}
      </div>
      <div className="selected-plan">
        {selectedPlan ? (
          <div>
            <h3>Selected Plan: {selectedPlan.name}</h3>
            <p>Price: ${selectedPlan.price} / month</p>
          </div>
        ) : (
          <p>No plan selected.</p>
        )}
      </div>
      <button
        disabled={!selectedPlan}
        style={{ margin: "10px" }}
        onClick={() => {
          window.open(`${selectedPlan.Link}`, "_blank");
        }}
      >
        Pay Now
      </button>
    </div>
  );
}
