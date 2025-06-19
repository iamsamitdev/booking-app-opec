# 📚 BookGeek - ระบบจองผู้เชี่ยวชาญและวิทยากร

BookGeek เป็นแพลตฟอร์มออนไลน์สำหรับการจองผู้เชี่ยวชาญและวิทยากรในด้านต่างๆ ออกแบบด้วย Next.js 15, TypeScript, Prisma และ Tailwind CSS พร้อมด้วย UI/UX ที่ทันสมัยและ responsive รวมถึงระบบ Admin Dashboard สำหรับการจัดการ

## ✨ คุณสมบัติหลัก

### 🏠 หน้าเว็บหลัก (Frontend)
- **หน้าแรก**: Hero section พร้อม CTA และการแสดงบริการ
- **เกี่ยวกับเรา**: ข้อมูลบริษัท ทีมงาน และพันธกิจ
- **บริการ**: รายละเอียดบริการ 6 หมวดหมู่ (เทคโนโลยี, ธุรกิจ, ดิจิทัล, การเงิน, สุขภาพ, การศึกษา)
- **ติดต่อเรา**: ฟอร์มติดต่อและข้อมูลการติดต่อ

### 🔐 ระบบ Authentication & API
- **เข้าสู่ระบบ**: ฟอร์ม login พร้อม validation และ password visibility toggle
- **สมัครสมาชิก**: ฟอร์มสมัครสมาชิกพร้อมข้อมูลส่วนตัวและ terms acceptance
- **ลืมรหัสผ่าน**: ระบบรีเซ็ตรหัสผ่าน
- **API Routes**: `/api/auth/login`, `/api/auth/register`, `/api/auth/logout`, `/api/auth/me`
- **Session Management**: การจัดการ session และ authentication state

### 🎛️ Admin Dashboard
- **Dashboard หลัก**: สถิติรายได้, ลูกค้าใหม่, บัญชีที่ใช้งาน, อัตราการเติบโต
- **การจัดการผู้ใช้**: ระบบ CRUD ผู้ใช้แบบสมบูรณ์ พร้อม Data Table
- **Data Tables**: ตารางข้อมูลที่ทันสมัยพร้อมการค้นหา, เรียงลำดับ, และ pagination
- **Modal Dialogs**: ป๊อปอัพสำหรับเพิ่ม, แก้ไข, ดู และลบข้อมูล
- **Responsive Sidebar**: เมนูด้านข้างที่รองรับ desktop และ mobile
- **Real-time Updates**: อัพเดทข้อมูลแบบ real-time

### 🗄️ ฐานข้อมูล (Prisma)
- **User Model**: จัดการข้อมูลผู้ใช้ (fullName, email, phoneNumber, password)
- **Database Migrations**: ระบบ migration สำหรับการจัดการ schema
- **Type Safety**: การใช้งาน Prisma Client แบบ type-safe

### 🎨 UI/UX Features
- **Liquid Glass Effects**: เอฟเฟกต์แก้วเหลวที่ทันสมัย
- **Toast Notifications**: แจ้งเตือนแบบ toast ที่มุมบนขวา พร้อมสีที่แตกต่างกัน
- **Password Visibility Toggle**: ปุ่มแสดง/ซ่อนรหัสผ่านด้วย Eye icons
- **Responsive Navigation**: เมนูที่รองรับทุกขนาดหน้าจอ
- **Profile Dropdown**: เมนู profile พร้อม logout functionality

### 📋 หน้านโยบายและเงื่อนไข
- **นโยบายความเป็นส่วนตัว**: ตาม PDPA
- **เงื่อนไขการใช้งาน**: ข้อกำหนดการใช้บริการ
- **นโยบายการใช้คุกกี้**: การจัดการคุกกี้

## 🚀 เทคโนโลยีที่ใช้

### Backend & Database
- **Prisma** - ORM สำหรับ database management
- **SQLite** - ฐานข้อมูลสำหรับ development
- **Next.js API Routes** - Serverless API endpoints
- **Authentication** - Custom auth system with session management

### Frontend Framework
- **Next.js 15** - React framework พร้อม App Router
- **TypeScript** - Type-safe JavaScript
- **React 19** - Library สำหรับ UI

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library (Eye, EyeOff, Menu icons)
- **Sonner** - Toast notifications system
- **Recharts** - Chart library สำหรับ dashboard
- **TanStack Table** - Advanced data table functionality

### Form & Validation
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation resolvers

