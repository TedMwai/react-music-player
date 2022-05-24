import { v4 as uuidv4 } from "uuid";

function chiilHop() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10076",
      id: uuidv4(),
      active: true,
      color: ["#205950", "#2ab3bf"],
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32863",
      id: uuidv4(),
      active: false,
      color: ["#EF8EA9", "#ab417f"],
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      id: uuidv4(),
      active: false,
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      id: uuidv4(),
      active: false,
      color: ["#EF8EA9", "#ab417f"],
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      id: uuidv4(),
      active: false,
      color: ["#205950", "#2ab3bf"],
    },
    {
      name: "Jazz Cabbage",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      artist: "Ian Ewing, Strehlow",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
      id: uuidv4(),
      active: false,
      color: ["BA4A46", "FDF0DD"],
    },
    {
      name: "Lagoons",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      artist: "Strehlow, Chris Mazuera",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8266",
      id: uuidv4(),
      active: false,
      color: ["BA4A46", "FDF0DD"],
    },
  ];
}

export default chiilHop;
