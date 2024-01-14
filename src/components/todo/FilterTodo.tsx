import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type TProps = {
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
};

const FilterTodo = ({ priority, setPriority }: TProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        <Button className="bg-primary-gradient text-xl font-medium font-serif">
          Filter Todo
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-center font-mono font-semibold text-xl">
          Priority
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
          <DropdownMenuRadioItem className="font-mono" value="High">
            High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="font-mono" value="Medium">
            Medium
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="font-mono" value="Low">
            Low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterTodo;
