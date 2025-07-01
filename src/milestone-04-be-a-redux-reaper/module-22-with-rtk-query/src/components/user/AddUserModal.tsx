import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import type { UserFormValues } from "@/types";
import { useAppDispatch } from "@/redux/hook";
import { addUser } from "@/redux/features/user/userSlice";

export default function AddUserModal() {
  const dispatch = useAppDispatch();

  //
  const form = useForm<UserFormValues>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // submit handler
  const onSubmit = (data: UserFormValues) => {
    dispatch(addUser(data));
    form.reset();
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="secondary">Add User</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
          </DialogHeader>
          <DialogDescription className="sr-only">
            Fill up this form to add task.
          </DialogDescription>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input {...field} placeholder="John Doe" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="doe@mail.com"
                        type="email"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="pt-4 flex items-center justify-end gap-x-2">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="submit" className="h-8 py-2">
                    Submit
                  </Button>
                </DialogClose>
              </div>
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
}
