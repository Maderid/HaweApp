import {
  Card,
 // CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

export default function UpcomingEventsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming events</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Pietie verjaar 22 Nov</p>
      </CardContent>
    </Card>
  )
}