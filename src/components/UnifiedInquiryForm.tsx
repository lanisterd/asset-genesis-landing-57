
import UnifiedInquiryFormShell from "./unified-inquiry/UnifiedInquiryFormShell";

export function UnifiedInquiryForm(props: {
  preSelectedType?: "bookCall" | "exploreServices" | "portfolio" | "general";
  ventureName?: string;
}) {
  return <UnifiedInquiryFormShell {...props} />;
}
