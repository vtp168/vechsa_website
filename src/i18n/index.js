// src/i18n.js

import { createI18n } from 'vue-i18n'

const messages = {
  en: {

    // =========================
    // NAVBAR
    // =========================
    nav: {
      home: 'Home',
      features: 'Features',
      dashboard: 'Dashboard',
      pricing: 'Pricing',
      testimonials: 'Testimonials',
      contact: 'Contact',
      requestDemo: 'Request Demo',
      laboratory: 'Laboratory System',
    },

    // =========================
    // HERO SECTION
    // =========================
    hero: {
      title: 'Modern Laboratory Management System',
      subtitle:
        'Premium healthcare platform for laboratories, clinics, and hospitals.',
      button: 'Request Demo',

      slides: {
        slide1: {
          title: 'Modern Laboratory Management',
          subtitle:
            'Fast, secure and intelligent healthcare system.',
          analytics: 'Dashboard Analytics',
        },

        slide2: {
          title: 'Smart Patient Tracking',
          subtitle:
            'Monitor patients and test results in real time.',
          analytics: 'Patient Monitoring',
        },

        slide3: {
          title: 'Advanced Medical Reports',
          subtitle:
            'Generate powerful laboratory reports instantly.',
          analytics: 'Medical Reporting',
        },
      },

      patients: 'Patients',
      tests: 'Tests',
    },

    // =========================
    // FEATURES
    // =========================
    features: {
      badge: 'System Features',
      title: 'Powerful Laboratory Management Features',
      subtitle:
        'Modern healthcare technology designed for laboratories, hospitals, clinics, and diagnostic centers.',

      items: {
        laboratory: {
          title: 'Laboratory Tests',
          description:
            'Manage laboratory workflows, test processing, and sample tracking efficiently.',
        },

        analytics: {
          title: 'Advanced Analytics',
          description:
            'Real-time dashboards with intelligent healthcare and laboratory reports.',
        },

        billing: {
          title: 'Billing System',
          description:
            'Integrated billing, invoicing, payment management, and insurance support.',
        },

        patient: {
          title: 'Patient Management',
          description:
            'Centralized patient records, medical history, and appointment tracking.',
        },

        sample: {
          title: 'Sample Tracking',
          description:
            'Track laboratory samples with barcode and QR code integration.',
        },

        appointment: {
          title: 'Appointment Scheduling',
          description:
            'Online appointment booking and automated patient scheduling system.',
        },

        notification: {
          title: 'Notifications',
          description:
            'Automatic SMS, email, and real-time system notifications for patients.',
        },

        cloud: {
          title: 'Cloud Backup',
          description:
            'Secure cloud storage with automatic backup and disaster recovery.',
        },

        security: {
          title: 'Security & Access',
          description:
            'Role-based access control with advanced healthcare data security.',
        },

        mobile: {
          title: 'Mobile Friendly',
          description:
            'Responsive design optimized for mobile phones, tablets, and desktops.',
        },

        report: {
          title: 'Report Printing',
          description:
            'Professional laboratory report generation with PDF and print support.',
        },

        performance: {
          title: 'Fast Performance',
          description:
            'High-speed system optimized for enterprise healthcare environments.',
        },
      },
    },
// =========================
// PRICING
// =========================
pricing: {

  // Header
  badge: 'Pricing & Plans',

  title: 'Scalable Healthcare Solutions',

  subtitle:
    'Flexible and enterprise-ready pricing designed for clinics, laboratories, hospitals, and healthcare organizations of every size.',

  monthly: 'Monthly',

  yearly: 'Yearly',

  save: 'Save 20%',

  compare: 'Compare Plans',

  trusted: 'Trusted by Modern Healthcare Organizations',

  guarantee: '30-Day Money Back Guarantee',

  noHidden: 'No Hidden Fees',

  setup: 'Free Setup & Training',

  support247: '24/7 Technical Support',

  // =========================
  // STARTER
  // =========================
  starter: {

    title: 'Starter',

    description:
      'Ideal for small clinics, diagnostic centers, and startup laboratories.',

    price: '$99',

    period: '/month',

    button: 'Start Now',
  },

  // =========================
  // PROFESSIONAL
  // =========================
  professional: {

    title: 'Professional',

    description:
      'Advanced healthcare platform for growing hospitals and multi-branch laboratories.',

    badge: 'MOST POPULAR',

    price: '$299',

    period: '/month',

    button: 'Get Started',
  },

  // =========================
  // ENTERPRISE
  // =========================
  enterprise: {

    title: 'Enterprise',

    description:
      'Enterprise-grade infrastructure with unlimited scalability, integrations, and premium support.',

    price: 'Custom',

    button: 'Contact Sales',
  },

  // =========================
  // CUSTOM SOLUTION
  // =========================
  custom: {

    title: 'Government & Custom Solution',

    description:
      'Tailored healthcare ecosystem for ministries, public hospitals, NGOs, and enterprise healthcare networks.',

    button: 'Request Consultation',
  },

  // =========================
  // FEATURES
  // =========================
  features: {

    // Core Features
    patient: 'Patient Management',

    reports: 'Laboratory Reports',

    dashboard: 'Analytics Dashboard',

    billing: 'Billing & Invoicing',

    appointment: 'Appointment Scheduling',

    sample: 'Sample Tracking',

    notification: 'SMS & Email Notifications',

    backup: 'Automatic Cloud Backup',

    mobile: 'Mobile Access',

    barcode: 'Barcode & QR Integration',

    security: 'Advanced Data Security',

    export: 'PDF & Excel Export',

    // Professional
    multiBranch: 'Multi-Branch Management',

    realtime: 'Real-Time Monitoring',

    aiAnalytics: 'AI Analytics Dashboard',

    audit: 'Audit Logs & Activity Tracking',

    role: 'Role & Permission Management',

    api: 'API Integration',

    support: 'Priority Technical Support',

    // Enterprise
    unlimited: 'Unlimited Laboratories',

    microsoft: 'Microsoft Office Integration',

    erp: 'ERP & HIS Integration',

    hosting: 'Dedicated Cloud Infrastructure',

    ssl: 'Enterprise SSL Security',

    migration: 'Free Data Migration',

    training: 'On-site Staff Training',

    premium: '24/7 Premium Support',

    customization: 'Custom Feature Development',
  },

  // =========================
  // FAQ
  // =========================
  faq: {

    title: 'Frequently Asked Questions',

    q1: 'Can I upgrade my subscription later?',

    a1:
      'Yes. You can upgrade or downgrade your subscription at any time without losing your data.',

    q2: 'Do you provide system installation and training?',

    a2:
      'Yes. We provide complete setup assistance, onboarding, and staff training.',

    q3: 'Is technical support included?',

    a3:
      'Absolutely. All plans include technical support and regular system maintenance.',

    q4: 'Can the system be customized for our organization?',

    a4:
      'Yes. Enterprise and custom plans support advanced customization and third-party integrations.',

    q5: 'Is my healthcare data secure?',

    a5:
      'Yes. We use enterprise-grade encryption, secure cloud infrastructure, and role-based access control.',
  },
},

    // =========================
    // CONTACT
    // =========================
    contact: {
      badge: 'Contact Our Team',

      title:
        'Transform Your Laboratory With Modern Technology',

      subtitle:
        'Request a personalized demo and discover how our Laboratory Management Information System can improve efficiency, reporting, patient management, and healthcare operations.',

      formTitle: 'Request a Demo',

      formSubtitle:
        'Fill out the form and our team will contact you shortly.',

      phone: 'Phone',
      email: 'Email',
      location: 'Location',

      fullName: 'Full Name',
      emailAddress: 'Email Address',
      organization: 'Organization / Hospital',
      message: 'Message',

      placeholders: {
        name: 'Enter your full name',
        email: 'Enter your email',
        organization: 'Organization name',
        message:
          'Tell us about your laboratory requirements...',
      },

      send: 'Send Request',
    },

    // =========================
    // FOOTER
    // =========================
    footer: {
      description:
        'Modern laboratory management platform for healthcare organizations.',
      quickLinks: 'Quick Links',
      support: 'Support',
      rights: 'All rights reserved.',
    },
  },

  // =====================================================
  // KHMER TRANSLATION
  // =====================================================
  km: {

    // =========================
    // NAVBAR
    // =========================
    nav: {
      home: 'ទំព័រដើម',
      features: 'មុខងារ',
      dashboard: 'ផ្ទាំងគ្រប់គ្រង',
      pricing: 'តម្លៃ',
      testimonials: 'មតិយោបល់',
      contact: 'ទំនាក់ទំនង',
      requestDemo: 'ស្នើសុំសាកល្បង',
      laboratory: 'ប្រព័ន្ធមន្ទីរពិសោធន៍',
    },

    // =========================
    // HERO SECTION
    // =========================
    hero: {
      title: 'ប្រព័ន្ធគ្រប់គ្រងមន្ទីរពិសោធន៍ទំនើប',
      subtitle:
        'ប្រព័ន្ធសុខាភិបាលទំនើបសម្រាប់មន្ទីរពិសោធន៍ និងមន្ទីរពេទ្យ',
      button: 'ស្នើសុំសាកល្បង',

      slides: {
        slide1: {
          title: 'ការគ្រប់គ្រងមន្ទីរពិសោធន៍ទំនើប',
          subtitle:
            'ប្រព័ន្ធសុខាភិបាលឆ្លាតវៃ មានសុវត្ថិភាព និងល្បឿនលឿន',
          analytics: 'វិភាគទិន្នន័យ',
        },

        slide2: {
          title: 'ការតាមដានអ្នកជំងឺឆ្លាតវៃ',
          subtitle:
            'តាមដានអ្នកជំងឺ និងលទ្ធផលតេស្តពេលវេលាពិត',
          analytics: 'តាមដានអ្នកជំងឺ',
        },

        slide3: {
          title: 'របាយការណ៍វេជ្ជសាស្ត្រកម្រិតខ្ពស់',
          subtitle:
            'បង្កើតរបាយការណ៍មន្ទីរពិសោធន៍បានយ៉ាងឆាប់រហ័ស',
          analytics: 'របាយការណ៍វេជ្ជសាស្ត្រ',
        },
      },

      patients: 'អ្នកជំងឺ',
      tests: 'តេស្ត',
    },

    // =========================
    // FEATURES
    // =========================
    features: {
      badge: 'មុខងារប្រព័ន្ធ',
      title: 'មុខងារគ្រប់គ្រងមន្ទីរពិសោធន៍ដ៏មានប្រសិទ្ធភាព',
      subtitle:
        'បច្ចេកវិទ្យាសុខាភិបាលទំនើបសម្រាប់មន្ទីរពិសោធន៍ និងមន្ទីរពេទ្យ',

      items: {
        laboratory: {
          title: 'ការធ្វើតេស្តមន្ទីរពិសោធន៍',
          description:
            'គ្រប់គ្រងដំណើរការតេស្ត និងតាមដានសំណាកយ៉ាងមានប្រសិទ្ធភាព',
        },

        analytics: {
          title: 'វិភាគទិន្នន័យ',
          description:
            'ផ្ទាំងគ្រប់គ្រង និងរបាយការណ៍សុខាភិបាលពេលវេលាពិត',
        },

        billing: {
          title: 'ប្រព័ន្ធបង់ប្រាក់',
          description:
            'គ្រប់គ្រងវិក្កយបត្រ ការទូទាត់ និងធានារ៉ាប់រង',
        },

        patient: {
          title: 'គ្រប់គ្រងអ្នកជំងឺ',
          description:
            'រក្សាទុកព័ត៌មានអ្នកជំងឺ និងប្រវត្តិវេជ្ជសាស្ត្រ',
        },

        sample: {
          title: 'តាមដានសំណាក',
          description:
            'តាមដានសំណាកដោយ Barcode និង QR Code',
        },

        appointment: {
          title: 'ការកក់ពេល',
          description:
            'ប្រព័ន្ធកក់ពេល និងគ្រប់គ្រងកាលវិភាគស្វ័យប្រវត្តិ',
        },

        notification: {
          title: 'ការជូនដំណឹង',
          description:
            'ផ្ញើ SMS អ៊ីមែល និងការជូនដំណឹងពេលវេលាពិត',
        },

        cloud: {
          title: 'Cloud Backup',
          description:
            'បម្រុងទុកទិន្នន័យសុវត្ថិភាព និងស្វ័យប្រវត្តិ',
        },

        security: {
          title: 'សុវត្ថិភាពប្រព័ន្ធ',
          description:
            'ការគ្រប់គ្រងសិទ្ធិ និងសុវត្ថិភាពទិន្នន័យវេជ្ជសាស្ត្រ',
        },

        mobile: {
          title: 'គាំទ្រទូរស័ព្ទ',
          description:
            'ប្រើបានល្អលើទូរស័ព្ទ Tablet និងកុំព្យូទ័រ',
        },

        report: {
          title: 'បោះពុម្ពរបាយការណ៍',
          description:
            'បង្កើត និងបោះពុម្ពរបាយការណ៍ PDF បានយ៉ាងងាយស្រួល',
        },

        performance: {
          title: 'ល្បឿនលឿន',
          description:
            'ប្រព័ន្ធមានប្រសិទ្ធភាពខ្ពស់សម្រាប់មន្ទីរពេទ្យធំៗ',
        },
      },
    },

    // =========================
    // CONTACT
    // =========================
    contact: {
      badge: 'ទាក់ទងក្រុមការងារ',

      title:
        'ផ្លាស់ប្តូរមន្ទីរពិសោធន៍របស់អ្នកជាមួយបច្ចេកវិទ្យាទំនើប',

      subtitle:
        'ស្នើសុំការបង្ហាញប្រព័ន្ធ និងស្វែងយល់ពីការកែលម្អប្រសិទ្ធភាពការងារ',

      formTitle: 'ស្នើសុំសាកល្បង',

      formSubtitle:
        'បំពេញព័ត៌មាន ហើយក្រុមការងារនឹងទាក់ទងអ្នកវិញ',

      phone: 'ទូរស័ព្ទ',
      email: 'អ៊ីមែល',
      location: 'ទីតាំង',

      fullName: 'ឈ្មោះពេញ',
      emailAddress: 'អាសយដ្ឋានអ៊ីមែល',
      organization: 'អង្គការ / មន្ទីរពេទ្យ',
      message: 'សារ',

      placeholders: {
        name: 'បញ្ចូលឈ្មោះរបស់អ្នក',
        email: 'បញ្ចូលអ៊ីមែល',
        organization: 'ឈ្មោះអង្គការ',
        message:
          'សូមប្រាប់ពីតម្រូវការរបស់មន្ទីរពិសោធន៍...',
      },

      send: 'ផ្ញើសំណើ',
    },

    pricing: {

  badge: 'គម្រោង និងតម្លៃ',

  title: 'ដំណោះស្រាយសុខាភិបាលដែលអាចពង្រីកបាន',

  subtitle:
    'គម្រោងតម្លៃដែលបត់បែនបាន សម្រាប់គ្លីនិក មន្ទីរពិសោធន៍ និងមន្ទីរពេទ្យគ្រប់ទំហំ',

  monthly: 'ប្រចាំខែ',

  yearly: 'ប្រចាំឆ្នាំ',

  save: 'សន្សំបាន 20%',

  compare: 'ប្រៀបធៀបគម្រោង',

  trusted: 'ទុកចិត្តដោយស្ថាប័នសុខាភិបាលទំនើប',

  guarantee: 'ធានាសងប្រាក់វិញក្នុង 30 ថ្ងៃ',

  noHidden: 'គ្មានថ្លៃលាក់បាំង',

  setup: 'ដំឡើង និងបណ្តុះបណ្តាលឥតគិតថ្លៃ',

  support247: 'ជំនួយបច្ចេកទេស 24/7',

  starter: {

    title: 'គម្រោងចាប់ផ្តើម',

    description:
      'សមស្របសម្រាប់គ្លីនិក និងមន្ទីរពិសោធន៍តូចៗ',

    price: '$99',

    period: '/ខែ',

    button: 'ចាប់ផ្តើម',
  },

  professional: {

    title: 'គម្រោងវិជ្ជាជីវៈ',

    description:
      'ប្រព័ន្ធកម្រិតខ្ពស់សម្រាប់មន្ទីរពេទ្យ និងមន្ទីរពិសោធន៍ច្រើនសាខា',

    badge: 'ពេញនិយមបំផុត',

    price: '$299',

    period: '/ខែ',

    button: 'ចាប់ផ្តើម',
  },

  enterprise: {

    title: 'គម្រោងសហគ្រាស',

    description:
      'ហេដ្ឋារចនាសម្ព័ន្ធកម្រិតសហគ្រាស ជាមួយការពង្រីក និងការភ្ជាប់ប្រព័ន្ធ',

    price: 'តម្លៃពិសេស',

    button: 'ទាក់ទងផ្នែកលក់',
  },

  custom: {

    title: 'ដំណោះស្រាយរដ្ឋាភិបាល និងផ្ទាល់ខ្លួន',

    description:
      'ប្រព័ន្ធសុខាភិបាលសម្រាប់ក្រសួង មន្ទីរពេទ្យរដ្ឋ និងអង្គការធំៗ',

    button: 'ស្នើសុំប្រឹក្សា',
  },

  features: {

    patient: 'គ្រប់គ្រងអ្នកជំងឺ',

    reports: 'របាយការណ៍មន្ទីរពិសោធន៍',

    dashboard: 'ផ្ទាំងវិភាគទិន្នន័យ',

    billing: 'ប្រព័ន្ធវិក្កយបត្រ',

    appointment: 'ការកក់ពេល',

    sample: 'តាមដានសំណាក',

    notification: 'SMS និង Email Notifications',

    backup: 'Cloud Backup ស្វ័យប្រវត្តិ',

    mobile: 'ប្រើប្រាស់តាមទូរស័ព្ទ',

    barcode: 'Barcode និង QR Code',

    security: 'សុវត្ថិភាពទិន្នន័យ',

    export: 'Export PDF និង Excel',

    multiBranch: 'គ្រប់គ្រងសាខាច្រើន',

    realtime: 'តាមដានពេលវេលាពិត',

    aiAnalytics: 'ផ្ទាំងវិភាគ AI',

    audit: 'Audit Logs និង Activity Tracking',

    role: 'គ្រប់គ្រងសិទ្ធិអ្នកប្រើ',

    api: 'API Integration',

    support: 'ជំនួយបច្ចេកទេសអាទិភាព',

    unlimited: 'មន្ទីរពិសោធន៍គ្មានដែនកំណត់',

    microsoft: 'Microsoft Office Integration',

    erp: 'ERP & HIS Integration',

    hosting: 'Dedicated Cloud Infrastructure',

    ssl: 'សុវត្ថិភាព SSL',

    migration: 'ផ្ទេរទិន្នន័យឥតគិតថ្លៃ',

    training: 'បណ្តុះបណ្តាលបុគ្គលិក',

    premium: 'ជំនួយ Premium 24/7',

    customization: 'អភិវឌ្ឍមុខងារផ្ទាល់ខ្លួន',
  },

  faq: {

    title: 'សំណួរដែលគេសួរញឹកញាប់',

    q1: 'តើអាច Upgrade គម្រោងពេលក្រោយបានទេ?',

    a1:
      'បាទ/ចាស អ្នកអាច Upgrade ឬ Downgrade បានគ្រប់ពេល។',

    q2: 'តើមានការដំឡើង និងបណ្តុះបណ្តាលដែរឬទេ?',

    a2:
      'បាទ/ចាស យើងផ្តល់ការដំឡើង និងបណ្តុះបណ្តាលពេញលេញ។',

    q3: 'តើមានជំនួយបច្ចេកទេសដែរឬទេ?',

    a3:
      'បាទ/ចាស គ្រប់គម្រោងទាំងអស់មានជំនួយបច្ចេកទេស។',

    q4: 'តើអាច Customize ប្រព័ន្ធបានទេ?',

    a4:
      'បាទ/ចាស គម្រោង Enterprise និង Custom អាច Customize បាន។',

    q5: 'តើទិន្នន័យសុខាភិបាលមានសុវត្ថិភាពទេ?',

    a5:
      'បាទ/ចាស ប្រព័ន្ធប្រើ Encryption និង Cloud Security កម្រិតខ្ពស់។',
  },
},

    // =========================
    // FOOTER
    // =========================
    footer: {
      description:
        'ប្រព័ន្ធគ្រប់គ្រងមន្ទីរពិសោធន៍ទំនើបសម្រាប់ស្ថាប័នសុខាភិបាល',
      quickLinks: 'តំណភ្ជាប់រហ័ស',
      support: 'ជំនួយ',
      rights: 'រក្សាសិទ្ធិគ្រប់យ៉ាង។',
    },
  },
}

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})