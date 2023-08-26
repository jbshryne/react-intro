import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Player from "./components/Player";
import Board from "./components/Board";
import Profile from "./components/Profile";
import Login from "./components/Login";

import "./styles.css"

const profiles = [
  {
    name: 'Bugs Bunny',
    age: 80,
    occupation: 'Trickster',
    hobbies: ['Eating carrots', 'Digging holes', 'Playing pranks'],
    catchPhrase: "Eh, what's up, doc?"
  },
  {
    name: 'Daffy Duck',
    age: 83,
    occupation: 'Actor',
    hobbies: ['Seeking attention', 'Getting jealous of Bugs', 'Adventuring'],
    catchPhrase: "You're despicable!"
  },
  {
    name: 'SpongeBob SquarePants',
    age: 34,
    occupation: 'Fry cook',
    hobbies: ['Jellyfishing', 'Blowing bubbles', 'Hanging out with Patrick'],
    catchPhrase: "I'm ready!"
  },
  {
    name: 'Patrick Star',
    age: 36,
    occupation: 'Doing nothing',
    hobbies: ['Sleeping', 'Eating', 'Being clueless'],
    catchPhrase: "No, this is Patrick!"
  },
  {
    name: 'Tom Cat',
    age: 81,
    occupation: 'House cat',
    hobbies: ['Chasing Jerry', 'Playing piano', 'Getting into trouble'],
    catchPhrase: ""
  },
  {
    name: 'Jerry Mouse',
    age: 81,
    occupation: 'House mouse',
    hobbies: ['Outsmarting Tom', 'Eating cheese', 'Having adventures'],
    catchPhrase: ""
  },
  {
    name: 'Fred Flintstone',
    age: 10000,
    occupation: 'Caveman',
    hobbies: ['Bowling', 'Driving around Bedrock', 'Hanging out with Barney'],
    catchPhrase: "Yabba Dabba Doo!"
  },
  {
    name: 'Popeye',
    age: 97,
    occupation: 'Sailor',
    hobbies: ['Eating spinach', 'Boxing', 'Saving Olive Oyl'],
    catchPhrase: "I yam what I yam!"
  },
  {
    name: 'Scooby-Doo',
    age: 52,
    occupation: 'Detective dog',
    hobbies: ['Solving mysteries', 'Eating Scooby Snacks', 'Getting scared'],
    catchPhrase: "Ruh-roh!"
  },
  {
    name: 'Mickey Mouse',
    age: 94,
    occupation: 'Mascot of Disney',
    hobbies: ['Having adventures', 'Hanging out with Minnie', 'Being cheerful'],
    catchPhrase: "Oh boy!"
  }
];

function App() {
  // const name = "Bilbo"
  return (
    <div className="App">
      <Login></Login>
      <Header title="Tic Tic Boom" isCool={false}/>
      <Player name="x"></Player>
      <Player name="o"></Player>
      <Board />
      {profiles.map(p => <Profile character={p} />)}
      <Footer />
    </div>
  );
}

export default App;
