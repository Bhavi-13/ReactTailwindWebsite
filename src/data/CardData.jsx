// cardData.js
import { faUsers, faFileAlt, faLaptopCode, faCalendarAlt, faListUl, faBarsStaggered, faLaptop, faMobileScreen, faCloud, faWallet, faUserTie, faLock, faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import explore1 from '../images/explore1.jpg'
import explore2 from '../images/explore2.jpg'
import explore3 from '../images/explore3.png'
import explore4 from '../images/explore4.webp'

export const sectionOneCards = [
      {
        heading: "Availability Preferences",
        text: "Customize exactly how and when you're booked.",
        link: "#",
        icon: faCalendarAlt
      },
      {
        heading: "Teams Scheduling",
        text: "The automated scheduling you know and love - for multi-person meetings.",
        link: "#",
        icon: faUsers
      },
      {
        heading: "Routing Forms",
        text: "Request information to efficiently screen and qualify people before they can schedule with you.",
        link: "#",
        icon: faFileAlt
      }
  ];
  
  export const sectionTwoCards = [
    {
      heading: "Workflows",
      text: "Automate communications before and after meetings.",
      link: "#",
      icon: faBarsStaggered
    },
    {
      heading: "Website scheduling",
      text: "Add Calendly to your website to streamline scheduling.",
      link: "#",
      icon: faLaptopCode
    },
    {
      heading: "Calendar Connections",
      text: "Connect up to six calendars per user to check real-time availability.",
      link: "#",
      icon: faCalendarAlt
    },
    {
      heading: "Meeting Polls",
      text: "Poll your attendees for their availability and arrive at the best time for most.",
      link: "#",
      icon: faListUl
    }
  ];
  
  export const sectionThreeCards = [
    {
      heading: "Calendly for Browsers",
      text: "Use Calendly while you're on the web, without switching tabs.",
      link: "#",
      icon: faLaptop
    },
    {
      heading: "Calendly for Mobile",
      text: "Book meetings, get notifications, & more on the go.",
      link: "#",
      icon: faMobileScreen
    },
    {
      heading: "Calendly for CRM's",
      text: "Make booking meetings simple for teams who use CRMs.",
      link: "#",
      icon: faCloud

    },
    {
      heading: "Payments",
      text: "Streamline payments for Calendly events, with Paypal or Stripe.",
      link: "#",
      icon: faWallet
    }
  ];

  export const sectionFourCards = [
    {
      heading: "Admin Management",
      text: "Easily manage your organization's users and scheduling processes from ont centralized place.",
      link: "#",
      icon: faUserTie
    },
    {
      heading: "Security & Compliance",
      text: "Trust Calendly to safeguard company data ans meet your compliance requirements",
      link: "#",
      icon: faLock
    },
    {
      heading: "Learn more about Calendly for Enterprise",
      text: "Connect up to six calendars per user o check real-time availability",
      link: "#",
      icon: faBookOpenReader

    }
  ];

  export const ExploreCards = [
    {
      heading: "Sales",
      text: "Get to your best leads faster.",
      link: "#",
      image: explore1
    },
    {
      heading: "Recruiting",
      text: "Less emailing, more interviews",
      link: "#",
      image: explore2
    },
    {
      heading: "Customer Success",
      text: "Connect with customers when it matters",
      link: "#",
      image: explore3

    },
    {
        heading: "Education",
        text: "Boost student success",
        link: "#",
        image: explore4
  
    }
  ];
  