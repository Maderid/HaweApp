// frontend/src/app/layouts/App.tsx
import MorningCard from "../../components/cards/MorningCard"
import BibleStudyCard from "../../components/cards/BibleStudyCard"
import ToDoListCard from "../../components/cards/ToDoListCard"
import UpcomingEventsCard from "../../components/cards/UpcomingEventsCard"
import BackgroundTheme from "../../components/BackgroundTheme"
import TimeOfDayBadge from "../../components/TimeOfDayBadge"

export default function App() {
  return (
    <BackgroundTheme>
      <div className="w-full min-h-screen flex flex-col p-4 md:p-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Hawe App</h1>
            <p className="text-lg opacity-75">wellness app</p>
          </div>
          <TimeOfDayBadge />
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <MorningCard />
          <BibleStudyCard />
          <ToDoListCard />
          <UpcomingEventsCard />
        </div>
      </div>
    </BackgroundTheme>
  )
}