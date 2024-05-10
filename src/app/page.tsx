import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='text-xs absolute top-5 left-0 w-full text-center opacity-50'>
        Summit House, Red Lion Square, London, England, WC1R 4HQ
      </div>
      <div className='flex flex-col uppercase text-6xl items-center justify-center opacity-90'>LP•SS</div>
      <div className='text-center w-[400px] opacity-75'>software solutions that make everything in your business run smoother and more efficiently.</div>
      <div className='text-xs absolute bottom-5 left-0 w-full text-center'>
      <Popover>
      <PopoverTrigger asChild>
        <Button>Let's Talk</Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[400px]" sideOffset={-50}>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-xl">Let's talk</h4>
            <p className="text-sm text-muted-foreground">
              Let's talk about your project and how we can help you.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-1">
              <Label htmlFor="width">Company</Label>
              <Input
                id="width"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-1">
              <Label htmlFor="maxWidth">Name</Label>
              <Input
                id="maxWidth"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-1">
              <Label htmlFor="height">Phone</Label>
              <Input
                id="height"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-1">
              <Label htmlFor="maxHeight">Email</Label>
              <Input
                id="maxHeight"
                className="col-span-2 h-8"
              />
            </div>
            <div className="items-center gap-1 mt-2">
            <Textarea placeholder="Give us a brief description of your project." className='w-full h-[150px]' />
            </div>
            <Button className='mt-5'>Submit</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
      </div>
    </main>
  );
}
