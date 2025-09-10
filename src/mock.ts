// Mock data for Swift Trucking LLC landing page

import {
    Building2,
    ShoppingCart,
    Factory,
    Hammer,
    Truck,
    Utensils,
    Zap,
    Package,
    Leaf,
    Car,
    Home,
    Wrench
} from 'lucide-react';

export const mockData = {
    company: {
        name: "Swift Trucking LLC",
        phone: "(555) 123-TRUCK",
        email: "dispatch@swifttrucking.com",
        address: "1234 Highway Blvd, Dallas, TX 75201"
    },

    services: [
        {
            id: 1,
            title: "Freight Dispatch",
            description: "24/7 professional dispatch services to maximize your earnings and minimize downtime.",
            icon: "Truck"
        },
        {
            id: 2,
            title: "Dry Van",
            description: "Reliable dry van loads with consistent routes and competitive rates.",
            icon: "Package"
        },
        {
            id: 3,
            title: "Flatbed",
            description: "Specialized flatbed dispatch for construction, steel, and heavy equipment loads.",
            icon: "Layers"
        },
        {
            id: 4,
            title: "Reefer",
            description: "Temperature-controlled freight dispatch for food, pharmaceutical, and chemical loads.",
            icon: "Thermometer"
        },
        {
            id: 5,
            title: "Stepdeck/Conestoga",
            description: "Oversized and specialized cargo dispatch with proper permitting and routing.",
            icon: "Container"
        },
        {
            id: 6,
            title: "Box Truck",
            description: "Local and regional box truck dispatch for expedited and LTL shipments.",
            icon: "Box"
        }
    ],

    faqs: [
        {
            question: 'What equipment types do you dispatch for?',
            answer: 'We dispatch for all major equipment types including dry van, reefer, flatbed, stepdeck, conestoga, box trucks, and specialized trailers. Our team has expertise across all freight categories.',
        },
        {
            question: 'How quickly can I start getting loads?',
            answer: 'Most drivers start receiving loads within 24-48 hours of completing onboarding. We verify your authority, insurance, and equipment details to get you moving as quickly as possible.',
        },
        {
            question: 'Do you charge any upfront fees?',
            answer: 'No, we have zero upfront fees, setup costs, or monthly charges. You only pay our commission percentage when we secure and you complete a load. No load, no fee.',
        },
        {
            question: 'What is your pricing structure?',
            answer: 'Our pricing structure is based on commision and flat rate.'
        },
        {
            question: 'Do I need my own authority?',
            answer: 'Yes, you need your own MC authority and insurance. We work with owner-operators and small fleets who have their own operating authority and want professional dispatch services.',
        },
        {
            question: 'How do you handle detention and lumper fees?',
            answer: 'We actively negotiate and collect detention pay when loads are delayed beyond agreed times. We also handle lumper fee arrangements and ensure these costs are covered by the shipper when possible.',
        },
        {
            question: 'What areas do you cover?',
            answer: 'We dispatch loads across all 48 contiguous states and Canada. Our extensive broker network ensures we can find profitable freight regardless of your location or preferred routes.',
        },
        {
            question: 'How often do I get paid?',
            answer: 'Payment frequency depends on your plan - weekly, bi-weekly, or daily settlements available. We handle all invoicing, follow-up, and ensure you get paid quickly and accurately.',
        },
    ],
    whyChooseUs: [
        {
            id: 1,
            title: "24/7 Dispatch Support",
            description: "Round-the-clock support to keep your trucks moving and maximize revenue.",
            icon: "Clock"
        },
        {
            id: 2,
            title: "Paperwork Handling",
            description: "Complete BOL, rate confirmations, and invoicing management.",
            icon: "FileText"
        },
        {
            id: 3,
            title: "Broker Connections",
            description: "Access to our network of 500+ verified brokers nationwide.",
            icon: "Network"
        },
        {
            id: 4,
            title: "Route Optimization",
            description: "Smart routing to reduce deadhead miles and increase profitability.",
            icon: "Route"
        },
        {
            id: 5,
            title: "Detention & Lumper Support",
            description: "We handle all detention claims and lumper fee negotiations.",
            icon: "Shield"
        },
        {
            id: 6,
            title: "Load Negotiation",
            description: "Expert negotiators who secure the best rates for your equipment.",
            icon: "DollarSign"
        }
    ],
    equipmentTypes: [
        {
            icon: Truck,
            title: 'Dry Van',
            specs: '53\' Standard Trailers',
        },
        {
            icon: Truck,
            title: 'Reefer',
            specs: 'Temperature Controlled',
        },
        {
            icon: Truck,
            title: 'Flatbed',
            specs: 'Open Deck, 48\'-53\'',
        },
        {
            icon: Truck,
            title: 'Stepdeck',
            specs: 'Lowboy, Conestoga',
        },
        {
            icon: Package,
            title: 'Box Truck',
            specs: '16\'-26\' Straight Trucks',
        },
        {
            icon: Wrench,
            title: 'Specialized',
            specs: 'Heavy Haul, Oversized',
        },
    ],

    process: [
        {
            id: 1,
            title: "Onboarding",
            description: "Quick setup with MC/DOT verification and equipment registration.",
            icon: "UserPlus"
        },
        {
            id: 2,
            title: "Finding Loads",
            description: "Our dispatchers search and secure the best loads for your route.",
            icon: "Search"
        },
        {
            id: 3,
            title: "Negotiation",
            description: "We negotiate rates and handle all communication with brokers.",
            icon: "MessageSquare"
        },
        {
            id: 4,
            title: "Compliance",
            description: "Complete documentation and regulatory compliance management.",
            icon: "CheckCircle"
        },
        {
            id: 5,
            title: "Invoicing",
            description: "Fast invoicing and payment follow-up to ensure quick settlements.",
            icon: "Receipt"
        }
    ],

    testimonials: [
        {
            id: 1,
            name: "Mike Rodriguez",
            company: "Rodriguez Transport",
            text: "Swift Trucking increased my revenue by 30% in just 3 months. Their dispatch team works around the clock to keep me moving.",
            rating: 5
        },
        {
            id: 2,
            name: "Sarah Johnson",
            company: "Johnson Logistics",
            text: "Best dispatch service I've worked with. They handle everything from paperwork to detention claims. Highly recommended!",
            rating: 5
        },
        {
            id: 3,
            name: "Carlos Martinez",
            company: "Lone Star Freight",
            text: "Professional team that really cares about driver success. No more empty miles thanks to their route planning.",
            rating: 5
        },
        {
            id: 4,
            name: "Jennifer Davis",
            company: "Highway Express",
            text: "Their broker network is incredible. I'm getting better rates and more consistent loads than ever before.",
            rating: 5
        }
    ],

    pricing: [
        {
            id: 1,
            title: "Standard",
            price: "5%",
            description: "Perfect for new owner-operators",
            features: [
                "24/7 Dispatch Support",
                "Load Finding & Booking",
                "Rate Negotiation",
                "Basic Paperwork Handling",
                "Weekly Settlements"
            ],
            popular: false
        },
        {
            id: 2,
            title: "Professional",
            price: "7%",
            description: "Most popular for experienced drivers",
            features: [
                "Everything in Standard",
                "Route Optimization",
                "Broker Network Access",
                "Detention Claim Management",
                "Fuel Card Discounts",
                "Compliance Support"
            ],
            popular: true
        },
        {
            id: 3,
            title: "Premium",
            price: "9%",
            description: "Full-service for fleet owners",
            features: [
                "Everything in Professional",
                "Dedicated Account Manager",
                "Fleet Management Tools",
                "Priority Load Access",
                "Insurance Assistance",
                "Tax Filing Support"
            ],
            popular: false
        }
    ],
    jobs: [
        {
            id: 1,
            title: "Transportation Coordinator",
            department: "Operations",
            location: "KALISPELL, MT",
            type: "Full-time",
            postedDate: "2024-07-20",
            description: "Oversee and optimize route planning, act as a key liaison between brokers, carriers, and internal teams, and maintain consistent, compliant operations while addressing logistics issues proactively."
        },
        {
            id: 2,
            title: "Market Analyst ",
            department: "Logistics",
            location: "KALISPELL, MT",
            type: "Full-time",
            postedDate: "2024-07-18",
            description: "Track route performance and load markets, negotiate broker agreements, support dispatch efficiency, and provide actionable insights to enhance operational profitability."
        },
        {
            id: 3,
            title: "Supply and chain analyst",
            department: "Maintenance",
            location: "KALISPELL, MT",
            type: "Part-time",
            postedDate: "2024-07-15",
            description: "Analyze supply chain data to identify operational inefficiencies and cost-saving opportunities, monitor inventory and vendor performance, and recommend process improvements."
        }, {
            id: 4,
            title: "Sales Executive",
            department: "Sales",
            location: "KALISPELL, MT",
            type: "Full-time",
            postedDate: "2024-07-15",
            description: "Drive revenue by sourcing new clients, building lasting customer relationships, negotiating freight contracts, and representing the company’s logistics offerings confidently."
        }
    ]
};