import { CONFIG } from "@/config/config";
import { Mail, MapPin, Phone } from "lucide-react";
import MapNavigation from "@/components/common/MapNavigation";

const Contact = () => {
  const {
    contactEmail,
    phoneNumber,
    contactAddress,
  } = CONFIG
  
  const contacts = [
    { 
      icon: <Mail className="w-4 h-4" />, 
      text: contactEmail, 
      href: `mailto:${contactEmail}`,
      label: "שלחו לנו אימייל"
    },
    { 
      icon: <Phone className="w-4 h-4" />, 
      text: phoneNumber, 
      href: `tel:${phoneNumber}`,
      label: "צלצלו אלינו"
    },
    { 
      icon: <MapPin className="w-4 h-4" />, 
      text: contactAddress, 
      isAddress: true,
      label: "כתובת המשרד"
    },
  ]

  return (
    <ul className="space-y-4">
      {contacts.map((contact) => (
        <li key={contact.text} className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5 text-primary">
            {contact.icon}
          </div>
          <div className="flex-1 min-w-0">
            {contact.href ? (
              <a 
                href={contact.href} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors break-all hover:underline"
                aria-label={contact.label}
              >
                {contact.text}
              </a>
            ) : (
              <div>
                <span className="text-sm text-muted-foreground break-words block">
                  {contact.text}
                </span>
                {contact.isAddress && (
                  <MapNavigation />
                )}
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Contact
