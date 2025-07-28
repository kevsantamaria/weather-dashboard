import React from 'react'
import { Input } from './ui/input'
import { Button } from "./ui/button";

function CityInput() {
  return (
    <section className='flex items-center justify-center gap-4'>
        <Input
          type="text"
          placeholder="Enter city name"
          className="w-full max-w-xs"/>
          <Button className='bg-blue-500 hover:bg-blue-600 font-bold cursor-pointer2'>Search</Button>
    </section>
  )
}

export default CityInput