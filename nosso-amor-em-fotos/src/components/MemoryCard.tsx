
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Calendar } from 'lucide-react';

interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  story: string;
}

interface MemoryCardProps {
  memory: Memory;
  onClick: (memory: Memory) => void;
}

const MemoryCard = ({ memory, onClick }: MemoryCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card 
      className="memory-card-hover cursor-pointer group overflow-hidden bg-white/80 backdrop-blur-sm border-romantic-200 hover:border-romantic-300"
      onClick={() => onClick(memory)}
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          src={memory.image}
          alt={memory.title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-romantic-100 to-cream-100 animate-pulse" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart className="w-5 h-5 text-romantic-400 fill-romantic-400" />
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center gap-2 text-romantic-600 text-sm mb-2">
          <Calendar className="w-4 h-4" />
          <span>{memory.date}</span>
        </div>
        <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-romantic-600 transition-colors">
          {memory.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
          {memory.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default MemoryCard;
