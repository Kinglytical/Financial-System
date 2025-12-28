import CardNav from "@/components/CardNav";
import logo from "../public/logo.png";
import Particles from "@/components/Particles";
import Carousel from "@/components/Carousel";

export default function Home() {
  const items = [
    {
      label: "Transactions",
      bgColor: "#FFD41D",
      textColor: "#333",
      links: [
        {
          label: "New Expense",
          href: "/expenses",
          ariaLabel: "Create a new expense",
        },
        {
          label: "New Invoice",
          href: "/revenue/invoices",
          ariaLabel: "Create a new invoice",
        },
        {
          label: "Record Payment",
          href: "/revenue/payments",
          ariaLabel: "Record a payment",
        },
      ],
    },
    {
      label: "Accounting",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "General Ledger",
          href: "/general-ledger",
          ariaLabel: "Open general ledger",
        },
        {
          label: "Reconcile Bank",
          href: "/reconcile",
          ariaLabel: "Open reconcile bank",
        },
        {
          label: "Chart of Accounts",
          href: "#",
          ariaLabel: "Open chart of accounts",
        },
      ],
    },
    {
      label: "Reports",
      bgColor: "#FFD41D",
      textColor: "#333",
      links: [
        {
          label: "Monthly Summary",
          href: "#",
          ariaLabel: "Open monthly summary",
        },
        { label: "P&L", href: "#", ariaLabel: "Open profit and loss" },
        {
          label: "Outstanding Items",
          href: "#",
          ariaLabel: "Open outstanding items",
        },
      ],
    },
  ];

  return (
    <section
      className="relative min-h-[100vh] overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#170D27" }}
    >
      {/* Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/20" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl">
        <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
          Finance Control Center
        </h1>

        <p className="text-white/80 mt-4 text-base md:text-lg">
          Manage transactions, accounting, and reports in one place.
        </p>

        <p className="text-white/60 mt-4 text-sm">
          Open the menu to jump straight into your workflow.
        </p>

        {/* Carousel */}
        <div className="mt-10 w-full flex justify-center">
          <Carousel
            baseWidth={500}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>

      {/* Nav */}
      <div className="absolute top-0 left-0 right-0 z-30 pt-6">
        <CardNav
          logo={logo.src}
          logoAlt="Company Logo"
          items={items}
          baseColor="#333"
          menuColor="#fff"
          buttonBgColor="#fff"
          buttonTextColor="#333"
          buttonHoverBgColor="#FFD41D"
          buttonHoverTextColor="#333"
          ease="power3.out"
        />
      </div>
    </section>
  );
}
