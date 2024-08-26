import { Button } from "@/components/ui/button";

type QuickReplyOption = {
    id: string;
    label: string;
    value: string;
};

type QuickRepliesProps = {
    options: QuickReplyOption[];
    onSelect: (value: string) => void;
};

const QuickReplies = ({ options, onSelect }: QuickRepliesProps) => (
    <div className="flex gap-2 mt-2">
        {options.map((option) => (
            <Button
                key={option.id}
                variant="outline"
                size="sm"
                onClick={() => onSelect(option.value)}
            >
                {option.label}
            </Button>
        ))}
    </div>
);

export default QuickReplies;
