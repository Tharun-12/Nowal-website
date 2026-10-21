import React, { useState } from 'react';
import { CheckCircle2, Calendar, Users, Sparkles, Loader2, Send } from 'lucide-react';
import { wellnessPackages } from '../../data/programs';
import { accommodationsData } from '../../data/accommodations';
import { brandConfig } from '../../data/brandConfig';

export interface BookingFormData {
  fullName: string;
  email: string;
  phoneCountryCode: string;
  phoneNumber: string;
  arrivalDate: string;
  departureDate: string;
  guestsCount: number;
  programId: string;
  accommodationId: string;
  healthGoals: string;
  consent: boolean;
}

interface BookingFormProps {
  initialProgramId?: string;
  initialAccommodationId?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialProgramId = '',
  initialAccommodationId = '',
  onSuccess,
  isModal = false,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phoneCountryCode: '+91',
    phoneNumber: '',
    arrivalDate: '',
    departureDate: '',
    guestsCount: 1,
    programId: initialProgramId || wellnessPackages[0]?.id || '',
    accommodationId: initialAccommodationId || accommodationsData[0]?.id || '',
    healthGoals: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData | 'dates', string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData | 'dates', string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    const phoneClean = formData.phoneNumber.replace(/[^0-9]/g, '');
    if (!phoneClean || phoneClean.length < 7 || phoneClean.length > 15) {
      newErrors.phoneNumber = 'Please enter a valid telephone number (7-15 digits).';
    }

    if (!formData.arrivalDate) {
      newErrors.arrivalDate = 'Please select your preferred arrival date.';
    }

    if (!formData.departureDate) {
      newErrors.departureDate = 'Please select your departure date.';
    }

    if (formData.arrivalDate && formData.departureDate) {
      const arr = new Date(formData.arrivalDate);
      const dep = new Date(formData.departureDate);
      if (dep <= arr) {
        newErrors.dates = 'Departure date must be at least 1 day after arrival date.';
      }
    }

