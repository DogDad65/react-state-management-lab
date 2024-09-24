// src/App.jsx
import { useState } from "react";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const zombieFighters = [
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ];

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log("Not enough money");
      return;
    }
    const newTeam = [...team, fighter];
    setTeam(newTeam);
    setMoney(money - fighter.price);
    updateStats(newTeam);
  };

  const handleRemoveFighter = (index) => {
    const removedFighter = team[index];
    const newTeam = team.filter((_, i) => i !== index);
    setTeam(newTeam);
    setMoney(money + removedFighter.price);
    updateStats(newTeam);
  };

  const updateStats = (currentTeam) => {
    const strength = currentTeam.reduce(
      (total, member) => total + member.strength,
      0
    );
    const agility = currentTeam.reduce(
      (total, member) => total + member.agility,
      0
    );
    setTotalStrength(strength);
    setTotalAgility(agility);
  };

  return (
    <div className="App">
      <h1>Zombie Fighters</h1>

      {/* Stats Section */}
      <div className="stats-container">
        <p>Money: ${money}</p>
        <p>Team Strength: {totalStrength}</p>
        <p>Team Agility: {totalAgility}</p>
      </div>

      {/* Team Section */}
      <h2>Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul className="team-list">
          {team.map((member, index) => (
            <li key={index} className="team-member">
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>Price: ${member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={() => handleRemoveFighter(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      {/* Displaying all available zombie fighters */}
      <h2>Fighters</h2>
      <ul className="fighters-list">
        {zombieFighters.map((fighter, index) => (
          <li key={index} className="fighter-card">
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
