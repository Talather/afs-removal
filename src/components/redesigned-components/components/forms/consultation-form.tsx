import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
// import { Button } from "@nextui-org/button";
// import { Input } from "@nextui-org/input";
import { ConsultationSchema } from "../../../../lib/validations";
import { useToast } from "../../../../hooks/use-toast";
import {
  FormField,
  FormItem,
  FormControl,
  Form,
  FormMessage,
} from "../../../ui/form";
import {
  Checkbox,
  Image,
  Input,
  Select,
  Button,
  SelectItem,
} from "@nextui-org/react";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import { cn } from "../../../../lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../../../ui/calendar";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";

type ConsultationFormData = z.infer<typeof ConsultationSchema>;

const ConsultationForm = () => {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<ConsultationFormData>({
    resolver: zodResolver(ConsultationSchema),
    defaultValues: {
      email: "",
      name: "",
      phoneNumber: "",
      agreeToPromotionalMessages: true,
      timeSlot: "",
    },
  });
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const onSubmit = async (values: ConsultationFormData) => {
    setIsLoading(true);

    try {
      const selectedDate = format(values.date, "PPP");

      const formData = {
        name: values.name,
        email: values.email,
        phone: values.phoneNumber,
        selectedDate: selectedDate,
        timeSlot: values.timeSlot,
        agreeToPromotionalMessages: `${
          values.agreeToPromotionalMessages ? "Agreed" : "Not Agreed"
        }`,
        // name: `${values.name}`,
        // email: `${values.email}`,
        // selectedDate:'',
        // message: `
        // Name: ${values.name}
        // Email: ${values.email}
        // Selected Date: ${selectedDate},
        // Promotional Messages: ${
        //   values.agreeToPromotionalMessages ? "Agreed" : "Not Agreed"
        // }`,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_KEY,
        import.meta.env.VITE_EMAIL_JS_CONSULTATION_TEMPLATE_ID,
        formData,
        {
          publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
        }
      );

      toast({
        title: "Scheduled",
        description: "Scheduled successfully. We will get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast({
        title: "Error",
        description: `Unable to send now.`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen   md:mt-5  lg:mt-12 px-4 w-[95vw] grid md:grid-cols-2">
      {/* Left side - Image */}
      <div className="relative hidden md:block">
        <Image
          src="/assets/images/consultationImage2.png"
          alt="Customer service representative"
          className="object-cover h-[90vh]"
        />
      </div>

      {/* Right side - Form */}
      <div className="p-4 flex flex-col">
        <div className="max-w-lg mx-auto space-y-5">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Request a free consultation call
            </h1>
            <p className="text-lg text-gray-600">
              Schedule your free consultation with Afs Removal today3ws
            </p>
          </div>

          <Form {...form}>
            <form
              className="flex w-full flex-col gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid md:grid-cols-2 gap-3">
                <FormField
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="relative items-center ">
                      {/* <FormLabel className="">Email</FormLabel> */}
                      <div className="w-full">
                        <FormControl>
                          <Input
                            variant="bordered"
                            size="md"
                            label="Name"
                            errorMessage={errors.name?.message}
                            isInvalid={!!errors.name?.message}
                            {...field}
                          />
                        </FormControl>
                        {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="relative items-center ">
                      {/* <FormLabel className="">Email</FormLabel> */}
                      <div className="w-full">
                        <FormControl>
                          <Input
                            variant="bordered"
                            size="md"
                            type="email"
                            label="Email"
                            errorMessage={errors.email?.message}
                            isInvalid={!!errors.email?.message}
                            {...field}
                          />
                        </FormControl>
                        {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className=" relative items-center lg:gap-3">
                    {/* <FormLabel>Password</FormLabel> */}
                    <div className="w-full">
                      <FormControl>
                        <Input
                          variant="bordered"
                          size="md"
                          label="Phone Number"
                          errorMessage={errors.phoneNumber?.message}
                          isInvalid={!!errors.phoneNumber?.message}
                          {...field}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <div className="grid md:grid-cols-2 gap-3">
                <Select
                  {...register("timeSlot")}
                  variant="bordered"
                  size="lg"
                  placeholder="Select a time slot"
                  errorMessage={errors.timeSlot?.message}
                  isInvalid={!!errors.timeSlot?.message}
                >
                  <SelectItem key="Morning 6-11am">Morning 6-11am</SelectItem>
                  <SelectItem key="Afternoon 12-6pm">
                    Afternoon 12-6pm
                  </SelectItem>
                  <SelectItem key="Evening 7-11pm">Evening 7-11pm</SelectItem>
                </Select>
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col relative">
                      {/* <FormLabel>Date of birth</FormLabel> */}
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="bordered"
                              size="lg"
                              disableRipple
                              className={cn(
                                " pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="center">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date("1900-01-01")}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage className="text-xs absolute -bottom-5 md:bottom-1" />
                    </FormItem>
                  )}
                />
              </div>
              <Checkbox {...register("agreeToPromotionalMessages")}>
                <p className="text-xs mt-3 md:mt-0">
                  By checking this box I agree to receive automated promotional
                  messages. This agreement is not a condition of purchase.
                  Message frequency varies. Reply STOP to opt out or HELP for
                  help. Message & data rates apply.{" "}
                  <NavLink
                    className={"underline text-button-gpt"}
                    to={"/terms-of-service"}
                  >
                    Terms
                  </NavLink>{" "}
                  and{" "}
                  <NavLink
                    className={"underline text-button-gpt"}
                    to={"/privacy-policy"}
                  >
                    privacy policy
                  </NavLink>
                </p>
              </Checkbox>
              <div className="flex items-center justify-between mt-4">
                <div></div>

                <Button
                  radius="sm"
                  className="text-white font-bold hover:bg-button-gpt-hover bg-button-gpt"
                  isLoading={isLoading}
                  variant="faded"
                  type="submit"
                >
                  Get Started
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
