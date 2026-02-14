import axios from 'axios';

const CACHE_KEY = 'funFact_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000;

// Fallback fun facts for when APIs are unavailable
const FALLBACK_FACTS = [
  'William Shakespeare had a curse engraved on his tombstone to prevent anyone from moving his bones.',
  'Honey never spoils. Archaeologists have found 3000-year-old honey in Egyptian tombs that was still edible.',
  'Octopuses have three hearts and blue blood.',
  'A group of flamingos is called a "flamboyance".',
  'Bananas are berries, but strawberries are not.',
  'The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.',
  'A single bolt of lightning contains about 1 billion volts of electricity.',
  'Jellyfish have existed for 500+ million years, before sharks and dinosaurs.',
  'Honey never spoils - it can last thousands of years.',
  'A narwhal\'s tusk is actually a tooth with 10 million nerve endings.',
];

const funFactService = {
  getAIGeneratedFact: async () => {
    try {
      // Check cache first
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { fact, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          console.log('✅ Using cached fun fact');
          return fact;
        }
      }

      console.log('🤖 Fetching fun fact from UselessFacts API...');

      // Using UselessFacts API - completely free, no auth needed
      const response = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en', {
        timeout: 10000,
      });

      console.log('✅ API Response:', response.data);

      const fact = response.data.text || response.data.fact || '';

      if (!fact) {
        throw new Error('No fact received from API');
      }

      console.log('✅ Fun Fact:', fact);

      // Cache the fact
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        fact: fact,
        timestamp: Date.now(),
        source: 'uselessfacts',
      }));

      console.log('💾 Cached for 24 hours');
      return fact;
    } catch (error: any) {
      console.error('❌ Error fetching fact:', error.message);

      // Try to return cached data (even if expired)
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { fact } = JSON.parse(cached);
        console.log('⚠️ Using expired cache as fallback');
        return fact;
      }

      // Last resort: return a random fallback fact
      const randomFact = FALLBACK_FACTS[Math.floor(Math.random() * FALLBACK_FACTS.length)];
      console.log('⚠️ Using offline fallback fact');
      return randomFact;
    }
  },
};

export default funFactService;