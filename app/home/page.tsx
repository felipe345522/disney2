"use client";

import { useEffect, useState } from "react";

interface Character {
  _id: number;
  name: string;
  imageUrl: string;
  films: string[];
}

export default function HomePage() {

  const [characters, setCharacters] =
    useState<Character[]>([]);

  // ---------------------------
  // CARGAR PERSONAJES
  // ---------------------------

  const fetchCharacters = async () => {

    const response =
      await fetch(
        "https://api.disneyapi.dev/character"
      );

    const data =
      await response.json();

    setCharacters(data.data);
  };

  useEffect(() => {

    fetchCharacters();

  }, []);

  return (

    <div className="page">

      {/* HERO */}

      <section
        className="hero"
        style={{
          backgroundImage:
            "url(https://images6.alphacoders.com/112/1122090.jpg)",
        }}
      >

        <div className="hero-content">

          <h1 className="hero-title">
            Disney+
          </h1>

          <p className="hero-description">
            Explora personajes icónicos
            de Disney, Pixar, Marvel
            y más en una experiencia
            inspirada en Disney Plus.
          </p>

        </div>

      </section>

      {/* TITULO */}

      <h2 className="section-title">
        Personajes populares
      </h2>

      {/* GRID */}

      <div className="card-grid">

        {characters.map((character) => (

          <div
            key={character._id}
            className="card"
          >

            <img
              src={character.imageUrl}
              alt={character.name}
            />

            <div className="card-content">

              <h3 className="card-title">
                {character.name}
              </h3>

              <p className="card-subtitle">

                {character.films?.[0]
                  || "Disney Character"}

              </p>

              <button className="primary-button">
                Ver más
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}