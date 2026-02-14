import { Check } from "lucide-react"
import {
  Card,
 // CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

export default function ToDoListCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>To Do List</CardTitle>
      </CardHeader>
      <CardContent>
        <li>todo1</li>
        <li>todo2</li>
      </CardContent>
    </Card>
  )
}