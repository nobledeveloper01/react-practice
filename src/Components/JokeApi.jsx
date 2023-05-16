import React, {useState, useEffect} from "react";
import axios from "axios";

export default function JokeApi() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
      setJoke(response.data);
    };
    fetchJoke();
  }, []);

  return (
    <div>
      <h1>Our recent Joke</h1>
      <h2> Joke Type: {joke.type}</h2>
      <h3> Joke ID: {joke.id}</h3>
      <p> Joke Setup: {joke.setup}</p>
      <p> Joke Punchline: {joke.punchline}</p>
    </div>
  )
}
