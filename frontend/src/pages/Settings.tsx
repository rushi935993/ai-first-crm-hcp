import PageHeader from "@/components/common/PageHeader";
import AISettingsCard from "@/components/settings/AISettingsCard";
import AccountCard from "@/components/settings/AccountCard";
import SecurityCard from "@/components/settings/SecurityCard";
import SystemInfoCard from "@/components/settings/SystemInfoCard";
import AboutCard from "@/components/settings/AboutCard";
export default function Settings() {
  return (
    <div>
      <PageHeader
        title="Settings"
        subtitle="Application configuration and system information"
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <AccountCard />

        <AISettingsCard />

        <SecurityCard />

        <SystemInfoCard />

        <div className="xl:col-span-2">
          <AboutCard />
        </div>

      </div>
    </div>
  );
}