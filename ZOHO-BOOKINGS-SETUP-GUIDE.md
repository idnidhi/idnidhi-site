# Zoho Bookings Setup Guide for idnidhi.com

**Date:** April 11, 2026
**Domain:** idnidhi.com
**Purpose:** Interior design consultation booking system

---

## Overview

This guide walks you through setting up Zoho Bookings for IdNidhi Interior Design from scratch, including custom domain configuration for a professional booking experience at `bookings.idnidhi.com` or `book.idnidhi.com`.

---

## Step 1: Create Zoho Account

### 1.1 Sign Up for Zoho
1. Go to https://www.zoho.com/bookings/
2. Click "Sign Up Now" or "Get Started"
3. Choose sign-up method:
   - Sign up with Google (recommended for quick setup)
   - Sign up with email address
4. Use your professional email: `hello@idnidhi.com` or similar
5. Complete verification process

### 1.2 Choose Your Plan

**Free Plan Includes:**
- 1 service
- 1 staff member
- 100 appointments/month
- Basic booking page
- Email notifications
- Calendar sync (Google, Office 365, Outlook)

**Premium Plan (Recommended) - ₹700-900/month:**
- Unlimited services
- Unlimited staff
- Unlimited appointments
- **Custom domain** (e.g., bookings.idnidhi.com)
- Payment integration (Razorpay, PayPal, Stripe)
- Remove Zoho branding
- SMS notifications
- Group bookings
- Zoho CRM integration
- Revenue reports
- Custom fields

**For IdNidhi:** Start with Free plan to test, then upgrade to Premium for custom domain and payment integration.

---

## Step 2: Initial Zoho Bookings Setup

### 2.1 Business Information
1. Log in to Zoho Bookings
2. Go to **Settings** > **Business Information**
3. Fill in:
   - **Business Name:** IdNidhi Interior Design
   - **Business Type:** Professional Services
   - **Industry:** Interior Design
   - **Business Email:** hello@idnidhi.com
   - **Phone:** (Your business number or WhatsApp Business)
   - **Address:** Vadodara, Gujarat, India
   - **Time Zone:** (GMT+05:30) India Standard Time
   - **Currency:** INR (₹)

### 2.2 Branding
1. Go to **Settings** > **Branding**
2. Upload:
   - **Logo:** IdNidhi logo (recommended: 200x200px PNG with transparent background)
   - **Favicon:** Small icon version
3. Set brand colors:
   - **Primary Color:** #D8BFD8 (your purple/lavender theme)
   - **Accent Color:** Complementary color from your palette
4. Add cover image (optional): Professional interior design photo

---

## Step 3: Create Your Services

### Service 1: Discovery Call (₹499)
1. Go to **Services** > **Add Service**
2. **Service Name:** Quick Discovery Call
3. **Description:**
   ```
   15-minute introductory call to discuss your project scope, timeline,
   and budget. We'll answer initial questions and determine if we're
   a good fit for your interior design needs.
   ```
4. **Duration:** 15 minutes
5. **Price:** ₹499 (or FREE if you prefer this as lead generation)
6. **Availability:** Set your working hours (e.g., Mon-Sat, 10 AM - 6 PM)
7. **Booking Type:** Phone Call or Video Call
8. **Payment:** Collect payment before booking (if charging)
9. **Form Fields:**
   - Name
   - Email
   - Phone
   - Project type (dropdown: Residential/Commercial/Other)
   - Brief project description

### Service 2: Design Consultation (₹2,999)
1. **Service Name:** Professional Design Consultation
2. **Description:**
   ```
   Comprehensive 90-minute consultation (virtual or site visit in Vadodara)
   including space analysis, needs assessment, preliminary recommendations,
   mood board, and material palette. Fee fully credited toward your design
   package if you proceed within 30 days.
   ```
3. **Duration:** 90 minutes
4. **Price:** ₹2,999
5. **Availability:** Set specific slots (e.g., Tue-Sat, limit 2 per day)
6. **Booking Type:**
   - In-person (for Vadodara clients)
   - Video call (for all clients)
7. **Payment:** Require advance payment
8. **Buffer Time:** 30 minutes between appointments
9. **Form Fields:**
   - Name
   - Email
   - Phone
   - Property address (for site visits)
   - Project type
   - Approximate budget range
   - Consultation preference (Virtual/Site Visit)
   - Preferred date/time
   - How did you hear about us?

