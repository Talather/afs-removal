import { AlertTriangle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

export default function TermsOfService() {
  const sections = [
    {
      title: "Agreement Overview",
      content:
        "By using AFS Services, you agree to these Terms of Service. If you disagree with any part, please discontinue use of our services immediately.",
    },
    {
      title: "Eligibility",
      content:
        "You must be at least 18 years old or meet the age of majority in your jurisdiction to book services with AFS.",
    },
    {
      title: "Services Provided",
      content:
        "AFS offers professional moving services, including packing, transportation, unpacking, and related relocation assistance tailored to your needs.",
    },
    {
      title: "User Obligations",
      content: [
        "Provide accurate and up-to-date information about your move.",
        "Ensure access to the premises and availability for scheduled services.",
        "Comply with all applicable laws and regulations during the moving process.",
      ],
    },
    {
      title: "Prohibited Activities",
      content: [
        "Providing false or misleading information.",
        "Attempting to disrupt our operations or interfere with our services.",
        "Transporting illegal or prohibited items through our services.",
      ],
    },
    {
      title: "Termination",
      content:
        "AFS reserves the right to cancel services or terminate agreements for violations of these terms or misuse of our services.",
    },
    {
      title: "Limitation of Liability",
      content:
        "AFS is not liable for indirect damages, including delays, unforeseen circumstances, or loss of items not disclosed or improperly packed by the customer.",
    },
    {
      title: "Contact Information",
      content:
        "For questions about these Terms of Service, contact us at support@afsservices.com",
    },
  ];

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <CardTitle className="text-3xl font-bold">
              Afs Removals Terms of Service
            </CardTitle>
            <Badge variant="secondary" className="w-fit mt-2 md:mt-0">
              Effective Date: November 29, 2024
            </Badge>
          </div>
          <CardDescription>
            Please read these terms carefully before using our services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important</AlertTitle>
            <AlertDescription>
              By using Vuior services, you agree to these Terms of Service. If
              you do not agree, please do not use our services.
            </AlertDescription>
          </Alert>
          {/* <ScrollArea className="h-[600px] rounded-md border p-4"> */}
          {sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              {Array.isArray(section.content) ? (
                <ul className="list-disc pl-5 space-y-1">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
              {index < sections.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
          {/* </ScrollArea> */}
        </CardContent>
      </Card>
    </div>
  );
}
