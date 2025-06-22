# HD Onchain - Unrivaled Onchain Intelligence

A professional website for HD Onchain, providing expert blockchain investigations, crypto compliance, and strategic intelligence reports.

## Overview

This website has been transformed from a generic intelligence analysis site into a customer-ready platform specifically designed for HD Onchain's services. The site maintains the original modern, dark theme with neon green accents while completely overhauling the content to align with the company's unique value proposition.

## Key Features

- **Modern Design**: Dark theme with neon green accents and responsive layout
- **Professional Content**: Tailored messaging for blockchain intelligence services
- **Service-Focused**: Clear presentation of HD Onchain's five core services
- **Target Audience**: Specific sections for different client types
- **Contact Integration**: Placeholders for Google Form and Google Calendar

## Pages

### Homepage (index.html)
- Updated headline: "Unlocking Verifiable Truth in the Digital Economy"
- Tagline: "Unrivaled Onchain Intelligence"
- Overview section explaining core value proposition
- Five detailed service cards with CTAs
- Six target audience sections
- Comprehensive about section with mission, expertise, methodology, and values

### Contact Page (contact.html)
- Dedicated contact page with Google Form and Calendar placeholders
- Professional contact information
- Clear call-to-action messaging

## Services Offered

1. **Crypto Investigations + Support Services**
   - Fund Flow Analysis & Asset Tracing
   - Wallet Attribution & Entity Mapping
   - Cross-Chain Transaction Tracking
   - Forensic Report Generation

2. **SME Services + Expert Testimony**
   - Expert Witness Testimony
   - Technical Documentation Review
   - Litigation Support & Strategy
   - Regulatory Compliance Guidance

3. **Custom Reporting & Blockchain Analytics**
   - Custom Intelligence Reports
   - Activity Analytics & Dashboards
   - Risk Assessment & Monitoring
   - Strategic Intelligence Briefings

4. **Crypto Compliance**
   - KYC/AML Investigations
   - Regulatory Compliance Audits
   - Due Diligence Reports
   - Compliance Framework Development

5. **Technical Breakdown + Education**
   - Technical Concept Translation
   - Blockchain Education & Training
   - Protocol Analysis & Breakdown
   - Executive Briefings

## Target Audiences

- Law Firms & Banks
- Direct to Victims
- Crypto Protocols & Projects
- Financial Institutions
- Enterprise Organizations
- The Crypto Curious

## Google Integration Setup

### Google Form Integration

1. Create a Google Form with your desired fields
2. Click "Send" and copy the embed code
3. Replace the content in `contact.html` within the `#google-form-placeholder` div:

```html
<div id="google-form-placeholder">
    <!-- Replace this with your Google Form iframe code -->
    <iframe src="YOUR_GOOGLE_FORM_URL/viewform?embedded=true" 
            width="100%" 
            height="800" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">
        Loading…
    </iframe>
</div>
```

### Google Calendar Integration

1. Set up Google Calendar appointment scheduling
2. Copy the embed code or link
3. Replace the content in `contact.html` within the `#google-calendar-placeholder` div:

```html
<div id="google-calendar-placeholder">
    <!-- Replace this with your Google Calendar scheduling widget -->
    <iframe src="YOUR_CALENDAR_SCHEDULING_URL" 
            width="100%" 
            height="600" 
            frameborder="0">
        Loading…
    </iframe>
</div>
```

## File Structure

```
hdonchain.com/
├── index.html              # Main homepage
├── contact.html            # Contact page with form/calendar placeholders
├── css/
│   ├── style.css          # Main stylesheet
│   └── responsive.css     # Responsive design rules
├── js/
│   └── main.js            # Main JavaScript functionality
└── README.md              # This file
```

## Design Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Modern Animations**: Smooth fade-in effects and hover animations
- **Professional Typography**: Inter font family with proper hierarchy
- **Consistent Branding**: Neon green accent color throughout
- **Grid Background**: Subtle animated grid pattern
- **Interactive Elements**: Glowing effects on buttons and CTAs

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Customization

The site uses CSS custom properties for easy color customization. Main colors are defined in `css/style.css`:

```css
:root {
    --primary-green: #00FF88;
    --secondary-green: #39FF14;
    --black: #0D1117;
    --white: #FFFFFF;
}
```

## Deployment

1. Upload all files to your web hosting service
2. Ensure the domain points to the `index.html` file
3. Test all links and responsive behavior
4. Integrate Google Form and Calendar as described above

## Support

For technical support or customization requests, contact the development team.

---

© 2024 HD Onchain. All rights reserved. 