### Service 3: Site Visit Consultation (₹2,999 + Travel)
1. Create separate service for site visits
2. Add travel fee calculator or note: "Additional ₹500 per 10km outside Vadodara city limits"
3. Require address during booking

---

## Step 4: Configure Availability

### 4.1 Working Hours
1. Go to **Availability** > **Working Hours**
2. Set your schedule:
   - **Monday-Friday:** 10:00 AM - 6:00 PM
   - **Saturday:** 10:00 AM - 4:00 PM
   - **Sunday:** By Appointment Only (or closed)

### 4.2 Time Slot Settings
1. **Slot Duration:** Match service duration
2. **Buffer Time:** 15-30 minutes between consultations
3. **Advance Notice:** Minimum 24 hours (prevents last-minute bookings)
4. **Date Range:** Allow booking up to 30 days in advance

### 4.3 Holidays & Exceptions
1. Add Indian national holidays
2. Mark personal time off
3. Block specific dates for site projects

---

## Step 5: Payment Integration (Premium Plan Required)

### 5.1 Razorpay Setup (Recommended for India)
1. Create Razorpay account at https://razorpay.com
2. Complete KYC verification
3. Get API keys from Razorpay Dashboard
4. In Zoho Bookings:
   - Go to **Settings** > **Payments**
   - Select **Razorpay**
   - Enter **Key ID** and **Key Secret**
   - Enable payment collection
5. Set payment policy:
   - **Full payment upfront** (recommended for consultations)
   - Partial payment option (for larger packages)

### 5.2 Payment Settings
1. **Currency:** INR
2. **Tax:** Add GST if registered (18% for services)
3. **Refund Policy:**
   - Full refund if cancelled 48+ hours in advance
   - 50% refund if cancelled 24-48 hours
   - No refund within 24 hours
4. Display refund policy on booking page

---

## Step 6: Custom Domain Setup (Premium Plan)

### Prerequisites:
- Active Premium Zoho Bookings plan
- Access to your domain DNS settings (from domain registrar)
- Subdomain decision (e.g., `bookings.idnidhi.com` or `book.idnidhi.com`)

### 6.1 Choose Your Subdomain
**Recommended options:**
- `bookings.idnidhi.com`
- `book.idnidhi.com`
- `schedule.idnidhi.com`
- `consultation.idnidhi.com`

### 6.2 Enable Custom Domain in Zoho
1. Upgrade to Premium plan
2. Go to **Settings** > **Custom Domain**
3. Click **Set Up Custom Domain**
4. Enter your chosen subdomain: `bookings.idnidhi.com`
5. Zoho will provide DNS records to add

### 6.3 Configure DNS Records
You'll need to add these records to your domain's DNS settings:

**Typical records (Zoho will provide exact values):**

```
Type: CNAME
Name: bookings (or your chosen subdomain)
Value: bookings.zoho.com (or specific value from Zoho)
TTL: 3600 (or automatic)
```

**Where to add DNS records:**
1. Log in to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
2. Find DNS Management or DNS Settings
3. Add new CNAME record as provided by Zoho
4. Save changes

### 6.4 Verify Domain
1. Return to Zoho Bookings
2. Click **Verify Domain**
3. Wait 15 minutes to 24 hours for DNS propagation
4. Once verified, your booking page will be accessible at `bookings.idnidhi.com`

---

## Step 7: Customize Booking Page

### 7.1 Page Content
1. Go to **Booking Page** > **Customize**
2. **Header Text:** "Schedule Your Design Consultation"
3. **Welcome Message:**
   ```
   Welcome to IdNidhi Interior Design. We're a virtual-first boutique
   design studio in Vadodara, creating timeless spaces that blend elegance
   with functionality. Choose a consultation type below to begin transforming
   your space.
   ```
4. **Footer:** Add social media links, website link

### 7.2 Booking Form Fields
**Required Fields:**
- Full Name
- Email Address
- Phone Number
- Service Selection

