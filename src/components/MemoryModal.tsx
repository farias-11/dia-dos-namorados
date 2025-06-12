
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Heart, Calendar, X } from 'lucide-react';

interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  story: string;
}

interface MemoryModalProps {
  memory: Memory | null;
  isOpen: boolean;
  onClose: () => void;
}

const MemoryModal = ({ memory, isOpen, onClose }: MemoryModalProps) => {
  if (!memory) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-lg border-romantic-200">
        <DialogHeader className="text-left">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-romantic-500 fill-romantic-500" />
              <DialogTitle className="text-2xl font-bold text-gray-800">
                {memory.title}
              </DialogTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-romantic-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{memory.date}</span>
          </div>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={memory.image}
                alt={memory.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Nossa História</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {memory.story}
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-romantic-50 to-cream-50 rounded-lg border border-romantic-200">
              <p className="text-romantic-700 italic">
                "{memory.description}"
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MemoryModal;
