import {
  Card,
 // CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

export default function BibleStudyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bible Verse of the Day</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Bible Verse</p>
      </CardContent>
    </Card>
  )
}