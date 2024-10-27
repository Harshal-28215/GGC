"use client"

import * as React from "react";
import { Button } from "@/Components/ui/button";
import {
  Drawer as UIDrawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/Components/ui/drawer";
import Image from "next/image";
import { locationContent } from "../../../utils/locationcontent";

type LocationKeys = keyof typeof locationContent;

interface CustomDrawerProps {
  location: string;
  active: boolean;
  setactive: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CustomDrawer({ location, active, setactive }: CustomDrawerProps) {

  const [page, setpage] = React.useState(0);

  const locationName = location.toLowerCase() as LocationKeys;
  const content = locationContent[locationName] || [];


  const handlprevious = () => {
    setpage(page - 1)
  }

  const handlenext = () => {
    setpage(page + 1)
  }

  return (
    <UIDrawer open={active} onOpenChange={setactive}>
      <DrawerContent className="h-[80vh]">
        <div className="mx-auto w-full max-w-sm text-black h-full">
          <DrawerHeader>
            <DrawerTitle>{location}</DrawerTitle>
          </DrawerHeader>

          <div className="w-full h-full">
            <div className="flex items-center flex-col h-[75%] w-full">
              <div className='flex flex-col w-full h-[70%] gap-4'>
                <div className='w-full h-[200px] relative'>
                  <Image src={content[page]?.image} alt='product image' width={500} height={1000} className='w-full h-full object-cover rounded-xl shadow-2xl' />
                </div>
                <div className='md:w-2/3 space-y-4 flex flex-col justify-center'>
                  <p className='text-2xl font-bold uppercase text-green-700'>Product</p>
                  <p className='font-semibold text-md'>{content[page]?.description}</p>
                </div>
              </div>
            </div>
            <div className="w-full flex items-end justify-center gap-2 mt-3">
              <Button
                variant="outline"
                size="icon"
                className={`disabled:opacity-50 disabled:cursor-not-allowed w-14 h-14 bg-transparent border-none`} disabled={page == 0 ? true : false}
                onClick={handlprevious}
              >
                <Image src='/assets/arrow.svg' alt='product image' width={100} height={100} className='w-14 h-14 object-cover rounded-full shadow-2xl' />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={`disabled:opacity-50 disabled:cursor-not-allowed w-14 h-14 bg-transparent border-none`} disabled={page == content.length - 1 ? true : false}
                onClick={handlenext}
              >
                <Image src='/assets/arrow (1).svg' alt='product image' width={100} height={100} className='w-14 h-14 object-cover rounded-full shadow-2xl' />
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
            </div>
          </div>
        </div>
      </DrawerContent>
    </UIDrawer>
  );
}
