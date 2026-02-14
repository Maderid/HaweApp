import { useState, useEffect, useRef } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import funFactService from "../../services/funFactService";

export default function MorningCard() {
  const [funFact, setFunFact] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    // Prevent duplicate calls in React Strict Mode
    if (hasLoadedRef.current) return;
    hasLoadedRef.current = true;

    const loadFunFact = async () => {
      setLoading(true);
      setError('');
      try {
        const fact = await funFactService.getAIGeneratedFact();
        setFunFact(fact);
      } catch (err: any) {
        setError('Failed to load fun fact');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadFunFact();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Morninggg</CardTitle>
        <CardDescription>Hoop jy het lekke geslaap</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Date</p>
        <p>Time</p>
        <p>weather</p>
        <p>Mood</p>
      </CardContent>
      <CardFooter>
        <div>
          <p className="font-semibold mb-2">Fun Fact 🤖</p>
          {loading && <p className="text-sm text-gray-500">Generating fact...</p>}
          {error && <p className="text-sm text-red-500">{error}</p>}
          {funFact && <p className="text-sm">{funFact}</p>}
        </div>
      </CardFooter>
    </Card>
  )
}