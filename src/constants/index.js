import {
    quantum,
    acmeCorp,
    echoValley,
    pulse,
    outside,
    apex,
    celestial,
    twice,
    testimonials1,
    testimonials2,
    testimonials3,
    testimonials4,
    testimonials5,
    testimonials6,
    instagram,
    threads,
    x,
    figma,
    notion,
    slack,
    relume,
    framer,
    github,
    temp1,
    temp2,
    temp3,
} from '../utils';



// navigations.
export const navs = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Pricing', href: '#Pricing' },
    { label: 'FAQs', href: '#faqs' },
];

// brands
export const brands = [
    { name: 'Quantum', image: quantum },
    { name: 'Acme Corp', image: acmeCorp },
    { name: 'Echo Valley', image: echoValley },
    { name: 'Pulse', image: pulse },
    { name: 'Outside', image: outside },
    { name: 'Apex', image: apex },
    { name: 'Celestial', image: celestial },
    { name: 'Twice', image: twice },
];


// features
export const features = [
    "Design",
    "Collaboration",
    "Prototyping",
    "Components",
    "Plugins",
    "Versioning"
];

export const templates = [
    { image: temp1 },
    { image: temp2 },
    { image: temp3 }

]

// integrations
export const integrations = [
    { name: 'figma', icon: figma, description: 'Figma integration' },
    { name: 'notion', icon: notion, description: 'Notion integration' },
    { name: 'slack', icon: slack, description: 'Slack integration' },
    { name: 'relume', icon: relume, description: 'Relume integration' },
    { name: 'framer', icon: framer, description: 'Framer integration' },
    { name: 'github', icon: github, description: 'GitHub integration' },
];

// pricing
export const pricings = [
    {
        title: 'Basic',
        description: 'Streamline your design process with essential tools.',
        price: '₦ 4900/month',
        terms: 'Get Started',
        buttonVariant: 'primary',
        features: [
            'Robust integrations to connect your favorite tools',
            'Customizable templates to eliminate bottlenecks',
            'Essential support for project completion',
        ],
        color: 'primary',
        className: 'lg:py-12 lg:my-6',
    },
    {
        title: 'Premium',
        description: 'Elevate productivity with advanced features.',
        price: '₦ 10000/month',
        terms: 'Upgrade Now',
        buttonVariant: 'primary',
        features: [
            'All Basic plan features included',
            'Priority support for faster issue resolution',
            'Advanced customization for templates and tools',
        ],
        color: 'secondry',
        className: 'lg:py-18 lg:my-0',
    },
    {
        title: 'Enterprise',
        description: 'Maximize efficiency with tailored solutions.',
        price: 'Contact Us',
        terms: 'Contact Sales',
        buttonVariant: 'secondary',
        features: [
            'All Premium plan features included',
            'Dedicated account manager for personalized assistance',
            'Custom integrations and enterprise-grade solutions',
        ],
        color: 'alternate',
        className: 'lg:py-12 lg:my-6',
    },
];

// faqs
export const faqs = [
    {
        question: 'What does the latest version help you achieve?',
        answer: 'It streamlines the design process and elevates productivity.',
    },
    {
        question: 'How does it help eliminate bottlenecks?',
        answer: 'Through robust integrations and customizable templates.',
    },
    {
        question: 'What impact does it have on project completion?',
        answer: 'It enables faster project completion without compromising quality.',
    },
    {
        question: 'What features make it robust?',
        answer: 'Its integrations and customizable templates.',
    },
    {
        question: 'Does it compromise on quality while speeding up projects?',
        answer: 'No, it ensures faster completion without compromising quality.',
    },
];

// footers
export const footers = [
    { label: 'Contacts', href: '#' },
    { label: 'Privacy & policy', href: '#' },
    { label: 'Terms & conditions', href: '#' },
];

// testimonial.

export const testimonials = [
    {
        name: 'Anna Doe',
        social: 'anna_doe',
        icon: instagram,
        image: testimonials1,
        role: 'Designer',
        desc: 'Streamline your design process and elevate productivity. Its robust integrations and customizable templates eliminate bottlenecks.',
    },
    {
        name: 'Jane Smith',
        social: 'jane_smith',
        icon: threads,
        image: testimonials2,
        role: 'Content Creator',
        desc: 'The customizable templates and seamless integrations have been game-changing for our workflow. It has truly boosted our efficiency.',
    },
    {
        name: 'Elena Brown',
        social: 'elena_brown',
        icon: x,
        image: testimonials3,
        role: 'Product Manager',
        desc: 'This tool helped us complete projects faster while maintaining a high standard of quality. A must-have for any team!',
    },
    {
        name: 'Emily Davis',
        social: 'emily_davis',
        icon: instagram,
        image: testimonials4,
        role: 'Marketing Specialist',
        desc: 'I love how intuitive and powerful the platform is. It has saved us so much time and effort.',
    },
    {
        name: 'Serena Wilson',
        social: 'serena_wilson',
        icon: threads,
        image: testimonials5,
        role: 'UX Researcher',
        desc: 'The integrations are so smooth, and the templates allow for quick customization without compromising on creativity.',
    },
   
];