### Admin Dashboard Components
- **Data Tables** - Advanced table with sorting, filtering, pagination
- **Sidebar Navigation** - Collapsible sidebar with icons
- **Modal Dialogs** - Add, Edit, View, Delete dialogs
- **Charts & Analytics** - Interactive charts และ metrics
- **Command Palette** - Quick search และ navigation

### Additional Features
- **Next Themes** - Dark/Light mode support
- **Class Variance Authority** - Component variants
- **clsx & tailwind-merge** - Conditional styling
- **React DnD** - Drag and drop functionality (ถ้าใช้)

## 📁 โครงสร้างโปรเจ็กต์

```
booking-app-opec/
├── prisma/
│   ├── migrations/         # Database migrations
│   │   └── 20250619152444_init/
│   │       └── migration.sql
│   └── schema.prisma      # Database schema
├── public/
│   ├── images/
│   │   ├── front/         # รูปภาพหน้าเว็บหลัก
│   │   │   ├── home_hero.avif
│   │   │   ├── home_cta.avif
│   │   │   ├── about_hero.avif
│   │   │   ├── about_mission.avif
│   │   │   ├── about_team_*.avif
│   │   │   ├── service_hero.avif
│   │   │   ├── service_cta.avif
│   │   │   ├── contact_hero.avif
│   │   │   └── contact_cta.avif
│   │   └── auth/          # รูปภาพหน้า authentication
│   │       ├── login_bg.avif
│   │       └── register_bg.avif
│   └── *.svg             # SVG icons
├── src/
│   ├── app/
│   │   ├── (front)/      # หน้าเว็บหลัก (Route Group)
│   │   │   ├── layout.tsx # Frontend layout
│   │   │   ├── page.tsx  # หน้าแรก
│   │   │   ├── about/
│   │   │   ├── service/
│   │   │   ├── contact/
│   │   │   ├── privacy-policy/
│   │   │   ├── terms-of-service/
│   │   │   └── cookie-policy/
│   │   ├── (back)/       # Admin Dashboard (Route Group)
│   │   │   ├── layout.tsx # Admin layout with sidebar
│   │   │   └── admin/
│   │   │       ├── dashboard/
│   │   │       │   ├── _components/
│   │   │       │   │   ├── account-switcher.tsx
│   │   │       │   │   ├── chart-area-interactive.tsx
│   │   │       │   │   ├── section-cards.tsx
│   │   │       │   │   ├── search-dialog.tsx
│   │   │       │   │   └── table-cell-viewer.tsx
│   │   │       │   └── page.tsx
│   │   │       └── users/
│   │   │           ├── _components/
│   │   │           │   ├── add-user-dialog.tsx
│   │   │           │   ├── columns.tsx
│   │   │           │   ├── data-table.tsx
│   │   │           │   ├── delete-user-dialog.tsx
│   │   │           │   ├── edit-user-dialog.tsx
│   │   │           │   ├── mock-data.ts
│   │   │           │   └── view-user-dialog.tsx
│   │   │           └── page.tsx
│   │   ├── api/          # API Routes
│   │   │   └── auth/
│   │   │       ├── login/route.ts
│   │   │       ├── register/route.ts
│   │   │       ├── logout/route.ts
│   │   │       └── me/route.ts
│   │   ├── auth/         # Authentication Pages
│   │   │   ├── login/
│   │   │   │   ├── _components/
│   │   │   │   │   └── login-form.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   ├── _components/
│   │   │   │   │   └── register-form.tsx
│   │   │   │   └── page.tsx
│   │   │   └── forgotpassword/
│   │   │       ├── _components/
│   │   │       │   └── forgotpassword-form.tsx
│   │   │       └── page.tsx
│   │   ├── layout.tsx    # Root layout
│   │   ├── globals.css   # Global styles + Toast styling
│   │   └── favicon.ico
│   ├── components/
│   │   ├── ui/           # UI components (shadcn/ui)
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── tooltip.tsx
│   │   ├── front/        # Frontend components
│   │   │   ├── Navbar.tsx # Navigation with auth state
│   │   │   └── Footer.tsx
│   │   └── back/         # Admin components
│   │       ├── app-sidebar.tsx
│   │       ├── nav-main.tsx
│   │       ├── nav-user.tsx
│   │       └── data-table/
│   │           ├── data-table.tsx
│   │           ├── data-table-column-header.tsx
│   │           ├── data-table-pagination.tsx
│   │           └── data-table-view-options.tsx
│   ├── hooks/
│   │   ├── useAuth.tsx   # Authentication hook
│   │   ├── use-mobile.ts # Mobile detection
│   │   └── use-data-table-instance.ts # Data table utilities
│   ├── lib/
│   │   ├── auth.ts       # Auth utilities
│   │   ├── prisma.ts     # Prisma client
│   │   └── utils.ts      # Utility functions
│   ├── config/
│   │   └── app-config.ts # App configuration
│   ├── data/
│   │   └── users.tsx     # User data utilities
│   ├── navigation/
│   │   └── sidebar/
│   │       └── sidebar-items.ts # Sidebar menu configuration
│   └── generated/        # Generated files
├── .env.example          # Environment variables template
├── components.json       # shadcn/ui configuration
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration
├── package.json
├── tailwind.config.js
├── tsconfig.json
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

3. **ตั้งค่า Environment Variables**
   ```bash
   cp .env.example .env
   ```
   แก้ไขไฟล์ `.env` ตามความต้องการ

4. **ตั้งค่าฐานข้อมูล (Prisma)**
   ```bash
   # Generate Prisma Client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   
   # (Optional) Open Prisma Studio
   npx prisma studio
   ```

5. **เริ่มต้น development server**
   ```bash
   npm run dev
   # หรือ
   yarn dev
   # หรือ
   pnpm dev
   # หรือ
   bun dev
   ```

6. **เปิดเบราว์เซอร์**
   ไปที่ [http://localhost:3000](http://localhost:3000)

## 📜 Scripts ที่สำคัญ

```bash
# Development
npm run dev        # เริ่ม development server พร้อม Turbopack
npm run build      # Build สำหรับ production
npm run start      # เริ่ม production server
npm run lint       # ตรวจสอบ code quality

