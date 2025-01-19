import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
// import { ScrollArea } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content:
        "AFS Services Group Limited ('AFS', 'we', 'us', or 'our') is committed to respecting your privacy and safeguarding your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your data when you interact with our services, in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and other relevant privacy laws.",
    },
    {
      title: "Information We Collect",
      content: [
        "Personal Information: Name, address, phone number, email address, and details related to your move.",
        "Non-Personal Information: Browser type, device ID, IP address, and cookies.",
        "Sensitive Data: Only if explicitly consented to, such as special instructions for handling delicate or valuable items.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and improve our moving and relocation services.",
        "For scheduling, billing, and customer support.",
        "To send updates, confirmations, and important notifications about your move.",
        "To comply with legal obligations and ensure service quality.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "GDPR: Right to access, correct, delete, or restrict processing of your data.",
        "Transparency: Right to know how your data is used and to request its deletion or modification.",
        "Children: We do not knowingly collect data from individuals under 13.",
      ],
    },
    {
      title: "Sharing Your Data",
      content:
        "We do not sell your data. Data may be shared with trusted third parties for: Logistics coordination, Payment processing, and Legal compliance.",
    },
    {
      title: "Security Measures",
      content:
        "AFS employs robust security measures, including encryption, secure servers, and regular system audits, to ensure the safety of your personal information.",
    },
    {
      title: "Contact Information",
      content:
        "For inquiries about this Privacy Policy or data protection practices, contact us at support@afsservices.com",
    },
  ];

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex md:items-center md:flex-row flex-col md:justify-between">
            <CardTitle className="text-3xl font-bold">
              Afs Removals Privacy Policy
            </CardTitle>
            <Badge variant="secondary" className="w-fit mt-2 md:mt-0">
              Effective Date: November 29, 2024
            </Badge>
          </div>
          <CardDescription>
            Protecting your privacy and ensuring the security of your data
          </CardDescription>
        </CardHeader>
        <CardContent>
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
