import { motion } from "motion/react";
import { forwardRef, useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { ContactInfoField, type ValidationState } from "../atomic/ContactInfoField";
import { GlassCard } from "../atomic/GlassCard";
import type { ContactInfo } from "../data/marketplace-types";

type ContactInfoFormProps = {
  onSubmit?: (info: ContactInfo) => void;
  className?: string;
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  return /^\+?[\d\s()-]{7,}$/.test(phone);
}

function getValidation(value: string, validator?: (v: string) => boolean): ValidationState {
  if (!value) return "idle";
  if (validator) return validator(value) ? "valid" : "invalid";
  return value.length >= 2 ? "valid" : "invalid";
}

const ContactInfoForm = forwardRef<HTMLDivElement, ContactInfoFormProps>(
  ({ className, onSubmit }, ref) => {
    const [form, setForm] = useState<ContactInfo>({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });

    const update = useCallback((field: keyof ContactInfo, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    }, []);

    const isValid =
      form.firstName.length >= 2 &&
      form.lastName.length >= 2 &&
      validateEmail(form.email) &&
      validatePhone(form.phone);

    const handleSubmit = useCallback(() => {
      if (!isValid) return;
      onSubmit?.(form);
    }, [isValid, form, onSubmit]);

    return (
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <GlassCard className={cn("mx-4 rounded-2xl p-4", className)} intensity="medium" ref={ref}>
          <h3 className="mb-3 font-semibold text-slate-700 text-sm">Contact Details</h3>
          <div className="grid grid-cols-2 gap-3">
            <ContactInfoField
              label="First Name"
              onChange={(e) => update("firstName", e.target.value)}
              placeholder="John"
              validation={getValidation(form.firstName)}
              value={form.firstName}
            />
            <ContactInfoField
              label="Last Name"
              onChange={(e) => update("lastName", e.target.value)}
              placeholder="Smith"
              validation={getValidation(form.lastName)}
              value={form.lastName}
            />
          </div>
          <div className="mt-3 space-y-3">
            <ContactInfoField
              label="Email"
              onChange={(e) => update("email", e.target.value)}
              placeholder="john@example.com"
              type="email"
              validation={getValidation(form.email, validateEmail)}
              value={form.email}
            />
            <ContactInfoField
              label="Phone"
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+1 555 123 4567"
              type="tel"
              validation={getValidation(form.phone, validatePhone)}
              value={form.phone}
            />
          </div>
          <Button
            className="mt-4 w-full rounded-xl"
            disabled={!isValid}
            onClick={handleSubmit}
            size="sm"
          >
            Continue
          </Button>
        </GlassCard>
      </motion.div>
    );
  }
);

ContactInfoForm.displayName = "ContactInfoForm";

export { ContactInfoForm };
export type { ContactInfoFormProps };