    if (!formData.consent) {
      newErrors.consent = 'Please confirm that you agree to be contacted regarding this enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Realistic API submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = 'VV-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedReference(randomRef);
      if (onSuccess) {
        setTimeout(onSuccess, 4000);
      }
    }, 1200);
  };

  if (submittedReference) {
    const selectedProg = wellnessPackages.find((p) => p.id === formData.programId);
    const selectedAcc = accommodationsData.find((a) => a.id === formData.accommodationId);

    return (
      <div className="bg-[#F8F6EF] border border-[#8A9B7A]/40 rounded-xl p-8 text-center space-y-6">
        <div className="w-16 h-16 bg-[#183D32]/10 rounded-full flex items-center justify-center mx-auto text-[#183D32]">
          <CheckCircle2 className="w-10 h-10 text-[#183D32]" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">Enquiry Received</span>
          <h3 className="font-serif-display text-2xl md:text-3xl text-[#183D32] mt-1">
            Thank you, {formData.fullName.split(' ')[0]}
          </h3>
          <p className="text-sm text-[#76634F] mt-2 max-w-md mx-auto">
            Your retreat enquiry reference is <span className="font-mono font-bold text-[#183D32]">{submittedReference}</span>.
          </p>
        </div>

        <div className="bg-white/80 rounded-lg p-5 text-left text-xs text-[#282B27] space-y-2 border border-[#E8E0D2]">
          <div className="flex justify-between py-1 border-b border-[#E8E0D2]">
            <span className="text-[#76634F]">Selected Program:</span>
            <span className="font-semibold text-[#183D32]">{selectedProg?.title || 'Personal Wellness Consultation'}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#E8E0D2]">
            <span className="text-[#76634F]">Accommodation:</span>
            <span className="font-semibold text-[#183D32]">{selectedAcc?.name || 'Standard Villa'}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#E8E0D2]">
            <span className="text-[#76634F]">Dates Requested:</span>
            <span className="font-semibold">{formData.arrivalDate} to {formData.departureDate}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-[#76634F]">Guests:</span>
            <span className="font-semibold">{formData.guestsCount} Guest(s)</span>
          </div>
        </div>

        <div className="bg-[#8A9B7A]/10 rounded-lg p-4 text-xs text-[#183D32] text-left leading-relaxed">
          <p className="font-semibold mb-1">What Happens Next?</p>
          <p>
            Our resident medical admissions team will review your wellness objectives and contact you within 24 hours at <span className="font-semibold">{formData.email}</span> to discuss your personalized treatment protocol, preliminary physician assessment, and retreat availability.
          </p>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setSubmittedReference(null);
              setFormData({
                fullName: '',
                email: '',
                phoneCountryCode: '+91',
                phoneNumber: '',
                arrivalDate: '',
                departureDate: '',
                guestsCount: 1,
                programId: wellnessPackages[0]?.id || '',
                accommodationId: accommodationsData[0]?.id || '',
                healthGoals: '',
                consent: false,
              });
            }}
            className="text-xs uppercase tracking-wider text-[#183D32] hover:text-[#76634F] underline font-medium"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  // Get tomorrow's date for min date
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#183D32] mb-1.5">
            Full Name <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Dr. Maya Sharma"
            className={`w-full px-4 py-2.5 bg-white border ${
              errors.fullName ? 'border-red-600 focus:ring-red-500' : 'border-[#E8E0D2] focus:border-[#183D32]'
            } rounded-lg text-sm text-[#282B27] placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#183D32] transition-colors`}
          />
          {errors.fullName && <p className="text-xs text-red-700 mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#183D32] mb-1.5">
            Email Address <span className="text-red-700">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. maya@example.com"
            className={`w-full px-4 py-2.5 bg-white border ${
              errors.email ? 'border-red-600 focus:ring-red-500' : 'border-[#E8E0D2] focus:border-[#183D32]'
            } rounded-lg text-sm text-[#282B27] placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#183D32] transition-colors`}
          />
          {errors.email && <p className="text-xs text-red-700 mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Phone Number with Country Code */}
      <div>
        <label className="block text-xs font-medium uppercase tracking-wider text-[#183D32] mb-1.5">
          Phone Number <span className="text-red-700">*</span>
        </label>
        <div className="flex gap-2">
          <select
            value={formData.phoneCountryCode}
            onChange={(e) => setFormData({ ...formData, phoneCountryCode: e.target.value })}
            className="w-28 px-2 py-2.5 bg-white border border-[#E8E0D2] rounded-lg text-sm text-[#282B27] focus:outline-none focus:ring-1 focus:ring-[#183D32]"
            aria-label="Country Code"
          >
            <option value="+91">🇮🇳 +91 (IN)</option>
            <option value="+1">🇺🇸 +1 (US)</option>
            <option value="+44">🇬🇧 +44 (UK)</option>
            <option value="+971">🇦🇪 +971 (UAE)</option>
            <option value="+65">🇸🇬 +65 (SG)</option>
            <option value="+61">🇦🇺 +61 (AU)</option>
            <option value="+49">🇩🇪 +49 (DE)</option>
            <option value="+33">🇫🇷 +33 (FR)</option>
          </select>
          <input
            type="tel"
            required
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            placeholder="98765 43210"
            className={`flex-1 px-4 py-2.5 bg-white border ${
              errors.phoneNumber ? 'border-red-600' : 'border-[#E8E0D2]'
            } rounded-lg text-sm text-[#282B27] placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#183D32]`}
          />
        </div>
        {errors.phoneNumber && <p className="text-xs text-red-700 mt-1">{errors.phoneNumber}</p>}
      </div>

      {/* Dates: Arrival & Departure */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#183D32] mb-1.5">
            Arrival Date <span className="text-red-700">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              min={minDateStr}
              required
              value={formData.arrivalDate}
              onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
              className={`w-full px-3 py-2.5 bg-white border ${
                errors.arrivalDate ? 'border-red-600' : 'border-[#E8E0D2]'
              } rounded-lg text-sm text-[#282B27] focus:outline-none focus:ring-1 focus:ring-[#183D32]`}
            />
          </div>
          {errors.arrivalDate && <p className="text-xs text-red-700 mt-1">{errors.arrivalDate}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#183D32] mb-1.5">
            Departure Date <span className="text-red-700">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              min={formData.arrivalDate || minDateStr}
              required
              value={formData.departureDate}
              onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
              className={`w-full px-3 py-2.5 bg-white border ${
                errors.departureDate ? 'border-red-600' : 'border-[#E8E0D2]'
              } rounded-lg text-sm text-[#282B27] focus:outline-none focus:ring-1 focus:ring-[#183D32]`}
            />
          </div>
          {errors.departureDate && <p className="text-xs text-red-700 mt-1">{errors.departureDate}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#183D32] mb-1.5">
            Guests
          </label>
          <div className="relative">
            <select
              value={formData.guestsCount}
              onChange={(e) => setFormData({ ...formData, guestsCount: Number(e.target.value) })}
              className="w-full px-3 py-2.5 bg-white border border-[#E8E0D2] rounded-lg text-sm text-[#282B27] focus:outline-none focus:ring-1 focus:ring-[#183D32]"
            >
              <option value={1}>1 Solo Seeker</option>
              <option value={2}>2 Guests (Couple / Pair)</option>
              <option value={3}>3 Guests (Family)</option>
              <option value={4}>4+ Guests (Group Sabbatical)</option>
            </select>
          </div>
        </div>
      </div>
      {errors.dates && <p className="text-xs text-red-700 -mt-2">{errors.dates}</p>}

      {/* Program and Accommodation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#183D32] mb-1.5">
            Wellness Program
          </label>
          <select
            value={formData.programId}
            onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
            className="w-full px-3 py-2.5 bg-white border border-[#E8E0D2] rounded-lg text-sm text-[#282B27] focus:outline-none focus:ring-1 focus:ring-[#183D32]"
          >
            {wellnessPackages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#183D32] mb-1.5">
            Accommodation Preference
          </label>
          <select
            value={formData.accommodationId}
            onChange={(e) => setFormData({ ...formData, accommodationId: e.target.value })}
            className="w-full px-3 py-2.5 bg-white border border-[#E8E0D2] rounded-lg text-sm text-[#282B27] focus:outline-none focus:ring-1 focus:ring-[#183D32]"
          >
            {accommodationsData.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name} ({room.category})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Health goals & notes */}
      <div>
        <label className="block text-xs font-medium uppercase tracking-wider text-[#183D32] mb-1.5">
          Health Objectives or Specific Concerns (Optional)
        </label>
        <textarea
          rows={3}
          value={formData.healthGoals}
          onChange={(e) => setFormData({ ...formData, healthGoals: e.target.value })}
          placeholder="e.g. Chronic insomnia, cervical spine stiffness, digestive reset, seeking quiet space for meditation..."
          className="w-full px-4 py-2.5 bg-white border border-[#E8E0D2] rounded-lg text-sm text-[#282B27] placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#183D32] resize-none"
        ></textarea>
      </div>

      {/* Consent Checkbox */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5 text-xs text-[#76634F] cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-0.5 rounded border-[#E8E0D2] text-[#183D32] focus:ring-[#183D32]"
          />
          <span>
            I agree to receive retreat availability and a personalized medical consultation proposal from {brandConfig.name}. My health information remains confidential.
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-700 mt-1">{errors.consent}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 bg-[#183D32] hover:bg-[#0F2821] text-[#F8F6EF] font-medium text-sm tracking-wide rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Verifying Retreat Availability...</span>
          </>
        ) : (
          <>
            <span>Submit Stay & Consultation Request</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-[#76634F]/80">
        Direct admissions concierge: <a href={`tel:${brandConfig.contact.phone}`} className="underline font-medium hover:text-[#183D32]">{brandConfig.contact.phoneDisplay}</a> · No immediate payment required.
      </p>
    </form>
  );
};
