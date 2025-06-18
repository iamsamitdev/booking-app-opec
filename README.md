# 📚 BookGeek - ระบบจองผู้เชี่ยวชาญและวิทยากร

BookGeek เป็นแพลตฟอร์มออนไลน์สำหรับการจองผู้เชี่ยวชาญและวิทยากรในด้านต่างๆ ออกแบบด้วย Next.js 15, TypeScript, และ Tailwind CSS พร้อมด้วย UI/UX ที่ทันสมัยและ responsive

## ✨ คุณสมบัติหลัก

### 🏠 หน้าเว็บหลัก (Frontend)
- **หน้าแรก**: Hero section พร้อม CTA และการแสดงบริการ
- **เกี่ยวกับเรา**: ข้อมูลบริษัท ทีมงาน และพันธกิจ
- **บริการ**: รายละเอียดบริการที่ให้บริการ
- **ติดต่อเรา**: ฟอร์มติดต่อและข้อมูลการติดต่อ

### 🔐 ระบบ Authentication
- **เข้าสู่ระบบ**: ฟอร์ม login พร้อม validation
- **สมัครสมาชิก**: ฟอร์มสมัครสมาชิกพร้อมข้อมูลส่วนตัว
- **ลืมรหัสผ่าน**: ระบบรีเซ็ตรหัสผ่าน

### 📋 หน้านโยบายและเงื่อนไข
- **นโยบายความเป็นส่วนตัว**: ตาม PDPA
- **เงื่อนไขการใช้งาน**: ข้อกำหนดการใช้บริการ
- **นโยบายการใช้คุกกี้**: การจัดการคุกกี้

### 🎨 Design System
- **Liquid Glass Effects**: เอฟเฟกต์แก้วเหลวที่ทันสมัย
- **Gradient Backgrounds**: พื้นหลังไล่สีที่สวยงาม
- **Responsive Design**: รองรับทุกขนาดหน้าจอ
- **Mobile Navigation**: เมนูมือถือแบบ full-screen

## 🚀 เทคโนโลยีที่ใช้

### Frontend Framework
- **Next.js 15** - React framework พร้อม App Router
- **TypeScript** - Type-safe JavaScript
- **React 19** - Library สำหรับ UI

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **tw-animate-css** - Animation utilities

### Form & Validation
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation resolvers

### Additional Features
- **Next Themes** - Dark/Light mode support
- **Sonner** - Toast notifications
- **Class Variance Authority** - Component variants
- **clsx & tailwind-merge** - Conditional styling

## 📁 โครงสร้างโปรเจ็กต์

```
booking-app-opec/
├── public/
│   ├── images/
│   │   ├── front/           # รูปภาพหน้าเว็บหลัก
│   │   │   ├── home_hero.avif
│   │   │   ├── home_cta.avif
│   │   │   ├── about_hero.avif
│   │   │   ├── about_mission.avif
│   │   │   ├── service_hero.avif
│   │   │   ├── service_cta.avif
│   │   │   ├── contact_hero.avif
│   │   │   └── contact_cta.avif
│   │   └── auth/            # รูปภาพหน้า authentication
│   │       ├── login_bg.avif
│   │       └── register_bg.avif
│   └── *.svg               # SVG icons
├── src/
│   ├── app/
│   │   ├── (front)/        # หน้าเว็บหลัก
│   │   │   ├── page.tsx    # หน้าแรก
│   │   │   ├── about/
│   │   │   ├── service/
│   │   │   ├── contact/
│   │   │   ├── privacy-policy/
│   │   │   ├── terms-of-service/
│   │   │   └── cookie-policy/
│   │   ├── auth/           # ระบบ authentication
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── forgotpassword/
│   │   ├── layout.tsx      # Root layout
│   │   ├── globals.css     # Global styles
│   │   └── favicon.ico
│   ├── components/
│   │   ├── ui/             # UI components (shadcn/ui)
│   │   └── front/          # Frontend components
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── config/             # Configuration files
│   └── lib/                # Utility functions
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🛠️ การติดตั้งและเริ่มต้นใช้งาน

### ข้อกำหนดระบบ
- Node.js 18.17 หรือสูงกว่า
- npm, yarn, pnpm หรือ bun

### ขั้นตอนการติดตั้ง

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd booking-app-opec
   ```

