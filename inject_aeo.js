const fs = require('fs');
const path = require('path');

const serviceFiles = [
    'src/pages/services/SEOGrowthPage.js',
    'src/pages/services/TrainingPage.js',
    'src/pages/services/WebDevelopmentPage.js'
];

const productFiles = [
    'src/pages/products/JwelnexPage.js',
    'src/pages/products/PayNexPage.js',
    'src/pages/products/SchoolDostPage.js',
    'src/pages/products/SocialNexPage.js'
];

const allFiles = [...serviceFiles, ...productFiles];

// QuickAnswers content for each page
const qaContent = {
    'SEOGrowthPage.js': {
        title: 'What is SEO Growth & Optimization?',
        answer: 'SEO Growth and Optimization is the strategic process of improving a website\'s visibility on search engines like Google. We use advanced technical SEO, high-quality content creation, and authoritative link building to drive sustainable, organic traffic that converts into revenue.'
    },
    'TrainingPage.js': {
        title: 'What is Corporate IT Training?',
        answer: 'Corporate IT Training involves upskilling your engineering and business teams with the latest technologies. We provide expert-led workshops on AI, Cloud, React, and modern DevOps practices to ensure your workforce remains competitive and capable of delivering cutting-edge solutions.'
    },
    'WebDevelopmentPage.js': {
        title: 'What is Enterprise Web Development?',
        answer: 'Enterprise Web Development is the process of building scalable, highly-secure, and performant web applications tailored for complex business needs. We utilize modern stacks like React, Node.js, and Cloud Infrastructure to deliver robust digital products that drive operational efficiency.'
    },
    'JwelnexPage.js': {
        title: 'What is Jwelnex?',
        answer: 'Jwelnex is an all-in-one ERP software designed specifically for the jewelry industry. It streamlines inventory management, barcoding, GST billing, and customer relationship management, allowing jewelry retailers to automate operations and focus on business growth.'
    },
    'PayNexPage.js': {
        title: 'What is PayNex?',
        answer: 'PayNex is a modern payroll and HR management system that automates employee onboarding, attendance tracking, compliance, and salary disbursements. It eliminates manual errors and saves hundreds of HR hours every month.'
    },
    'SchoolDostPage.js': {
        title: 'What is SchoolDost?',
        answer: 'SchoolDost is a comprehensive school management ERP platform. It digitally connects administrators, teachers, parents, and students, automating everything from fee collection and attendance tracking to report card generation and bus routing.'
    },
    'SocialNexPage.js': {
        title: 'What is SocialNex?',
        answer: 'SocialNex is an advanced social media management and analytics platform. It empowers brands to schedule posts, monitor audience sentiment, and analyze campaign performance across all major networks from a single, centralized dashboard.'
    }
};

const newFaq = `},
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];`;

for (const file of allFiles) {
    const fullPath = path.join(__dirname, file);
    if (!fs.existsSync(fullPath)) {
        console.log(`Skipping ${file}, not found.`);
        continue;
    }

    let content = fs.readFileSync(fullPath, 'utf8');

    // 1. Add Imports
    if (!content.includes('Breadcrumbs')) {
        content = content.replace(
            /import '\.\/(ServicesPage|ProductPage)\.css';/,
            `import Breadcrumbs from '../../components/common/Breadcrumbs';\nimport QuickAnswers from '../../components/common/QuickAnswers';\nimport './$1.css';`
        );
    }

    // 2. Add 5th FAQ
    // Find the end of faqData array
    if (!content.includes('Is there ongoing support provided?')) {
        content = content.replace(/}\n\s+\];/g, newFaq);
    }

    // 3. Inject Breadcrumbs and QuickAnswers below <SEO ... />
    const filename = path.basename(file);
    const qa = qaContent[filename];

    const injection = `
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Breadcrumbs />
                <QuickAnswers 
                    title="${qa.title}"
                    answer="${qa.answer}"
                />
            </div>
`;

    if (!content.includes('<QuickAnswers')) {
        // Find the closing tag of SEO component
        const seoEndMatch = content.match(/<SEO[\s\S]*?\/>/);
        if (seoEndMatch) {
            content = content.replace(seoEndMatch[0], seoEndMatch[0] + '\n' + injection);
        } else {
            console.log(`Could not find SEO component in ${file}`);
        }
    }

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Processed ${file}`);
}
