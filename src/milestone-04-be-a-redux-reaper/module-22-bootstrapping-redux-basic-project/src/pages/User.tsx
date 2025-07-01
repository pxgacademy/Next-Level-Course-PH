import SectionContainer from "@/components/SectionContainer";
import AddUserModal from "@/components/user/AddUserModal";
import UserCard from "@/components/user/UserCard";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";
import type { UserT } from "@/types";

const User = () => {
  const users = useAppSelector(selectUser);

  return (
    <SectionContainer>
      <div className="flex items-center justify-between">
        <h1>User</h1>
        <AddUserModal />
      </div>

      <div className="mt-6 space-y-2">
        {users?.map((user: UserT) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default User;