# Database (Prisma)
npx prisma generate    # Generate Prisma Client
npx prisma migrate dev # Run migrations in development
npx prisma studio      # Open database GUI
npx prisma db push     # Push schema changes to database
```

## 🔐 Authentication System

### API Endpoints
- `POST /api/auth/login` - เข้าสู่ระบบ
- `POST /api/auth/register` - สมัครสมาชิก
- `POST /api/auth/logout` - ออกจากระบบ
- `GET /api/auth/me` - ดึงข้อมูลผู้ใช้ปัจจุบัน

### Form Features
- **Password Visibility Toggle**: ปุ่ม Eye/EyeOff สำหรับแสดง/ซ่อนรหัสผ่าน
- **Form Validation**: ใช้ Zod schema validation
- **Toast Notifications**: แจ้งเตือนสำเร็จ/ผิดพลาดด้วยสีที่แตกต่างกัน
- **Loading States**: สถานะ loading ขณะประมวลผล
- **Error Handling**: จัดการข้อผิดพลาดแบบ user-friendly

### Database Schema
```prisma
model User {
  id          Int      @id @default(autoincrement())
  fullName    String
  email       String   @unique
  phoneNumber String
  password    String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## 🎛️ Admin Dashboard System

### Dashboard Features
- **Overview Cards**: แสดงสถิติรายได้, ลูกค้าใหม่, บัญชีที่ใช้งาน, อัตราการเติบโต
- **Interactive Charts**: กราฟแบบ interactive สำหรับติดตามประสิทธิภาพ
- **Quick Search**: ค้นหาข้อมูลอย่างรวดเร็วด้วย Command Dialog
- **Account Switcher**: เปลี่ยนบัญชีผู้ใช้ที่ login อยู่

### User Management
- **Data Table**: ตารางข้อมูลผู้ใช้พร้อมการเรียงลำดับและค้นหา
- **CRUD Operations**: เพิ่ม, แก้ไข, ดู, และลบผู้ใช้
- **Modal Dialogs**: ป๊อปอัพสำหรับจัดการข้อมูล
- **Form Validation**: ตรวจสอบข้อมูลก่อนบันทึก
- **Real-time Updates**: อัพเดทข้อมูลทันที

### Sidebar Navigation
- **Collapsible Sidebar**: เมนูด้านข้างที่ย่อ/ขยายได้
- **Icon Mode**: แสดงเฉพาะไอคอนเมื่อย่อ
- **Responsive Design**: ปรับตัวตามขนาดหน้าจอ
- **User Profile**: แสดงข้อมูลผู้ใช้ที่ login

### Data Table Features
- **Column Sorting**: เรียงลำดับตามคอลัมน์
- **Global Search**: ค้นหาข้อมูลทั้งตาราง
- **Pagination**: แบ่งหน้าข้อมูล
- **Row Selection**: เลือกแถวข้อมูล
- **Column Visibility**: แสดง/ซ่อนคอลัมน์
- **Export Options**: ส่งออกข้อมูล (ถ้าเพิ่ม)

## 🎨 การใช้งาน Design System

### Toast Notifications
```tsx
// Success Toast (เขียว)
toast.success("เข้าสู่ระบบสำเร็จ!", {
  description: "ยินดีต้อนรับกลับมา",
  style: {
    background: "#10b981",
    color: "#ffffff",
    border: "1px solid #059669",
  },
  descriptionClassName: "!text-white",
})

// Error Toast (แดง)
toast.error("เกิดข้อผิดพลาด", {
  description: "กรุณาลองใหม่อีกครั้ง",
  style: {
    background: "#ef4444",
    color: "#ffffff", 
    border: "1px solid #dc2626",
  },
  descriptionClassName: "!text-white",
})
```

### Admin Dashboard Components

#### Data Table with CRUD
```tsx
// Column Definition
const columns = createUserColumns({
  onEditUser: (user) => setEditingUser(user),
  onDeleteUser: (user) => setDeletingUser(user),
  onAddUser: () => setIsAddUserOpen(true),
})

// Data Table Usage
<DataTable
  columns={columns}
  data={users}
  searchKey="fullName"
  searchPlaceholder="ค้นหาชื่อผู้ใช้..."
/>
```

#### Modal Dialogs
```tsx
// Add User Dialog
<AddUserDialog
  open={isAddUserOpen}
  onOpenChange={setIsAddUserOpen}
  onUserAdded={handleUserAdded}
/>

// Edit User Dialog
<EditUserDialog
  open={!!editingUser}
  onOpenChange={() => setEditingUser(null)}
  user={editingUser}
  onUserUpdated={handleUserUpdated}
/>
```

#### Sidebar Navigation
```tsx
<AppSidebar 
  variant="sidebar" 
  collapsible="icon"
  className="border-r"
/>
```

### Password Input with Toggle
```tsx
<div className="relative">
  <Input
    type={showPassword ? "text" : "password"}
    placeholder="••••••••"
    {...field}
  />
  <button
    type="button"
    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? (
      <EyeOff className="h-4 w-4" />
    ) : (
      <Eye className="h-4 w-4" />
    )}
  </button>
</div>
```

### Liquid Glass Effects
```tsx
<div className="relative backdrop-blur-3xl bg-white/8 border border-white/20 rounded-full shadow-2xl shadow-black/25">
  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-full"></div>
  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/3 to-white/10 rounded-full"></div>
  {/* Content */}
</div>
```

### Navigation with Auth State
```tsx
// Desktop Profile Menu
{user ? (
  <div className="relative">
    <button onClick={toggleProfileMenu}>
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500">
        {user.fullName.charAt(0).toUpperCase()}
      </div>
      <span>{user.fullName.split(' ')[0]}</span>
    </button>
    {/* Dropdown Menu */}
  </div>
) : (
  <Button asChild>
    <Link href="/auth/login">เข้าสู่ระบบ</Link>
  </Button>
)}
```

## 🔧 การกำหนดค่า

### Environment Variables
```env
# Database
DATABASE_URL="file:./dev.db"

# Authentication (ถ้าใช้)
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"
```

### Fonts
- **ภาษาไทย**: Anuphan (Google Fonts)
- **ภาษาอังกฤษ**: Inter (Google Fonts)

### Toast Configuration
- **Position**: Top Right
- **Success Color**: Emerald (#10b981)
- **Error Color**: Red (#ef4444)
- **Duration**: Default Sonner duration

### Breakpoints
```css
sm: 640px
md: 768px
lg: 1024px    /* Mobile menu breakpoint */
xl: 1280px
2xl: 1536px
```

## 📱 Features รายละเอียด

### Authentication Forms
- **Login Form**: อีเมล, รหัสผ่าน, จดจำฉันไว้ 30 วัน
- **Register Form**: ชื่อ-สกุล, เบอร์โทรศัพท์, อีเมล, รหัสผ่าน, ยืนยันรหัสผ่าน, ยอมรับเงื่อนไข
- **Forgot Password**: ส่งลิงก์รีเซ็ตรหัสผ่าน
- **Validation**: Zod schema validation ภาษาไทย
- **Error Handling**: ข้อความแสดงข้อผิดพลาดที่เป็นมิตร

### Navigation System
- **Desktop Navigation**: Liquid glass navbar พร้อม dropdown menus
- **Mobile Navigation**: Full-screen overlay menu
- **Service Menu**: 6 หมวดหมู่บริการ (เทคโนโลยี, ธุรกิจ, ดิจิทัล, การเงิน, สุขภาพ, การศึกษา)
- **Profile Menu**: แสดงข้อมูลผู้ใช้และเมนูจัดการบัญชี
- **Logout**: ออกจากระบบและ redirect ไป login page

### Admin Dashboard Features
- **Responsive Layout**: รองรับทุกขนาดหน้าจอ
- **Sidebar Navigation**: เมนูด้านข้างที่ย่อ/ขยายได้
- **Data Management**: จัดการข้อมูลผู้ใช้แบบครบถ้วน
- **Interactive Charts**: กราฟสถิติแบบ interactive
- **Search & Filter**: ค้นหาและกรองข้อมูลอย่างรวดเร็ว
- **Modal System**: ระบบ modal สำหรับ CRUD operations
- **Toast Notifications**: แจ้งเตือนผลการดำเนินการ

### Database Features
- **User Management**: CRUD operations สำหรับผู้ใช้
- **Type Safety**: Prisma Client ให้ type safety ทั้งระบบ
- **Migrations**: ระบบ migration สำหรับจัดการ database schema
- **Development Tools**: Prisma Studio สำหรับดู/แก้ไขข้อมูล
- **Mock Data**: ข้อมูลตัวอย่าง 25 รายการสำหรับทดสอบ

### Image Optimization
- **Format**: AVIF สำหรับประสิทธิภาพสูงสุด
- **Sizes**: หลากหลายขนาดตามการใช้งาน
- **Loading**: Lazy loading และ placeholder
- **Team Images**: รูปภาพทีมงานในหน้า About

## 🚀 การ Deploy

### Vercel (แนะนำ)
1. เชื่อมต่อ repository กับ Vercel
2. ตั้งค่า Environment Variables
3. Vercel จะ deploy อัตโนมัติ

### การ Build สำหรับ Production
```bash
# Generate Prisma Client
npx prisma generate

# Build application
npm run build

# Start production server
npm run start
```

### Database สำหรับ Production
- **PostgreSQL**: แนะนำสำหรับ production
- **MySQL**: ทางเลือกที่ดี
- **SQLite**: เหมาะสำหรับ development เท่านั้น

## 🔗 การเข้าถึงระบบ

### หน้าเว็บหลัก (Frontend)
- **หน้าแรก**: `/`
- **เกี่ยวกับเรา**: `/about`
- **บริการ**: `/service`
- **ติดต่อเรา**: `/contact`

### Authentication
- **เข้าสู่ระบบ**: `/auth/login`
- **สมัครสมาชิก**: `/auth/register`
- **ลืมรหัสผ่าน**: `/auth/forgotpassword`

### Admin Dashboard
- **Dashboard**: `/admin/dashboard`
- **จัดการผู้ใช้**: `/admin/users`

### นโยบายและเงื่อนไข
- **นโยบายความเป็นส่วนตัว**: `/privacy-policy`
- **เงื่อนไขการใช้งาน**: `/terms-of-service`
- **นโยบายคุกกี้**: `/cookie-policy`

## 🤝 การมีส่วนร่วม

1. Fork repository
2. สร้าง feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add some AmazingFeature'`)
4. Push ไปยัง branch (`git push origin feature/AmazingFeature`)
5. เปิด Pull Request

### Code Style Guidelines
- ใช้ TypeScript อย่างเคร่งครัด
- ไม่ใช้ semicolons (;)
- ใช้ Functional Components และ Composition API
- เขียนโค้ดให้อ่านง่ายและ maintainable
- ใช้ Best Practices สำหรับ Production

## 📄 License

โปรเจ็กต์นี้อยู่ภายใต้ MIT License - ดูรายละเอียดใน [LICENSE](LICENSE) file

## 📞 ติดต่อ

- **Website**: [BookGeek](https://bookgeek.com)
- **Email**: info@bookgeek.com
- **Phone**: 02-123-4567

---

**สร้างด้วย ❤️ โดยทีม BookGeek**
**พัฒนาด้วย Next.js 15, TypeScript, Prisma และ Tailwind CSS**