2. **ติดตั้ง dependencies**
   ```bash
   npm install
   # หรือ
   yarn install
   # หรือ
   pnpm install
   # หรือ
   bun install
   ```

3. **เริ่มต้น development server**
   ```bash
   npm run dev
   # หรือ
   yarn dev
   # หรือ
   pnpm dev
   # หรือ
   bun dev
   ```

4. **เปิดเบราว์เซอร์**
   ไปที่ [http://localhost:3000](http://localhost:3000)

## 📜 Scripts ที่สำคัญ

```bash
npm run dev        # เริ่ม development server พร้อม Turbopack
npm run build      # Build สำหรับ production
npm run start      # เริ่ม production server
npm run lint       # ตรวจสอบ code quality
```

## 🎨 การใช้งาน Design System

### Liquid Glass Effects
```tsx
<div className="relative backdrop-blur-3xl bg-white/5 border border-white/10 rounded-3xl">
  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 rounded-3xl"></div>
  {/* Content */}
</div>
```

### Gradient Text
```tsx
<h1 className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
  BookGeek
</h1>
```

### Responsive Navigation
- Desktop: แสดงเมนูแบบ horizontal
- Mobile: แสดงเมนูแบบ full-screen overlay

## 🔧 การกำหนดค่า

### Fonts
- **ภาษาไทย**: Anuphan (Google Fonts)
- **ภาษาอังกฤษ**: Inter (Google Fonts)

### Colors
- **Primary**: Green to Blue gradients
- **Secondary**: Purple to Pink gradients
- **Background**: Dark slate tones
- **Glass Effects**: White with low opacity

### Breakpoints
```css
sm: 640px
md: 768px
lg: 1024px    /* Mobile menu breakpoint */
xl: 1280px
2xl: 1536px
```

## 📱 Features รายละเอียด

### Authentication System
- **Form Validation**: ใช้ Zod schema validation
- **Fields**: ชื่อ-สกุล, เบอร์โทรศัพท์, อีเมล, รหัสผ่าน
- **Terms Acceptance**: Checkbox พร้อมลิงก์ไปยังเงื่อนไข
- **Error Handling**: ข้อความแสดงข้อผิดพลาดภาษาไทย

### Mobile Navigation
- **Hamburger Menu**: แปลงเป็น X เมื่อเปิด
- **Full Screen Overlay**: เมนูแบบ overlay ทั้งหน้าจอ
- **Smooth Animations**: การเคลื่อนไหวที่นุ่มนวล
- **Service Submenu**: เมนูย่อยสำหรับบริการ

### Image Optimization
- **Format**: AVIF สำหรับประสิทธิภาพสูงสุด
- **Sizes**: หลากหลายขนาดตามการใช้งาน
- **Loading**: Lazy loading และ placeholder

## 🚀 การ Deploy

### Vercel (แนะนำ)
1. เชื่อมต่อ repository กับ Vercel
2. Vercel จะ deploy อัตโนมัติ
3. ตั้งค่า environment variables (ถ้ามี)

### การ Build สำหรับ Production
```bash
npm run build
npm run start
```

## 🤝 การมีส่วนร่วม

1. Fork repository
2. สร้าง feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add some AmazingFeature'`)
4. Push ไปยัง branch (`git push origin feature/AmazingFeature`)
5. เปิด Pull Request

## 📄 License

โปรเจ็กต์นี้อยู่ภายใต้ MIT License - ดูรายละเอียดใน [LICENSE](LICENSE) file

## 📞 ติดต่อ

- **Website**: [BookGeek](https://bookgeek.com)
- **Email**: info@bookgeek.com
- **Phone**: 02-123-4567

---

**สร้างด้วย ❤️ โดยทีม BookGeek**
