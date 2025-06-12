
import { useState } from 'react';
import { memories, Memory } from '@/data/memories';
import MemoryCard from '@/components/MemoryCard';
import MemoryModal from '@/components/MemoryModal';
import { Heart, Sparkles } from 'lucide-react';

const Index = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemoryClick = (memory: Memory) => {
    setSelectedMemory(memory);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedMemory(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-romantic-200/30 via-cream-200/30 to-romantic-300/30" />
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-romantic-500 fill-romantic-500 animate-bounce" />
              <Sparkles className="w-6 h-6 text-cream-500 fill-cream-500" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-romantic-600 via-romantic-500 to-cream-600 bg-clip-text text-transparent mb-6">
              Nossos Momentos
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Uma coleção especial dos nossos momentos mais preciosos juntos. 
              Cada foto conta uma história, cada memória é um tesouro guardado no coração.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-romantic-600">
              <Heart className="w-5 h-5 fill-romantic-600" />
              <span className="text-lg font-medium">
                {memories.length} momentos especiais e contando...
              </span>
              <Heart className="w-5 h-5 fill-romantic-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Memories Gallery */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nossa História de Amor
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clique em qualquer momento para reviver nossa história e ler sobre o que tornava cada dia especial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {memories.map((memory, index) => (
            <div 
              key={memory.id} 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MemoryCard
                memory={memory}
                onClick={handleMemoryClick}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-romantic-100 to-cream-100 py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-romantic-500 fill-romantic-500" />
            <span className="text-lg font-medium text-gray-700">
              Feito com amor infinito
            </span>
            <Heart className="w-6 h-6 text-romantic-500 fill-romantic-500" />
          </div>
          <p className="text-gray-600">
            Cada momento é único, cada memória é eterna ✨
          </p>
        </div>
      </footer>

      {/* Memory Modal */}
      <MemoryModal
        memory={selectedMemory}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default Index;
