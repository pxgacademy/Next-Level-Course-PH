import { Trash2 } from "lucide-react";
import type { UserT } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hook";
import { removeUser } from "@/redux/features/user/userSlice";

const UserCard = ({ user }: { user: UserT }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={cn("border px-5 py-3 rounded-md")}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1>{user.name}</h1>
        </div>
        <div>
          <Button
            onClick={() => dispatch(removeUser(user.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
