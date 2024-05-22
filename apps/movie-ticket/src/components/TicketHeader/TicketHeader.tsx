import { IconArrowNarrowLeft, IconMapPin } from '@tabler/icons-react';

export interface TicketHeaderProps {
  title: string;
  location: string;
}

export function TicketHeader({ title, location }: TicketHeaderProps) {
  return (
    <header className="h-80 w-full max-w-lg rounded-t-lg relative overflow-hidden before:content-[''] before:z-10 before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-gradient-to-tr from-indigo-600 to-transparent">
      <img
        className="w-full h-full object-cover absolute top-0 left-0 z-[0]"
        src="https://www.tvguide.com/a/img/resize/37927db9b380c0a6858253e63ed9bdabeeaea763/catalog/provider/1/2/1-5164672802.jpg?auto=webp&fit=crop&height=675&width=1200"
        alt={`${title} poster`}
      />
      <div className="z-20 h-full flex flex-col text-white relative p-2">
        <div className="flex-1">
          <IconArrowNarrowLeft className="w-12 h-12" />
        </div>
        <div className="p-2">
          <h1 className="text-xl font-bold mb-1">{title}</h1>
          <div className="flex items-center gap-1 text-sm">
            <IconMapPin className="w-4 h-4" /> <p>{location}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
