import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Character {
  alt: string;
  name: string;
  planet: string;
  height: string;
  mass: string;
  gender: string;
}

const characters: Character[] = [
  {
    alt: "Luke Skywalker",
    name: "Luke Skywalker",
    planet: "Tatooine",
    height: "172 cm",
    mass: "77 kg",
    gender: "Male",
  },
  {
    alt: "Darth Vader",
    name: "Darth Vader",
    planet: "Tatooine",
    height: "202 cm",
    mass: "136 kg",
    gender: "Male",
  },
  {
    alt: "Leia Organa",
    name: "Leia Organa",
    planet: "Alderaan",
    height: "150 cm",
    mass: "49 kg",
    gender: "Female",
  },
  {
    alt: "Han Solo",
    name: "Han Solo",
    planet: "Corellia",
    height: "180 cm",
    mass: "80 kg",
    gender: "Male",
  },
  {
    alt: "Chewbacca",
    name: "Chewbacca",
    planet: "Kashyyyk",
    height: "228 cm",
    mass: "112 kg",
    gender: "Male",
  },
  {
    alt: "Yoda",
    name: "Yoda",
    planet: "Unknown",
    height: "66 cm",
    mass: "17 kg",
    gender: "Male",
  },
  {
    alt: "C-3PO",
    name: "C-3PO",
    planet: "Tatooine",
    height: "167 cm",
    mass: "75 kg",
    gender: "N/A",
  },
  {
    alt: "R2-D2",
    name: "R2-D2",
    planet: "Naboo",
    height: "96 cm",
    mass: "32 kg",
    gender: "N/A",
  },
];

interface CardProps {
  character: Character;
}

const CharacterCard: React.FC<CardProps> = ({ character }) => {
  return (
    <Card className="flex flex-col items-center bg-gray-700">
      <Image
        alt={character.alt}
        className="h-64 w-full object-cover"
        height="200"
        src="/placeholder.svg"
        style={{
          aspectRatio: "200/200",
          objectFit: "cover",
        }}
        width="200"
      />
      <div className="mt-6 text-center">
        <h3 className="text-2xl font-bold">{character.name}</h3>
        <p className="text-md text-gray-400">{character.planet}</p>
        <p className="text-md text-gray-400">Height: {character.height}</p>
        <p className="text-md text-gray-400">Mass: {character.mass}</p>
        <p className="text-md text-gray-400">Gender: {character.gender}</p>
      </div>
    </Card>
  );
};

export default function Home() {
  return (
    <div className="dark max-w mx-auto py-16 px-8 bg-gray-800 text-white">
      <h1 className="text-6xl font-bold">Star Wars Characters</h1>
      <p className="mt-4 text-gray-400 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <div className="mt-8">
        <Select>
          <SelectTrigger id="filter">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="all">All</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <h2 className="mt-12 text-5xl font-bold">All Characters</h2>
      <div className="mt-8 grid grid-cols-4 gap-8">
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button className="px-12 py-3 text-md font-semibold rounded-md bg-gray-700 text-white">LOAD MORE</Button>
      </div>
    </div>
  )
}