**Custom Fields to Add:**
- Project Type (Dropdown: Residential/Commercial/Hospitality/Other)
- Approximate Space Size (sq ft)
- Estimated Budget Range
- Preferred Consultation Type (Virtual/Site Visit)
- How did you hear about us? (Dropdown: Google/Instagram/Referral/Other)
- Additional Comments

### 7.3 Confirmation & Reminder Settings
1. **Booking Confirmation Email:** Customize to include:
   - Consultation details
   - Payment receipt (if applicable)
   - Preparation checklist (what to have ready)
   - Meeting link (for virtual consultations)
   - Contact information

2. **Reminder Emails:**
   - 24 hours before appointment
   - 1 hour before appointment
   - Include cancellation/rescheduling link

3. **SMS Reminders** (Premium):
   - Enable for better show-up rates
   - Same timing as email reminders

---

## Step 8: Integration with Your Website

### Option 1: Embed Widget (Recommended)
1. In Zoho Bookings, go to **Embed & Share**
2. Copy the embed code
3. Add to your idnidhi.com contact page:

```html
<!-- In src/pages/contact.astro, replace the placeholder div -->
<div class="zoho-booking-container">
    <iframe
        src="https://bookings.idnidhi.com"
        frameborder="0"
        width="100%"
        height="800"
        style="border:none;"
    ></iframe>
</div>
```

### Option 2: Direct Link Button
```html
<a
    href="https://bookings.idnidhi.com"
    target="_blank"
    class="inline-block px-8 py-4 bg-gradient-primary text-black font-medium"
>
    Schedule Consultation
</a>
```

### Option 3: Popup Widget
Use Zoho's popup widget code for a modal experience.

---

## Step 9: Connect Calendar

### 9.1 Google Calendar Sync
1. Go to **Settings** > **Calendar Sync**
2. Click **Connect Google Calendar**
3. Authorize Zoho to access your calendar
4. Choose which calendar to sync bookings to
5. Enable two-way sync (so blocked time in Google Calendar blocks Zoho slots)

### Benefits:
- Automatic calendar updates
- Prevent double-booking
- Easy schedule management
- Share availability across devices

---

## Step 10: Email Notifications Setup

### 10.1 Notification Settings
1. Go to **Settings** > **Notifications**
2. Configure email templates:
   - **New Booking:** Alert you immediately
   - **Booking Confirmation:** Sent to client
   - **Reminder Emails:** 24h and 1h before
   - **Cancellation:** Both parties notified
   - **Rescheduling:** Confirmation of new time

### 10.2 Customize Email Templates
1. Use your brand voice
2. Include:
   - IdNidhi logo
   - Contact information
   - Links to portfolio/Instagram
   - Preparation instructions
   - Cancellation policy

**Example Booking Confirmation:**
```
Subject: Your Design Consultation is Confirmed - IdNidhi Interior Design

Dear [Client Name],

Thank you for booking a consultation with IdNidhi Interior Design!

Your Consultation Details:
- Date: [Date]
- Time: [Time]
- Duration: 90 minutes
- Type: [Virtual/Site Visit]
- Investment: ₹2,999 (credited toward your project)

What to Prepare:
□ Photos of your space (if virtual)
□ Rough measurements or floor plan
□ Inspiration images (Pinterest, Instagram saves)
□ Budget range and timeline

[If Virtual]
Meeting Link: [Zoom/Google Meet Link]

[If Site Visit]
Address: [Client Address]
Our designer will arrive at the scheduled time.

Need to reschedule? Use this link: [Reschedule Link]

We're excited to help transform your space!

Warm regards,
Nidhi Mehta
Principal Designer
IdNidhi Interior Design

hello@idnidhi.com
www.idnidhi.com
Instagram: @idnidhi
```

---

## Step 11: Testing

### 11.1 Test Booking Flow
1. Create a test booking using a personal email
2. Verify:
   - ✓ Booking page loads correctly
   - ✓ Service descriptions are clear
   - ✓ Form fields work properly
   - ✓ Date/time selection is smooth
   - ✓ Payment gateway functions (if enabled)
   - ✓ Confirmation email arrives
   - ✓ Calendar sync works
   - ✓ Reminder emails send on schedule

### 11.2 Mobile Testing
1. Test booking page on mobile devices
2. Ensure responsive design
3. Check payment flow on mobile

---

## Step 12: Going Live

