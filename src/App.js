import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <div>Personal Digital Assistant</div>
      <ProfileCard title="Alexa" handle="@alexa99" />
      {/*Adding a props to parent component */}
      <ProfileCard title="Cortana" handle="@cortana32" /> {/* -||- */}
      <ProfileCard title="Siri" handle="@siri01" /> {/* -||- */}
    </div>
  );
}

export default App;
