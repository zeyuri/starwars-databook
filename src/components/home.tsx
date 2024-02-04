/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/S6avRY0QXDX
 */
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Home() {
  return (
    <div className="dark max-w-7xl mx-auto py-16 px-8 bg-gray-800 text-white">
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
        <Card className="flex flex-col items-center bg-gray-700">
          <img
            alt="Luke Skywalker"
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
            <h3 className="text-2xl font-bold">Luke Skywalker</h3>
            <p className="text-md text-gray-400">Tatooine</p>
            <p className="text-md text-gray-400">Height: 172 cm</p>
            <p className="text-md text-gray-400">Mass: 77 kg</p>
            <p className="text-md text-gray-400">Gender: Male</p>
          </div>
        </Card>
        <Card className="flex flex-col items-center bg-gray-700">
          <img
            alt="Darth Vader"
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
            <h3 className="text-2xl font-bold">Darth Vader</h3>
            <p className="text-md text-gray-400">Tatooine</p>
            <p className="text-md text-gray-400">Height: 202 cm</p>
            <p className="text-md text-gray-400">Mass: 136 kg</p>
            <p className="text-md text-gray-400">Gender: Male</p>
          </div>
        </Card>
        <Card className="flex flex-col items-center bg-gray-700">
          <img
            alt="Leia Organa"
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
            <h3 className="text-2xl font-bold">Leia Organa</h3>
            <p className="text-md text-gray-400">Alderaan</p>
            <p className="text-md text-gray-400">Height: 150 cm</p>
            <p className="text-md text-gray-400">Mass: 49 kg</p>
            <p className="text-md text-gray-400">Gender: Female</p>
          </div>
        </Card>
        <Card className="flex flex-col items-center bg-gray-700">
          <img
            alt="Han Solo"
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
            <h3 className="text-2xl font-bold">Han Solo</h3>
            <p className="text-md text-gray-400">Corellia</p>
            <p className="text-md text-gray-400">Height: 180 cm</p>
            <p className="text-md text-gray-400">Mass: 80 kg</p>
            <p className="text-md text-gray-400">Gender: Male</p>
          </div>
        </Card>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-8">
        <Card className="flex flex-col items-center bg-gray-700">
          <img
            alt="Chewbacca"
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
            <h3 className="text-2xl font-bold">Chewbacca</h3>
            <p className="text-md text-gray-400">Kashyyyk</p>
            <p className="text-md text-gray-400">Height: 228 cm</p>
            <p className="text-md text-gray-400">Mass: 112 kg</p>
            <p className="text-md text-gray-400">Gender: Male</p>
          </div>
        </Card>
        <Card className="flex flex-col items-center bg-gray-700">
          <img
            alt="Yoda"
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
            <h3 className="text-2xl font-bold">Yoda</h3>
            <p className="text-md text-gray-400">Unknown</p>
            <p className="text-md text-gray-400">Height: 66 cm</p>
            <p className="text-md text-gray-400">Mass: 17 kg</p>
            <p className="text-md text-gray-400">Gender: Male</p>
          </div>
        </Card>
        <Card className="flex flex-col items-center bg-gray-700">
          <img
            alt="C-3PO"
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
            <h3 className="text-2xl font-bold">C-3PO</h3>
            <p className="text-md text-gray-400">Tatooine</p>
            <p className="text-md text-gray-400">Height: 167 cm</p>
            <p className="text-md text-gray-400">Mass: 75 kg</p>
            <p className="text-md text-gray-400">Gender: N/A</p>
          </div>
        </Card>
        <Card className="flex flex-col items-center bg-gray-700">
          <img
            alt="R2-D2"
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
            <h3 className="text-2xl font-bold">R2-D2</h3>
            <p className="text-md text-gray-400">Naboo</p>
            <p className="text-md text-gray-400">Height: 96 cm</p>
            <p className="text-md text-gray-400">Mass: 32 kg</p>
            <p className="text-md text-gray-400">Gender: N/A</p>
          </div>
        </Card>
      </div>
      <div className="mt-12 flex justify-center">
        <Button className="px-12 py-3 text-md font-semibold rounded-md bg-gray-700 text-white">LOAD MORE</Button>
      </div>
    </div>
  )
}