### Pre-Launch Checklist:
- [ ] All services configured with correct pricing
- [ ] Availability set correctly
- [ ] Payment gateway tested
- [ ] Custom domain verified (if Premium)
- [ ] Email templates customized
- [ ] Calendar sync enabled
- [ ] Booking page embedded on website
- [ ] Mobile experience tested
- [ ] Refund policy clearly stated
- [ ] Test booking completed successfully

### Launch Steps:
1. Update your website contact page with booking widget
2. Add booking link to:
   - Email signature
   - Instagram bio
   - Facebook page
   - Google Business Profile
   - WhatsApp Business status
3. Announce on social media
4. Send email to existing contacts about new booking system

---

## Recommended Settings for IdNidhi

### Consultation Packages:

**Package 1: Quick Discovery (₹499 or FREE)**
- Duration: 15 minutes
- Type: Phone/Video
- Purpose: Lead qualification

**Package 2: Professional Consultation (₹2,999)**
- Duration: 90 minutes
- Type: Virtual or Site Visit (Vadodara)
- Includes: Analysis, mood board, recommendations
- Credited to project within 30 days

**Package 3: Extended Consultation (₹4,999)** [Optional]
- Duration: 2 hours + site visit
- Type: In-person only
- Includes: Detailed measurements, preliminary sketches
- Credited to project

---

## Monthly Cost Breakdown

### Free Plan:
- **Cost:** ₹0
- **Limitation:** 100 bookings/month, no custom domain, Zoho branding

### Premium Plan:
- **Cost:** ₹700-900/month (approximately, check current pricing)
- **Payment Gateway:** Razorpay charges ~2% per transaction
- **Total Monthly:** ~₹1,000-1,500 including transaction fees

### ROI Calculation:
- 1 consultation at ₹2,999 covers system cost
- 10 consultations/month = ₹29,990 revenue
- If 30% convert to projects = 3 projects
- Average project (₹2 lakh at 8%) = ₹16,000 × 3 = ₹48,000
- **System pays for itself immediately**

---

## Support & Resources

**Zoho Bookings Help:**
- Help Portal: https://help.zoho.com/portal/en/kb/bookings
- Video Tutorials: https://www.youtube.com/c/ZohoBookings
- Community Forum: https://help.zoho.com/portal/en/community/bookings

**Technical Support:**
- Email: support@zohobookings.com
- Phone: Check Zoho website for India support number
- Live Chat: Available in Zoho Bookings dashboard

---

## Pro Tips

1. **Use Lead Magnet:** Offer free discovery call to attract leads, upsell to paid consultation
2. **Buffer Time:** Always keep 30 min buffer to prepare and avoid burnout
3. **Limit Daily Consultations:** Max 2-3 per day to maintain quality
4. **Follow-Up Automation:** Send design package proposal within 24h after consultation
5. **Track Conversions:** Use Zoho CRM integration to track consultation → project conversion rate
6. **Seasonal Availability:** Block dates during festival seasons when you're busy with execution
7. **Collect Testimonials:** Auto-send feedback form after consultations
8. **Instagram Integration:** Add booking link to Instagram bio and stories

---

## Next Steps After Setup

1. **Week 1:** Test thoroughly, refine descriptions
2. **Week 2:** Soft launch to existing clients for feedback
3. **Week 3:** Full public launch with social media campaign
4. **Month 2:** Analyze booking patterns, adjust availability
5. **Quarter 1:** Review conversion rates, optimize pricing

---

## Troubleshooting Common Issues

**Problem:** Custom domain not working
- **Solution:** Check DNS propagation (can take 24-48 hours), verify CNAME record is correct

**Problem:** Payment gateway errors
- **Solution:** Verify Razorpay API keys, ensure KYC is complete

**Problem:** Calendar not syncing
- **Solution:** Reconnect Google Calendar, check permissions

**Problem:** Clients not receiving emails
- **Solution:** Check spam folders, verify email addresses, whitelist Zoho emails

**Problem:** Too many no-shows
- **Solution:** Enable SMS reminders, require advance payment, send multiple reminders

---

**Document Version:** 1.0
**Last Updated:** April 11, 2026
**Maintained by:** IdNidhi Interior Design

For questions about this setup, contact: hello@idnidhi.com
