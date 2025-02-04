import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('welcome');

  const renderSection = () => {
    switch (activeSection) {
      case 'welcome':
        return (
          <div>
            <h1>Welcome in ZEKI</h1>
            <blockquote>
              <p><span role="img" aria-label="bulb">💡</span> Read the Hausordnung tips ✨</p>
              <p><span role="img" aria-label="bulb">💡</span> Scan the QR to learn more</p>
              <img src="uploads/857d5f0f807b9aa07aa77fb0346d4bd7/qrcode_gitlab.dai-labor.de.png" alt="qrcode_gitlab.dai-labor.de" width="200" />
              <p><span role="img" aria-label="bulb">💡</span> You can book different rooms in ZEKI <a href="https://roombooking.dai-lab.de/index.php">Book a Room</a></p>
              <p><span role="img" aria-label="bulb">💡</span> ZEKI-Guests Network -- <strong>Username</strong> = zekiguest <strong>Password</strong> = zekizeki</p>
            </blockquote>
          </div>
        );
      case 'conference':
        return (
          <div>
            <h1>🤝 Conference Space</h1>
            <ul>
              <li>Book this room <a href="https://roombooking.dai-lab.de/index.php">here</a></li>
              <li>How to use the 🦉<a href="https://gitlab.dai-labor.de/pub/zeki-howtos/-/wikis/ZEKI_Home/%F0%9F%A4%9D-Conference-Space/%F0%9F%A6%89-OWLS">OWLS Video Conference Gerät</a></li>
            </ul>
          </div>
        );
      case 'coworking':
        return (
          <div>
            <h1>💻 Co-Working</h1>
            <ul>
              <li>Book the mute box 🤐<a href="https://roombooking.dai-lab.de/index.php">in this Link</a></li>
              <li>You can learn more <a href="https://gitlab.dai-labor.de/pub/zeki-howtos/-/wikis/ZEKI_Home/%F0%9F%92%BB-Co-Working">here</a></li>
              <li>To <a href="https://gitlab.dai-labor.de/pub/zeki-howtos/-/wikis/ZEKI_Home/%F0%9F%92%BB-Co-Working/%F0%9F%96%A8%EF%B8%8FPrint">print</a></li>
            </ul>
          </div>
        );
      case 'experience':
        return (
          <div>
            <h1>🤓 Experience Hub</h1>
            <ul>
              <li>Book this room <a href="https://roombooking.dai-lab.de/index.php">here</a></li>
              <li>How to use the 🦉<a href="https://gitlab.dai-labor.de/pub/zeki-howtos/-/wikis/ZEKI_Home/%F0%9F%A4%9D-Conference-Space/%F0%9F%A6%89-OWLS">OWLS Video Conference Gerät</a></li>
              <li>The BeIntelli interactive table <a href="uploads/8cf1c80d8e4ca32eb4b2226b0524e7f0/InteractiveDesk.pdf">Interactive table</a></li>
            </ul>
          </div>
        );
      case 'social':
        return (
          <div>
            <h1>🍵 Social Lounge</h1>
            <ul>
              <li>Book this room <a href="https://roombooking.dai-lab.de/index.php">here</a></li>
              <li>🤎<a href="https://gitlab.dai-labor.de/pub/zeki-howtos/-/wikis/ZEKI_Home/%F0%9F%8D%B5-Social-Lounge/%F0%9F%A4%8ECafe">how to coffee</a></li>
              <li>⛄<a href="https://gitlab.dai-labor.de/pub/zeki-howtos/-/wikis/ZEKI_Home/%F0%9F%8D%B5-Social-Lounge#fridge-rules">Fridge-rules</a></li>
              <li>🧽<a href="https://gitlab.dai-labor.de/pub/zeki-howtos/-/wikis/ZEKI_Home/%F0%9F%8D%B5-Social-Lounge/%F0%9F%A7%BDausr%C3%A4umen">How to dishwasher</a></li>
              <li>👩‍🍳<a href="https://gitlab.dai-labor.de/pub/zeki-howtos/-/wikis/ZEKI_Home/Social-Lounge/%F0%9F%91%A9%E2%80%8D%F0%9F%8D%B3Kochen">How to Cook</a></li>
            </ul>
          </div>
        );
      case 'focus':
        return (
          <div>
            <h1>🥸 Focus Space</h1>
            <ul>
              <li>No personal calls or loud conversations</li>
              <li>Clear and concise communication, longer conversations outside</li>
              <li>Avoid unnecessary interruptions, use visual cues</li>
              <li>Keep work area clean and organized</li>
              <li>Take breaks outside the focus room</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => setActiveSection('welcome')}>Welcome</button>
        <button onClick={() => setActiveSection('conference')}>Conference Space</button>
        <button onClick={() => setActiveSection('coworking')}>Co-Working</button>
        <button onClick={() => setActiveSection('experience')}>Experience Hub</button>
        <button onClick={() => setActiveSection('social')}>Social Lounge</button>
        <button onClick={() => setActiveSection('focus')}>Focus Space</button>
      </nav>
      <main>
        {renderSection()}
      </main>
    </div>
  );
}

export default App;