
"use client"

import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { PageHeader } from "@/components/page-header"
import { ChevronsUpDown, Plus, Search } from "lucide-react"
import { Terminal } from "lucide-react"

function ComponentCard({ title, description, children, className }: { title: string, description: string, children: React.ReactNode, className?: string }) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-center items-center p-4 border rounded-lg bg-card-foreground/5 min-h-[120px]">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}

export default function ComponentsGalleryPage() {
    const { toast } = useToast()
    const [progress, setProgress] = React.useState(33)
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <PageHeader title="Component Gallery" description="A showcase of the available UI components." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <ComponentCard title="Button" description="Displays a button or a link.">
                    <div className="flex flex-wrap gap-2">
                        <Button>Default</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                    </div>
                </ComponentCard>

                <ComponentCard title="Alert" description="A callout for drawing attention.">
                    <div className="w-full space-y-4">
                        <Alert>
                            <Terminal className="h-4 w-4" />
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                                You can add components to your app using the cli.
                            </AlertDescription>
                        </Alert>
                         <Alert variant="destructive">
                            <Terminal className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                Your session has expired. Please log in again.
                            </AlertDescription>
                        </Alert>
                    </div>
                </ComponentCard>

                 <ComponentCard title="Alert Dialog" description="A modal confirmation dialog.">
                     <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline">Show Dialog</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </ComponentCard>
                
                <ComponentCard title="Accordion" description="A vertically stacked set of interactive headings.">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It comes with default styles that matches the other components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </ComponentCard>
                
                <ComponentCard title="Avatar" description="An image element with a fallback.">
                    <Avatar>
                        <AvatarImage src="https://picsum.photos/seed/gallery-avatar/100/100" data-ai-hint="person face" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </ComponentCard>

                <ComponentCard title="Badge" description="Displays a small amount of information.">
                    <div className="flex gap-2">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge variant="outline">Outline</Badge>
                    </div>
                </ComponentCard>
                
                <ComponentCard title="Card" description="A container for content.">
                     <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </ComponentCard>

                 <ComponentCard title="Checkbox" description="A control that allows the user to select one or more options.">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Accept terms and conditions
                        </label>
                    </div>
                </ComponentCard>

                <ComponentCard title="Calendar" description="A component for date selection.">
                     <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />
                </ComponentCard>
                
                <ComponentCard title="Carousel" description="A scrollable container for items.">
                    <Carousel className="w-full max-w-[200px]">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </ComponentCard>

                <ComponentCard title="Collapsible" description="An interactive component for showing and hiding content.">
                    <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className="w-[350px] space-y-2"
                        >
                        <div className="flex items-center justify-between space-x-4 px-4">
                            <h4 className="text-sm font-semibold">
                            @peduarte starred 3 repositories
                            </h4>
                            <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm" className="w-9 p-0">
                                <ChevronsUpDown className="h-4 w-4" />
                                <span className="sr-only">Toggle</span>
                            </Button>
                            </CollapsibleTrigger>
                        </div>
                        <div className="rounded-md border px-4 py-3 font-mono text-sm">
                            @radix-ui/primitives
                        </div>
                        <CollapsibleContent className="space-y-2">
                            <div className="rounded-md border px-4 py-3 font-mono text-sm">
                            @radix-ui/colors
                            </div>
                            <div className="rounded-md border px-4 py-3 font-mono text-sm">
                            @stitches/react
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </ComponentCard>
                
                <ComponentCard title="Dialog" description="A window overlaid on either the primary window.">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Edit Profile</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                               <p>Dialog Content</p>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </ComponentCard>

                <ComponentCard title="Dropdown Menu" description="Displays a menu to the user.">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="outline">Open</Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </ComponentCard>
                
                <ComponentCard title="Input" description="Displays a form input field.">
                    <div className="grid w-full max-w-sm items-center gap-2.5">
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <Input type="email" placeholder="Search..." />
                            <Button type="submit" size="icon"><Search className="h-4 w-4" /></Button>
                        </div>
                        <Input type="file" />
                    </div>
                </ComponentCard>

                <ComponentCard title="Label" description="Renders an accessible label associated with a form control.">
                     <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email-2">Your email address</Label>
                        <Input type="email" id="email-2" placeholder="Email" />
                        <p className="text-sm text-muted-foreground">Enter your email address.</p>
                    </div>
                </ComponentCard>

                <ComponentCard title="Menubar" description="A visually persistent menu bar.">
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>File</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>New Tab</MenubarItem>
                                <MenubarItem>New Window</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Share</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>Edit</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>Undo</MenubarItem>
                                <MenubarItem>Redo</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </ComponentCard>

                <ComponentCard title="Pagination" description="Controls for navigating through a sequence of content.">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                            <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </ComponentCard>

                <ComponentCard title="Popover" description="Displays rich content in a portal.">
                     <Popover>
                        <PopoverTrigger asChild><Button variant="outline">Open popover</Button></PopoverTrigger>
                        <PopoverContent className="w-80">
                           <p>The popover content.</p>
                        </PopoverContent>
                    </Popover>
                </ComponentCard>
                
                <ComponentCard title="Progress" description="Displays an indicator showing the completion progress.">
                    <Progress value={progress} className="w-[60%]" />
                </ComponentCard>
                
                <ComponentCard title="Radio Group" description="A set of checkable buttons.">
                     <RadioGroup defaultValue="comfortable">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="default" id="r1" />
                            <Label htmlFor="r1">Default</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="comfortable" id="r2" />
                            <Label htmlFor="r2">Comfortable</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="compact" id="r3" />
                            <Label htmlFor="r3">Compact</Label>
                        </div>
                    </RadioGroup>
                </ComponentCard>

                <ComponentCard title="Scroll Area" description="A scrollable container with a custom scrollbar.">
                    <ScrollArea className="h-40 w-60 rounded-md border">
                        <div className="p-4">
                            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                            {Array.from({ length: 20 }).map((_, i, a) => (
                                <React.Fragment key={i}>
                                    <div>Tag {i + 1}</div>
                                    {i < a.length - 1 && <Separator className="my-2" />}
                                </React.Fragment>
                            ))}
                        </div>
                    </ScrollArea>
                </ComponentCard>

                
                <ComponentCard title="Select" description="Displays a list of options for the user to pick from.">
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectContent>
                    </Select>
                </ComponentCard>

                <ComponentCard title="Separator" description="A visual separator.">
                    <div className="text-sm">
                        <h4>Radix Primitives</h4>
                        <Separator className="my-2" />
                        <p>An open-source UI component library.</p>
                    </div>
                </ComponentCard>

                 <ComponentCard title="Sheet" description="A side panel that slides in.">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">Open Sheet</Button>                        
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </ComponentCard>

                <ComponentCard title="Skeleton" description="A placeholder to indicate loading.">
                    <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                </ComponentCard>
                
                <ComponentCard title="Slider" description="An input where the user selects a value from a range.">
                    <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
                </ComponentCard>
                
                <ComponentCard title="Switch" description="A two-state toggle.">
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Airplane Mode</Label>
                    </div>
                </ComponentCard>

                <ComponentCard title="Table" description="A responsive table component.">
                    <Table className="w-full">
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">$250.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </ComponentCard>
                
                <ComponentCard title="Tabs" description="A set of layered sections of content.">
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">Account content.</TabsContent>
                        <TabsContent value="password">Password content.</TabsContent>
                    </Tabs>
                </ComponentCard>

                <ComponentCard title="Textarea" description="A multi-line text input control.">
                    <Textarea placeholder="Type your message here." />
                </ComponentCard>

                <ComponentCard title="Toast" description="A succinct message that is displayed temporarily.">
                    <Button
                        variant="outline"
                        onClick={() => {
                        toast({
                            title: "Scheduled: Catch up ",
                            description: "Friday, February 10, 2023 at 5:57 PM",
                        })
                        }}
                    >
                        Show Toast
                    </Button>
                </ComponentCard>
                
                <ComponentCard title="Tooltip" description="A popup that displays information related to an element.">
                     <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline">Hover</Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Add to library</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </ComponentCard>

            </div>
        </>
    )
}

    